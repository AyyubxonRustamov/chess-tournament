"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const tables_1 = require("../../common/constants/tables");
const repositories_1 = require("../../db/repositories");
class UserRepository extends repositories_1.BaseRepository {
    constructor(db) {
        super(tables_1.Tables.users, db);
    }
}
exports.UserRepository = UserRepository;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb21haW4vdXNlcnMvcmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwwREFBdUQ7QUFDdkQsd0RBQXVEO0FBS3ZELE1BQWEsY0FDWCxTQUFRLDZCQUEwQjtJQUdsQyxZQUFZLEVBQThCO1FBQ3hDLEtBQUssQ0FBQyxlQUFNLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzFCLENBQUM7Q0FDRjtBQVBELHdDQU9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGFibGVzIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9jb25zdGFudHMvdGFibGVzXCI7XHJcbmltcG9ydCB7IEJhc2VSZXBvc2l0b3J5IH0gZnJvbSBcIi4uLy4uL2RiL3JlcG9zaXRvcmllc1wiO1xyXG5pbXBvcnQgeyBVc2VyRW50aXR5IH0gZnJvbSBcIi4vZW50aXR5XCI7XHJcbmltcG9ydCB7IElVc2VyUmVwb3NpdG9yeSB9IGZyb20gXCIuL3JlcG9zaXRvcnktaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IENsaWVudCwgUG9vbCwgUG9vbENsaWVudCB9IGZyb20gXCJwZ1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXJSZXBvc2l0b3J5XHJcbiAgZXh0ZW5kcyBCYXNlUmVwb3NpdG9yeTxVc2VyRW50aXR5PlxyXG4gIGltcGxlbWVudHMgSVVzZXJSZXBvc2l0b3J5PFVzZXJFbnRpdHk+XHJcbntcclxuICBjb25zdHJ1Y3RvcihkYjogUG9vbCB8IFBvb2xDbGllbnQgfCBDbGllbnQpIHtcclxuICAgIHN1cGVyKFRhYmxlcy51c2VycywgZGIpO1xyXG4gIH1cclxufVxyXG4iXX0=