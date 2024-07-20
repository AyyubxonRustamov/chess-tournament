import { RouteOptions } from "fastify";
import {
  create,
  getById,
  getPaging,
  markDeleteById,
  update,
} from "./controller";
import { authUser } from "../users/authentication";

export const tournamentRoutes: RouteOptions[] = [
  {
    method: "POST",
    url: `/tournament`,
    preValidation: [authUser],
    handler: create,
  },
  {
    method: "PUT",
    url: `/tournament`,
    preValidation: [authUser],
    handler: update,
  },
  {
    method: "DELETE",
    url: `/tournament/:id`,
    preValidation: [authUser],
    handler: markDeleteById,
  },
  {
    method: "GET",
    url: `/tournament/:id`,
    preValidation: [authUser],
    handler: getById,
  },
  {
    method: "GET",
    url: `/tournament`,
    preValidation: [authUser],
    handler: getPaging,
  },
];
