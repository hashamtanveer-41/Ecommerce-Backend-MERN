import {productModel} from "../models/productModal.js";
import ErrorHandler from "../utils/errorHandler.js";
import asyncError from "../middlewares/catchAsyncError.js";
import ApiFeatures from "../utils/apiFeatures.js";

export const getAllProducts = asyncError(async (req, res, next)=>{

    const apiFeatures = new ApiFeatures(productModel.find(), req.query)
        .search()
        .filter();

    const products = await apiFeatures.query;
    if (!products){
        return next(new ErrorHandler("Product Not found", 404))
    }
    res.status(200).json({
        success:true,
        products
})
})
export const createProduct = asyncError(async (req, res, next)=>{
    const product = await productModel.create(req.body);
    res.status(201).json({
        success:true,
        product
    })
})

export const updateProduct =asyncError(async (req, res, next)=>{
    const id = req.params.id;
    let product = await productModel.findById(id)
    if (!product){
        return next(new ErrorHandler("Product Not found", 404))
    }
    product = await productModel.findByIdAndUpdate(id, req.body,
        {
            new: true,
            useFindAndModify: false,
            runValidators: true
        })
    return res.status(200).json({
        success: true,
        product
    })
})

export const deleteProduct =asyncError(async (req, res, next) =>{
    const product = await productModel.findById(req.params.id)
    if (!product){
        return next(new ErrorHandler("Product Not found", 404))
    }
    await productModel.findByIdAndDelete(req.params.id)
    return res.status(200).json({
        success: true,
        message: "Product Deleted Successfully"
    })
})

export const productDetails = asyncError(async (req, res, next) =>{
    const product = await productModel.findById(req.params.id)
    if (!product){
        return next(new ErrorHandler("Product Not found", 404))
    }
    return res.status(200).json({
        success: true,
        product
    })
})
