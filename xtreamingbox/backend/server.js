//Iniciando Express
import express from 'express'
const app = express()
const port = 5000


//Iniciando Banco
import sqlite3 from 'sqlite3'
//Chamando arquivo do banco
import {ConnectDBFile} from './dataBase/createDataBase.js'
//Criando arquivo do banco, tabelas e insets
ConnectDBFile ();
//Conectando ao Banco
const dataBaseFile = './dataBase/xtreamingbox.db'
const db = new sqlite3.Database(dataBaseFile, sqlite3.OPEN_READWRITE,(err)=>{
  if (err) {
    return console.error(err.message);
    }
  }
);



//Conectando API e entregando o endereço
function apiConectada(){
app.listen(port, () => {
  console.log(`API RODANDO no endereço http://localhost:${port}`)
})
}


//Servidor ouvindo API em 4 segundos
const delay3 = 4000; // Tempo de atraso em milissegundos (4 segundos)
setTimeout(apiConectada, delay3);


// Middleware para o uso do JSON
app.use(express.json());











/*CRUD DE USUÁRIOS------------------------------------------------------------------------------------------------*/


//Rota API GET para obter todos os usuários
app.get('/users', (req, res) => {
  db.all('SELECT * FROM usuarios', (err, rows) =>{
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro ao obter usuários do banco de dados' });
    } else {
      res.json(rows);
    }
  });
});


//Rota API GET para obter um usuário por ID
app.get('/users/:id', (req, res) => {
  const { idusuario } = req.body;
  db.get('SELECT * FROM usuarios WHERE idusuario = ?', [idusuario], (err, row) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro ao obter usuário do banco de dados' });
    } else if (row) {
      res.json(row);
    } else {
      res.status(404).json({ error: 'Usuário não encontrado' });
    }
  });
});


// Rota POST para criar um novo usuário
app.post('/users', (req, res) => {
  const { nome_completo, email, senha } = req.body;
  db.run('INSERT INTO usuarios (nome_completo, email, senha) VALUES (?, ?, ?)', [nome_completo, email, senha], function (err) {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro ao criar usuário no banco de dados' });
    } else {
      res.json({ id: this.lastID });
    }
  });
});


//Rota PUT para atualizar um usuário existente
app.put('/users/:id', (req, res) => {
  const { idusuario } = req.body;
  const { nome_completo, email, senha } = req.body;
  db.run('UPDATE usuarios SET nome_completo = ?, email = ?, senha = ? WHERE idusuario = ?', [nome_completo, email, senha,  idusuario], function (err) {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro ao atualizar usuário no banco de dados' });
    } else if (this.changes > 0) {
      res.json({ message: 'Usuário atualizado com sucesso' });
    } else {
      res.status(404).json({ error: 'Usuário não encontrado' });
    }
  });
});


//Rota DELETE para excluir um usuário
app.delete('/users/:id', (req, res) => {
  const { idusuario } = req.body;
  db.run('DELETE FROM usuarios WHERE idusuario = ?', [idusuario], function (err) {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro ao excluir usuário do banco de dados' });
    } else if (this.changes > 0) {
      res.json({ message: 'Usuário excluído com sucesso' });
    } else {
      res.status(404).json({ error: 'Usuário não encontrado' });
    }
  });
});


/*USUÁRIOS------------------------------------------------------------------------------------------------*/



