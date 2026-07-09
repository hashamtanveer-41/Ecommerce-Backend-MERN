import {productModel} from "../models/productModal.js";
import ErrorHandler from "../utils/errorHandler.js";

export const getAllProducts = async (req, res, next)=>{
    const products = await productModel.find({});

    if (!products){
        return next(new ErrorHandler("Product Not found", 404))
    }
    res.status(200).json({
        success:true,
        products
})
}
export const createProduct = async (req, res, next)=>{
    const product = await productModel.create(req.body);
    res.status(201).json({
        success:true,
        product
    })
}

export const updateProduct =async (req, res, next)=>{
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
}

export const deleteProduct =async (req, res, next) =>{
    const product = await productModel.findById(req.params.id)
    if (!product){
        return next(new ErrorHandler("Product Not found", 404))
    }
    await productModel.findByIdAndDelete(req.params.id)
    return res.status(200).json({
        success: true,
        message: "Product Deleted Successfully"
    })
}

export const productDetails = async (req, res, next) =>{
    const product = await productModel.findById(req.params.id)
    if (!product){
            return next(new ErrorHandler("Product Not found", 404))
    }
    return res.status(200).json({
        success: true,
        product
    })
}
