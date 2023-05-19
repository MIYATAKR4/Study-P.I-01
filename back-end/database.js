const mysql = require('mysql');
const config = require('./config');

const connection = mysql.createConnection(config);

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados: ', err);
    return;
  }
  console.log('Conexão com o banco de dados estabelecida');
});

module.exports = connection;