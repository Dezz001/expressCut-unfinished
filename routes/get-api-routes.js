var db = require("../models")

module.exports = function(app) {
    app.get("/api/cutsomer", function(req, res) {
        db.customer.findAll({
            include: [db.post] 
        }).then(function(dbcustomer) {
            res.json(expresscuts.customer);
            });
    });

// Put Route for updating Customer logins
   app.put("/api/customer", function(req, res) {
      db.Post.update(req.body,
          {
            where: {
            id: req.body.id
            }
          }).then(function(dbPost) {
            res.json(dbPost);
            });
    });
};


module.exports = function(app) {
    app.get("/api/barber", function(req, res) {
        db.barber.findAll({
            include: [db.post] 
        }).then(function(dbbarber) {
            res.json(expresscuts.barber);
            });
    });

// Put Route for updating Customer logins
   app.put("/api/barber", function(req, res) {
      db.Post.update(req.body,
          {
            where: {
            id: req.body.id
            }
          }).then(function(dbPost) {
            res.json(dbPost);
            });
    });
};
 