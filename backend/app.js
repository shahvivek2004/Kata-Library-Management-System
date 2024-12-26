//--------------------IMPORT NECESSARY MODULES-----------------

import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import pg from "pg";



//--------------------SERVER CONFIGURATION--------------------

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());




//--------------------DATABASE CONFIGURATION------------------

const db = new pg.Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

db.connect();




//--------------------DISPLAY FEATURE--------------------------

app.get('/show', async (req, res) => {

    try {

        const response = await db.query('SELECT *FROM book');
        console.log(response.rows[0]);
        res.json({ data: response.rows });
    } catch (error) {
        res.sendStatus(404);

    }

});




//-------------------ADD FEATURE----------------------------

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



//--------------------BORROW FEATURE--------------------------

app.put('/borrow/:id', async (req, res) => {
    const bookId = req.params.id;

    try {


        const response = await db.query(
            'UPDATE book SET is_borrowed = $1 WHERE isbn = $2 RETURNING *',
            [true, bookId]
        );

        if (response.rows.length === 0) {
            return res.status(404).send('Book not found');
        }

        res.status(200).json({ data: response.rows[0] });

    } catch (error) {
        console.error('Error updating book status:', error);
        res.status(500).send('Internal Server Error');
    }
});




//-----------------------RETURN FEATURE-------------------------

app.put('/return/:id', async (req, res) => {
    const bookId = req.params.id;

    try {
        const response = await db.query(
            'UPDATE book SET is_borrowed = $1 WHERE isbn = $2 RETURNING *',
            [false, bookId]
        );

        if (response.rows.length === 0) {
            return res.status(404).send('Book not found');
        }

        res.status(200).json({ data: response.rows[0] });

    } catch (error) {
        console.error('Error updating book status:', error);
        res.status(500).send('Internal Server Error');
    }
});



export default app;