import { Expose } from "class-transformer";
import { IDBRepositories } from "../../db/db-interface";
import { TournamentParticipantEntity } from "./entity";
import { TournamentParticipantException } from "./error";
import { DB } from "../../db/connect-db";
import { TournamentParticipantGetDto } from "./class-validator";

class TournamentParticipantService {
  constructor(private readonly db: IDBRepositories) {}

  async create(data: TournamentParticipantEntity) {
    try {
      const existingParticipant =
        await this.db.tournamentParticipantRepo.findOne({
          tournamentId: data.tournamentId,
          playerId: data.playerId,
          isDeleted: false,
        });
      if (existingParticipant)
        throw TournamentParticipantException.duplicate(data);

      const result = await this.db.tournamentParticipantRepo.create(data);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async getById(id: string) {
    const result = await this.db.tournamentParticipantRepo.getById(id);
    if (!result) throw TournamentParticipantException.notFound(id);

    return result;
  }

  async updateById(id: string, data) {
    try {
      await this.getById(id); // checking if participant exists in database

      const result = await this.db.tournamentParticipantRepo.updateById(
        id,
        data
      );
      return result;
    } catch (error) {
      throw error;
    }
  }

  async markDeleteById(id: string, deletedBy: string) {
    try {
      const result = await this.db.tournamentParticipantRepo.markDeleteById(
        id,
        deletedBy
      );
      return result;
    } catch (error) {
      throw error;
    }
  }

  async getPaging(paging: TournamentParticipantGetDto) {
    const data = await this.db.tournamentParticipantRepo.paging(
      { isDeleted: false },
      ["id", "tournamentId", "playerId", "points", "has_bye"],
      paging
    );
    const total = await this.db.tournamentParticipantRepo.count({
      isDeleted: false,
    });

    return { data, total };
  }
}

export const tournamentParticipantService = new TournamentParticipantService(
  DB.repos
);
