"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const fastify_1 = tslib_1.__importDefault(require("fastify"));
require("reflect-metadata");
// import { routesPlugin } from './domain/routes';
const reply_decorator_1 = require("./common/decorators/reply.decorator");
const connect_db_1 = require("./db/connect-db");
const PORT = +process.env.HTTP_PORT || 7777;
const server = (0, fastify_1.default)({ logger: true, bodyLimit: 10 * 1024 * 1024 });
server.register(reply_decorator_1.replyDecorator);
// server.register(routesPlugin);
async function start() {
    try {
        let dbError = await connect_db_1.DB.initialize();
        if (dbError) {
            console.error(`------------------------------  DB connect error -------------------------------`);
            console.error(`ERROR MESSAGE  --> `, dbError.message);
            return dbError;
        }
        console.info("-----------------------------   DB SUCCESS CONNECTED    ------------------------------");
        await server.listen({ host: "localhost", port: PORT });
    }
    catch (error) {
        console.error(`------------------------------  SERVER FAILLED  -------------------------------`);
        console.error(`ERROR :  `, error.message);
        process.exit(1);
    }
}
start();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3NlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4REFBOEI7QUFDOUIsNEJBQTBCO0FBQzFCLGtEQUFrRDtBQUNsRCx5RUFBcUU7QUFDckUsZ0RBQXFDO0FBRXJDLE1BQU0sSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDO0FBRTVDLE1BQU0sTUFBTSxHQUFHLElBQUEsaUJBQU8sRUFBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEVBQUUsR0FBRyxJQUFJLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUV0RSxNQUFNLENBQUMsUUFBUSxDQUFDLGdDQUFjLENBQUMsQ0FBQztBQUNoQyxpQ0FBaUM7QUFFakMsS0FBSyxVQUFVLEtBQUs7SUFDbEIsSUFBSSxDQUFDO1FBQ0gsSUFBSSxPQUFPLEdBQUcsTUFBTSxlQUFFLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDcEMsSUFBSSxPQUFPLEVBQUUsQ0FBQztZQUNaLE9BQU8sQ0FBQyxLQUFLLENBQ1gsa0ZBQWtGLENBQ25GLENBQUM7WUFDRixPQUFPLENBQUMsS0FBSyxDQUFDLHFCQUFxQixFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN0RCxPQUFPLE9BQU8sQ0FBQztRQUNqQixDQUFDO1FBQ0QsT0FBTyxDQUFDLElBQUksQ0FDVix3RkFBd0YsQ0FDekYsQ0FBQztRQUVGLE1BQU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUFDLE9BQU8sS0FBSyxFQUFFLENBQUM7UUFDZixPQUFPLENBQUMsS0FBSyxDQUNYLGlGQUFpRixDQUNsRixDQUFDO1FBQ0YsT0FBTyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEIsQ0FBQztBQUNILENBQUM7QUFFRCxLQUFLLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmYXN0aWZ5IGZyb20gXCJmYXN0aWZ5XCI7XHJcbmltcG9ydCBcInJlZmxlY3QtbWV0YWRhdGFcIjtcclxuLy8gaW1wb3J0IHsgcm91dGVzUGx1Z2luIH0gZnJvbSAnLi9kb21haW4vcm91dGVzJztcclxuaW1wb3J0IHsgcmVwbHlEZWNvcmF0b3IgfSBmcm9tIFwiLi9jb21tb24vZGVjb3JhdG9ycy9yZXBseS5kZWNvcmF0b3JcIjtcclxuaW1wb3J0IHsgREIgfSBmcm9tIFwiLi9kYi9jb25uZWN0LWRiXCI7XHJcblxyXG5jb25zdCBQT1JUID0gK3Byb2Nlc3MuZW52LkhUVFBfUE9SVCB8fCA3Nzc3O1xyXG5cclxuY29uc3Qgc2VydmVyID0gZmFzdGlmeSh7IGxvZ2dlcjogdHJ1ZSwgYm9keUxpbWl0OiAxMCAqIDEwMjQgKiAxMDI0IH0pO1xyXG5cclxuc2VydmVyLnJlZ2lzdGVyKHJlcGx5RGVjb3JhdG9yKTtcclxuLy8gc2VydmVyLnJlZ2lzdGVyKHJvdXRlc1BsdWdpbik7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBzdGFydCgpIHtcclxuICB0cnkge1xyXG4gICAgbGV0IGRiRXJyb3IgPSBhd2FpdCBEQi5pbml0aWFsaXplKCk7XHJcbiAgICBpZiAoZGJFcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFxyXG4gICAgICAgIGAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIERCIGNvbm5lY3QgZXJyb3IgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLWBcclxuICAgICAgKTtcclxuICAgICAgY29uc29sZS5lcnJvcihgRVJST1IgTUVTU0FHRSAgLS0+IGAsIGRiRXJyb3IubWVzc2FnZSk7XHJcbiAgICAgIHJldHVybiBkYkVycm9yO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5pbmZvKFxyXG4gICAgICBcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICAgREIgU1VDQ0VTUyBDT05ORUNURUQgICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXCJcclxuICAgICk7XHJcblxyXG4gICAgYXdhaXQgc2VydmVyLmxpc3Rlbih7IGhvc3Q6IFwibG9jYWxob3N0XCIsIHBvcnQ6IFBPUlQgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXHJcbiAgICAgIGAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIFNFUlZFUiBGQUlMTEVEICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tYFxyXG4gICAgKTtcclxuICAgIGNvbnNvbGUuZXJyb3IoYEVSUk9SIDogIGAsIGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgcHJvY2Vzcy5leGl0KDEpO1xyXG4gIH1cclxufVxyXG5cclxuc3RhcnQoKTtcclxuIl19