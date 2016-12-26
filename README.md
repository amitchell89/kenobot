# kenobot

![Keno](https://cf.geekdo-images.com/images/pic419804.jpg)

A Node App for scraping and analyzing Massachusetts Keno Data.

## Setup
`npm install`

## How to use
- Run `node print.js` to grab the most up to date keno data.
- Run `node keno.js` to analyze the data.

Results are pulled from [this location](http://www.masslottery.com/data/json/search/dailygames/todays/15.json). Script may need to be updated if this url changes.

## How Keno Works

Winning numbers are drawn approximately every four minutes. Players select from 1 to 12 numbers or “spots” for each game. A computer then randomly chooses 20 winning numbers from 1 to 80 and displays them on a Keno monitor. Prizes are awarded based on the number of matching numbers.

KENO BONUS gives you a chance to increase your KENO winnings by 3, 4, 5 or 10 times. The overall odds of having a multiplier number (3, 4, 5 or 10) are 1:2.3

[More Info](http://www.masslottery.com/games/keno.html)

## Disclaimer

This app does not claim to predict Keno drawings. Its simply a fun tool for analyzing recent drawings to find patterns. Past results do not predict future outcomes.