module.exports = function(app) {
    app.get("/api/user/:userId/website", findWebsitesByUserId);
    app.get("/api/user/:userId/website/:websiteId", findWebsiteById);
    app.post("/api/user/:userId/website", createWebsite);
    app.put("/api/user/:userId/website", updateWebsite);
    app.delete("/api/user/:userId/website/:websiteId", removeWebsite);

    var websites = [
        { "_id": "123", "name": "Facebook",    "developerId": "456", "description": "Lorem" },
        { "_id": "234", "name": "Tweeter",     "developerId": "456", "description": "Lorem" },
        { "_id": "456", "name": "Gizmodo",     "developerId": "456", "description": "Lorem" },
        { "_id": "890", "name": "Go",          "developerId": "123", "description": "Lorem" },
        { "_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem" },
        { "_id": "678", "name": "Checkers",    "developerId": "123", "description": "Lorem" },
        { "_id": "789", "name": "Chess",       "developerId": "234", "description": "Lorem" }      
    ];

    function findWebsitesByUserId(req, res) {
        var userId = req.params.userId;
        var listOfWebsites = [];
        for(var i=0; i<websites.length; i++) {
            if(websites[i].developerId === userId) {
                listOfWebsites.push(websites[i]);
            }
        }
        res.json(listOfWebsites);
    }

    function findWebsiteById(req, res) {
        var websiteId = req.params.websiteId;
        for(var i=0; i<websites.length; i++) {
            if(websites[i]._id === websiteId) {
                res.json(websites[i]);
                return true;
            }
        }        
    }

    function createWebsite(req, res) {
        var length = (websites.length + 1).toString();
        var website = req.body;
        var websiteObj = {
            '_id': length,
            'name': website.name,
            'developerId': website.developerId
        };
        websites.push(websiteObj);
        res.json(websites);
    }

    function updateWebsite(req, res) {
        var website = req.body;
        for(var i=0; i<websites.length; i++) {
            if(websites[i]._id === website._id) {
                websites[i].name = website.name;
                res.json(websites);
                return true;
            }
        }
    }

    function removeWebsite(req, res) {
        var websiteId = req.params.websiteId;
        for(var i=0; i<websites.length; i++) {
            if(websites[i]._id === websiteId) {
                websites.splice(i, 1);
                res.json(websites);
                return true;
            }
        }
    }
};