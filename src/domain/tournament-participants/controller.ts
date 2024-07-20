import { Roles } from "../../common/constants/roles";
import { validateIt } from "../../common/validation/validate";
import { roleService } from "../roles/service";
import {
  TournamentParticipantDto,
  TournamentParticipantDtoGroup,
  TournamentParticipantGetDto,
} from "./class-validator";
import { tournamentParticipantService } from "./service";

export async function create(request, response) {
  await roleService.hasAccess(request.user.id, Roles.TOURNAMENT_CREATE);

  const data = await validateIt(request.body, TournamentParticipantDto, [
    TournamentParticipantDtoGroup.CREATE,
  ]);

  const result = await tournamentParticipantService.create(data);
  return response.success(result);
}

export async function update(request, response) {
  await roleService.hasAccess(request.user.id, Roles.TOURNAMENT_UPDATE);

  const data = await validateIt(request.body, TournamentParticipantDto, [
    TournamentParticipantDtoGroup.UPDATE,
  ]);

  const result = await tournamentParticipantService.updateById(data.id, data);
  return response.success(result);
}

export async function markDeleteById(request, response) {
  await roleService.hasAccess(request.user.id, Roles.TOURNAMENT_DELETE);

  const data = await validateIt(request.params, TournamentParticipantDto, [
    TournamentParticipantDtoGroup.DELETE,
  ]);

  const result = await tournamentParticipantService.markDeleteById(
    data.id,
    data.deletedBy
  );
  return response.success(result);
}

export async function getById(request, response) {
  await roleService.hasAccess(request.user.id, Roles.TOURNAMENT);

  const data = await validateIt(request.params, TournamentParticipantDto, [
    TournamentParticipantDtoGroup.GET_BY_ID,
  ]);

  const result = await tournamentParticipantService.getById(data.id);
  return response.success(result);
}

export async function getPaging(request, response) {
  await roleService.hasAccess(request.user.id, Roles.TOURNAMENT);

  const data = await validateIt(request.query, TournamentParticipantGetDto, [
    TournamentParticipantDtoGroup.PAGINATION,
  ]);

  const result = await tournamentParticipantService.getPaging(data);
  return response.success(result.data, result.total);
}
