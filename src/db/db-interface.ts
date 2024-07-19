// import { SubjectEntity } from './../domain/subject/entity';
import { QueryResult } from "pg";
import { IUserRepository } from "../domain/users/repository-interface";
import { UserEntity } from "../domain/users/entity";
import { IRoleRepository } from "../domain/roles/repository-interface";
import { RoleEntity } from "../domain/roles/entity";

export interface IDBRepositories {
  userRepo: IUserRepository<UserEntity>;
  roleRepo: IRoleRepository<RoleEntity>;
}

export interface IWithTransaction extends IDBRepositories {
  commit(): Promise<QueryResult<any>>;
  rollback(): Promise<QueryResult<any>>;
}

export interface IDB {
  readonly repos: IDBRepositories;
  initialize(): Promise<Error | null>;
}
