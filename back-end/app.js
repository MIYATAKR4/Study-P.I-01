const express = require('express');
const app = express();

// Configuração das rotas e middlewares 

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});

const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'study_user',
    password: 'study_password',
    database: 'study_database'
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados: ', err);
    return;
  }
  console.log('Conexão com o banco de dados estabelecida');
});

// Exemplo de rota para recuperar todos os usuários
app.get('/usuarios', (req, res) => {
    connection.query('SELECT * FROM usuarios', (err, results) => {
      if (err) {
        console.error('Erro ao executar a consulta: ', err);
        res.status(500).send('Erro ao recuperar os usuários');
        return;
      }
      res.json(results);
    });
  });