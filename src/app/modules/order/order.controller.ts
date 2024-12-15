import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { orderServices } from "./order.services";


const createOrder = catchAsync(async (req, res) => {
    const result = await orderServices.createOrder(req.body)
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'order confirmed',
      data: result,
    });
  });
  
  export const orderController={
    createOrder
  }