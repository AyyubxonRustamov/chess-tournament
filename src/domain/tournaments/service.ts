import { DB } from "../../db/connect-db";
import { IDBRepositories } from "../../db/db-interface";
import { TournamentGetDto } from "./class-validator";
import { TournamentEntity } from "./entity";
import { TournamentException } from "./error";

class TournamentService {
  constructor(private readonly db: IDBRepositories) {}

  async create(data: TournamentEntity) {
    try {
      const existingByName = await this.db.tournamentRepo.findOne({
        name: data.name,
        isDeleted: false,
      });
      if (existingByName) throw TournamentException.duplicate(data);

      const result = await this.db.tournamentRepo.create(data);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async getById(id: string) {
    const result = await this.db.tournamentRepo.getById(id);
    if (!result) throw TournamentException.notFound(id);

    return result;
  }

  async updateById(id: string, data) {
    try {
      const existingById = await this.getById(id);

      const result = await this.db.tournamentRepo.updateById(id, data);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async markDeleteById(id: string, deletedBy: string) {
    try {
      const result = await this.db.tournamentRepo.markDeleteById(id, deletedBy);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async getPaging(paging: TournamentGetDto) {
    const data = await this.db.tournamentRepo.paging(
      { isDeleted: false },
      ["id", "name", "startDate", "endDate", "isStarted"],
      paging
    );
    const total = await this.db.tournamentRepo.count({ isDeleted: false });

    return { data, total };
  }
}

export const tournamentService = new TournamentService(DB.repos);
