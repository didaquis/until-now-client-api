require('dotenv').config();

const untilNowApi = require('../src/index');
const assert = require('assert');

const { API_PROTOCOL, API_HOST, API_PORT } = process.env;

untilNowApi.protocol = API_PROTOCOL;
untilNowApi.host = API_HOST;
untilNowApi.port = API_PORT;

describe('Testing client API', () => {

	it('should list collections', done => {
		untilNowApi.listCollections()
		.then(res => {
			assert.equal(res.status, 'OK', 'result should be OK')

			done();
		})
		.catch(done);
	})

	it('should list items', done => {
		untilNowApi.listItems()
		.then(res => {
			assert.equal(res.status, 'OK', 'result should be OK')

			done();
		})
		.catch(done);
	})

// createCollection(name, id_user)
// createItem(name, dateStart, dateEnd, refNumber, notes, url, id_collection)
// deleteCollection(id)
// deleteItem(id)


	// it('should register and delete', done => {
	// 	let userId = '';

	// 	untilNowApi.registerUser('name', 'surname', 'email@email.com', 'username', 'PASSword1234')
	// 		.then((res) => {
	// 			assert.equal(res.status, 'OK', 'results should be OK');

	// 			userId = res.data.id;
	// 			return untilNowApi.listAllUsers();
	// 		})
	// 		.then(res => {
	// 			assert.equal(res.status, 'OK', 'results should be OK');

	// 			assert(res.data && res.data.length > 0, 'should return data array');

	// 			return untilNowApi.deleteUser(userId, 'username', 'PASSword1234');
	// 		})
	// 		.then((res) =>{
	// 			assert.equal(res.status, 'OK', 'results should be OK');
	// 			done();
	// 		})
	// 		.catch(done);
	// })


	// it('should register, update, and delete', done => {
	// 	let userId = '';

	// 	untilNowApi.registerUser('name', 'surname', 'email@email.com', 'username', 'PASSword1234')
	// 		.then((res) => {
	// 			assert.equal(res.status, 'OK', 'results should be OK');
				
	// 			userId = res.data.id;
	// 			return untilNowApi.listAllUsers();
	// 		})
	// 		.then(res => {
	// 			assert.equal(res.status, 'OK', 'results should be OK');

	// 			assert(res.data && res.data.length > 0, 'should return data array');

	// 			return untilNowApi.updateUser(userId, 'na', 'su', 'em@email.com', 'newUsername', 'newPassword123', 'username', 'PASSword1234');
	// 		}).then((res) =>{
	// 			assert.equal(res.status, 'OK', 'results should be OK');

	// 			return untilNowApi.deleteUser(userId, 'newUsername', 'newPassword123');
		
	// 		}).then(res =>{
	// 			assert.equal(res.status, 'OK', 'results should be OK');
	// 			done();
	// 		})
	// 		.catch(done);
	// })


	// it('should register, retrieve and delete', done => {
	// 	let userId = '';

	// 	untilNowApi.registerUser('name', 'surname', 'email@email.com', 'username', 'PASSword1234')
	// 		.then((res) => {
	// 			assert.equal(res.status, 'OK', 'results should be OK');

	// 			userId = res.data.id;
	// 			return untilNowApi.retrieveUser(userId);
	// 		})
	// 		.then(res => {
	// 			assert.equal(res.status, 'OK', 'results should be OK');

	// 			assert(res.data.email == 'email@email.com', 'should return an email');

	// 			return untilNowApi.deleteUser(userId, 'username', 'PASSword1234');
	// 		})
	// 		.then((res) =>{
	// 			assert.equal(res.status, 'OK', 'results should be OK');
	// 			done();
	// 		})
	// 		.catch(done);
	// })

})