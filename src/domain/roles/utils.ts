import { RoleEntity } from "./entity";
import { IRole } from "./types";

export function utilRole(role: IRole): RoleEntity {
  return {
    title: role.title,

    /*User*/
    user: role.user?.view,
    userCreate: role.user?.create,
    userUpdate: role.user?.update,
    userDelete: role.user?.delete,

    /*Role*/
    role: role.role?.view,
    roleCreate: role.role?.create,
    roleUpdate: role.role?.delete,
    roleDelete: role.role?.delete,

    /*player*/
    player: role.player?.view,
    playerCreate: role.player?.create,
    playerUpdate: role.player?.update,
    playerDelete: role.player?.delete,

    /*tournament*/
    tournament: role.tournament?.view,
    tournamentCreate: role.tournament?.create,
    tournamentUpdate: role.tournament?.update,
    tournamentDelete: role.tournament?.delete,

    /*match*/
    match: role.match?.view,
    matchCreate: role.match?.create,
    matchUpdate: role.match?.update,
    matchDelete: role.match?.delete,
  };
}
