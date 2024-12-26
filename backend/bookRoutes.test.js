import request from "supertest";
import app from "./app";

describe("Book Routes", () => {

    test('should add a book', async () => {

        const res = await request(app).post('/add').send({
            title: "abc",
            author: "axc",
            year: 1993
        });
        expect(res.statusCode).toEqual(201);
    });

    test('should return list of all books', async () => {
        const res = await request(app).get("/show");
        expect(res.statusCode).toEqual(200);
        expect(res.body.data).toBeDefined();
    })

    test('book should be borrowed if available', async () => {
        const res = await request(app).put('/borrow/9'); // Assuming book ID 9
        expect(res.statusCode).toEqual(200);
        expect(res.body.data.is_borrowed).toEqual(true);
    })

    test('should mark a book as returned', async () => {
        const res = await request(app).put('/return/9'); // Assuming book ID 1
        expect(res.statusCode).toEqual(200);
        expect(res.body.data.is_borrowed).toEqual(false);  // Check if 'is_borrowed' is false
    });


})