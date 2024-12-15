import { model, Schema } from "mongoose";
import { INotification } from "./notification.interface";


const notificationSchema = new Schema<INotification>(
  {
    text: {
      type: String,
      required: true,
    },

    receiver: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    read: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export const Notification = model<INotification>(
  'Notification',
  notificationSchema
);
