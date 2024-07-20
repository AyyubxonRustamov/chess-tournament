import { IsEmail, IsEnum, IsOptional, IsString, IsUUID } from "class-validator";
import {
  CommonDto,
  CommonDtoGroup,
} from "../../common/validation/dto/common.dto";
import { PagingDto } from "../../common/validation/dto/paging.dto";
import { UserEntity } from "./entity";

export enum GENDER_ENUM {
  MALE = "MALE",
  FEMALE = "FEMALE",
}

export class UserDtoGroup extends CommonDtoGroup {
  static readonly LOGIN = "login";
}

export class UserDto extends CommonDto {
  @IsOptional({ groups: [UserDtoGroup.UPDATE] })
  @IsString({ groups: [UserDtoGroup.CREATE, UserDtoGroup.UPDATE] })
  fullname: string;

  @IsOptional({ groups: [UserDtoGroup.UPDATE] })
  @IsEnum(GENDER_ENUM, { groups: [UserDtoGroup.CREATE, UserDtoGroup.UPDATE] })
  gender: GENDER_ENUM;

  @IsOptional({ groups: [UserDtoGroup.UPDATE] })
  @IsEmail(
    {},
    { groups: [UserDtoGroup.CREATE, UserDtoGroup.UPDATE, UserDtoGroup.LOGIN] }
  )
  email: string;

  @IsOptional({ groups: [UserDtoGroup.UPDATE] })
  @IsString({
    groups: [UserDtoGroup.CREATE, UserDtoGroup.UPDATE, UserDtoGroup.LOGIN],
  })
  password: string;

  @IsOptional({ groups: [UserDtoGroup.UPDATE] })
  @IsUUID("4", { groups: [UserDtoGroup.UPDATE] })
  roleId: string;
}

export class UserGetDto extends PagingDto<UserEntity> {}
