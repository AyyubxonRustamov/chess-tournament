import { Client, Pool, PoolClient } from "pg";
import { BaseRepository } from "../../db/repositories";
import { TournamentEntity } from "./entity";
import { ITournamentRepository } from "./repository-interface";
import { Tables } from "../../common/constants/tables";

export class TournamentRepository
  extends BaseRepository<TournamentEntity>
  implements ITournamentRepository<TournamentEntity>
{
  constructor(db: Pool | PoolClient | Client) {
    super(Tables.tournaments, db);
  }
}
