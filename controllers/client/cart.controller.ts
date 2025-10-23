import { Request, Response } from "express";

export const index = (req: Request, res: Response) => {
  res.render("client/pages/carts/index", {
    pageTitle: "Giỏ hàng của bạn",
  });
};
