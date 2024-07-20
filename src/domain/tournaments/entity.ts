import { BaseEntity } from "../../db/entities/base.entity";

export class TournamentEntity extends BaseEntity {
  name: string;
  startDate: Date | string;
  endDate: Date | string;
  isStarted: boolean;
}
