import {  Types } from 'mongoose';

export type INotification = {
  text: string;
  receiver?: Types.ObjectId;
  read: boolean;
  type?: string;
};

