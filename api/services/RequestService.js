var request = require('request');

module.exports = {
	/**
	 * Method: getData
	 * @return json
	 * returns Response called API method
	 */
	getData: function(url, header, callback) {
		request.get({
			url: url,
			headers: header,
			rejectUnauthorized: true,
		}, function(error, response, body) {
			if (error) {
				callback(error, response, null);
			} else {
				try {
					callback(null, response, JSON.parse(body));
				} catch (err) {
					callback(err, response);
				}
			}
		});
	}
}
