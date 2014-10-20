var express = require('express')
  , mongoskin = require('mongoskin')
  , bodyParser = require('body-parser')

var app = express()
app.use(bodyParser())

var db = mongoskin.db('mongodb://@localhost:27017/message_board_development', {safe: true})

app.get('/board', function(req, res, next) {
  var lat = req.query.lat
  var lon = req.query.lon
  if (lat && lon) {
    db.collection('board').find({"lat": {$gte:10, $lte:100}, "lon" : {$gte:10, $lte:100}}).toArray(function(e, results) {
      if (e) return next(e)
      res.send(0 < results.length() ? results[0] : {})
    })
  } else {
    res.send({})
  }
})

app.listen(3000)
