import { Express } from "express";
import { tourRouter } from "./tour.route";
import { categoryRouter } from "./category.route";
import { cartRouter } from "./cart.route";

const clientRoutes = (app: Express): void => {
  app.use("/tours", tourRouter);
  app.use("/categories", categoryRouter);
  app.use("/cart", cartRouter);
};

export default clientRoutes;
