## Curso de NodeJS

- Esse projeto foi executado com a orientação do Instrutor Rubens Silva e do auxílio do curso no canal Felipe Rocha • dicasparadevs.

- O Projeto utiliza NodeJS e MongoDB para fazer operações de CRUD de usuários e retorno dos usuários em JSON. Também possui páginas html.
- O Projeto utiliza Pacotes NPM como EJS e Express.

**Table of Contents**

[TOCM]

[TOC]

## Utilizar o Container do Projeto

### Passo 1 - Download do NodeJS

-Faça o Download no link abaixo.
`<link>` : <https://nodejs.org/en/download/>

### Passo 2 - Instalar o NodeJS na sua máquina

- Siga os passos orientados na Documentação oficial do NodeJS. Na grande maioria dos casos a instalação básica é suficiente. Baste clicar em próximo até o final.

`<link>`: https://nodejs.dev/en/learn/how-to-install-nodejs/

### Passo 3 - Instalar o Docker na sua máquina

- Siga os passos orientados na Documentação oficial do Docker. Na grande maioria dos casos a instalação básica é suficiente. Baste seguir próximo até o final.

`<link>`: https://docs.docker.com/desktop/install/windows-install/

### Passo 4 - Criar base de dados

- Vá até o site https://www.mongodb.com/ , crie sua conta e faça o login.

- Dentro do Menu Deployment / Database clique em "Build a Database" ou "Create".

- Selecione a opção "Shared" => "AWS" => "São Paulo" e na aba Cluster Name escolha um nome para a Base de Dados.

- Na próxima aba digite um usuário e senha para acessar a sua base de dados.

- Em IP Adress digite o endereço 0.0.0.0/0

- Clique em Finish and Close

- Agora clique em Connect/ Connect your application e anote o endereço entre o "@" e "/?"

### Passo 5 - Baixar o repositório na sua máquina.

- Você pode utilizar esse repositório em sua máquina por seguir o seguinte processor.
- Crie uma pasta no seu computador e acesse essa pasta.
- Clique com o botão direito e clique na opção `Git Bash Here`.
- Uma tela de terminal será aberta. Nessa tela digite o seguinte comando:

`git clone --branch master https://github.com/tarishenrique/cursonodejs.git`

- O repositório será baixado para a pasta selecionada.

- Abra o Visual Studio Code e clique em Arquivo/Abrir Pasta ... e selecione a pasta do projeto.

- Ainda dentro do Visual Code, abra o Terminal e execute a instalação dos módulos necessarios

`npm install`

- Agora faça a build do projeto num imagem no Docker atravé do comando:

`docker build . -t node-web-app-exemplo`

- Execute a imagem com a utilização do usuário, senha e endereço de host do seu banco de dados.

`docker run -e MONGODB_USERNAME="usuário" -e MONGODB_PASSWORD="senha" -e MONGODB_HOST="endereço_do_host" -p 8080:8080 -d -it node-web-app-exemplo`

### Passo 6 - Abrir o projeto no navegador

- A partir desse momento você deve estar com o container do projeto aberto. Basta agora ir ao navegar e acessar os seguintes endereços:

`<Página Inicial>` : <http://localhost:8080/>
`<JSON com retorno dos Usuários>` : http://localhost:8080/users

### Passo 7 - Criar requisições para o banco de dados

- Faça o download do aplicativo Postman:
https://www.postman.com/downloads/

- Faça a instalação, crie sua conta e faça o login.

- Na tela inicial do aplicativo clique em create collection e dê um nome a sua coleção.

- Clique nos três pontos ao lado do nome da sua coleção (...) e clique em ADD REQUEST.

- Selecione a opção POST e digite o endereço: http://localhost:8080/users .

- Selecione a aba "Body", opção "Raw" e selecione "JSON" na aba ao lado.

- Crie um usuário usando uma estrutura de arquivo JSON com a abaixo:

{
    "firstName": "nome",
    "lastName": "sobrenome",
    "email": "email@hotmail.com",
    "password": "1234567"
}

- Agora clique em "SEND"

- Abra novamente o endereço http://localhost:8080/users e observe que o usuário foi criado.
