import { Expose, Transform } from "class-transformer";
import {
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  Min,
} from "class-validator";
import { CommonDtoGroup } from "./common.dto";

export enum QuerySortTypeEnum {
  ASC = "ASC",
  DESC = "DESC",
}

export type QuerySortType = "ASC" | "DESC";

export class PagingDto<T> {
  @IsOptional({ groups: [CommonDtoGroup.PAGINATION] })
  @IsUUID("4", { groups: [CommonDtoGroup.PAGINATION] })
  id?: string;

  @IsOptional({ groups: [CommonDtoGroup.PAGINATION] })
  @Transform(({ value }) => Number(value))
  @IsNumber(
    {
      allowInfinity: false,
      allowNaN: false,
      maxDecimalPlaces: 0,
    },
    {
      groups: [CommonDtoGroup.PAGINATION],
    }
  )
  @Min(1, { groups: [CommonDtoGroup.PAGINATION] })
  limit: number;

  @IsOptional({ groups: [CommonDtoGroup.PAGINATION] })
  @Transform(({ value }) => Number(value))
  @IsNumber(
    {
      allowInfinity: false,
      allowNaN: false,
      maxDecimalPlaces: 0,
    },
    {
      groups: [CommonDtoGroup.PAGINATION],
    }
  )
  @Min(1, { groups: [CommonDtoGroup.PAGINATION] })
  page: number;

  @Expose({ toClassOnly: true })
  @Transform(({ value }) => value?.trim() || "")
  @IsOptional({ groups: [CommonDtoGroup.PAGINATION] })
  @IsString({ groups: [CommonDtoGroup.PAGINATION] })
  search?: string;

  @IsOptional({ groups: [CommonDtoGroup.PAGINATION] })
  @IsString({ groups: [CommonDtoGroup.PAGINATION] })
  orderBy: keyof T;

  @IsOptional({ groups: [CommonDtoGroup.PAGINATION] })
  @IsEnum(QuerySortTypeEnum, { groups: [CommonDtoGroup.PAGINATION] })
  orderType?: QuerySortType = "ASC";
}
