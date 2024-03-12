import Express from "express";
import ejs from "ejs";
const app = Express();

app.get('/', (req,res) => {
    res.send("Hello World");
});

app.listen(3000, () => {
    console.log("Serveur is running on port 3000");
});

app.post("/post", (req,res) => {
    // verify the request body
    if (!req.body) {
        return res.status(400).send("Resquest body is missing")
    }
    res.send("Hello World");
});

let template = ejs.compile(str, options);
template(data);
// => Rendered HTML string

ejs.render(str, data, options);
// => Rendered HTML string

ejs.renderFile(filename, data, options, function(err, str){
    // str => Rendered HTML string
});