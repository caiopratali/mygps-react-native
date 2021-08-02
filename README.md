<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/caiopratali/mygps-react-native">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/caiopratali/mygps-react-native">
  
  <a href="https://github.com/caiopratali/mygps-react-native/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/caiopratali/mygps-react-native">
  </a>
    
   <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">


<h1 align="center">MyGPS - Tracking</h1>

<p align="center">Application developed with React Native and Redux, which sends location at each selected time interval.</p>

<!-- <p align="center">
 <a href="#objetivo">Objetivo</a> •
 <a href="#roadmap">Roadmap</a> • 
 <a href="#tecnologias">Tecnologias</a> • 
 <a href="#contribuicao">Contribuição</a> • 
 <a href="#licenc-a">Licença</a> • 
 <a href="#autor">Autor</a>
</p> -->

<h1 align="center">
  <img alt="MyGPS" title="#MyGPS" src="./assets/images/mygpsvideo.gif" height="600" />
</h1>

<h1 align="center">Pré-requisitos</h1>

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [docker](https://www.docker.com/), [docker-compose](https://docs.docker.com/compose/install/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

<h1 align="center">🎲 Rodando o Back End (servidor)</h1>

clone o repositório
```bash
$ git clone https://github.com/contele/cntl-test.git
```
Acesse o diretório
```bash
$ cd cntl-test/react-native
```
Instale as dependências do projeto
```bash
$ npm install
```
Suba as imagens do docker
```bash
$ docker-compose up --build
```
Para acessar a documentação dos endpoints, basta acessar a URL: http://localhost:8081/doc

<p align="center">
  <a href="https://github.com/caiopratali/mygps-react-native/blob/main/assets/json/mygps-endpoints-insomnia.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>

<h1 align="center">🧭 Rodando a aplicação web (Frontend)</h1>

clone o repositório
```bash
$ git clone https://github.com/caiopratali/mygps-react-native.git
```
Acesse o diretório
```bash
$ cd mygps-react-native
```
Abra o projeto com seu editor de texto favorito e altere o arquivo .env que está raiz do projeto.
```js
API_URL="http://localhost:8081/points/"
```
Instale as dependências do projeto
```bash
$ yarn add
```
Inicie a aplicação
```bash
$ yarn start --port=8082
```
Execute o projeto emulador
```bash
$ yarn android --port=8082
```

<h1 align="center">Features</h1>

- [x] Status da rede
- [x] Switch para ativar ou desativar o serviço
- [x] Botões para definir intervalo
- [x] Obter localização
- [x] Offline
- [x] Sincronizar com o backend
- [x] Android
- [ ] IOS (Precisa definir as permissões, necessário um dispositivo com MacOS).

<h1 align="center">Tecnologias</h1>

As seguintes ferramentas foram usadas na construção do projeto:

- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Redux](https://redux.js.org/)

<h1 align="center">Autor</h1>

<p align="center">Desenvolvido por <strong><a href="https://github.com/caiopratali">Caio Pratali</a></strong></p>