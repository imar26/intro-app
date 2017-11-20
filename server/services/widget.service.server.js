module.exports = function(app) {
	app.get('/api/widget', findWidgets);
	var WIDGETS = require('./widget.mock.server.js');
	function findWidgets(req, res) {
		res.json(WIDGETS);
	}
};