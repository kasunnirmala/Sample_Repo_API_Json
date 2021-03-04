// var gpsLat=647.9504;
// var gpsLon = 7955.3763;

// function gpsToDec(gps){
// var DD = parseInt(parseFloat(gps)/100);
// var SS = parseFloat(gps) - (DD * 100);

// var LatDec = DD + SS/60;
// return LatDec;
// }


// console.log(gpsToDec(gpsLat) + "," + gpsToDec(gpsLon));
// // console.log();
const moment=require('moment');
var data = "00000000000000440801" +
(moment().unix().toString(16).padStart(16, '0')) +
"00" +
(Math.round(79.3454545 * 1000000).toString(16).padStart(8, '0')) +
"" +
(Math.round(6.4657 * 1000000).toString(16).padStart(8, '0')) +
"002301160a" +
(Math.round(34.7).toString(16).padStart(4, '0')) +
"000b040101f0015001150304423712180000430f6a44006803c700000055f10000a15610000284980001000050bc";
console.log(data);