import express from "express";
import path from "path";

const app = express();

app.get(
  "/",
  (req, res) => {
    res.sendFile(path.join(`${__dirname}/index.html`));
  }
);

app.get(
  "/dist/index.js",
  (req, res) => {
    res.sendFile(path.join(`${__dirname}/dist/index.js`));
  }
);

app.listen(
  "7000",
  () => {
    // Start
  }
);

export default app;