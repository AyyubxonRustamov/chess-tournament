import { IBaseRepository } from "../../db/repositories/interface";
import { MatchEntity } from "./entity";

export interface IMatchRepository<T> extends IBaseRepository<T> {
  getTournamentMatchesByRound(data): Promise<MatchEntity[]>;
}
