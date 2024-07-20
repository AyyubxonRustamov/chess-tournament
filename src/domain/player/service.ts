import { DB } from "../../db/connect-db";
import { IDBRepositories } from "../../db/db-interface";
import { PlayerGetDto } from "./class-validator";
import { PlayerEntity } from "./entity";
import { PlayerException } from "./error";

class PlayerService {
  constructor(private readonly db: IDBRepositories) {}

  async create(data: PlayerEntity) {
    try {
      const existingPlayer = await this.db.playerRepo.findOne({
        fullname: data.fullname,
        isDeleted: false,
      });
      if (existingPlayer) throw PlayerException.duplicate(data);

      const result = await this.db.playerRepo.create(data);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async getbyId(id: string) {
    const result = await this.db.playerRepo.getById(id);
    if (!result) throw PlayerException.notFound(id);

    return result;
  }

  async updateById(id: string, data) {
    try {
      await this.getbyId(id); // for checking if player exists in database

      const result = await this.db.playerRepo.updateById(id, data);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async markDeleteById(id: string, deletedBy: string) {
    try {
      const result = await this.db.playerRepo.markDeleteById(id, deletedBy);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async getPaging(paging: PlayerGetDto) {
    const data = await this.db.playerRepo.paging(
      { isDeleted: false },
      ["id", "fullname", "age", "rating", "country"],
      paging
    );
    const total = await this.db.playerRepo.count({ isDeleted: false });

    return { data, total };
  }
}

export const playerService = new PlayerService(DB.repos);
