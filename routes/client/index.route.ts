import { Express } from "express";
import { tourRouter } from "./tour.route";

const clientRoutes = (app: Express): void => {
  app.use("/tours", tourRouter);
};

export default clientRoutes;
