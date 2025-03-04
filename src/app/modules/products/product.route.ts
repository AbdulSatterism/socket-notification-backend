import express from 'express';
import { productController } from './product.controller';

const router = express.Router();

router.post(
  '/create-product',
  productController.createProduct
);

router.get(
  '/products',
  productController.getAllProducts
);



export const productRoutes = router;
