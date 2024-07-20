import { BaseEntity } from "../../db/entities/base.entity";
import { GENDER_ENUM } from "../users/class-validator";

export class PlayerEntity extends BaseEntity {
  fullname: string;
  age: number;
  gender: GENDER_ENUM;
  rating: number;
  country: string;
}
