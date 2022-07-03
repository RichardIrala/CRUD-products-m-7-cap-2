import { Model, DataTypes } from "sequelize";
import { sequelize } from "../db";
export class Product extends Model {}
Product.init(
  {
    title: {
      type: DataTypes.STRING,
      //   allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      //   allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      defaultValue: "No description",
    },
  },
  {
    sequelize,
    modelName: "Product",
  }
);
