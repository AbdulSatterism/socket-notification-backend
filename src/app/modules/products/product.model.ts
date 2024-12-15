import { model, Schema } from "mongoose";
import { TProduct } from "./product.interface";

const productSchema = new Schema<TProduct>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    currency: { type: String, required: true },
    imageUrl: { type: String, required: true },
    stock: { type: Number, required: true },
    categories: { type: String, required: true },
  }, {
    timestamps: true
  });
  
  export const Product = model<TProduct>('Product', productSchema);