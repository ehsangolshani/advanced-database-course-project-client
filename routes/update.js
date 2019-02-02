var express = require('express');
var router = express.Router();
var request = require("request");

/* GET home page. */
router.post('/', function (req, res, next) {


    let docId = req.body.docId;
    let name = req.body.name;
    let city = req.body.city;
    let country = req.body.country;
    let rate = parseFloat(req.body.rate);
    let cuisine = req.body.cuisine;
    let phone = req.body.phone;
    let address = req.body.address;
    let averageCost = parseInt(req.body.averageCost);
    let cashPayment = Boolean(req.body.cashPayment);
    let cardPayment = Boolean(req.body.cardPayment);
    let takeoutAvailable = Boolean(req.body.takeoutAvailable);
    let outdoorSeating = Boolean(req.body.outdoorSeating);
    let hookah = Boolean(req.body.hookah);
    let smokingArea = Boolean(req.body.smokingArea);
    let wifiAvailable = Boolean(req.body.wifiAvailable);

    var options = {
        method: 'PUT',
        url: 'http://0.0.0.0:8090/restaurant',
        headers: {'content-type': 'application/json'},
        body:
            {
                document_id: docId,
                name: name,
                city: city,
                country: country,
                average_cost: averageCost,
                phone_number: phone,
                cash_payment: cashPayment,
                card_payment: cardPayment,
                address: address,
                rate: rate,
                takeout_available: takeoutAvailable,
                outdoor_seating: outdoorSeating,
                hookah: hookah,
                smoking_area: smokingArea,
                wifi_available: wifiAvailable,
                cuisine: cuisine,
            },
        json: true
    };


    for (let propName in options.body) {
        if (options.body[propName] == null ||
            options.body[propName] == undefined ||
            options.body[propName] === NaN ||
            options.body[propName] == null ||
            options.body[propName] == undefined ||
            options.body[propName] == NaN ||
            options.body[propName] == "" ||
            options.body[propName] === "" ||
            options.body[propName] == 0 ||
            options.body[propName] === 0 ||
            Number.isNaN(options.body[propName])) {

            delete options.body[propName];
        }
    }

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        console.log(body);
        res.render('index', {msg: body});
    });

});

module.exports = router;
