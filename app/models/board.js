var mongoose = require('mongoose')

var BoardSchema = mongoose.Schema({
  id: String,
  title: String,
  lat: Number,
  lon: Number,
  messageCount: Number
})

BoardSchema.methods = {
}

BoardSchema.statics = {
  lookup : function(lat, lon, callback) {
    query = {
      lat: { $gt: (lat - 0.5), $lt: (lat + 0.5) },
      lon: { $gt: (lon - 0.5), $lt: (lon + 0.5) }
    }
    this.findOne(query).exec(callback)
  }  
}

mongoose.model('Board', BoardSchema)
