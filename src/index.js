/**
 * untilNowApi API client
 * 
 */
const rp = require('request-promise');

/**
 *  Until Now API client
 */
const untilNowApi = {
	/**
	 * @returns {string} Main URL of endpoint
	 */
	_baseUrl() {
		return `${this.protocol}://${this.host}:${this.port}`;
	},

	/**
	 * 
	 * @param {string} method - Method of petition: get, post...
	 * @param {string} path - precise endpoint
	 * @param {string} [body] - body of petition
	 * @returns {Promise}
	 */
	_call(method, path, body) {
		return rp({
			method,
			uri: `${this._baseUrl()}/${path}`,
			body,
			json: true
		});
	},

	/**
	 * Send ping to API server
	 * @returns {Promise}
	 */
	ping(){
		return this._call('get','api/ping');
	},

	/**
	 * Request all collections
	 * @returns {Promise}
	 */
	listCollections(){
		return this._call('get','api/collections');
	},

	/**
	 * Request a collection
	 * @param {string} id - Id of collection
	 * @returns {Promise}
	 */
	retrieveCollection(id){
		return this._call('get',`api/collection/${id}`);
	},

	/**
	 * Request all items
	 * @returns {Promise}
	 */
	listItems(){
		return this._call('get', 'api/items');
	},

	/**
	 * Request items in a collection
	 * @param {string} id - Id of collection
	 * @returns {Promise}
	 */
	listItemsInCollection(id){
		return this._call('get', `api/items/${id}`);
	},

	/**
	 * Create a new collection
	 * @param {string} name - Name of collection
	 * @param {string} id_user - Id of username owner
	 * @returns {Promise}
	 */
	createCollection(name, id_user){
		const body = {
			"name": name,
			"id_user": id_user
		};
		return this._call('post','api/collection', body);
	},

	/**
	 * Create a new item
	 * @param {string} name - Name of item 
	 * @param {string} dateStart - Must be format as valid Date object
	 * @param {string} dateEnd - Must be format as valid Date object
	 * @param {string} [refNumber] 
	 * @param {string} [notes] 
	 * @param {string} id_collection 
	 * @returns {Promise}
	 */
	createItem(name, dateStart, dateEnd, refNumber, notes, id_collection){
		const body = {
			"name": name,
			"dateStart": dateStart,
			"dateEnd": dateEnd,
			"refNumber": refNumber,
			"notes": notes,
			"id_collection": id_collection
		};
		return this._call('post','api/item', body);
	},

	/**
	 * Delete a collection
	 * @param {string} id - Id of collection
	 * @returns {Promise}
	 */
	deleteCollection(id){
		return this._call('delete', `api/collection/${id}`);
	},

	/**
	 * Delete an item
	 * @param {string} id - Id of item
	 * @returns {Promise}
	 */
	deleteItem(id){
		return this._call('delete', `api/item/${id}`);
	}

};

module.exports = untilNowApi;