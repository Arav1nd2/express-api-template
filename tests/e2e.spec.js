import app from "../src";
import request from "supertest";

describe("E2E testing", function () {
  it("Tests the root endpoint", async () => {
    request(app)
      .get("/api")
      .expect(200)
      .expect("Content-Type", /json/)
      .then((response) => {
        expect(response.body.ok).toBeTruthy();
        expect(response.body.content.message).toBe(
          "You have hit express-api-template end-point! Start modifying index.js 👋🎉"
        );
      });
  });
});
