import { IsNumber, IsOptional, IsString, IsUUID, Min } from "class-validator";
import {
  CommonDto,
  CommonDtoGroup,
} from "../../common/validation/dto/common.dto";
import { PagingDto } from "../../common/validation/dto/paging.dto";
import { TournamentParticipantEntity } from "./entity";

export class TournamentParticipantDtoGroup extends CommonDtoGroup {}

export class TournamentParticipantDto extends CommonDto {
  @IsOptional({ groups: [TournamentParticipantDtoGroup.UPDATE] })
  @IsUUID("4", {
    groups: [
      TournamentParticipantDtoGroup.CREATE,
      TournamentParticipantDtoGroup.UPDATE,
    ],
  })
  @IsString({
    groups: [
      TournamentParticipantDtoGroup.CREATE,
      TournamentParticipantDtoGroup.UPDATE,
    ],
  })
  tournamentId: string;

  @IsOptional({ groups: [TournamentParticipantDtoGroup.UPDATE] })
  @IsUUID("4", {
    groups: [
      TournamentParticipantDtoGroup.CREATE,
      TournamentParticipantDtoGroup.UPDATE,
    ],
  })
  @IsString({
    groups: [
      TournamentParticipantDtoGroup.CREATE,
      TournamentParticipantDtoGroup.UPDATE,
    ],
  })
  playerId: string;

  @IsOptional({
    groups: [
      TournamentParticipantDtoGroup.CREATE,
      TournamentParticipantDtoGroup.UPDATE,
    ],
  })
  @IsNumber(
    {
      allowInfinity: false,
      allowNaN: false,
      maxDecimalPlaces: 0,
    },
    {
      groups: [
        TournamentParticipantDtoGroup.CREATE,
        TournamentParticipantDtoGroup.UPDATE,
      ],
    }
  )
  @Min(0)
  points: number;

  has_bye: boolean; // not for externally use
}

export class TournamentParticipantGetDto extends PagingDto<TournamentParticipantEntity> {}
