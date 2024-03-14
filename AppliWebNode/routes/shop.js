import express from "express";
import {getIndex, getProduct, getProducts} from "../controllers/shop.js";

const router = express.Router();

router.get("/", getProducts);

router.get("/products", getProducts)
router.get("/", getIndex);
router.get("/product/:productId", getProduct)


export default router;
