import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import sequelize from "./config/database";

dotenv.config();

const app: Express = express();
const port: number | string = process.env.PORT || 3000;

app.set("views", `./views`);
app.set("view engine", "pug");

sequelize;

app.get("/tours", (req: Request, res: Response) => {
  res.render("client/pages/tours/index");
});

app.listen(port, () => {
  console.log(`App is listening on port: ${port}`);
});
