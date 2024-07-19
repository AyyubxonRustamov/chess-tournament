import { ERROR_CODES } from "../../common/constants/error-codes";
import { CommonException } from "../../common/errors";

export class RoleException extends CommonException {
  public static notFound(data) {
    return new RoleException(ERROR_CODES.ROLES, "Role not found", data);
  }

  public static duplicate(data) {
    return new RoleException(
      ERROR_CODES.ROLES,
      "A role already exists with the given name",
      data
    );
  }
}
