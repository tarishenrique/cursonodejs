## Curso de NodeJS

- Esse projeto foi executado com a orientação do Instrutor Rubens Silva e do auxílio do curso no canal Felipe Rocha • dicasparadevs.

- O Projeto utiliza NodeJS e MongoDB para fazer operações de CRUD de usuários e retorno dos usuários em JSON. Também possui páginas html.
- O Projeto utiliza Pacotes NPM como EJS e Express.

**Table of Contents**

[TOCM]

[TOC]

## Utilizar o Container do Projeto

### Passo 1 - Download do Docker

-Faça o Download no link abaixo.
`<link>` : <https://www.docker.com/products/docker-desktop/>

### Passo 2 - Instalar o Docker na sua máquina

-Siga os passos orientados na Documentação oficial do Docker. Na grande maioria dos casos a instalação básica é suficiente. Baste seguir próximo até o final.

`<link>`: https://docs.docker.com/desktop/install/windows-install/

### Passo 3 - Download do container para a sua máquina

-O containe pode ser baixado na sua máquina facilmente. Basta abrir o terminal no linux ou prompt de comando no windows e executar os seguintes comandos:

`docker pull tarishenrique/nodetaris1:1.0`

`docker run -p 49160:8080 -d -it tarishenrique/nodetaris1:1.0`

### Passo 4 - Abrir o projeto no navegador

-A partir desse momento você deve estar com o container do projeto aberto. Basta agora ir ao navegar e acessar os seguintes endereços:

`<Página Inicial>` : <http://localhost:49160/>
`<JSON com retorno dos Usuários>` : http://localhost:49160/users
