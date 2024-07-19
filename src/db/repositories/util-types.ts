
export type FilterType<T> = {
  [P in keyof T]?: string | number | boolean
  | {
    $regex?: string | number | boolean
    $eq?: string | number | boolean
    $gt?: string | number | boolean
    $gte?: string | number | boolean
    $lt?: string | number | boolean
    $lte?: string | number | boolean
    $between?: [string | number, string | number]
    $ne?: string | number | boolean
    $notIn?: [string] | [number]
  }
}
  & { $or?: FilterType<T>[] }
  & { $and?: FilterType<T>[] };


export interface IQueryOptions<T> {
  limit: number,
  page: number,
  orderBy?: keyof T,
  orderType?: QuerySortType,
}

export type QuerySortType = 'ASC' | 'DESC';