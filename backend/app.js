import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import pg from "pg";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

const db = new pg.Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

db.connect();

app.get('/show', async (req, res) => {

    try {

        const response = await db.query('SELECT *FROM book');
        console.log(response.rows[0]);
        res.json({ data: response.rows });
    } catch (error) {
        res.sendStatus(404);

    }

});

app.post('/add', async (req, res) => {
    const title = req.body.title;
    const author = req.body.author;
    const year = req.body.year;
    try {
        const response = await db.query('INSERT INTO book (title, author, publish_year) VALUES ($1, $2, $3)', [title, author, year]);
        res.sendStatus(201);
    } catch (error) {
        res.sendStatus(400);
    }

});


app.put('/borrow/:id', (req, res) => {

    try {


    } catch (error) {

    }

});

app.put('/return/:id', (req, res) => {

    try {

    } catch (error) {

    }

});


export default app;