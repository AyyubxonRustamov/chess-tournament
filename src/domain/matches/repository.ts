import { Client, Pool, PoolClient } from "pg";
import { BaseRepository } from "../../db/repositories";
import { MatchEntity } from "./entity";
import { IMatchRepository } from "./repository-interface";
import { Tables } from "../../common/constants/tables";

export class MatchRepository
  extends BaseRepository<MatchEntity>
  implements IMatchRepository<MatchEntity>
{
  constructor(db: Pool | PoolClient | Client) {
    super(Tables.matches, db);
  }

  async getTournamentMatchesByRound(data): Promise<MatchEntity[]> {
    const query = `
              SELECT
                m.id,
                m.player1_id,
                m.player2_id,
                m.tournament_id,
                m.date,
                m.round,
                m.result
    `


    return null;
  }
}
