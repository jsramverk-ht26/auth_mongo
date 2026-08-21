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

## Användning

```bash
npm start
```

## Test

```bash
npm test
```

## Docker

```bash
docker build -t auth_mongo .
docker run -p 8666:8666 --env-file .env auth_mongo
```
