var express = require('express');
var router = express.Router();
var fs = require('fs');
var https = require('https');
var querystring = require('querystring');
/* GET home page. */
router.get('/', function(req, res, next) {


        var responseInfo = "";
        var that = this;
            var params =
              "{'url': 'http://3.bp.blogspot.com/-tnLiO0x7ROU/U0fy7_JO09I/AAAAAAAADu4/8ZmT1PXW_Mw/s1600/emotions-faces.JPG'}";
            console.log(params);
            var post_options = {
                host: 'api.projectoxford.ai',
                method: 'POST',
                path: '/emotion/v1.0/recognize/',
                headers: {
                    'Content-Type': 'application/json',
                    'Ocp-Apim-Subscription-Key': '<SubscriptionKey>'
                }
            };

            var post_req = https.request(post_options, function (response) {

           var responseText;
           console.log(response.statusCode)
           response.on('data', function (rdata) {

               responseText+=rdata;
           });

           response.on('end', function () {
               console.log(responseText)
               res.render('index', { title: 'Express', responseInfo: responseText.slice(9) });

           });

       });

       post_req.write(params);

       post_req.end();
       console.log(post_req);
    });
module.exports = router;
