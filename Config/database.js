const {
    Sequelize
} = require('sequelize');

const config = require('./Config.json')["development"];


// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect
});

const connect = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = connect 
