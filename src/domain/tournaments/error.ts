import { ERROR_CODES } from "../../common/constants/error-codes";
import { CommonException } from "../../common/errors";

export class TournamentException extends CommonException {
  public static notFound(data) {
    return new TournamentException(
      ERROR_CODES.TOURNAMENTS,
      "Tournament not found",
      data
    );
  }

  public static duplicate(data) {
    return new TournamentException(
      ERROR_CODES.TOURNAMENTS + 1,
      "A tournament already exists with the given name",
      data
    );
  }
}
