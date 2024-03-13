import express from "express";
import shopController from "../controllers/shop"

const router = express.Router();

router.get("/", (req, res) => {
  res.render("shop", {});
});

router.get("/products", shopController.getProducts)
router.get("/", shopController.getIndex);


export default router;
