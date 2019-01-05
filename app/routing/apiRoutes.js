const express = require("express");
const router = express.Router();
const friends = require("../data/friends");


router.get("/friends", function (req, res) {
    res.json(data);
});