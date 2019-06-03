const env = {
  database: 'testdb',
  username: 'sa',
  password: 'amine',
  host: 'DESKTOP-DQLOU59',
  port: 1433,
  dialect: 'mssql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
 
module.exports = env;
