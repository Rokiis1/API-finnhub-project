import supertest from "supertest";
import createServer from "../config/createServer";
const app = createServer();

describe("logs", () => {
  describe("get logs route", () => {
    describe("given the the logs does not exist", () => {
      it("should return 404", async () => {
        await supertest(app).get("/allLogs").expect(404);
      });
    });
    describe("create logs route", () => {
      describe("not created log", () => {
        it("should create log", async () => {
          const { statusCode } = await supertest(app).post("/newLog");
          expect(statusCode).toBe(404);
        });
      });
    });
  });
});
