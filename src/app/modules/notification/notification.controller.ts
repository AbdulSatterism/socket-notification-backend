import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { notificationServices } from "./notification.services";
import sendResponse from '../../utils/sendResponse';



const allNotification = catchAsync(async (req, res) => {
    const result = await notificationServices.allNotification()
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'all notification retreve successfully',
      data: result,
    });
  });
  
  export const notificationController={
    allNotification
  }