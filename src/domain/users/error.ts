import { ERROR_CODES } from "../../common/constants/error-codes";
import { CommonException } from "../../common/errors";

export class UserException extends CommonException {
  public static notFound(data) {
    return new UserException(ERROR_CODES.USERS, "User not found", data);
  }

  public static duplicate(data) {
    return new UserException(
      ERROR_CODES.USERS + 1,
      "A user already exists with the given email",
      data
    );
  }

  public static invalidPassword(data) {
    return new UserException(
      ERROR_CODES.USERS + 2,
      "Invalid password or username",
      data
    );
  }

  public static unauthorized(data = null) {
    return new UserException(ERROR_CODES.USERS + 3, "Unauthorized", data);
  }

  public static notEnoughPermission(data = null) {
    return new UserException(
      ERROR_CODES.USERS + 4,
      "You don't have access to requested data",
      data
    );
  }
}
