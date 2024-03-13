import products from "../data/data.js";
import Product from "../models/products";

export const getIndex = (req,res,next)=>{
    console.log("Product list: ", products)
    res.render("/shop", {
        pageTitle: "shop",
        path:"/",
        products: products,
    })
};

export const getProducts = (req, res, next) => {
    Product.fetchAll()
      .then(([rows, fieldData]) => {
        res.render("shop/product-list", {
          pageTitle: "All Products",
          path: "/products",
          products: rows,
        });
      })
      .catch((err) => {
        if (err) console.log(err);
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