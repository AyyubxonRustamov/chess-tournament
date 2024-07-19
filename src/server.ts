import fastify from "fastify";
import "reflect-metadata";
// import { routesPlugin } from './domain/routes';
import { replyDecorator } from "./common/decorators/reply.decorator";
import { DB } from "./db/connect-db";

const PORT = +process.env.HTTP_PORT || 7777;

const server = fastify({ logger: true, bodyLimit: 10 * 1024 * 1024 });

server.register(replyDecorator);
// server.register(routesPlugin);

async function start() {
  try {
    let dbError = await DB.initialize();
    if (dbError) {
      console.error(
        `------------------------------  DB connect error -------------------------------`
      );
      console.error(`ERROR MESSAGE  --> `, dbError.message);
      return dbError;
    }
    console.info(
      "-----------------------------   DB SUCCESS CONNECTED    ------------------------------"
    );

    await server.listen({ host: "localhost", port: PORT });
  } catch (error) {
    console.error(
      `------------------------------  SERVER FAILLED  -------------------------------`
    );
    console.error(`ERROR :  `, error.message);
    process.exit(1);
  }
}

start();
