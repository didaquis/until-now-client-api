'use strict';

/**
 * untilNowApi API client
 * 
 */
var rp = require('request-promise');

/**
 *  Until Now API client
 */
var untilNowApi = {
	/**
  * @returns {string} Main URL of endpoint
  */
	_baseUrl: function _baseUrl() {
		return this.protocol + '://' + this.host + ':' + this.port;
	},


	/**
  * 
  * @param {string} method - Method of petition: get, post...
  * @param {string} path - precise endpoint
  * @param {string} [body] - body of petition
  * @returns {Promise}
  */
	_call: function _call(method, path, body) {
		return rp({
			method: method,
			uri: this._baseUrl() + '/' + path,
			body: body,
			json: true
		});
	},


	/**
  * Send ping to API server
  * @returns {Promise}
  */
	ping: function ping() {
		return this._call('get', 'api/ping');
	},


	/**
  * Request all collections
  * @returns {Promise}
  */
	listCollections: function listCollections() {
		return this._call('get', 'api/collections');
	},


	/**
  * Request a collection
  * @param {string} id - Id of collection
  * @returns {Promise}
  */
	retrieveCollection: function retrieveCollection(id) {
		return this._call('get', 'api/collection/' + id);
	},


	/**
  * Request all items
  * @returns {Promise}
  */
	listItems: function listItems() {
		return this._call('get', 'api/items');
	},


	/**
  * Request items in a collection
  * @param {string} id - Id of collection
  * @returns {Promise}
  */
	listItemsInCollection: function listItemsInCollection(id) {
		return this._call('get', 'api/items/' + id);
	},


	/**
  * Create a new collection
  * @param {string} name - Name of collection
  * @param {string} id_user - Id of username owner
  * @returns {Promise}
  */
	createCollection: function createCollection(name, id_user) {
		var body = {
			"name": name,
			"id_user": id_user
		};
		return this._call('post', 'api/collection', body);
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
	createItem: function createItem(name, dateStart, dateEnd, refNumber, notes, id_collection) {
		var body = {
			"name": name,
			"dateStart": dateStart,
			"dateEnd": dateEnd,
			"refNumber": refNumber,
			"notes": notes,
			"id_collection": id_collection
		};
		return this._call('post', 'api/item', body);
	},


	/**
  * Delete a collection
  * @param {string} id - Id of collection
  * @returns {Promise}
  */
	deleteCollection: function deleteCollection(id) {
		return this._call('delete', 'api/collection/' + id);
	},


	/**
  * Delete an item
  * @param {string} id - Id of item
  * @returns {Promise}
  */
	deleteItem: function deleteItem(id) {
		return this._call('delete', 'api/item/' + id);
	}
};

module.exports = untilNowApi;
