import { DB } from "../../db/connect-db";
import { IDBRepositories } from "../../db/db-interface";
import { UserException } from "../users/error";
import { RoleGetDto } from "./class-validator";
import { roleEntityFields } from "./entity";
import { RoleException } from "./error";
import { utilRole } from "./utils";

class RoleService {
  constructor(private readonly db: IDBRepositories) {}

  async hasAccess(id: string, access: string) {
    const role = await this.db.roleRepo.getById(id);
    if (!role[access]) throw UserException.notEnoughPermission();
  }

  async create(data) {
    try {
      let role = utilRole(data);

      const { id } = await this.db.roleRepo.create(role);
      const result = await this.db.roleRepo.getById(id);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async update(id: string, data) {
    try {
      let role = utilRole(data);

      const result = await this.db.roleRepo.updateById(id, role);

      return result;
    } catch (error) {
      throw error;
    }
  }

  async markDeleteById(id: string, deletedBy: string) {
    try {
      await this.db.roleRepo.markDeleteById(id, deletedBy);
    } catch (error) {
      throw error;
    }
  }

  async getById(id: string) {
    const result = await this.db.roleRepo.getById(id);

    if (!result) throw RoleException.notFound(id);
    return result;
  }

  async getPaging(paging: RoleGetDto) {
    const result = await this.db.roleRepo.paging(
      { isDeleted: false },
      roleEntityFields,
      paging
    );
    const count = await this.db.roleRepo.count({ isDeleted: false });
    return { data: result, count };
  }
}

export const roleService = new RoleService(DB.repos);
