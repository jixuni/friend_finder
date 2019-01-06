const express = require("express");
const app = express();
const path = require("path");
const htmlRoutes = require("./app/routing/htmlRoutes");
const apiRoutes = require("./app/routing/apiRoutes");
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use("/", htmlRoutes);
app.use("/api/friends", apiRoutes);

app.listen(PORT, () => {
    console.log("App listening on port " + PORT);
})