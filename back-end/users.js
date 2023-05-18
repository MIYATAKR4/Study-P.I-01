const connection = require('../back-end/database.js');
// Substitua o caminho acima pelo local correto do seu arquivo de conexão com o banco de dados

connection.query(`
  CREATE TABLE IF NOT EXISTS usuarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
  );
`, (err, results) => {
  if (err) {
    console.error('Erro ao criar a tabela usuarios: ', err);
    return;
  }
  console.log('Tabela usuarios criada ou já existente');
});

connection.query(`
  ALTER TABLE usuarios
  ADD COLUMN email VARCHAR(255) NOT NULL;
`, (err, results) => {
  if (err) {
    console.error('Erro ao adicionar a coluna email à tabela usuarios: ', err);
    return;
  }
  console.log('Coluna email adicionada à tabela usuarios ou já existente');
});
