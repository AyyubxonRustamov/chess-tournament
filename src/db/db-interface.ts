// import { SubjectEntity } from './../domain/subject/entity';
import { QueryResult } from "pg";
import { IUserRepository } from "../domain/users/repository-interface";
import { UserEntity } from "../domain/users/entity";
import { IRoleRepository } from "../domain/roles/repository-interface";
import { RoleEntity } from "../domain/roles/entity";
import { IPlayerRepository } from "../domain/player/repository-interface";
import { PlayerEntity } from "../domain/player/entity";
import { ITournamentRepository } from "../domain/tournaments/repository-interface";
import { TournamentEntity } from "../domain/tournaments/entity";
import { ITournamentParticipantRepository } from "../domain/tournament-participants/repository-interface";
import { TournamentParticipantEntity } from "../domain/tournament-participants/entity";

export interface IDBRepositories {
  userRepo: IUserRepository<UserEntity>;
  roleRepo: IRoleRepository<RoleEntity>;
  playerRepo: IPlayerRepository<PlayerEntity>;
  tournamentRepo: ITournamentRepository<TournamentEntity>;
  tournamentParticipantRepo: ITournamentParticipantRepository<TournamentParticipantEntity>;
}

export interface IWithTransaction extends IDBRepositories {
  commit(): Promise<QueryResult<any>>;
  rollback(): Promise<QueryResult<any>>;
}

export interface IDB {
  readonly repos: IDBRepositories;
  initialize(): Promise<Error | null>;
}
