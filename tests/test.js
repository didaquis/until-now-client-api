require('dotenv').config();

const untilNowApi = require('../src/index');
const assert = require('assert');

const { API_PROTOCOL, API_HOST, API_PORT } = process.env;

untilNowApi.protocol = API_PROTOCOL;
untilNowApi.host = API_HOST;
untilNowApi.port = API_PORT;

describe('Testing client API', () => {

	let idOfCollection = '';

	it('should list collections', done => {
		untilNowApi.listCollections()
		.then(res => {
			assert.equal(res.status, 'OK', 'result should be OK');
			assert(res.data instanceof Array, 'results should be an Array');
			done();
		})
		.catch(done);
	});

	it('should create a collection', done => {
		untilNowApi.createCollection('dummy collection', '5aa6bb9e341a690ff909faee')
		.then(res => {
			assert.equal(res.status, 'OK', 'result should be OK');
			assert(typeof res.data, 'string', 'results should be a string');
			idOfCollection = res.data;
			done();
		})
		.catch(done);
	});

	it('should retrieve a collection', done => {
		untilNowApi.retrieveCollection(idOfCollection)
		.then(res => {
			assert.equal(res.status, 'OK', 'result should be OK');
			done();
		})
		.catch(done);
	});

	it('should list all items in a collection', done => {
		untilNowApi.listItemsInCollection(idOfCollection)
		.then(res => {
			assert.equal(res.status, 'OK', 'result should be OK');
			assert(res.data instanceof Array, 'results should be an Array');
			done();
		})
		.catch(done);
	});

	it('should list items', done => {
		untilNowApi.listItems()
		.then(res => {
			assert.equal(res.status, 'OK', 'result should be OK');
			assert(res.data instanceof Array, 'results should be an Array');
			done();
		})
		.catch(done);
	});

	// It Works
	// it('should delete one item', done => {
	// 	untilNowApi.deleteItem('5aaa654da69e829456a7a930')
	// 	.then((res =>{
	// 		assert.equal(res.status, 'OK', 'result should be OK');

	// 		done();
	// 	})).catch(done);
	// });

	it('should delete one collection and all his items', done => {
		untilNowApi.deleteCollection(idOfCollection)
		.then((res =>{
			assert.equal(res.status, 'OK', 'result should be OK');

			done();
		})).catch(done);
	});

});