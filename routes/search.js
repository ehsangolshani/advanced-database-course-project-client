var express = require('express');
var router = express.Router();
var request = require("request");

/* GET home page. */
router.post('/', function (req, res, next) {

    let name = req.body.name;
    let city = req.body.city;
    let country = req.body.country;
    let rate = parseFloat(req.body.rate);
    let address = req.body.address;
    let averageCost = parseInt(req.body.averageCost);


    var options = {
        method: 'GET',
        url: 'http://0.0.0.0:8090/restaurant/search',
        qs:
            {
                name: name,
                city: city,
                country: country,
                average_cost: averageCost,
                address: address,
                rate: rate,
            }
    };


    for (let propName in options.body) {
        if (options.qs[propName] == null ||
            options.qs[propName] == undefined ||
            options.qs[propName] === NaN ||
            options.qs[propName] == null ||
            options.qs[propName] == undefined ||
            options.qs[propName] == NaN ||
            options.qs[propName] == "" ||
            options.qs[propName] === "" ||
            options.qs[propName] == 0 ||
            options.qs[propName] === 0 ||
            Number.isNaN(options.qs[propName])) {

            delete options.qs[propName];
        }
    }

    request(options, function (error, response, body) {
        if (error) throw new Error(error);


        console.log(body);
        res.render('index', {msg: body});
    });
});

module.exports = router;
