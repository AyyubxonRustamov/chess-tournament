import { BaseEntity } from "../../db/entities/base.entity";

export class RoleEntity extends BaseEntity {
  title: string;

  "user": boolean;
  userCreate: boolean;
  userUpdate: boolean;
  userDelete: boolean;

  "role": boolean;
  roleCreate: boolean;
  roleUpdate: boolean;
  roleDelete: boolean;

  tournament: boolean;
  tournamentCreate: boolean;
  tournamentUpdate: boolean;
  tournamentDelete: boolean;

  player: boolean;
  playerCreate: boolean;
  playerUpdate: boolean;
  playerDelete: boolean;

  match: boolean;
  matchCreate: boolean;
  matchUpdate: boolean;
  matchDelete: boolean;
}

export const roleEntityFields: (keyof RoleEntity)[] = [
  'title', 'createdAt',
  'user', 'userCreate', 'userUpdate', 'userDelete',
  'role', 'roleCreate', 'roleUpdate', 'roleDelete',
  'tournament', 'tournamentCreate', 'tournamentUpdate', 'tournamentDelete',
  'player', 'playerCreate', 'playerUpdate', 'playerDelete',
  'match', 'matchCreate', 'matchUpdate', 'matchDelete'
];
