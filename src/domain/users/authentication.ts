import { UserException } from "./error";
import { userService } from "./service";

export async function authUser(request, reply) {
  try {
    let bearer = request.headers["authorization"]?.replace("Bearer ", "");
    let decoded = await userService.verifyJwt(bearer);

    let user = await userService.getById(decoded.id);
    if (!user) throw UserException.unauthorized();

    const method: string = request.method;
    switch (method.toLocaleLowerCase()) {
      case "delete": {
        request.body
          ? (request.body.deletedBy = user.id)
          : request.params
          ? (request.params.deletedBy = user.id)
          : {};
        break;
      }
      case "post": {
        request.body ? (request.body.createdBy = user.id) : "";
        break;
      }
    }

    request.user = user;
  } catch (error) {
    console.log("ERROR: Authentication ");
    return reply.status(401).send(UserException.unauthorized());
  }
}
