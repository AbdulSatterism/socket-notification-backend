import express from "express";
import { notificationController } from "./notification.controller";


const router = express.Router();

router.get("/notifications", notificationController.allNotification);

export const notificationRoutes = router;