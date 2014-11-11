var mongoose = require('mongoose');

var BoardSchema = mongoose.Schema({
  id: String,
  title: String,
  latMin: Number,
  latMax: Number,
  lonMin: Number,
  lonMax: Number,
  messageCount: Number
});

BoardSchema.methods = {
};

BoardSchema.statics = {
  lookup : function(lat, lon, callback) {
    var query = {
      latMin: { $lt: lat },
      latMax: { $gt: lat },
      lonMin: { $lt: lon },
      lonMax: { $gt: lon }
    };
    this.findOne(query).exec(callback);
  }
};

mongoose.model('Board', BoardSchema);
