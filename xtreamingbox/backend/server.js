//Iniciando Express
import express from 'express'
const app = express()
const port = 5000


//Iniciando Banco
// const dataBaseFile = './dataBase/xtreamingbox.db'
// const sqlite3 = require('sqlite3').verbose();
// const db = new sqlite3.Database(dataBaseFile, sqlite3.OPEN_READWRITE,(err)=>{
//   if (err) {
//       return console.error(err.message);
//   }
// });



//Iniciando Banco
import sqlite3 from 'sqlite3'

//Chamando arquivo do banco
import {ConnectDBFile} from './dataBase/createDataBase.js'


//Criando arquivo do banco, tabelas e insets
ConnectDBFile ();


//Conectando ao Banco
function conectandoBanco(){
  const dataBaseFile = './dataBase/xtreamingbox.db'
  const db = new sqlite3.Database(dataBaseFile, sqlite3.OPEN_READWRITE,(err)=>{
    if (err) {
        return console.error(err.message);
      }
    }
  );
}
//Conectando o Banco em 3 segundos
const delay2 = 3000; // Tempo de atraso em milissegundos (3 segundos)
setTimeout(conectandoBanco, delay2);


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




//Rota API GET para obter todos os usuários
app.get('/users', (req, res) => {
  db.all('SELECT * FROM usuario', (err, rows) =>{
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro ao obter usuários do banco de dados' });
    } else {
      res.json(rows);
    }
  });
});





