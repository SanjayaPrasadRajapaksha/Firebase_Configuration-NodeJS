// models/AboutUs.js
import { DataTypes } from "sequelize";
import sequelize from "../Configs/db.config.js"; // Adjust the path as necessary

export const AboutUs = sequelize.define(
  "AboutUs",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title2: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imageURL: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "about_us",
  }
);
