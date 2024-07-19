import { RoleEntity } from "./entity";
import { IRole } from "./types";

export function utilRole(role: IRole): RoleEntity {
    return {

        title: role.title,

        /*User*/
        user: role.user?.view,
        userCreated: role.user?.created,
        userUpdated: role.user?.updated,
        userDeleted: role.user?.deleted,

        /*Job*/
        job: role.job?.view,
        jobCreated: role.job?.created,
        jobUpdated: role.job?.updated,
        jobDeleted: role.job?.deleted,

        /*Skill*/
        skill: role.skill?.view,
        skillCreated: role.skill?.created,
        skillUpdated: role.skill?.updated,
        skillDeleted: role.skill?.deleted,

        /*Project*/
        project: role.project?.view,
        projectCreated: role.project?.created,
        projectUpdated: role.project?.updated,
        projectDeleted: role.project?.deleted,

        /*Role*/
        role: role.role?.view,
        roleCreated: role.role?.created,
        roleUpdated: role.role?.deleted,
        roleDeleted: role.role?.deleted,
    }
}