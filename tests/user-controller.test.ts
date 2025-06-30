// tests/api.spec.ts
import { test, expect } from '@playwright/test';
let baseURL: string = 'http://localhost:3000/users';
import { StatusCodes } from 'http-status-codes';

test.describe('User management API', () => {

    test('GET / - should return empty when no users', async ({ request }) => {
        const response = await request.get(`${baseURL}`);
        expect(response.status()).toBe(StatusCodes.OK);
        const responseBody = await response.text()
        expect(responseBody).toBe('[]');
    });

    test('GET /:id - should return a user by ID', async ({ request }) => {
        const responseCreate = await request.post(`${baseURL}`);
        const responseBody = await responseCreate.json()
        expect(responseCreate.status()).toBe(StatusCodes.CREATED);
        const responseGet = await request.get(`${baseURL}/${responseBody.id}`);
        expect(responseGet.status()).toBe(StatusCodes.OK);
    });

    test('GET /:id - should return 404 if user not found', async ({ request }) => {
         const responseGet = await request.get(`${baseURL}/100`);
         expect(responseGet.status()).toBe(StatusCodes.NOT_FOUND);
    });

    test('POST / - should add a new user', async ({ request }) => {
        const responseCreate = await request.post(`${baseURL}`);
        const responseBody = await responseCreate.json()
        expect.soft(responseCreate.status()).toBe(StatusCodes.CREATED);
        expect.soft(responseBody.id).toBeDefined();

    });

    test('DELETE /:id - should delete a user by ID', async ({ request }) => {
        const responseCreate = await request.post(`${baseURL}`);
        const responseBody = await responseCreate.json()
        expect.soft(responseCreate.status()).toBe(StatusCodes.CREATED);
        const responseDelete = await request.delete(`${baseURL}/${responseBody.id}`);
        expect.soft(responseDelete.status()).toBe(StatusCodes.OK);

    });

    test('DELETE /:id - should return 404 if user not found', async ({ request }) => {
       const responseDelete = await request.delete(`${baseURL}/100`);
       expect(responseDelete.status()).toBe(StatusCodes.NOT_FOUND);
    });

    test('Return all fields', async ({ request }) => {
       const responseCreate = await request.post(`${baseURL}/100`);
       const responseBody = await responseCreate.json()
       expect.soft(responseBody.id).toBeDefined();
        expect.soft(responseBody.name).toBeDefined();
        expect.soft(responseBody.email).toBeDefined();
        expect.soft(responseBody.phone).toBeDefined();

    })


});
