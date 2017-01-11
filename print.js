var request = require('request');
var fs = require('fs');

var url =  'http://www.masslottery.com/data/json/search/dailygames/todays/15.json'


var currentDate = new Date().toISOString().replace(/T|-/g, '_');
var currentDate = currentDate.substring(0, currentDate.indexOf('.'));


request(url, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var results = body;
    console.log(results.length)
    printFile('results/' + currentDate + '_results.json', results)
  }
})

// Print File
function printFile(location, source) {
  fs.writeFile(location, source);
}