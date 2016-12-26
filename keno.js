var request = require('request');
var fs = require('fs');

var numbers = JSON.parse(fs.readFileSync('keno.json', 'utf8'));
var draws = numbers.draws
var length = draws.length;

var counts = [];
for (i = 0; i <= 80; i++) {
  counts[i] = 0;
}

var none = 0;
var three = 0;
var four = 0;
var five = 0;

for (i = 0; i < length; i++) {
  var thisDraw = draws[i].winning_num
  var res = thisDraw.split("-");

  for (x = 0; x < res.length; x++) {
    var thisNum = res[x];
    thisNum = parseInt(thisNum)
    // console.log(thisNum)
    counts[thisNum]++
  }
  var thisBonus = draws[i].bonus

  switch(thisBonus) {
    case 'No Bonus':
      none++;
      break;
    case '3x':
      three++;
      break;
    case '4x':
      four++;
      break;
    case '5x':
      five++;
      break;
  }
}

for (i = 0; i < counts.length; i++) {
  var ratio = ((counts[i] / length) * 100).toFixed(2) + '%';
  console.log('Number: ', i, 'ratio: ', ratio)
}

var noneRate = ((none / length) * 100).toFixed(2) + '%';
var threeRate = ((three / length) * 100).toFixed(2) + '%';
var fourRate = ((four / length) * 100).toFixed(2) + '%';
var fiveRate = ((five / length) * 100).toFixed(2) + '%';

console.log('\nNo Bonus: ', none, ' Rate: ', noneRate)
console.log('3x: ', three, ' Rate: ', threeRate)
console.log('4x: ', four, ' Rate: ', fourRate)
console.log('5x: ', five, ' Rate: ', fiveRate)
console.log('\nTotal Draws', length)
