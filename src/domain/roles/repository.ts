import { Client, Pool, PoolClient } from "pg";
import { BaseRepository } from "../../db/repositories";
import { RoleEntity } from "./entity";
import { IRoleRepository } from "./repository-interface";
import { Tables } from "../../common/constants/tables";

export class RoleRepository
  extends BaseRepository<RoleEntity>
  implements IRoleRepository<RoleEntity>
{
  constructor(db: Pool | PoolClient | Client) {
    super(Tables.roles, db);
  }
}
