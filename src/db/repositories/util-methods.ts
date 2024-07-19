import moment from "moment";
import { CommonException } from "../../common/errors";

export class DBUtilMethods {
  static insertParams(data: object) {
    const fields: string[] = [];
    const variables: any[] = [];
    const values: any[] = [];
    let indx = 1;

    for (const [key, value] of Object.entries(data)) {
      if (
        typeof value === "bigint" ||
        typeof value === "boolean" ||
        typeof value === "number" ||
        typeof value === "string" ||
        typeof value === "object"
      ) {
        fields.push(this.stringToSnake(key));
        variables.push(`$${indx}`);
        values.push(value);
        indx++;
      }
    }

    return {
      fields,
      variables,
      values,
    };
  }

  static updateParams(data: object) {
    const fields: string[] = [];
    const values: any[] = [];
    let index = 1;

    for (const [key, value] of Object.entries(data)) {
      if (
        typeof value === "bigint" ||
        typeof value === "boolean" ||
        typeof value === "number" ||
        typeof value === "string" ||
        typeof value === "object"
      ) {
        fields.push(`"${this.stringToSnake(key)}" = $${index}`);
        values.push(value);
        index++;
      }
    }

    return {
      fields,
      values,
      index,
    };
  }

  static prepareValue(
    val: any,
    withQuoteString = true,
    seen: any = undefined
  ): string {
    // null and undefined are both null for postgres
    if (val == null) {
      return "NULL";
    } else if (val instanceof Date) {
      return moment().format("DD.MM.YYYY HH:mm:ss");
    } else if (Array.isArray(val)) {
      return this.arrayString(val);
    } else if (typeof val === "object") {
      return this.prepareObject(val, seen);
    } else if (typeof val === "string") {
      return withQuoteString
        ? `'${val.replace(/'/g, "''")}'`
        : val.replace(/'/g, "''");
    }

    return val.toString();
  }

  static stringToSnake(str: string) {
    let res = "";

    res += str.toLowerCase()[0]; // Birinchi harfi Capital latter bo'lishi mumkin

    for (let i = 1; i < str.length; i++) {
      const currChar = str[i];
      const currCharLowercase = currChar.toLowerCase();

      if (currChar === currCharLowercase) {
        res += currChar;
      } else {
        res += `_${currCharLowercase}`;
      }
    }

    return res;
  }

  static stringToCamel(str: string) {
    return str.toLowerCase().replace(/([-_][a-z])/gi, ($1) => {
      return $1.toUpperCase().replace("-", "").replace("_", "");
    });
  }

  static objToSnake(obj) {
    let res = {};

    for (const key of Object.keys(obj)) {
      res[this.stringToSnake(key)] = obj[key];
    }

    return res;
  }

  static objListToSnake(obj: any[]) {
    return obj.map((o) => this.objToSnake(o));
  }

  static objToCamel(obj) {
    if (!obj) {
      return obj;
    }

    const res = {};

    for (const key of Object.keys(obj)) {
      if (
        Array.isArray(obj[key]) &&
        obj[key].every((item) => typeof item === "object")
      ) {
        res[this.stringToCamel(key)] = obj[key].map((o) => this.objToCamel(o));
      } else if (
        typeof obj[key] == "object" &&
        !moment(obj[key], "YYYY-MM-DD").isValid() &&
        !Array.isArray(obj[key])
      ) {
        res[this.stringToCamel(key)] = this.objToCamel(obj[key]);
      } else {
        res[this.stringToCamel(key)] = obj[key];
      }
    }

    return res;
  }

  static objListToCamel(obj: any[]) {
    if (!Array.isArray(obj)) return [];
    return obj.map((o) => this.objToCamel(o));
  }

  /* Private Methods */

  private static prepareObject(
    val: any,
    withSqlString: boolean,
    seen: any = []
  ): string {
    if (val && typeof val.toPostgres === "function") {
      seen = seen || [];
      if (seen.indexOf(val) !== -1) {
        throw new Error(
          'Circular reference detected while preparing "' + val + '" for query'
        );
      }

      seen.push(val);
      return this.prepareValue(
        val.toPostgres(this.prepareValue),
        withSqlString,
        seen
      );
    }

    return JSON.stringify(val);
  }

  private static arrayString(val: readonly any[]) {
    let result = "{";
    for (let i = 0; i < val.length; i++) {
      if (i > 0) {
        result = result + ",";
      }
      if (val[i] === null || typeof val[i] === "undefined") {
        result = result + "NULL";
      } else if (Array.isArray(val[i])) {
        result = result + this.arrayString(val[i]);
      } else if (val[i] instanceof Buffer) {
        result += "\\\\x" + val[i].toString("hex");
      } else {
        result += this.escapeElement(this.prepareValue(val[i]));
      }
    }
    result = result + "}";
    return result;
  }

  private static escapeElement(elementRepresentation: string) {
    const escaped = elementRepresentation
      .replace(/\\/g, "\\\\")
      .replace(/"/g, '\\"');
    return '"' + escaped + '"';
  }
}
