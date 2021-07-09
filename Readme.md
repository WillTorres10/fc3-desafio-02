# Desafio 2 - Backend e frontend

No projeto **Imersão Full Cycle 3.0** foi feito o seguinte desafio:
```
Nesse desafio você trabalhará com backend e frontend juntos para consolidar os conhecimentos adquiridos nas aulas de Nest.js e React.js.

Para isso:

- Crie um docker-compose.yaml que levante uma aplicação Nest.js e React juntos

- A aplicação Nest.js precisa rodar na porta 3000

- Aplicação React.js precisa rodar na porta 3001.

- Ao acessar http://localhost:3001 a aplicação React precisa consumir e listar "rotas" do endpoint do Nest.js: http://localhost:3000/routes.

- O endpoint http://localhost:3000/routes precisa retornar 5 rotas com os seguintes dados: title - título da rota, startPosition - contém latitude e longitude, endPosition - contém latitude e longitude
```

O código presente neste respositório é o resultado do desafio. Para executar, siga os seguites passos em seu terminal:
- Clone esse repositório para sua máquina: ``git clone https://github.com/WillTorres10/fc3-desafio-02.git``
- Entre na pasta: ``cd fc3-desafio-02``
- Com o Docker e o Docker-compose instalados, execute: `docker-compose up`

Resultado:

- Rota para listar no Nest: [http://localhost:3000](http://localhost:3000)
- Rota para listar no React: [http://localhost:3001](http://localhost:3001)

