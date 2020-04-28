//routes.test.js
import request from 'supertest';
import { server } from '../src/app.js';

beforeAll(async () => {
	// do something before anything else runs
	console.log('Jest starting!');
});
// close the server after each test
afterAll(() => {
	server.close();
	console.log('server closed!');
});
describe('basic route tests', () => {
	test('GET /video', async () => {
		const response = await request(server).get('/video');
		expect(response.status).toEqual(200);
		expect(response.text).toContain('video');
	});
	test('POST /video', async () => {
		const response = await request(server).post('/video');
		expect(response.status).toEqual(200);
		expect(response.text).toContain('video');
	});
	test('GET /playlist', async () => {
		const response = await request(server).get('/playlist');
		expect(response.status).toEqual(200);
		expect(response.text).toContain('playlist');
	});
	test('POST /playlist', async () => {
		const response = await request(server).post('/playlist');
		expect(response.status).toEqual(200);
		expect(response.text).toContain('playlist');
	});
});