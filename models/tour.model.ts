import { DataTypes, INTEGER } from "sequelize";
import sequelize from "../config/database";
import { title } from "process";

const Tour = sequelize.define(
  "Tour",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    code: {
      type: DataTypes.STRING(10),
    },
    images: {
      type: DataTypes.TEXT("long"),
    },
    price: {
      type: DataTypes.INTEGER,
    },
    discount: {
      type: DataTypes.INTEGER,
    },
    information: {
      type: DataTypes.TEXT("long"),
    },
    schedule: {
      type: DataTypes.TEXT("long"),
    },
    timeStart: {
      type: DataTypes.DATE,
    },
    stock: {
      type: DataTypes.INTEGER,
    },
    status: {
      type: DataTypes.STRING(20),
    },
  },
  {
    tableName: "tours",
    timestamps: true,
  }
);

export default Tour;
