import express from "express";

const app = express();
app.get("/api", function (_, res) {
  return res.json({
    ok: true,
    content: {
      message:
        "You have hit express-api-template end-point! Start modifying index.js 👋🎉",
    },
  });
});

export default app;
