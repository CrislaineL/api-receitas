--Pasta de api-receitas


--Criar a pasta Api de Receita

No mesmo nivel da pasta de receita abra o gitbash e digite os seguintes comandos:

-mkdir api-receitas
-cd api-receitas
-npm init -y
-npm install express cors
-npm install --save-dev typescript @types/node @types/express ts-node-dev

--Crie o tsconfig.json e faça o código dele

--Está é a estrutura de pastas:

Então crie o que estiver faltando e faça o código delas também

api-receitas/
 ├─ src/
 │   └─ index.ts
 ├─ package.json
 └─ tsconfig.json

--Corija a parte de package.json:

-Estava assim:
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },

-Deixe assim:
"scripts": {
  "dev": "ts-node-dev --respawn src/index.ts"
},

--No terminal faça os seguintes comandos:

-npm install --save-dev @types/cors
-npm run dev
