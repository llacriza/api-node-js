
import { test, expect } from '@playwright/test';
let baseURL: string = 'http://localhost:3000/users';
import { StatusCodes } from 'http-status-codes';

test.describe('User management API', () => {

    test('GET / - empty array', async ({ request }) => {
        const response = await request.get(`${baseURL}`);
        expect(response.status()).toBe(StatusCodes.OK);
        const responseBody = await response.text()
        expect(responseBody).toBe("[]");
    });

})