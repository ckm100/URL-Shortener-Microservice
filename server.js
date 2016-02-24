var http = require("http"),
    express = require("express"),
    path = require("path"),
    app = express(),
    short = [],
    org,
    ran;

short[12] = "freecodecamp.com/ckm100";

app.set('port', (process.env.PORT || 9000))

app.use(express.static(path.join(__dirname, "public")));

app.get(/\w\.\w/, function (req, res) {

    ran = Math.floor(Math.random() * 1000);

    if (/(http:\/\/|https:\/\/)/.test(req.path.substring(1))) {

        org = req.path.substring(1).replace(/(http:\/\/|https:\/\/)/, "");

    }

    short[ran] = org;

    res.json({
        "original_url": "http://" + org,
        "short_url": "https://" + req.hostname + "/" + ran
    });

    res.end();

});

app.get(/[a-zA-Z]/, function (req, res) {

    res.json({
        "error": "No short url found for given input"
    });

    res.end();

});

app.get("/:a", function (req, res) {

    if (short[req.params.a] === undefined) {

        res.redirect("/")

    } else {

        res.redirect("http://" + short[req.params.a]);
    }

});

app.listen(app.get('port'), function () {

    console.log("Listening on port ", app.get('port'));

});
