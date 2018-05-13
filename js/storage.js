var ACCESS_TOKEN_KEY = 'WORKON_ACCESS_TOKEN';

var storage = {
	setItem: function(key,value) {
		localStorage.setItem(key, JSON.stringify(value));
	},
	
	getItem: function(key) {
		const value = localStorage.getItem(key);
		return value ? JSON.parse(value) : undefined;
	},
	
	getAccessToken: function () {
		return storage.getItem(ACCESS_TOKEN_KEY);
	},
	
	setAccessToken: function(accessToken) {
		storage.setItem(ACCESS_TOKEN_KEY, accessToken);
	}
};