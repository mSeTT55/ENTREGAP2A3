app.get('/usuario/get/all', (req, res) => {
    db.all('SELECT * FROM usuarios', (err, rows) =>{
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Não conseguimos acessar informações dos usuários' });
      } else {
        res.json(rows);
      }
    });
  });