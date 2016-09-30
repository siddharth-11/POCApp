import Sequelize = require('sequelize');

interface IDbConfig {
    host?: string;
    database?: string;
    username?: string;
    password?: string;
    port?: number;
    ssl?: boolean;
}

function getDbConfig() {

    var config: IDbConfig = {
        host: process.env.DB_HOST || '127.0.0.1',
        database: process.env.DB_NAME || 'hospitalDB',
        username: process.env.DB_USERNAME || 'postgres',
        password: process.env.DB_PASSWORD || '12345',
        port: process.env.DB_PORT || 5432,
        ssl: process.env.DB_PORT || false
    };

    return config;
}

function createConnection() {

    var config = getDbConfig();

    var sequelize = new Sequelize(config.database, config.username, config.password, <any>{
        host: config.host,
        dialect: 'postgres',
        port: config.port,
        pool: {
            max: 10,
            min: 0,
            idle: 10000
        },
        dialectOptions: {
            ssl: config.ssl
        }
        // SQLite only
        //storage: '../sqllite'
    });

    return sequelize;
}

export = createConnection;