import { products } from "../data/data.js";

export const getIndex = (req,res,next) => {
    console.log("Product list: ", products)
    res.render("panier",{
        pageTitle: "Panier",
        path: "/",
        products: products,
    })
};

export const getProducts = (req, res, next) => {
    res.render("panier", {
      pageTitle: "All Products",
      path: "/products",
      products: products,
    });
  };