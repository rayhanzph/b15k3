const Express = require("express");
const app = Express();
const bodyParser = require("body-parser");
const path = require("path");
const PORT = process.env.PORT || 3600;

app.use(Express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));

const shopRoutes = require("./routes/shop_route");

app.use("/", shopRoutes);

app.listen(PORT, () => {
  console.log("Listen to http://localhost:" + PORT);
});
