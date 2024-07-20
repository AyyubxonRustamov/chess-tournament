import {
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
} from "class-validator";
import {
  CommonDto,
  CommonDtoGroup,
} from "../../common/validation/dto/common.dto";
import { PagingDto } from "../../common/validation/dto/paging.dto";
import { PlayerEntity } from "./entity";
import { GENDER_ENUM } from "../users/class-validator";

export class PlayerDtoGroup extends CommonDtoGroup {
  static readonly GET_BY_TOURNAMENT_ID = "getbyTournamentId";
}

export class PlayerDto extends CommonDto {
  @IsOptional({ groups: [PlayerDtoGroup.UPDATE] })
  @IsString({ groups: [PlayerDtoGroup.CREATE, PlayerDtoGroup.UPDATE] })
  fullname: string;

  @IsOptional({ groups: [PlayerDtoGroup.UPDATE] })
  @IsNumber(
    {
      allowInfinity: false,
      allowNaN: false,
      maxDecimalPlaces: 0,
    },
    { groups: [PlayerDtoGroup.CREATE, PlayerDtoGroup.UPDATE] }
  )
  @Min(5)
  @Max(120)
  age: number;

  @IsOptional({ groups: [PlayerDtoGroup.UPDATE] })
  @IsEnum(GENDER_ENUM, {
    groups: [PlayerDtoGroup.CREATE, PlayerDtoGroup.UPDATE],
  })
  gender: GENDER_ENUM;

  @IsOptional({ groups: [PlayerDtoGroup.UPDATE] })
  @IsNumber(
    {
      allowInfinity: false,
      allowNaN: false,
      maxDecimalPlaces: 0,
    },
    { groups: [PlayerDtoGroup.CREATE, PlayerDtoGroup.UPDATE] }
  )
  @Min(0)
  rating: number;

  @IsOptional({ groups: [PlayerDtoGroup.UPDATE] })
  @IsString({ groups: [PlayerDtoGroup.CREATE, PlayerDtoGroup.UPDATE] })
  country: string;
}

export class PlayerGetDto extends PagingDto<PlayerEntity> {
  // @IsOptional({ groups: [PlayerDtoGroup.PAGINATION] })
  // @IsString({ groups: [PlayerDtoGroup.PAGINATION, PlayerDtoGroup.GET_BY_TOURNAMENT_ID] })
  // tournamentId: string
}
