var request = require('request');
var fs = require('fs');

var url =  'http://www.masslottery.com/data/json/search/dailygames/todays/15.json'

request(url, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var results = body;
    console.log(results.length)
    printFile('keno.json', results)
  }
})

// Print File
function printFile(location, source) {
  fs.writeFile(location, source);
}