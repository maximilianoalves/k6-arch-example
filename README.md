<h1 align="center"> Sample project for performance tests using k6</h1>

### [**Você pode acessar a documentação em português aqui**](docs/pt-BR/README.md) 
<h1 align="center"></h1>
  
Skeleton for project start for performance test using k6 and other tools, this project also has compilation with webpack for use fakerjs library for generate random data and has grafana with influxdb to follow tests in real time and docker for run all this things.

## Technologies and tools used:  
- [JS](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) 
- [npm](https://www.npmjs.com/)
- [k6](https://k6.io/)
- [docker](https://www.docker.com/get-started)
- [Grafana](https://grafana.com/)
- [Influxdb](https://github.com/influxdata/influxdb)

## File Structure
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

## Execution Examples  
### Requirements: 
- Installation [**k6**](https://k6.io/docs/getting-started/installation/)
- Installation [**docker/docker-compose**](https://www.docker.com/get-started)

### Without docker, influxdb and grafana:
- With npm:
  - ```npm run FullFlowLoadTest```    
- Without npm:
  - ```k6 run -e env=PRD src/simulations/FullFlowLoad.test.js```

* Using docker you can follow grafana in real time accessing the url of [Grafana's Dashboard](http://localhost:3000/d/k6/k6-load-testing-results?orgId=1&refresh=5s)

![Grafana's dashboard with many graphs for performance monitoring](docs/img/img.png)

### Doubts!? contact me: 

[![Twitter](https://badgen.net/badge/Twitter/%40max_dacruz?icon=twitter)](https://twitter.com/max_dacruz)
[![Medium](https://badgen.net/badge/Medium/%40maximilianoalves?icon=medium)](https://medium.com/@maximilianoalves)
[![Linkedin](https://badgen.net/badge/Linkedin/maximilianodacruz?icon=linkedin)](https://www.linkedin.com/in/maximilianodacruz/)
[![Instagram](https://badgen.net/badge/Instagram/max_dacruz?icon=instagram)](https://www.instagram.com/max_dacruz/)
