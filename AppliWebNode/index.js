import Express from "express";
import shopRouter from "./routes/shop.js";
import { get404 } from "./controllers/errors.js";

const app = Express();

app.use(Express.static("public"));

// Configure mon application pour qu'elle utlise ejs comme moteur de templating
// l'outil qui va generer de l'html
app.set("view engine", "ejs");

app.set("views", "views");

app.get("/", (req, res) => {
  res.render("home", {});
});

app.use("/shop", shopRouter);
app.use(get404);

app.use(errorsController.get404);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
