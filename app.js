import express from "express";
import database from "./src/infra/db.js";
import tips from "./src/controller/Tips.js";

const app = express();

app.use(express.json());
tips(app, database);

const port = 4000;

app.listen(port, () => {
  console.log(`Server running: http://localhost:${port}`);
});
