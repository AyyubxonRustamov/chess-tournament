import { IsDateString, IsOptional, IsString } from "class-validator";
import {
  CommonDto,
  CommonDtoGroup,
} from "../../common/validation/dto/common.dto";
import { PagingDto } from "../../common/validation/dto/paging.dto";
import { TournamentEntity } from "./entity";
import { Transform } from "class-transformer";
import moment from "moment";

export class TournamentDtoGroup extends CommonDtoGroup {}

export class TournamentDto extends CommonDto {
  @IsOptional({ groups: [TournamentDtoGroup.UPDATE] })
  @IsString({ groups: [TournamentDtoGroup.CREATE, TournamentDtoGroup.UPDATE] })
  name: string;

  @IsOptional({
    groups: [TournamentDtoGroup.CREATE, TournamentDtoGroup.UPDATE],
  })
  @IsDateString(
    {},
    {
      groups: [TournamentDtoGroup.CREATE, TournamentDtoGroup.UPDATE],
    }
  )
  @Transform(({ value }) => moment(value.trim()).format("YYYY.MM.DD"), {
    groups: [TournamentDtoGroup.CREATE, TournamentDtoGroup.UPDATE],
  })
  startDate: string;

  @IsOptional({
    groups: [TournamentDtoGroup.CREATE, TournamentDtoGroup.UPDATE],
  })
  @IsDateString(
    {},
    {
      groups: [TournamentDtoGroup.CREATE, TournamentDtoGroup.UPDATE],
    }
  )
  @Transform(({ value }) => moment(value.trim()).format("YYYY.MM.DD"), {
    groups: [TournamentDtoGroup.CREATE, TournamentDtoGroup.UPDATE],
  })
  endDate: string;

  isStarted: boolean; // not for use externally
}

export class TournamentGetDto extends PagingDto<TournamentEntity> {}
