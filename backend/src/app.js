import express from 'express';
import bodyParser from 'body-parser';
import mongoose from './db.js';
import cors from 'cors';


const port = 3000;

const userRoutes = require("./routes/user");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({ origin: 'http://localhost:4200'}));
app.use("/api/user", userRoutes);


app.listen(port, () => {
    console.log('server is running on port: ' + port);
});
