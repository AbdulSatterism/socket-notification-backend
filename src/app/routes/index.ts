import { Router } from 'express';
import { UserRoutes } from '../modules/user/user.route';
import { productRoutes } from '../modules/products/product.route';
import { orderRoutes } from '../modules/order/order.route';
import { notificationRoutes } from '../modules/notification/notification.route';


const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: UserRoutes,
  },
  {
    path: '/',
    route: productRoutes,
  },
  {
    path: '/',
    route: orderRoutes,
  },
  {
    path: '/',
    route: notificationRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
