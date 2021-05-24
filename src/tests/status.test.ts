import supertest from 'supertest';
import { app } from '../app.bootstrap';
test('Test if route status is responding 200 OK', async () => {
    await supertest(app)
        .get('/api/v1/status')
        .set('Accept', 'application/json')
        .expect(200)
        .then((req) => {
            expect(req.body.status).toStrictEqual('online');
        });
});
