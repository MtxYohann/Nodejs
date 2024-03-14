import express from "express";
import {getIndex,getProducts} from "../controllers/panier.js";


const router = express.Router();

router.get("/",getIndex);
router.get("/", getProducts);
router.get("/products", getProducts)

export default router;
