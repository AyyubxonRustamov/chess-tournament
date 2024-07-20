import { MATCH_RESULT_ENUM } from "../../common/constants/match-result";
import { BaseEntity } from "../../db/entities/base.entity";

export class MatchEntity extends BaseEntity {
  player1Id: string;
  player2Id: string;
  tournamentId: string;
  date: Date | string;
  round: number;
  result: MATCH_RESULT_ENUM;
}
