/**
 * untilNowApi client API
 * 
 */
const rp = require('request-promise');

const untilNowApi = {
	_baseUrl() {
		with (this) {
			return `${protocol}://${host}:${port}`;
		}
	},

	_call(method, path, body) {
		return rp({
			method,
			uri: `${this._baseUrl()}/${path}`,
			body,
			json: true
		})
	},

	ping(){
		return this._call('get','api/ping');
	},

	listCollections(){
		return this._call('get','api/collections');
	},

	retrieveCollection(id){
		return this._call('get',`api/collection/${id}`);
	},

	listItems(){
		return this._call('get', 'api/items');
	},

	listItemsInCollection(id){
		return this._call('get', `api/items/${id}`);
	},

	createCollection(name, id_user){
		const body = {
			"name": name,
			"id_user": id_user
		};
		return this._call('post','api/collection', body);
	},

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

	deleteCollection(id){
		return this._call('delete', `api/collection/${id}`);
	},

	deleteItem(id){
		return this._call('delete', `api/item/${id}`);
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