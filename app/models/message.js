var mongoose = require('mongoose');

var MessageSchema = mongoose.Schema({
  boardId: String,
  orderNumber: Number,
  poster: String,
  content: String
});

MessageSchema.statics = {
  messagesOfBoard: function(boardId, callback) {
    var query = { boardId: boardId };
    this.find(query).exec(callback);
  }
};

mongoose.model('Message', MessageSchema);
