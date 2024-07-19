import moment from "moment";
import { PoolClient, Pool, Client } from "pg";
import { IBaseRepository } from "./interface";
import { FilterType, IQueryOptions } from "./util-types";
import { DBUtilMethods } from "./util-methods";

export class BaseRepository<T> implements IBaseRepository<T> {
  constructor(
    protected readonly tableName: string,
    protected readonly pg: Pool | PoolClient | Client
  ) {}

  async count(
    filter: FilterType<T>,
    opts: IQueryOptions<T> = { limit: 10, page: 1, orderType: "DESC" }
  ): Promise<number> {
    let params = this.getFilter(filter, 1);

    params.where = params.where.length ? `WHERE ${params.where} ` : "";
    let values = params.values.length ? params.values : undefined;

    const skip =
      opts.limit > 0 && opts.page > 0
        ? ` OFFSET ${(1 * opts.page - 1) * opts.limit} `
        : "";
    const limit = opts.page > 0 ? ` LIMIT ${opts.limit} ` : "";
    const limitOffset = skip + limit;

    const query = `SELECT COUNT(*)::int FROM "${this.tableName}" ${params.where} ${limitOffset}`;

    const result = await this.pg.query(query, values);
    return (result.rows[0].count || 0) as number;
  }

  /* success */
  async create(data: Partial<T>): Promise<T> {
    const params = DBUtilMethods.insertParams(data);

    const query = `
        INSERT INTO "${this.tableName}"
        (${params.fields.join(",")})
        VALUES
        (${params.variables.join(",")})
        RETURNING *;
      `;
    // console.log("insert query: ",query);
    // console.log("insert values: ",params.values);

    const result = await this.pg.query(query, params.values);
    return DBUtilMethods.objToCamel(result.rows[0]);
  }

  /* success */
  async updateById(
    id: string,
    data: Partial<T>,
    fields: (keyof T)[] = []
  ): Promise<T> {
    const params = DBUtilMethods.updateParams(data);

    const query = `
      UPDATE "${this.tableName}"
      SET ${params.fields.join(", ")}
      WHERE id = ${DBUtilMethods.prepareValue(id)} AND is_deleted = false
      RETURNING *;`;
    console.log(query);

    const result = await this.pg.query(query, params.values);

    if (result.rowCount === 0) throw Error("not found");
    return DBUtilMethods.objToCamel(result.rows[0]);
  }

  async update(
    filter: FilterType<T>,
    data: Partial<T>,
    fields?: (keyof T)[]
  ): Promise<T> {
    const params = DBUtilMethods.updateParams(data);
    let filterParams = this.getFilter(filter, params.index);

    params.values.concat(filterParams.values);

    filterParams.where = filterParams.where.length
      ? `WHERE ${filterParams.where} `
      : "";

    const query = `
      UPDATE "${this.tableName}"
      SET ${params.fields.join(",")}
      ${filterParams.where}
      RETURNING * ;
    `;

    const res = await this.pg.query(query, params.values);
    return DBUtilMethods.objToCamel(res.rows[0]);
  }

  /* success */
  async hardDelete(filter: FilterType<T>): Promise<void> {
    let params = this.getFilter(filter, 1);

    if (params.where.length) {
      params.where = `WHERE ${params.where}`;
    } else {
      throw Error(` DELETE qilayotganda filter bo'lishi kerak`);
    }

    const query = ` DELETE FROM "${this.tableName}" ${params.where} ;`;

    console.log(`---------------------------------------  HARD DELETE QUERY  < ${moment().format("DD.MM.YYYY HH:mm:ss")} >  ---------------------------------------`);

    await this.pg.query(query, params.values);
  }

  async markDeleteById(id: string, userId?: string): Promise<void> {
    let values = [id];
    let deletedBy = "";
    if (userId) {
      values.push(userId);
      deletedBy = ", deleted_by = $2";
    }

    const query = `
      UPDATE "${this.tableName}"
      SET
        is_deleted = TRUE,
        deleted_at = extract(epoch from now())::bigint ${deletedBy}
      WHERE id = $1 AND is_deleted = FALSE;
    `;

    await this.pg.query(query, values);
  }

  async getById(id: string, fields: (keyof T)[] = []): Promise<T> {
    const query = `
      SELECT
        ${
          fields.length
            ? fields
                .map((f) => DBUtilMethods.stringToSnake(f.toString()))
                .join(",")
            : "*"
        }
      FROM "${this.tableName}"
      WHERE id = $1 AND is_deleted = FALSE;
    `;

    const result = await this.pg.query(query, [id]);
    return DBUtilMethods.objToCamel(result.rows[0]);
  }

  async findOne(filter: FilterType<T>, fields: (keyof T)[] = []): Promise<T> {
    let params = this.getFilter(filter, 1);

    params.where = params.where.length ? `WHERE ${params.where} ` : "";
    let values = params.values.length ? params.values : undefined;

    const query = `
      SELECT
      ${
        fields.length
          ? fields
              .map((f) => DBUtilMethods.stringToSnake(f.toString()))
              .join(",")
          : "*"
      }
      FROM "${this.tableName}"
      ${params.where}
    `;

    const res = await this.pg.query(query, values);
    return DBUtilMethods.objToCamel(res.rows[0]);
  }

  async paging(
    filter: FilterType<T>,
    fields: (keyof T)[],
    opts: IQueryOptions<T> = { limit: 10, page: 1, orderType: "DESC" }
  ): Promise<T[]> {
    let params = this.getFilter(filter, 1);

    opts.orderType = opts.orderType ? opts.orderType : "DESC";
    const orderBy =
      opts.orderBy && opts.orderBy.toString()
        ? ` ORDER BY ${opts.orderBy.toString()} ${opts.orderType}`
        : "";

    params.where = params.where.length ? `WHERE ${params.where}` : "";
    let values = params.values.length ? params.values : undefined;

    const skip =
      opts.limit > 0 && opts.page > 0
        ? ` OFFSET ${(1 * opts.page - 1) * opts.limit} `
        : "";
    const limit = opts.page > 0 ? ` LIMIT ${opts.limit} ` : "";
    const limitOffset = skip + limit;

    const query = `
      SELECT ${fields
        .map((f) => DBUtilMethods.stringToSnake(f.toString()))
        .join(",")}
      FROM "${this.tableName}"
      ${params.where}
      ${orderBy}
      ${limitOffset}
    `;

    const result = await this.pg.query(query, values);
    return DBUtilMethods.objListToCamel(result.rows);
  }

  private getOrAndFilter(
    filters: FilterType<T>[] | undefined,
    index: number,
    alias = "",
    operator: "AND" | "OR" = "AND"
  ) {
    let where = "";
    alias = alias ? alias + "." : "";
    if (!filters) return undefined;

    for (const filter of filters) {
      where += this.getFilter(filter, index, alias, operator, false);
    }

    where = where.trim().slice(0, -4);

    return where;
  }

  private getFilter(
    filter: FilterType<T>,
    index: number,
    alias = "",
    operator: "AND" | "OR" = "AND",
    trimOperator = true
  ) {
    const values: any[] = [];
    let where = "";
    alias = alias ? alias + "." : "";
    const filterKeys = Object.keys(filter).filter(
      (key) => filter[key] !== undefined
    );

    for (const [, key] of filterKeys.entries()) {
      if (filter[key] === undefined) continue;

      let data = filter[key];

      if (filter[key] && filter[key]?.hasOwnProperty("$regex")) {
        values.push(DBUtilMethods.prepareValue(data.$regex, false));
        where += `${alias}${DBUtilMethods.stringToSnake(
          key
        )} ILIKE '%$${index}%' ${operator} `;
        index++;
        continue;
      } else if (filter[key] && filter[key]?.hasOwnProperty("$lt")) {
        values.push(DBUtilMethods.prepareValue(data.$lt));
        where += ` ${alias}${DBUtilMethods.stringToSnake(
          key
        )} < $${index} ${operator} `;
        index++;
        continue;
      } else if (filter[key] && filter[key].hasOwnProperty("$lte")) {
        values.push(DBUtilMethods.prepareValue(data.$lte));
        where += ` ${alias}${DBUtilMethods.stringToSnake(
          key
        )} <= $${index} ${operator} `;
        index++;
        continue;
      } else if (filter[key] && filter[key].hasOwnProperty("$gt")) {
        values.push(DBUtilMethods.prepareValue(data.$gt));
        where += ` ${alias}${DBUtilMethods.stringToSnake(
          key
        )} > $${index} ${operator} `;
        index++;
        continue;
      } else if (filter[key] && filter[key].hasOwnProperty("$gte")) {
        values.push(DBUtilMethods.prepareValue(data.$gte));
        where += ` ${alias}${DBUtilMethods.stringToSnake(
          key
        )} >= $${index} ${operator} `;
        index++;
        continue;
      } else if (filter[key] && filter[key].hasOwnProperty("$eq")) {
        values.push(DBUtilMethods.prepareValue(data.$eq));
        where += ` ${alias}${DBUtilMethods.stringToSnake(
          key
        )} = $${index} ${operator} `;
        index++;
        continue;
      } else if (filter[key] && filter[key].hasOwnProperty("$ne")) {
        values.push(DBUtilMethods.prepareValue(data.$ne));
        where += ` ${alias}${DBUtilMethods.stringToSnake(
          key
        )} <> $${index} ${operator} `;
        index++;
        continue;
      } else if (filter[key] && filter[key].hasOwnProperty("$notIn")) {
        let notIn = filter[key] as any;
        if (notIn["$notIn"].length > 0) {
          where += `${alias}${DBUtilMethods.stringToSnake(key)} NOT IN (${notIn[
            "$notIn"
          ]
            .reduce(
              (res: any, val: any) =>
                `${res} ${DBUtilMethods.prepareValue(val)},`,
              ""
            )
            .slice(0, -1)}) ${operator} `;
        }
        continue;
      } else if (key === "$and") {
        if (!this.getOrAndFilter(filter["$and"], index, alias, "AND"))
          return { index, where, values };
        where +=
          "(" +
          this.getOrAndFilter(filter["$and"], index, alias, "AND") +
          `) ${operator}`;
        continue;
      } else if (key === "$or") {
        if (!this.getOrAndFilter(filter["$or"], index, alias, "OR"))
          return { index, where, values };
        where +=
          "(" +
          this.getOrAndFilter(filter["$or"], index, alias, "OR") +
          `) ${operator}`;
        continue;
      } else
        where += ` ${alias}${DBUtilMethods.stringToSnake(
          key
        )} = ${DBUtilMethods.prepareValue(filter[key])} ${operator} `;
    }

    if (trimOperator) where = where.trim().slice(0, -4);

    return { where, values, index };
  }
}
