import { Express } from "express";
import { tourRouter } from "./tour.route";
import { categoryRouter } from "./category.route";

const clientRoutes = (app: Express): void => {
  app.use("/tours", tourRouter);
  app.use("/categories", categoryRouter);
};

export default clientRoutes;
