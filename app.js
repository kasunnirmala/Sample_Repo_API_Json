const express = require('express');
const app = express();
var http = require('http').createServer(app);
const bodyParse = require('body-parser');
const cors = require('cors');
const moment=require('moment');

app.use(cors());
var net = require('net');

var client = new net.Socket();

app.use(express.json())
app.post('/api/v1/gps/18x/add', function(req,res){
 
 var lat= req.body.lat;
 var lon= req.body.lon;
 var speed= req.body.speed;
const moment=require('moment');
var data = "00000000000000440801" +
(moment().unix().toString(16).padStart(16, '0')) +
"00" +
(Math.round(lon * 1000000).toString(16).padStart(8, '0')) +
"" +
(Math.round(lat * 1000000).toString(16).padStart(8, '0')) +
"002301160a" +
(Math.round(speed).toString(16).padStart(4, '0')) +
"000b040101f0015001150304423712180000430f6a44006803c700000055f10000a15610000284980001000050bc";
console.log(data);
client.connect(4445, '188.166.218.178', function() {
	console.log('Connected');
	client.write(Buffer.from('000F363739373435313232343534393035', 'hex'));
	client.write(Buffer.from(data, 'hex'));
  client.destroy();


});

res.json({"message":data});
// res.json({"message":""});
});

http.listen(2112, () => {
  console.log('listening on *:2112');
});
