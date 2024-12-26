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

})