import dotenv from 'dotenv';
import express from 'express';
import connection from './config/db.js';

const app = express();
const port = 4000;

dotenv.config();
connection();

app.use('/', (req, res) => {
    res.send('Hello world');
});

app.listen(port, () => {
    console.log(`Server running on port ${ port }`);
});