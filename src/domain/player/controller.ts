import { Roles } from "../../common/constants/roles";
import { validateIt } from "../../common/validation/validate";
import { roleService } from "../roles/service";
import { PlayerDto, PlayerDtoGroup, PlayerGetDto } from "./class-validator";
import { playerService } from "./service";

export async function create(request, response) {
  await roleService.hasAccess(request.user.id, Roles.PLAYER_CREATE);

  const data = await validateIt(request.body, PlayerDto, [
    PlayerDtoGroup.CREATE,
  ]);

  const result = await playerService.create(data);
  return response.success(result);
}

export async function update(request, response) {
  await roleService.hasAccess(request.user.id, Roles.PLAYER_UPDATE);

  const data = await validateIt(request.body, PlayerDto, [
    PlayerDtoGroup.UPDATE,
  ]);

  const result = await playerService.updateById(data.id, data);
  return response.success(result);
}

export async function markDeleteById(request, response) {
  await roleService.hasAccess(request.user.id, Roles.PLAYER_DELETE);

  const data = await validateIt(request.params, PlayerDto, [
    PlayerDtoGroup.DELETE,
  ]);

  const result = await playerService.markDeleteById(data.id, data.deletedBy);
  return response.success(result);
}

export async function getById(request, response) {
  await roleService.hasAccess(request.user.id, Roles.PLAYER);

  const data = await validateIt(request.params, PlayerDto, [
    PlayerDtoGroup.GET_BY_ID,
  ]);

  const result = await playerService.getbyId(data.id);
  return response.success(result);
}

export async function getPaging(request, response) {
  await roleService.hasAccess(request.user.id, Roles.PLAYER);

  const data = await validateIt(request.query, PlayerGetDto, [
    PlayerDtoGroup.PAGINATION,
  ]);

  const result = await playerService.getPaging(data);
  return response.success(result.data, result.total);
}
