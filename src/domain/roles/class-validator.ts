import { Type } from "class-transformer";
import {
  IsBoolean,
  IsNotEmptyObject,
  IsOptional,
  IsString,
  IsUUID,
  ValidateNested,
} from "class-validator";
import { RoleEntity } from "./entity";
import {
  CommonDto,
  CommonDtoGroup,
} from "../../common/validation/dto/common.dto";
import { PagingDto } from "../../common/validation/dto/paging.dto";

export class RoleDtoGroup extends CommonDtoGroup {}

export class RoleGetDto extends PagingDto<RoleEntity> {
  @IsOptional({ groups: [RoleDtoGroup.PAGINATION] })
  @IsUUID("4", { groups: [RoleDtoGroup.PAGINATION] })
  userId: string;
}

class Action {
  @IsBoolean({ groups: [RoleDtoGroup.CREATE, RoleDtoGroup.UPDATE] })
  view: boolean;

  @IsBoolean({ groups: [RoleDtoGroup.CREATE, RoleDtoGroup.UPDATE] })
  create: boolean;

  @IsBoolean({ groups: [RoleDtoGroup.CREATE, RoleDtoGroup.UPDATE] })
  update: boolean;

  @IsBoolean({ groups: [RoleDtoGroup.CREATE, RoleDtoGroup.UPDATE] })
  delete: boolean;
}

export class RoleDto extends CommonDto {
  @IsOptional({ groups: [RoleDtoGroup.UPDATE] })
  @IsString({ groups: [RoleDtoGroup.CREATE, RoleDtoGroup.UPDATE] })
  title: string;

  @IsOptional({ groups: [RoleDtoGroup.UPDATE] })
  @IsNotEmptyObject({ nullable: false }, { groups: [RoleDtoGroup.UPDATE] })
  @ValidateNested({ groups: [RoleDtoGroup.CREATE, RoleDtoGroup.UPDATE] })
  @Type(() => Action)
  user: Action;

  @IsOptional({ groups: [RoleDtoGroup.UPDATE] })
  @IsNotEmptyObject({ nullable: false }, { groups: [RoleDtoGroup.UPDATE] })
  @ValidateNested({ groups: [RoleDtoGroup.CREATE, RoleDtoGroup.UPDATE] })
  @Type(() => Action)
  role: Action;

  @IsOptional({ groups: [RoleDtoGroup.UPDATE] })
  @IsNotEmptyObject({ nullable: false }, { groups: [RoleDtoGroup.UPDATE] })
  @ValidateNested({ groups: [RoleDtoGroup.CREATE, RoleDtoGroup.UPDATE] })
  @Type(() => Action)
  player: Action;

  @IsOptional({ groups: [RoleDtoGroup.UPDATE] })
  @IsNotEmptyObject({ nullable: false }, { groups: [RoleDtoGroup.UPDATE] })
  @ValidateNested({ groups: [RoleDtoGroup.CREATE, RoleDtoGroup.UPDATE] })
  @Type(() => Action)
  tournament: Action;

  @IsOptional({ groups: [RoleDtoGroup.UPDATE] })
  @IsNotEmptyObject({ nullable: false }, { groups: [RoleDtoGroup.UPDATE] })
  @ValidateNested({ groups: [RoleDtoGroup.CREATE, RoleDtoGroup.UPDATE] })
  @Type(() => Action)
  match: Action;
}
