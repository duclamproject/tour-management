import { Request, Response } from "express";
import Tour from "../../models/tour.model";
export const index = (req: Request, res: Response) => {
  res.render("client/pages/carts/index", {
    pageTitle: "Giỏ hàng",
  });
};

export const listJson = async (req: Request, res: Response) => {
  const tours = req.body;

  for (const tour of tours) {
    const inforTour = await Tour.findOne({
      where: {
        id: tour.tourId,
        deleted: false,
        status: "active",
      },
      raw: true,
    });

    tour["infor"] = inforTour;

    tour["image"] = inforTour["images"]
      ? JSON.parse(inforTour["images"])[0]
      : null;

    tour["price_special"] =
      inforTour["price"] * (1 - inforTour["discount"] / 100);

    tour["total"] = tour["quantity"] * tour["price_special"];
  }
  res.json({
    tours: tours,
  });
};
