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
	});

	// It works!
	// it('should retrieve a collection', done => {
	// 	untilNowApi.retrieveCollection('5aa6bcab341a690ff909faef')
	// 	.then(res => {
	// 		assert.equal(res.status, 'OK', 'result should be OK')

	// 		done();
	// 	})
	// 	.catch(done);
	// });

	it('should list all items in a collection', done => {
		untilNowApi.listItemsInCollection('5aa6bcab341a690ff909faef')
		.then(res => {
			assert.equal(res.status, 'OK', 'result should be OK')

			done();
		})
		.catch(done);
	});

	it('should list items', done => {
		untilNowApi.listItems()
		.then(res => {
			assert.equal(res.status, 'OK', 'result should be OK')

			done();
		})
		.catch(done);
	});

// createCollection(name, id_user)
// createItem(name, dateStart, dateEnd, refNumber, notes, url, id_collection)

	// It Works
	// it('should delete one item', done => {
	// 	untilNowApi.deleteItem('5aaa654da69e829456a7a930')
	// 	.then((res =>{
	// 		assert.equal(res.status, 'OK', 'result should be OK');

	// 		done();
	// 	})).catch(done);
	// });

	// It Works
	// it('should delete one collection and all his items', done => {
	// 	untilNowApi.deleteCollection('5aab9643938a1a5e5c21359b')
	// 	.then((res =>{
	// 		assert.equal(res.status, 'OK', 'result should be OK');

	// 		done();
	// 	})).catch(done);
	// });

});