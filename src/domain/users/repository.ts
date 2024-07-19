import { Tables } from "../../common/constants/tables";
import { BaseRepository } from "../../db/repositories";
import { UserEntity } from "./entity";
import { IUserRepository } from "./repository-interface";
import { Client, Pool, PoolClient } from "pg";

export class UserRepository
  extends BaseRepository<UserEntity>
  implements IUserRepository<UserEntity>
{
  constructor(db: Pool | PoolClient | Client) {
    super(Tables.users, db);
  }
}
