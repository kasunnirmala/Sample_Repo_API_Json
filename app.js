const express = require('express');
const app = express();
var http = require('http').createServer(app);
const bodyParse = require('body-parser');
const cors = require('cors');


app.use(cors());


app.get('/api/v1/tv/map', function(req,res){
    res.json([
        [
        {
        "flex":1,
        "type":"image",
        "url":"https://placeimg.com/640/480/any"
        }
        ],
     
        [{
        "flex":1,
        "type":"image",
        "url":"https://placeimg.com/640/480/any"
        },
        {
        "flex":1,
        "type":"video",
        "url":"http://www.sample-videos.com/video123/mp4/720/big_buck_bunny_720p_20mb.mp4"
        }
        ]
        
        
        ]);

});

http.listen(2233, () => {
  console.log('listening on *:2233');
});
