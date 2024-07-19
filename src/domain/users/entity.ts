import { BaseEntity } from "../../db/entities/base.entity";
import { GENDER_ENUM } from "./class-validator";

export class UserEntity extends BaseEntity {
  fullname: string;
  birthday: Date | string;
  gender: GENDER_ENUM;
  email: string;
  password: string;
  role_id: string;
}
