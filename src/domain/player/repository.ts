import { Client, Pool, PoolClient } from "pg";
import { BaseRepository } from "../../db/repositories";
import { PlayerEntity } from "./entity";
import { IPlayerRepository } from "./repository-interface";
import { Tables } from "../../common/constants/tables";

export class PlayerRepository
  extends BaseRepository<PlayerEntity>
  implements IPlayerRepository<PlayerEntity>
{
  constructor(db: Pool | PoolClient | Client) {
    super(Tables.players, db);
  }
}
