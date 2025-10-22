import express, { Express } from "express";
import dotenv from "dotenv";
import clientRoutes from "./routes/client/index.route";
import moment from "moment";

dotenv.config();

const app: Express = express();
const port: number | string = process.env.PORT || 3000;

app.use(express.static("public"));

// APP LOCALS FOR VARIABLES IN PUG TEMPLATES
app.locals.moment = moment;

// Client Routes
clientRoutes(app);

app.set("views", `./views`);
app.set("view engine", "pug");

app.listen(port, () => {
  console.log(`App is listening on port: ${port}`);
});
