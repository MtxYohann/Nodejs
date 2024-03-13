import express from "express";

const router = express.Router();

router.get("/panier", (req, res) => {
  res.render("panier", {});
});

export default router;
