const http = require('http');
const app = require('./app');
const db = require('./models');

const server = http.createServer(app);

db.sequelize.sync({
    force: false
}).then(res => {
    console.log(`Database Synced successfully at ${new Date()}...`);
})


const port = 3000;
server.listen(port);  