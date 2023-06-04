//import sqlite3módulo:
const sqlite3 = require('sqlite3').verbose();

//Criando Database and conectando 
const db = new sqlite3.Database('./xtreamingbox.db',sqlite3.OPEN_READWRITE,(err)=>{
    if (err) {
        return console.error(err.message);
      }
});

//Criando variaveis de criação de insets
let sql_insetinto_usuario;
let sql_insetinto_usuario2;


//Criando Dados
sql_insetinto_usuario = `INSERT INTO usuario(idusuario,nome_completo,email,senha) VALUES(1,'Mateus Sena','mateus_sena55@hotmail.com','12345')`
sql_insetinto_usuario2 = `INSERT INTO usuario(idusuario,nome_completo,email,senha) VALUES(2,'Flavio Raposo','flavioraposo.90@gmail.com','12345')`

//Iniciando criação de dados    
db.run(sql_insetinto_usuario);    
db.run(sql_insetinto_usuario2);    



   







    