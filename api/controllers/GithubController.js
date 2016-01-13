/**
 * GithubController
 *
 * @description :: Server-side logic for managing githubs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	followers : function(req, res) {		
		console.log("Headers: ", req.headers);
		console.log("Query Parameters: ", req.query);

		GitHubService.getMyInfo(req.headers, req.query, function(err, response, data) {
			if (err) {
				return res.send(err)
			};
			var responseObj={};
			responseObj.frames=[];
			var frame = {
				'index':0,
				'text': data.followers,
				'icon':'i305',
			};
			responseObj.frames.push(frame);
			if (!data) {
				console.log("Error: ", response.statusCode);
				res.status(response.statusCode).send(response.body);
			}else{
				console.log("Response: ", responseObj);
				return res.status(200).json(responseObj);
			}
		})
	},

};

