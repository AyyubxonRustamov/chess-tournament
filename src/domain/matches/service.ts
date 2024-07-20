import { IDBRepositories } from "../../db/db-interface";
import { tournamentService } from "../tournaments/service";
import { MatchEntity } from "./entity";

class MatchService {
  constructor(private readonly db: IDBRepositories) {}

  async createMatches(request, reply) {
    const { tournamentId, round } = request.body;
    const tournament = await tournamentService.getById(tournamentId);

    const players = await pool.query(
      "SELECT * FROM tournament_participants WHERE tournament_id = $1",
      [tournamentId]
    );
    const pairings = createPairings(players.rows);
    const matches = [];

    for (const pairing of pairings) {
      const result = await pool.query(
        "INSERT INTO matches (player1_id, player2_id, tournament_id, round) VALUES ($1, $2, $3, $4) RETURNING *",
        [pairing.player1.id, pairing.player2.id, tournamentId, round]
      );
      matches.push(result.rows[0]);
    }

    reply.send(matches);
  }

//   async getTournamentMatchesByRound(data) {
//     const { tournamentId, round } = data;
//     const matches = await this.db.matchRepo.
//   }
}
