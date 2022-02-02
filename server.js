const http = require('http');
const app = require('./app');
const db = require('./Models');

db.sequelize.sync({
    force: false
}).then(res => {
    console.log(`Database Synced successfully at ${new Date()}...`);
})


const server = http.createServer(app);

const port = 3000;
server.listen(port);  