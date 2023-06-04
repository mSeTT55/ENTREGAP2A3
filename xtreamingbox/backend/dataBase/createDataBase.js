import sqlite3 from 'sqlite3'
import {createTables} from './createTables.js'


//Conectando ao arquivo do Banco e exportando para 
const dataBaseFile = './dataBase/xtreamingbox.db'
export async function ConnectDBFile () {
  new sqlite3.Database(dataBaseFile)  
  return(
    console.log('Criando Banco')
  );
}


//Criando tabelas após 2 segundos
const delay = 2000; // Tempo de atraso em milissegundos (2 segundos)
setTimeout(createTables, delay);


