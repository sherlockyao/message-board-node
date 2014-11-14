var apiBoards = require('../app/controllers/api/boards')
  , apiMessages = require('../app/controllers/api/messages');
 

module.exports = function (app) {
  app.get('/api/board', apiBoards.lookup);
  app.post('/api/board', apiBoards.create);

  app.post('/api/message', apiMessages.create);
};
