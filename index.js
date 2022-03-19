import customEnv from "custom-env";
import app from "./src";

// Load env variables based on current env
customEnv.env(process.env.NODE_ENV, "./config/");

const port = process.env.PORT || 1000;

app.listen(port, () =>
  // eslint-disable-next-line no-console
  console.log(`Express API started at http://localhost:${port}/api`)
);
