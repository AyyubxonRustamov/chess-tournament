import { RouteOptions } from "fastify";
import {
  create,
  getById,
  getPaging,
  markDeleteById,
  update,
} from "./controller";
import { authUser } from "../users/authentication";

export const playerRoutes: RouteOptions[] = [
  {
    method: "POST",
    url: `/player`,
    preValidation: [authUser],
    handler: create,
  },
  {
    method: "PUT",
    url: `/player`,
    preValidation: [authUser],
    handler: update,
  },
  {
    method: "DELETE",
    url: `/player/:id`,
    preValidation: [authUser],
    handler: markDeleteById,
  },
  {
    method: "GET",
    url: `/player/:id`,
    preValidation: [authUser],
    handler: getById,
  },
  {
    method: "GET",
    url: `/player`,
    preValidation: [authUser],
    handler: getPaging,
  },
];
