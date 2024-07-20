import { Client, Pool, PoolClient } from "pg";
import { BaseRepository } from "../../db/repositories";
import { TournamentParticipantEntity } from "./entity";
import { ITournamentParticipantRepository } from "./repository-interface";
import { Tables } from "../../common/constants/tables";

export class TournamentParticipantRepository
  extends BaseRepository<TournamentParticipantEntity>
  implements ITournamentParticipantRepository<TournamentParticipantEntity>
{
  constructor(db: Pool | PoolClient | Client) {
    super(Tables.tournament_participants, db);
  }
}
