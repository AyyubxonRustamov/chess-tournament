import { Pool, PoolClient } from "pg";
import { IDB, IDBRepositories } from "./db-interface";
import { config } from "dotenv";
import { UserRepository } from "../domain/users/repository";
import { RoleRepository } from "../domain/roles/repository";
config();
// import { }

const getRepositories = (pg: PoolClient | Pool): IDBRepositories => ({
  userRepo: new UserRepository(pg),
  roleRepo: new RoleRepository(pg),
});

export class PGDB implements IDB {
  readonly repos: IDBRepositories;

  private readonly pool: Pool;
  constructor() {
    this.pool = new Pool({
      host: process.env.POSTGRES_HOST || "localhost",
      port: +process.env.POSTGRES_PORT || 5432,
      user: process.env.POSTGRES_USER || "postgres",
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE || "postgres",
    });

    this.repos = getRepositories(this.pool);
  }

  async initialize(): Promise<Error | null> {
    try {
      await this.pool.connect();
      return null;
    } catch (error) {
      return error;
    }
  }
}

export const DB = new PGDB();
