import { IsOptional, IsUUID } from "class-validator";

export class CommonDtoGroup {
  static readonly CREATE = "create";
  static readonly UPDATE = "update";
  static readonly DELETE = "delete";
  static readonly GET_BY_ID = "getById";
  static readonly PAGINATION = "pagination";
}

export class CommonDto {
  @IsOptional({ groups: [CommonDtoGroup.PAGINATION] })
  @IsUUID("4", {
    groups: [
      CommonDtoGroup.UPDATE,
      CommonDtoGroup.DELETE,
      CommonDtoGroup.GET_BY_ID,
      CommonDtoGroup.PAGINATION,
    ],
  })
  id: string;

  @IsOptional({ groups: [CommonDtoGroup.CREATE] })
  @IsUUID("4", { groups: [CommonDtoGroup.CREATE] })
  createdBy?: string;

  @IsOptional({ groups: [CommonDtoGroup.DELETE] })
  @IsUUID("4", { groups: [CommonDtoGroup.DELETE] })
  deletedBy?: string;

  @IsOptional({ groups: [CommonDtoGroup.DELETE] })
  isDeleted?: boolean;

  deletedAt?: number;
  createdAt?: string;
}

