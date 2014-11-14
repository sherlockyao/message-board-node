var mongoose = require('mongoose');

var MessageSchema = mongoose.Schema({
  boardId: String,
  orderNumber: Number,
  poster: String,
  content: String,
  timestamp: Number
});

MessageSchema.methods = {
};

MessageSchema.statics = {
  messagesOfBoard: function(boardId, callback) {
    var query = { boardId: boardId };
    this.find(query).exec(callback);
  },

  lookup: function(boardId, orderNumber, callback) {
    var query = { boardId: boardId, orderNumber: orderNumber };
    this.findOne(query).exec(callback);
  }
};

mongoose.model('Message', MessageSchema);
