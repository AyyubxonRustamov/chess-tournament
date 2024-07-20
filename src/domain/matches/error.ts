import { ERROR_CODES } from "../../common/constants/error-codes";
import { CommonException } from "../../common/errors";

export class MatchException extends CommonException {
  public static notFound(data) {
    return new MatchException(ERROR_CODES.MATCHES, "Match not found", data);
  }
}
