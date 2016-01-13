module.exports = {
	/**
	 * Method: getMyInfo
	 * @return json
	 * returns Gets authenticated user profile
	 */
	getMyInfo: function(headers, parameters, callback) {
		var url = sails.config.github.baseUrl+'/user';
		var postHeader={
				'User-Agent': headers.host,
				'Accept':"application/vnd.github.v3+json",
				'Authorization':headers.authorization // pass authorisation header got in request
			};
		RequestService.getData(url, postHeader, callback);
	},
}
