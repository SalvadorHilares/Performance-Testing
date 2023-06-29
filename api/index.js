const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const insertionDatabase = require('./src/script.js');

let insertionExecuted = false;

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(8000, () => {
    if (!insertionExecuted) {
      insertionDatabase();
      insertionExecuted = true;
    }
    console.log('%s listening at 8000'); // eslint-disable-line no-console
  });
});
