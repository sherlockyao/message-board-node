var apiBoards = require('../app/controllers/api/boards');

module.exports = function (app) {
  app.get('/api/board', apiBoards.lookup);
  app.post('/api/board', apiBoards.create);
};
