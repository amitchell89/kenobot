var request = require('request');
var fs = require('fs');
var nodemailer = require('nodemailer');

var url =  'http://www.masslottery.com/data/json/search/dailygames/todays/15.json'
var currentDate = new Date().toISOString().replace(/T|-/g, '_');
var currentDate = currentDate.substring(0, currentDate.indexOf('.'));

// Scraper
request(url, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var results = body;
    var json = JSON.parse(results)
    var count = json.draws.length;
    printFile('results/' + currentDate + '_results.json', results)
    sendAlert(count, json.min, json.max)
  }
})

// Print File
function printFile(location, source) {
  fs.writeFile(location, source);
};


// create reusable transporter object using the default SMTP transport with NodeMailer 0.7
var password = process.env.PASSWORD || null
var user = process.env.USER || null
var service = process.env.SERVICE || null

var transporter = nodemailer.createTransport("SMTP", {
  service: service,
  auth: {
    user: user,
    pass: password
  }
});

// Send Alert Email on Print 
function sendAlert(count, min, max) {

  // setup e-mail data with unicode symbols
  var email_message = 'KeanuBot Scraped Succcessfully:<br />Records Scraped: ' + count + '<br />Min: ' + min + '<br />Max: ' + max + '<br />Date: ' + currentDate;
  var mailOptions = {
    from: '"KeanuBot" <' + user + '>', // sender address
    to: 'aaronmitchellart@gmail.com', // list of receivers
    subject: 'KeanuBot Scraped: ' + count, // Subject line
    text: email_message, // plaintext body
    html: email_message // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info){
    if(error){
    	return console.log(error);
    }
  });
  transporter.close();
};
