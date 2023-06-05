//import sqlite3módulo:
import sqlite3 from 'sqlite3'

//Função de criação de tabelas
export async function createTables () {

    //Criando Database e conectando 
    const db = new sqlite3.Database('./dataBase/xtreamingbox.db', sqlite3.OPEN_READWRITE,(err)=>{
        if (err) {
            return console.error(err.message);
        }
    });


    //Criando variaveis de criação de tabelas
    let sql_createtable_plataforma;
    let sql_createtable_usuarios;
    let sql_createtable_series;
    let sql_createtable_situacao_serie;
    let sql_createtable_contato;
    //Criando tabelas
    sql_createtable_plataforma = `CREATE TABLE IF NOT EXISTS [plataforma] ([idplataforma] INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL UNIQUE,[nome] TEXT NOT NULL,[imagemplataforma] TEXT NOT NULL, FOREIGN KEY([idplataforma]) REFERENCES [series]([plataforma_idplataforma]) ON DELETE CASCADE)`;
    sql_createtable_usuarios = `CREATE TABLE IF NOT EXISTS [usuarios] ([idusuario] INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL UNIQUE,[nome_completo] TEXT NOT NULL,[email] TEXT NOT NULL UNIQUE,[senha] TEXT NOT NULL, FOREIGN KEY([idusuario]) REFERENCES [situacao_serie]([usuario_idusuario]) ON DELETE CASCADE ON UPDATE CASCADE)`;
    sql_createtable_series = `CREATE TABLE IF NOT EXISTS [series] ([idseries] INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL UNIQUE,[plataforma_idplataforma] INTEGER NOT NULL,[nome] TEXT NOT NULL,[ano] INTEGER NOT NULL,[genero] TEXT NOT NULL,[avalicacao] FLOAT,[temporada] INTEGER NOT NULL,FOREIGN KEY([idseries]) REFERENCES [situacao_serie]([series_idseries]) ON DELETE CASCADE ON UPDATE CASCADE, FOREIGN KEY([plataforma_idplataforma]) REFERENCES [situacao_serie]([series_plataforma_idplataforma]))`;
    sql_createtable_situacao_serie = `CREATE TABLE IF NOT EXISTS [situacao_serie] ([idsituacao_serie] INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL UNIQUE,[desejo_assistir] TEXT NOT NULL,[visto] TEXT NOT NULL,[series_idseries] INTEGER NOT NULL,[series_plataforma_idplataforma] INTEGER NOT NULL,[usuario_idusuario] INTEGER NOT NULL)`;
    sql_createtable_contato = `CREATE TABLE IF NOT EXISTS [contato] ([idcontato] INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL UNIQUE,[nome] TEXT NOT NULL,[email] TEXT NOT NULL,[mensagem] TEXT NOT NULL)`;
    //Iniciando criação de tabelas
    db.run(sql_createtable_plataforma);
    db.run(sql_createtable_usuarios);
    db.run(sql_createtable_series);
    db.run(sql_createtable_situacao_serie);
    db.run(sql_createtable_contato);

    return (
        console.log('Tabelas Criadas')
    );
}


