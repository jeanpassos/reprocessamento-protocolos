# CSV Import Project

Este projeto permite importar arquivos CSV para um banco de dados PostgreSQL. O usuário pode enviar um arquivo CSV através de uma interface web, e o servidor processa o arquivo e insere os dados no banco de dados.

## Estrutura do Projeto

- **`public/`**: Contém arquivos estáticos servidos pelo Express.
  - **`index.html`**: Página HTML com o formulário para upload de arquivos CSV e uma área para mostrar o progresso.
  
- **`uploads/`**: Pasta onde os arquivos CSV enviados pelos usuários são armazenados temporariamente antes de serem processados.
  
- **`server.js`**: Arquivo principal do servidor Node.js que configura o Express, manipula o upload de arquivos CSV, processa o CSV e insere os dados no PostgreSQL.
  
- **`package.json`**: Arquivo de configuração do projeto Node.js que lista as dependências e scripts do projeto.
  
- **`package-lock.json`**: Arquivo gerado automaticamente que mantém o controle das versões exatas das dependências instaladas.

## Pré-requisitos

Antes de iniciar, verifique se você tem as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/)

## Configuração

1. **Clone o Repositório**

   ```bash
   git clone https://github.com/seu_usuario/csv-import-project.git
   cd csv-import-project

2. **Instale as Dependências**
   ```bash
   npm install
   
  Atualize as configurações de banco de dados no arquivo server.js com as credenciais do ambiente de produção.

