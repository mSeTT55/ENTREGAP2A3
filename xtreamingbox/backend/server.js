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
import {openDb} from './dataBase/createDataBase.js'
//Conectando ao Banco
function conectandoBanco(){
  openDb ();
  const dataBaseFile = './dataBase/xtreamingbox.db'
  const db = new sqlite3.Database(dataBaseFile, sqlite3.OPEN_READWRITE,(err)=>{
    if (err) {
        return console.error(err.message);
      }
    }
  );
}
//Conectando o Banco em 8 segundos
const delay2 = 8000; // Tempo de atraso em milissegundos (8 segundos)
setTimeout(conectandoBanco, delay2);



//Endereço da API
function apiConectada(){
  app.listen(port, () => {
    console.log(`API RODANDO...Estou disponibilizando os dados no endereço http://localhost:${port}`)
  })
}
//Servidor ouvindo API em 9 segundos
const delay3 = 9000; // Tempo de atraso em milissegundos (9 segundos)
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





