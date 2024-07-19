import { FilterType, IQueryOptions, QuerySortType } from "./util-types";


export interface IBaseRepository<T> {
  count(filter: FilterType<T>, opts?: IQueryOptions<T>): Promise<number>;
  create(data: Partial<T>): Promise<T>;
  updateById(id: string, data: Partial<T>, fields?: (keyof T)[]): Promise<T>;
  update(filter: FilterType<T>, data: Partial<T>, fields?: (keyof T)[]): Promise<T>;
  markDeleteById(id: string, userId?: string): Promise<void>;
  hardDelete(filter: FilterType<T>): Promise<void>
  getById(id: string, fields?: (keyof T)[]): Promise<Partial<T>>;
  findOne(filter: FilterType<T>, fields?: (keyof T)[]): Promise<Partial<T>>;
  paging(filter: FilterType<T>, fields: (keyof T)[], opts?: IQueryOptions<T>): Promise<Partial<T>[]>;
}