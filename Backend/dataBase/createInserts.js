//import sqlite3módulo:
import sqlite3 from 'sqlite3'

//Criando Database and conectando 
const db = new sqlite3.Database('./xtreamingbox.db', sqlite3.OPEN_READWRITE,(err)=>{
  if (err) {
      return console.error(err.message);
  }
}
);

//Criando variaveis de criação de insets
let sql_insetinto_usuarios;
let sql_insetinto_usuarios2;
//Criando Dados
sql_insetinto_usuarios = `INSERT INTO usuarios(nome_completo,email,senha, confirm_senha) VALUES('Mateus Sena','mateus_sena55@hotmail.com','12345','12345')`;
sql_insetinto_usuarios2 = `INSERT INTO usuarios(nome_completo,email,senha,confirm_senha) VALUES('Flavio Raposo','flavioraposo.90@gmail.com','12345','12345')`;
//Iniciando criação de dados    
db.run(sql_insetinto_usuarios);    
db.run(sql_insetinto_usuarios2);    



   







    