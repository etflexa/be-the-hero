const request = require('supertest');
const app = require('../../src/app');


describe('ONG', () => {
    beforeEach(async () => {
        await Connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
        .post('/ongs')
        .send({
            name: "APAD",
            email: "contato@apad.com.br",
            whatsapp: "4700000000",
            city: "Macapa",
            uf: "SC"

        });

        console.log(response.body);
    });
});