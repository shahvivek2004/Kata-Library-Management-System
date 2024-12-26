const request = require('supertest');
const app = require('../server');
const { query } = require('../models/db');

// Mock the database interaction
jest.mock('../models/db');

describe('Book Routes', () => {
    it('should add a book', async () => {
        query.mockResolvedValueOnce({ rows: [{ id: 1, isbn: '12345', title: 'Test Book', author: 'John Doe', year: 2023 }] });
        const res = await request(app).post('/api/books').send({
            isbn: '12345',
            title: 'Test Book',
            author: 'John Doe',
            year: 2023,
        });
        expect(res.statusCode).toEqual(201);
        expect(res.body.title).toBe('Test Book');
    });

    // it('should borrow a book', async () => {
    //     query.mockResolvedValueOnce({ rows: [{ id: 1, is_borrowed: true }] });
    //     const res = await request(app).put('/api/books/1/borrow');
    //     expect(res.statusCode).toEqual(200);
    //     expect(res.body.is_borrowed).toBe(true);
    // });
});
