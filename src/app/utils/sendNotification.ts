/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { INotification } from "../modules/notification/notification.interface";
import { Notification } from "../modules/notification/notification.model";

export const sendNotifications = async (data: INotification) => {
    const result = await Notification.create(data)
  
    //@ts-ignore
    const socketIo = global.io;

    if(data?.type ==='ADMIN'){
        socketIo.emit(`get-notification::${data.type}`, result)
    }else{
        socketIo.emit(`get-notification::${data.receiver}`,result)
    }
  
    // if (data?.type === 'ADMIN') {
    //   socketIo.emit(`get-notification::${data?.type}`, result);
    // } else {
    //   socketIo.emit(`get-notification::${data?.receiver}`, result);
    // }
  
  
    return result;
  };