var express = require('express');
var router = express.Router();
var request = require("request");

/* GET home page. */
router.post('/', function (req, res, next) {

    let docId = req.body.docId;

    var options = {
        method: 'DELETE',
        url: 'http://0.0.0.0:8090/restaurant/' + docId
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
