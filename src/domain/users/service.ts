import md5 from "md5";
import jwt from "jsonwebtoken";
import { IDBRepositories } from "../../db/db-interface";
import { UserException } from "./error";
import { RoleException } from "../roles/error";
import { UserEntity } from "./entity";
import { DB } from "../../db/connect-db";
import { UserJWTPayloadDto } from "./types";

class UserService {
  constructor(private readonly db: IDBRepositories) {}

  async create(data: UserEntity) {
    try {
      const existingGmail = await this.db.userRepo.findOne({
        email: data.email,
        isDeleted: false,
      });
      if (existingGmail) throw UserException.duplicate(data);

      data.password = md5(data.password);

      const roleUser = await this.db.roleRepo.findOne({
        title: "USER",
        isDeleted: false,
      });
      if (!roleUser) throw RoleException.notFound("USER");

      data.roleId = roleUser.id;

      const result = await this.db.userRepo.create(data);

      return result;
    } catch (error) {
      throw error;
    }
  }

  async getById(id: string) {
    const result = await this.db.userRepo.getById(id);
    if (!result) throw UserException.notFound(id);

    return result;
  }

  async login(email: string, password: string) {
    const user = await this.db.userRepo.findOne({ email, isDeleted: false });
    if (!user) throw UserException.notFound(email);

    if (md5(password) != user.password)
      throw UserException.invalidPassword(password);

    const token = await this.signAsync(
      { id: user.id, roleId: user.roleId },
      process.env.JWT_SECRET_ACCESS
    ); // generating JWT token

    delete user.password; // deleting user password for safety

    return { ...user, token };
  }

  // function to verify JWT token
  verifyJwt(token: string): Promise<UserJWTPayloadDto> {
    return new Promise((resolve, reject) => {
      jwt.verify(token, process.env.JWT_SECRET_ACCESS, (err, decoded) => {
        if (err) {
          reject(err);
        } else {
          resolve(decoded as UserJWTPayloadDto);
        }
      });
    });
  }

  // function to generate JWT token
  private signAsync(
    payload: UserJWTPayloadDto,
    secret: string,
    options?: jwt.SignOptions
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      jwt.sign(payload, secret, options, (err: Error | null, token: string) => {
        if (err) {
          reject(err);
        } else {
          resolve(token);
        }
      });
    });
  }
}

export const userService = new UserService(DB.repos);
