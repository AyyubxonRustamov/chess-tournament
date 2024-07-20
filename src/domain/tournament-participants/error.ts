import { ERROR_CODES } from "../../common/constants/error-codes";
import { CommonException } from "../../common/errors";

export class TournamentParticipantException extends CommonException {
  public static notFound(data) {
    return new TournamentParticipantException(
      ERROR_CODES.TOURNAMENT_PARTICIPANTS,
      "Participant not found",
      data
    );
  }

  public static duplicate(data) {
    return new TournamentParticipantException(
      ERROR_CODES.TOURNAMENT_PARTICIPANTS + 1,
      "Player already registered to the tournament",
      data
    );
  }
}
