import {productModel} from "../models/productModal.js";

export const getAllProducts = async (req, res)=>{
    const products = await productModel.find({});
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
        return res.status(500).json({
            success: false,
            message: "Product Not found",
        })
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
        return res.status(500).json({
        success: false,
        message: "Product Not found",
    })
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
        return res.status(500).json({
            success: false,
            message: "Product Not found",
        })
    }
    return res.status(200).json({
        success: true,
        product
    })
}
