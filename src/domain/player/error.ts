import { ERROR_CODES } from "../../common/constants/error-codes";
import { CommonException } from "../../common/errors";

export class PlayerException extends CommonException {
  public static notFound(data) {
    return new PlayerException(ERROR_CODES.PLAYERS, "Player not found", data);
  }

  public static duplicate(data) {
    return new PlayerException(
      ERROR_CODES.PLAYERS + 1,
      "A player already exists with the given name",
      data
    );
  }
}
