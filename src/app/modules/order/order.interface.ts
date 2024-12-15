import { Types } from "mongoose";

export type TOrder = {
    name: string;
    phone?: string;
    email: string;
    isDeleted?: boolean;
    user?:Types.ObjectId
}