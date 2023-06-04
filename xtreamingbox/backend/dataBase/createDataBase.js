import sqlite3 from 'sqlite3'
//import { open } from 'sqlite'
import {createTables} from './createTables.js'



// you would have to import / invoke this in another file
const dataBaseFile = './dataBase/xtreamingbox.db'
export async function openDb () {
  new sqlite3.Database(dataBaseFile, sqlite3.OPEN_READWRITE)  
  return(
    console.log('Criando Banco')
  );
}
openDb ();

//Criando tabelas após 5 segundos
const delay = 5000; // Tempo de atraso em milissegundos (5 segundos)
setTimeout(createTables, delay);


