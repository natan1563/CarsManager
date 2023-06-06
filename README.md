# CarsManager - Steps

## 1 - Baixar o repositório:
```git clone git@github.com:natan1563/CarsManager.git```

## 2 - Instalar as dependências do projeto:
```npm i```
- Obs: Projeto desenvolvido em node v16.15.0

## 3 - Gerar um arquivo .env:
```cp .env.example .env```

## 4 - Substituir as variáveis de ambientes para por exemplo:
```md
APP_PORT=8000
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASS=root
DB_NAME=vehicle_manager
```
- Obs: Certifique-se de que as variáveis de ambiente coincidam com as credencias do seu servidor de banco de dados mysql.
 
## 5 - Crie um banco de dados de acordo com o nome descrito na variável ```DB_NAME```

## 6 - Em seu terminal rode o comando ```npm run dev```
