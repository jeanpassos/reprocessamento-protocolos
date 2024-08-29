<p align="center">
  <img src="caminho/para/sua/logo.png" alt="Logo do Projeto" width="200">
</p>

<h1 align="center" style="color:#3498db;">CSV Import Project</h1>

<p align="center" style="color:#2ecc71;">
  Este projeto é uma aplicação em Node.js que permite o upload de arquivos CSV para inserção de seus dados em um banco de dados PostgreSQL.
</p>

## Funcionalidades

- <span style="color:#e74c3c;">Upload de arquivos CSV</span> através de uma interface web.
- <span style="color:#e74c3c;">Processamento dos dados</span> do CSV e inserção no banco de dados PostgreSQL.
- <span style="color:#e74c3c;">Remoção automática dos arquivos</span> CSV após o processamento.

## Tecnologias Utilizadas

- ![Node.js](https://img.shields.io/badge/Node.js-16.x-brightgreen) - Plataforma JavaScript para backend.
- ![Express](https://img.shields.io/badge/Express-4.x-blue) - Framework web para Node.js.
- ![Multer](https://img.shields.io/badge/Multer-1.4.2-yellow) - Middleware para gerenciamento de uploads de arquivos.
- ![csv-parser](https://img.shields.io/badge/csv--parser-3.x-orange) - Biblioteca para parsing de arquivos CSV.
- ![pg](https://img.shields.io/badge/pg-8.x-red) - Cliente PostgreSQL para Node.js.

## Pré-requisitos

Antes de iniciar, certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina, assim como o PostgreSQL configurado.

## Instalação

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/csv-import-project.git
    ```
   
2. Navegue até o diretório do projeto:
    ```bash
    cd csv-import-project
    ```

3. Instale as dependências:
    ```bash
    npm install
    ```

4. Configure as credenciais do banco de dados PostgreSQL no arquivo `server.js`:
    ```javascript
    const client = new Client({
      host: 'localhost',
      port: 5432,
      user: 'seu_usuario',
      password: 'sua_senha',
      database: 'nome_do_banco'
    });
    ```

5. Crie as pastas necessárias:
    ```bash
    mkdir uploads
    ```

## Uso

1. Inicie o servidor:
    ```bash
    npm start
    ```

2. Acesse `http://localhost:3000` no navegador para visualizar a página de upload.

3. Faça o upload de um arquivo CSV e veja os dados sendo inseridos no banco de dados.

## Estrutura de Pastas

```plaintext
csv-import-project/
│
├── public/
│   └── index.html              # Página HTML para upload do CSV
│
├── uploads/                    # Diretório para armazenar arquivos CSV temporários
│   └── (arquivos CSV enviados)
│
├── server.js                   # Arquivo principal do servidor Node.js
│
├── package.json                # Arquivo de configuração do projeto Node.js
│
└── README.md                   # Documentação do projeto
```
## Executar no Servidor

1. Utilize um gerenciador de processos como PM2 para iniciar e gerenciar o processo Node.js:
    ```bash
    npm install -g pm2
    pm2 start server.js --name csv-import-project
    ```
2. Configure o PM2 para iniciar automaticamente na inicialização do sistema:
   ```bash
   pm2 startup
   pm2 save
    ```
## Configuração de Proxy Reverso (Opcional)

1. Utilize um gerenciador de processos como PM2 para iniciar e gerenciar o processo Node.js:

```bash
    server {
      listen 80;
      server_name seu_dominio.com;

      location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
  }
}
 ```

### Contato

Se você tiver alguma dúvida ou precisar de ajuda, entre em contato:

- **Nome:** Jean Passos
- **Email:** [jean@scsite.com.br](mailto:jean@scsite.com.br)
- **GitHub:** [jeanpassos](https://github.com/jeanpassos)

