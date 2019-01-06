const express = require("express");
const router = express.Router();
const friends = require("../data/friends");



router.get("/", function (req, res) {
    res.json(friends);
});

router.post("/", (req, res) => {
    const newFriend = req.body;
    res.send(findMatch(newFriend, friends));
    friends.push(newFriend);
});

function calcScore(arr1, arr2) {
    const tempArr = [];

    for (let i = 0; i < arr1.length; i++) {

        if (parseInt(arr1[i]) !== parseInt(arr2[i])) {

            tempArr.push(Math.abs(parseInt(arr1[i]) - parseInt(arr2[i])));

        }
    }

    return (sum = tempArr.reduce((a, b) => a + b, 0));
}

function findMatch(friendObj, friendArr) {

    const friendScore = friendObj.scores;
    let bestScore;
    let initMatch = 0;

    for (let i = 0; i < friendArr.length; i++) {

        const matchScore = friendArr[i].scores;

        const currentMatchScore = calcScore(friendScore, matchScore);

        if ((bestScore = "")) bestScore = currentMatchScore;

        if (currentMatchScore <= bestScore) {

            bestScore = currentMatchScore;
            initMatch = i;
        }
    }
    return friendArr[initMatch];
};



module.exports = router;