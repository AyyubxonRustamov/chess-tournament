import { BaseEntity } from "../../db/entities/base.entity";

export class PlayerEntity extends BaseEntity {
  fullname: string;
  age: number;
  rating: number;
  country: string;
}
