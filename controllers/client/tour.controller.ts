import { Request, Response } from "express";
import Tour from "../../models/tour.model";
import sequelize from "../../config/database";
import { QueryTypes } from "sequelize";
export const index = async (req: Request, res: Response) => {
  const slugCategory = req.params.slugCategory;
  // const tours = await Tour.findAll({
  //   where: { deleted: false, status: "active" },
  //   raw: true,
  // });

  const tours = await sequelize.query(
    `
    SELECT tours.*, ROUND(price * (1 - discount / 100)) AS price_special
    FROM tours
    JOIN tours_categories ON tours.id = tours_categories.tour_id
    JOIN categories ON tours_categories.category_id = categories.id
    WHERE 
      categories.slug = '${slugCategory}'
      AND tours.deleted = false
      AND tours.status = 'active'
      AND categories.deleted = false
      AND categories.status = 'active'
    `,
    {
      type: QueryTypes.SELECT,
    }
  );

  tours.forEach((tour: any) => {
    tour.price_special = parseFloat(tour.price_special);
    tour.images = JSON.parse(tour.images);
    tour.image = tour.images[0];
  });

  // console.log(tours);

  res.render("client/pages/tours/index", {
    pageTitle: "Danh sách tour",
    tours: tours,
  });
};

export const detail = async (req: Request, res: Response) => {
  const slugTour = req.params.slugTour;

  const tour = await Tour.findOne({
    where: { slug: slugTour, deleted: false, status: "active" },
    raw: true,
  });

  if (tour["images"]) {
    tour["images"] = JSON.parse(tour["images"]);
  }
  tour["price_special"] = tour["price"] * (1 - tour["discount"] / 100);
  console.log(tour);
  res.render("client/pages/tours/detail.pug", {
    pageTitle: "Chi tiết tour",
    tour: tour,
  });
};
