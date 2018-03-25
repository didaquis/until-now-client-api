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
  * Execute a petition
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
  * Do a petition with auth
  * @param {string} token - auth token
  * @param {string} method - Method of petition: get, post...
  * @param {string} path - precise endpoint
  * @param {string} [body] - body of petition
  * @returns {Promise}
  */
	_callWithToken: function _callWithToken(token, method, path, body) {
		return rp({
			method: method,
			uri: this._baseUrl() + '/' + path,
			body: body,
			auth: {
				'bearer': token
			},
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
  * Request for log user on system
  * @param {string} username 
  * @param {string} password
  * @returns {Promise}
  */
	loginUser: function loginUser(username, password) {
		var body = {
			'username': username,
			'password': password
		};
		return this._call('post', 'api/login', body);
	},


	/**
  * Request all collections
  * @param {string} token - auth token
  * @returns {Promise}
  */
	listCollections: function listCollections(token) {
		return this._callWithToken(token, 'get', 'api/collections');
	},


	/**
  * Request all collections from user
  * @param {string} id_user
  * @param {string} token - auth token
  * @returns {Promise}
  */
	listCollectionsFromUser: function listCollectionsFromUser(id_user, token) {
		var body = {
			'id_user': id_user
		};
		return this._callWithToken(token, 'get', 'api/collections-user', body);
	},


	/**
  * Request a collection
  * @param {string} id - Id of collection
  * @param {string} token - auth token
  * @returns {Promise}
  */
	retrieveCollection: function retrieveCollection(id, token) {
		return this._callWithToken(token, 'get', 'api/collection/' + id);
	},


	/**
  * Request all items
  * @param {string} token - auth token
  * @returns {Promise}
  */
	listItems: function listItems(token) {
		return this._callWithToken(token, 'get', 'api/items');
	},


	/**
  * Request items in a collection
  * @param {string} id - Id of collection
  * @param {string} token - auth token
  * @returns {Promise}
  */
	listItemsInCollection: function listItemsInCollection(id, token) {
		return this._callWithToken(token, 'get', 'api/items/' + id);
	},


	/**
  * Create a new collection
  * @param {string} name - Name of collection
  * @param {string} id_user - Id of username owner
  * @param {string} token - auth token
  * @returns {Promise}
  */
	createCollection: function createCollection(name, id_user, token) {
		var body = {
			'name': name,
			'id_user': id_user
		};
		return this._callWithToken(token, 'post', 'api/collection', body);
	},


	/**
  * Create a new item
  * @param {string} name - Name of item 
  * @param {string} dateStart - Must be format as valid Date object
  * @param {string} dateEnd - Must be format as valid Date object
  * @param {string} [refNumber] 
  * @param {string} [notes] 
  * @param {string} id_collection
  * @param {string} id_user
  * @param {string} token - auth token 
  * @returns {Promise}
  */
	createItem: function createItem(name, dateStart, dateEnd, refNumber, notes, id_collection, id_user, token) {
		var body = {
			'name': name,
			'dateStart': dateStart,
			'dateEnd': dateEnd,
			'refNumber': refNumber,
			'notes': notes,
			'id_collection': id_collection,
			'id_user': id_user
		};
		return this._callWithToken(token, 'post', 'api/item', body);
	},


	/**
  * Delete a collection
  * @param {string} id - Id of collection
  * @param {string} token - auth token
  * @returns {Promise}
  */
	deleteCollection: function deleteCollection(id, token) {
		return this._callWithToken(token, 'delete', 'api/collection/' + id);
	},


	/**
  * Delete an item
  * @param {string} id - Id of item
  * @param {string} token - auth token
  * @returns {Promise}
  */
	deleteItem: function deleteItem(id, token) {
		return this._callWithToken(token, 'delete', 'api/item/' + id);
	},


	/**
  * Retrieve an user
  * @param {string} id - Id of user
  * @param {string} token - auth token
  * @returns {Promise}
  */
	retrieveUser: function retrieveUser(id, token) {
		return this._callWithToken(token, 'get', 'api/user/' + id);
	}
};

module.exports = untilNowApi;
