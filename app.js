import 'dotenv/config';
import express from 'express';
import path from 'path';
import morgan from 'morgan';
import cors from 'cors';

import authRoutes from "./route/auth.js";
import usersRoutes from "./route/users.js";
import dataRoutes from "./route/data.js";

import authModel from "./models/auth.js";

const port = process.env.PORT || 8666;
const app = express();

app.use(cors());
app.options('*', cors());

app.disable('x-powered-by');

app.set("view engine", "ejs");

if (process.env.NODE_ENV !== 'test') {
    app.use(morgan('combined'));
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// import.meta.dirname är ESM-motsvarigheten till __dirname. Att i stället utgå
// från process.cwd() hade gjort sökvägen beroende av var appen startas ifrån.
app.use(express.static(path.join(import.meta.dirname, "public")));

app.all('*', authModel.checkAPIKey);

app.use("/users", usersRoutes);
app.use("/data", dataRoutes);
app.use("/", authRoutes);

const server = app.listen(port, () => {
    console.log('auth api listening on port ' + port);
});

export default server;
