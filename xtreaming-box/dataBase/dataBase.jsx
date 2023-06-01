//import sqlite3módulo:
const sqlite3 = require('sqlite3').verbose();

let sql_createtable;

//Create Database and connect
const db = new sqlite3.Database('./xtreamingbox.db',sqlite3.OPEN_READWRITE,(err)=>{
    if (err) {
        return console.error(err.message);
      }
});

//Create table
sql_createtable = `CREATE TABLE IF NOT EXISTS usuario (id_usuario INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, nome_completo TEXT NOT NULL, email TEXT NOT NULL UNIQUE, senha TEXT NOT NULL)`;

db.run(sql_createtable);    
    







    