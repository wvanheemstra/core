/**
 * Database Connection
 */
 module.exports = function(options) {
    var database = {
        options: options
    };
	var Sequelize = require('sequelize');
    database.module = Sequelize;
    database.client = new Sequelize(options.schema, options.user, options.password, {
        host: options.host,
        port: options.port,
        logging: options.logging,
        dialect: 'mysql',
        maxConcurrentQueries: 100,
        sync: { force: true },
        pool: { maxConnections: 5, maxIdleTime: 30 }
    });
	return database;
};