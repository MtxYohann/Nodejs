import {products} from "../data/data.js";
import  {Product} from "../models/products.js";

export const getIndex = (req,res,next)=>{
    console.log("Product list: ", products)
    res.render("/shop", {
        pageTitle: "shop",
        path:"/",
        products: products,
    });
};

export const getProducts = (req, res, next) => {
  res.render("shop", {
    pageTitle: "All Products",
    path: "/products",
    products: products,
  });
};

export const getProduct = (req, res, next) => {
    const productId = req.params.productId;
    Product.fetch(productId)
      .then(([rows]) => {
        const product = rows[0];
        res.render("shop/product-details", {
          pageTitle: product.title,
          path: "/products",
          product: product,
        });
      })
      .catch((err) => {
        if (err) console.log(err);
      });
};