var db = require("../models");

module.exports = function(app) {
  app.get("/api/barbers", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Barber.findAll({
      include: [db.Post]
    }).then(function(dbBarber) {
      res.json(dbBarber);
    });
  });

  app.get("/api/barbers/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Barber.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Post]
    }).then(function(dbBarber) {
      res.json(dbBarber);
    });
  });

  app.post("/api/barbers", function(req, res) {
    db.Barber.create(req.body).then(function(dbBarber) {
      res.json(dbBarber);
    });
  });

  // app.delete("/api/barbers/:id", function(req, res) {
  //   db.Barber.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function(dbBarber) {
  //     res.json(dbBarber);
  //   });
  // });

};
