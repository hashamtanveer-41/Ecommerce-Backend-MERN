import express from "express";
import {
    createProduct,
    deleteProduct,
    getAllProducts,
    productDetails,
    updateProduct
} from "../controllers/productController.js";

const router = express.Router();

router.route("/products").get(getAllProducts);
router.route("/products/new").post(createProduct);
router.route("/product/:id")
    .put(updateProduct)
    .delete(deleteProduct)
    .get(productDetails)
export default router;