const request = require("supertest");
const app = require("./app");

describe("GET /", () => {
  it("deveria retornar 'Hello World!'", async () => {
    const res = await request(app)
      .get("/")
      .expect("Content-Type", "text/html; charset=utf-8")
      .expect(200);

    expect(res.text).toBe("Hello World!");
  });
});
