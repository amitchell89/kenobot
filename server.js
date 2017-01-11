var express = require('express')
var app = express()
var path    = require("path");
var bodyParser = require('body-parser');
var helmet = require('helmet')
var CronJob = require('cron').CronJob;
const spawn = require('child_process').spawn;

// Helmet setup
app.use(helmet())
app.use(express.static('src'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname +'/index.html'));
})

app.listen(3002, function () {
  console.log('Site listening on port 3002!')
})

// server time is in GMT (5 hours ahead of EST) This will scrape at 130 AM EST (830 PM GMT)
new CronJob('00 30 06 * * *', function() {
  console.log('Printing Keno Numbers');
  spawn('node', ['print.js']);
}, null, true, 'UTC');