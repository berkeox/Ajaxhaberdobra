require('dotenv').config();

module.exports={
  
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || "golat2052",
    database: process.env.DB_DATABASE ||"haberdobra",
    host:     process.env.DB_HOST ||"127.0.0.1",
    dialect:  process.env.DB_DIALECT ||"mysql",

    // Configration Seeds
    seederStorage:'sequelize',
    seederStorageTableName:'seeds',

    // Configration Migrations
    migrationsStorage: 'sequelize',
    migrationStorageTableName: 'migrations'
}
