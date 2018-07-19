var ACCESS_TOKEN_KEY = 'ACCOUNT_TOKEN';
const ACCOUNT_ID_KEY = 'ACCOUNT_ID';

var storage = {
	setItem: function(key,value) {
		localStorage.setItem(key, value);
	},
	
	getItem: function(key) {
		const value = localStorage.getItem(key);
		return value ? JSON.parse(value) : undefined;
	},

	setAccessToken: function(accessToken) {
		storage.setItem(ACCESS_TOKEN_KEY, accessToken);
	},

	setAccountId(accountId) {
		storage.setItem(ACCOUNT_ID_KEY, accountId);
	},
};