var fs = require('fs');
var _ = require('underscore')

// Get numbers for one file
// var numbers = JSON.parse(fs.readFileSync('keno.json', 'utf8'));
// var draws = numbers.draws


// Get numbers for multiple files
var numbers = []
var directory = 'results/'


fs.readdir(directory, (err, files) => {
  files.forEach(file => {
    var num = JSON.parse(fs.readFileSync(directory + file, 'utf8'));
    for (i = 0; i < num.draws.length; i++) {
      numbers.push({
        id: num.draws[i].draw_id,
        numbers: num.draws[i].winning_num,
        bonus: num.draws[i].bonus,
        date: num.draws[i].draw_date
      })
    }
  });

  var uniqueNumbers = []
  numbers.forEach(function(e) {
    if (uniqueNumbers.findIndex(x => x.id == e.id) == -1) {
      uniqueNumbers.push(e)
    }
  });
  countNumbers(uniqueNumbers);
})

function countNumbers(data) {
  // Begin Counting
  var counts = [];
  for (i = 0; i <= 80; i++) {
    counts[i] = 0;
  }

  var none = 0;
  var three = 0;
  var four = 0;
  var five = 0;

  for (i = 0; i < data.length; i++) {
    var thisDraw = data[i].numbers;
    var res = thisDraw.split("-");

    for (x = 0; x < res.length; x++) {
      var thisNum = res[x];
      thisNum = parseInt(thisNum)
      counts[thisNum]++
    }
    var thisBonus = data[i].bonus

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

  var ratios = []
  for (i = 0; i < counts.length; i++) {
    var ratio = ((counts[i] / data.length) * 100).toFixed(2);
    ratios.push({number: i, ratio: ratio})
  }

  var byRatio = _.sortBy( ratios, 'ratio' );

  var aboveAverage = byRatio.filter(function(i) {
   return i.ratio > 25
  })

  console.log('Numbers Sorted by Percentage\n\n', aboveAverage)
  console.log('\n', aboveAverage.length + ' Numbers drawing above average (25%)')

  var noneRate = ((none / data.length) * 100).toFixed(2) + '%';
  var threeRate = ((three / data.length) * 100).toFixed(2) + '%';
  var fourRate = ((four / data.length) * 100).toFixed(2) + '%';
  var fiveRate = ((five / data.length) * 100).toFixed(2) + '%';

  console.log('\nNo Bonus: ', none, ' Rate: ', noneRate)
  console.log('3x: ', three, ' Rate: ', threeRate)
  console.log('4x: ', four, ' Rate: ', fourRate)
  console.log('5x: ', five, ' Rate: ', fiveRate)
  console.log('\nTotal Draws', data.length)

}
