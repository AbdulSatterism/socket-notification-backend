import { model, Schema } from "mongoose";
import { TOrder } from "./order.interface";

const OrderSchema= new Schema<TOrder>({
    name: { type: String, required: true },
    phone: { type: String, required: false },
    email: { type: String, required: true },
    isDeleted: { type: Boolean, default:false},
    user:{
        type:Schema.Types.ObjectId,
        ref:"User"
      }
});

export const Order =model<TOrder>('Order', OrderSchema);