import { BaseEntity } from "../../db/entities/base.entity";

export class TournamentParticipantEntity extends BaseEntity {
  tournamentId: string;
  playerId: string;
  points: number;
  has_bye: boolean;
}
