const express = require('express');
const multer = require('multer');
const csv = require('csv-parser');
const fs = require('fs');
const { Client } = require('pg');

const app = express();
const port = 3000;

// Configuração do banco de dados PostgreSQL
const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'seu_usuario',
  password: 'sua_senha',
  database: 'nome_do_banco'
});

client.connect();

// Configuração do multer para lidar com o upload de arquivos
const upload = multer({ dest: 'uploads/' });

app.use(express.static('public'));

// Rota para o upload do CSV
app.post('/upload', upload.single('csvFile'), (req, res) => {
    const filePath = req.file.path;
    const results = [];

    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (row) => {
        results.push(row);
      })
      .on('end', () => {
        const queries = results.map(row => {
          const { coluna1, coluna2, coluna3 } = row; // Adapte as colunas conforme seu CSV
          return client.query(
            'INSERT INTO tabela (coluna1, coluna2, coluna3) VALUES ($1, $2, $3)',
            [coluna1, coluna2, coluna3]
          );
        });

        Promise.all(queries)
          .then(() => {
            fs.unlinkSync(filePath); // Remove o arquivo após o processamento
            res.json({ message: 'Importação concluída com sucesso.' });
          })
          .catch((error) => {
            res.status(500).json({ message: 'Erro ao importar arquivo.', error });
          });
      });
});

// Inicie o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
