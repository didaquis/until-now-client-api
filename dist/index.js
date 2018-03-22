'use strict';

/**
 * untilNowApi client API
 * 
 */
var rp = require('request-promise');

var untilNowApi = {
	_baseUrl: function _baseUrl() {
		return this.protocol + '://' + this.host + ':' + this.port;
	},
	_call: function _call(method, path, body) {
		return rp({
			method: method,
			uri: this._baseUrl() + '/' + path,
			body: body,
			json: true
		});
	},
	ping: function ping() {
		return this._call('get', 'api/ping');
	},
	listCollections: function listCollections() {
		return this._call('get', 'api/collections');
	},
	retrieveCollection: function retrieveCollection(id) {
		return this._call('get', 'api/collection/' + id);
	},
	listItems: function listItems() {
		return this._call('get', 'api/items');
	},
	listItemsInCollection: function listItemsInCollection(id) {
		return this._call('get', 'api/items/' + id);
	},
	createCollection: function createCollection(name, id_user) {
		var body = {
			"name": name,
			"id_user": id_user
		};
		return this._call('post', 'api/collection', body);
	},
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
	deleteCollection: function deleteCollection(id) {
		return this._call('delete', 'api/collection/' + id);
	},
	deleteItem: function deleteItem(id) {
		return this._call('delete', 'api/item/' + id);
	}

	// loginUser(username, password){
	// 	const body = {
	// 		"username": username,
	// 		"password": password
	// 	};
	// 	return this._call('post', `api/user`, body);
	// }

};

module.exports = untilNowApi;
