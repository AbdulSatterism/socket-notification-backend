import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { productServices } from "./product.services";

const createProduct = catchAsync(async (req, res) => {
    const result = await productServices.createProduct(req.body)
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'product created successfully',
      data: result,
    });
  });

const getAllProducts = catchAsync(async (req, res) => {
    const result = await productServices.getAllProducts()
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'product retrive successfully',
      data: result,
    });
  });
  
  export const productController={
    createProduct,
    getAllProducts
  }