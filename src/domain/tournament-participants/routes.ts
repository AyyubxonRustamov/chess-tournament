import { RouteOptions } from "fastify";
import {
  create,
  getById,
  getPaging,
  markDeleteById,
  update,
} from "./controller";
import { authUser } from "../users/authentication";

export const tournamentParticipantRoutes: RouteOptions[] = [
  {
    method: "POST",
    url: `/tournament-participant`,
    preValidation: [authUser],
    handler: create,
  },
  {
    method: "PUT",
    url: `/tournament-participant`,
    preValidation: [authUser],
    handler: update,
  },
  {
    method: "DELETE",
    url: `/tournament-participant/:id`,
    preValidation: [authUser],
    handler: markDeleteById,
  },
  {
    method: "GET",
    url: `/tournament-participant/:id`,
    preValidation: [authUser],
    handler: getById,
  },
  {
    method: "GET",
    url: `/tournament-participant`,
    preValidation: [authUser],
    handler: getPaging,
  },
];
