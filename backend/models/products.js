import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  inStock: {
    type: Boolean,
    required: true,
    max: 50,
  },
  fastDelivery: {
    type: Boolean,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  subCategory: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const ProductModel = mongoose.model("Product", ProductSchema);

export default ProductModel;
