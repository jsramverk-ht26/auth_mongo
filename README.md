# auth_mongo

[![CI](https://github.com/jsramverk-ht26/auth_mongo/actions/workflows/ci.yml/badge.svg)](https://github.com/jsramverk-ht26/auth_mongo/actions/workflows/ci.yml)

Autentiserings-API med Express, JWT och MongoDB for kursen DV1677.

## Installation

```bash
npm install
```

## .env

```bash
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<db>?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret
PORT=8666
```

Kräver Node 20.19 eller senare. Koden är ESM (`"type": "module"`) och använder
mongodb-drivrutinen version 6.

## Användning

```bash
npm start        # kör appen
npm run dev      # kör med nodemon och omstart vid ändring
```

## Test

```bash
npm test
```

Testerna kör mot en riktig MongoDB på `mongodb://localhost:27017/test` — den
adressen är hårdkodad i `db/database.js` när `NODE_ENV=test`, så `MONGODB_URI`
används inte vid testkörning. Starta en databas först, till exempel:

```bash
docker run --rm -d -p 27017:27017 --name mongo-test mongo:7
```

`npm test` kör Mocha och Chai, mäter täckning med c8 och avslutar med att köra
eslint (`posttest`).

## Docker

```bash
docker build -t auth_mongo .
docker run -p 8666:8666 --env-file .env auth_mongo
```
