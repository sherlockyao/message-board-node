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
  
}
