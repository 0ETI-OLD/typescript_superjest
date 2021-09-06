import mongoose from "mongoose";
import supertest from "supertest";
import { app } from "../app";

// CALLBACK TEST
// beforeEach((done) => {
//   console.log("SETTING UP DB");
//   mongoose.connect("mongodb://localhost:27017/test", {}, () => done());
// });

// afterEach((done) => {
//   console.log("REMOVING DB");
//   mongoose.connection.db.dropDatabase(() => {
//     mongoose.connection.close(() => done());
//   });
// });

// ASYNC AWAIT TEST
beforeEach(async () => {
  console.log("SETTING UP DB");
  await mongoose.connect("mongodb://localhost:27017/test", {});
});

afterEach(async () => {
  console.log("REMOVING DB");
  await mongoose.connection.db.dropDatabase();
  await mongoose.connection.close();
});

// PROMISES TEST
// beforeEach(() => {
//   console.log("CREATE DB");
//   return mongoose.connect("mongodb://localhost:27017/test", {});
// });

// afterEach(() => {
//   console.log("REMOVING DB");
//   return mongoose.connection.db.dropDatabase(() => mongoose.connection.close());
// });

it("test", () => {
  expect(1).toBe(1);
});

it("Responds w. 200", function (done) {
  supertest(app).get("/").expect(200, done);
});

describe;
