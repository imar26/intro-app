module.exports = function(app) {
	app.get("/api/user/hello", helloUser);
	app.get("/api/user", findUser);
	app.get("/api/user/:userId", findUserById);

	var users = [
		{_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder", email: ""  },
		{_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley", email: ""  },
		{_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia", email: ""  },
		{_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi", email: "" }
	];

	function helloUser(req, res) {
		res.send("Hello from helloUser");
	}

	function findUser(req, res) {
		var username = req.query.username;
		var password = req.query.password;

		console.log(username);
		console.log(password);

		if(username && password) {
			for(var i=0; i<users.length;i++) {
				if(users[i].username === username && users[i].password === password) {
					res.json(users[i]);
				}
			}
		} else if(username) {
			for(var i=0; i<users.length;i++) {
				if(users[i].username === username && users[i].password === password) {
					res.json(users[i]);
				}
			}
		}
	}

	function findUserById(req, res) {
		var userId = req.params.userId;
		console.log(userId);
		for(var i=0; i<users.length;i++) {
			if(users[i]._id === userId) {
				console.log(users[i]);
				res.json(users[i]);
			}
		}
	}
};