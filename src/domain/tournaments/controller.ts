import { Roles } from "../../common/constants/roles";
import { validateIt } from "../../common/validation/validate";
import { roleService } from "../roles/service";
import {
  TournamentDto,
  TournamentDtoGroup,
  TournamentGetDto,
} from "./class-validator";
import { tournamentService } from "./service";

export async function create(request, response) {
  await roleService.hasAccess(request.user.id, Roles.TOURNAMENT_CREATE);

  const data = await validateIt(request.body, TournamentDto, [
    TournamentDtoGroup.CREATE,
  ]);

  const result = await tournamentService.create(data);
  return response.success(result);
}

export async function update(request, response) {
  await roleService.hasAccess(request.user.id, Roles.TOURNAMENT_UPDATE);

  const data = await validateIt(request.body, TournamentDto, [
    TournamentDtoGroup.UPDATE,
  ]);

  const result = await tournamentService.updateById(data.id, data);
  return response.success(result);
}

export async function markDeleteById(request, response) {
  await roleService.hasAccess(request.user.id, Roles.TOURNAMENT_DELETE);

  const data = await validateIt(request.params, TournamentDto, [
    TournamentDtoGroup.DELETE,
  ]);

  const result = await tournamentService.markDeleteById(
    data.id,
    data.deletedBy
  );
  return response.success(result);
}

export async function getById(request, response) {
  await roleService.hasAccess(request.user.id, Roles.TOURNAMENT);

  const data = await validateIt(request.params, TournamentDto, [
    TournamentDtoGroup.GET_BY_ID,
  ]);

  const result = await tournamentService.getById(data.id);
  return response.success(result);
}

export async function getPaging(request, response) {
  await roleService.hasAccess(request.user.id, Roles.TOURNAMENT);

  const data = await validateIt(request.query, TournamentGetDto, [
    TournamentDtoGroup.PAGINATION,
  ]);

  const result = await tournamentService.getPaging(data);
  return response.success(result.data, result.total);
}
