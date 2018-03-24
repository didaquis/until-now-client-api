require('dotenv').config();

const untilNowApi = require('../src/index');
const assert = require('assert');

const { API_PROTOCOL, API_HOST, API_PORT } = process.env;

untilNowApi.protocol = API_PROTOCOL;
untilNowApi.host = API_HOST;
untilNowApi.port = API_PORT;

describe('Testing API client', () => {
	const idOfUser = '5aa6bb9e341a690ff909faee';

	let token = '';
	let idOfCollection = '';
	let idOfItem = '';

	it('should receive ping', done => {
		untilNowApi.ping()
			.then(res => {
				assert.equal(res.status, 'OK', 'result should be OK');
				assert.equal(res.data, 'ping', 'result should be ping');
				done();
			})
			.catch(done);
	});

	it('should login user', done => {
		untilNowApi.loginUser('testing', 'Aa1*skadsaK')
			.then(res => {
				assert.equal(res.status, 'OK', 'result should be OK');
				assert(typeof res.data, 'string', 'results should be a string');
				token = res.data.token;
				done();
			}).catch(done);
	});

	it('should retrieve user', done => {
		untilNowApi.retrieveUser(idOfUser, token)
			.then(res => {
				assert.equal(res.status, 'OK', 'result should be OK');
				done();
			})
			.catch(done);
	});

	it('should list collections', done => {
		untilNowApi.listCollections(token)
			.then(res => {
				assert.equal(res.status, 'OK', 'result should be OK');
				assert(res.data instanceof Array, 'results should be an Array');
				done();
			})
			.catch(done);
	});

	it('should create a collection', done => {
		untilNowApi.createCollection('dummy collection', idOfUser, token)
			.then(res => {
				assert.equal(res.status, 'OK', 'result should be OK');
				assert(typeof res.data, 'string', 'results should be a string');
				idOfCollection = res.data;
				done();
			})
			.catch(done);
	});

	it('should retrieve a collection', done => {
		untilNowApi.retrieveCollection(idOfCollection, token)
			.then(res => {
				assert.equal(res.status, 'OK', 'result should be OK');
				done();
			})
			.catch(done);
	});

	it('should list all items in a collection', done => {
		untilNowApi.listItemsInCollection(idOfCollection, token)
			.then(res => {
				assert.equal(res.status, 'OK', 'result should be OK');
				assert(res.data instanceof Array, 'results should be an Array');
				done();
			})
			.catch(done);
	});

	it('should list items', done => {
		untilNowApi.listItems(token)
			.then(res => {
				assert.equal(res.status, 'OK', 'result should be OK');
				assert(res.data instanceof Array, 'results should be an Array');
				done();
			})
			.catch(done);
	});

	it('should create an item', done => {
		const dateStart = new Date('2018-03-20');
		const dateEnd = new Date('2019-04-01');
		untilNowApi.createItem('dummy item name', dateStart, dateEnd, 'abc', 'my notes', idOfCollection, token)
			.then(res => {
				assert.equal(res.status, 'OK', 'result should be OK');
				idOfItem = res.data;
				done();
			})
			.catch(done);
	});

	it('should delete one item', done => {
		untilNowApi.deleteItem(idOfItem, token)
			.then((res => {
				assert.equal(res.status, 'OK', 'result should be OK');
				done();
			}))
			.catch(done);
	});

	it('should delete one collection and all his items', done => {
		untilNowApi.deleteCollection(idOfCollection, token)
			.then((res => {
				assert.equal(res.status, 'OK', 'result should be OK');
				done();
			}))
			.catch(done);
	});

});