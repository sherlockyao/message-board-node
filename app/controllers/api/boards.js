var mongoose = require('mongoose')
  , Board = mongoose.model('Board')
  , Message = mongoose.model('Message');

exports.lookup = function(req, res) {
  var lat = req.query.lat;
  var lon = req.query.lon;
  Board.lookup(lat, lon, function(err, board) {
    if (err || !board) {
      res.status(400).send('Not found');
    } else {
      Message.messagesOfBoard(board.id, function(err, messages) {
        var result = {
          board: board,
          messages: err ? [] : messages
        };
        res.send(result);
      });
    }
  });
};  

exports.create = function(req, res) {
  var board = new Board(req.body);
  board.save(function(err) {
    if (err) {
      res.status(500).send('Database error');
    } else {
      var result = {
        succuss: true
      };
      res.send(result);
    }
  });
}; 
