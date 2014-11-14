var mongoose = require('mongoose')
  , Message = mongoose.model('Message');

// 3 days
var MessageExpireTime = 1000 * 60 * 60 * 24 * 3;

exports.create = function(req, res) {
  var message = new Message(req.body);
  var timeInMs = Date.now();
  Message.lookup(message.boardId, message.orderNumber, function(err, oldMessage) {
    if (err) {
      res.status(500).send('Database error');
    } else if (oldMessage) {
      if (oldMessage.timestamp + MessageExpireTime < timeInMs) {
        oldMessage.timestamp = timeInMs;
        oldMessage.content = message.content;
        oldMessage.poster = messsage.poster;
        oldMessage.save(function(err) {
          if (err) {
            res.status(500).send('Database error'); 
          } else {
            res.send({ succuss: true }); 
          }
        });
      } else {
        res.status(403).send('Forbidden');
      }
    } else {
      message.timestamp = timeInMs;
      message.save(function(err) {
        if (err) {
          res.status(500).send('Database error'); 
        } else {
          res.send({ succuss: true }); 
        }
      });
    }
  });
};
