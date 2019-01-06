const express = require("express");
const router = express.Router();
const friends = require("../data/friends");
const match = require("../../logic");


router.get("/", function (req, res) {
    res.json(friends);
});

router.post("/", (req, res) => {
    const newFriend = req.body;
    res.send(match(newFriend, friends));
    friends.push(newFriend);
  });
  
module.exports = router;