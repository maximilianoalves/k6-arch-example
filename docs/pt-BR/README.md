<h1 align="center"> Projeto para exemplo de arquitetura para testes de performance utilizando o k6</h1>

Projeto para criação de arquitetura e esqueleto de testes de performance utilizando o k6.

## Tecnologias utilizadas:  
- [JS](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) 
- [npm](https://www.npmjs.com/)
- [k6](https://k6.io/)
- [docker](https://www.docker.com/get-started)
- [Grafana](https://grafana.com/)
- [Influxdb](https://github.com/influxdata/influxdb)

## Estrutura de arquivos
📦k6-arch-example  
┣ 📂dashboards  
┃ ┗ 📜k6-load-testing-results.json  
┣ 📂img  
┃ ┗ 📜img.png  
┣ 📂src  
┃ ┣ 📂requests  
┃ ┃ ┣ 📜login.request.js  
┃ ┃ ┣ 📜products.request.js  
┃ ┃ ┗ 📜users.request.js  
┃ ┣ 📂simulations  
┃ ┃ ┣ 📜FullFlowLoad.test.js  
┃ ┃ ┗ 📜FullFlowStress.test.js  
┃ ┗ 📂utils  
┃ ┃ ┗ 📜utils.js  
┣ 📜.gitignore  
┣ 📜README.md  
┣ 📜docker-compose.yml  
┣ 📜grafana-dashboard.yaml  
┣ 📜grafana-datasource.yaml  
┣ 📜package-lock.json  
┗ 📜package.json  

## Exemplos de execução 
### Pré-requisitos: 
- Instalação [**k6**](https://k6.io/docs/getting-started/installation/)
- Instalação [**docker/docker-compose**](https://www.docker.com/get-started)

### Sem docker, influxdb e grafana:
- Com npm:
  - ```npm run FullFlowLoadTest```    
- Sem npm:
  - ```k6 run -e env=PRD src/simulations/FullFlowLoad.test.js```

### Com docker, influxdb e grafana:  
- Com npm: 
  - ```npm docker:up```  
  ```npm run docker:FullFlowLoadTest```  
  ```npm run docker:down```  
- Sem npm:
  - ```docker-compose up -d influxdb grafana && docker-compose run k6 run -e env=PRD /src/simulations/FullFlowLoad.test.js```

* Utilizando docker você pode acompanhar o grafana em tempo real acessando a url do [Dashboard do Grafana](http://localhost:3000/d/k6/k6-load-testing-results?orgId=1&refresh=5s)

![Dashboard do grafana contendo diversos graficos de monitoramento de performance](../img/img.png)


### Dúvidas!? entre em contato: 

[![Twitter](https://badgen.net/badge/Twitter/%40max_dacruz?icon=twitter)](https://twitter.com/max_dacruz)
[![Medium](https://badgen.net/badge/Medium/%40maximilianoalves?icon=medium)](https://medium.com/@maximilianoalves)
[![Linkedin](https://badgen.net/badge/Linkedin/maximilianodacruz?icon=linkedin)](https://www.linkedin.com/in/maximilianodacruz/)
[![Instagram](https://badgen.net/badge/Instagram/max_dacruz?icon=instagram)](https://www.instagram.com/max_dacruz/)