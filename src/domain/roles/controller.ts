import { roleService } from "./service";

export async function create(request, response) {
    await roleService.hasAccess(request.user.id, )
}