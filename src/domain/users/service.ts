import md5 from "md5";
import { IDBRepositories } from "../../db/db-interface";
import { UserException } from "./error";

class UserService {
  constructor(private readonly db: IDBRepositories) {}

  async create(data) {
    try {
      const existingGmail = await this.db.userRepo.findOne({
        email: data.email,
        isDeleted: false,
      });
      if (existingGmail) throw UserException.duplicate(data);

      data.password = md5(data.password);

      const userRole = await this.db.roleRepo.findOne({})

      const result = await this.db.userRepo.create(data);

      return result;
    } catch (error) {
      throw error;
    }
  }
}
