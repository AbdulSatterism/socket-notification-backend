
import { sendNotifications } from "../../utils/sendNotification";
import { TOrder } from "./order.interface";
import { Order } from "./order.model";

const createOrder = async (payload: TOrder) => {

    const result = await Order.create(payload)


    const notifyData:any ={
      text:'crate a new order',
      receiver:payload.user
    }

    sendNotifications(notifyData)

    return result;
  
  }

  export const orderServices={
    createOrder
  }