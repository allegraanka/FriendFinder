var friendData = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friendData);
    });

    app.post("/api/friends", function(req, res) {
        console.log("post request is running");
        console.log(req.body);
        friendData.push(req.body);
        res.json(true);

        const reducer = (accumulator, currentValue) => accumulator + currentValue;

        console.dir(`This is the array: ${req.body.scores}`);
        console.dir(`This is the total score: ${req.body.scores.reduce(reducer)}`);
        // i was trying to reduce the scores array off the response object to get a total score
        // with the total score, i would loop through the friend array to find a match or a close match to the current total score
        // but i didn't make it
    });
}