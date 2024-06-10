import { Schema, model, models } from "mongoose";

const ProductSchema = new Schema(
  {
    name: { type: "string", required: true },
    description: { type: "string" },
    price: { type: Number, required: true },
    category: { type: "string" },
    stock: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

const Product = models.Product || model("Product", ProductSchema);

export default Product;
