import { clear } from "console";
import supertest from "supertest";
import {
  ConnectionOptions,
  createConnection,
  getConnection,
  getRepository,
} from "typeorm";
import { app } from "../app";
import { User } from "../services/users/entities/User";

const CONNECTION_OPTIONS: ConnectionOptions = {
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "test",
  synchronize: true,
  logging: false,
  entities: ["src/**/entities/**/*.ts"],
};

const connection = {
  async create() {
    return await createConnection(CONNECTION_OPTIONS);
  },

  async close() {
    return await getConnection().close();
  },

  async clear() {
    const connection = getConnection();
    const entities = connection.entityMetadatas;

    entities.forEach(async (entity) => {
      const repository = connection.getRepository(entity.name);
      await repository.query(`DELETE FROM ${entity.tableName}`);
    });
  },
};

beforeEach(async () => {
  await connection.create();
});

afterEach(async () => {
  await connection.clear();
  await connection.close();
});

describe("user", () => {
  it("create user", async () => {
    const data = {
      name: "reimu hakurei",
    };

    const res = await supertest(app).post("/users").send(data).expect(200);

    expect(res.body).toMatchObject(data);
  });
});
