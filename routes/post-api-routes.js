var db = require("../models");

//ROUTES
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/barbers/", function(req, res) {
    db.Barber.findAll({})
      .then(function(dbBarber) {
        res.json(dbBarber);
      });
  });
// Get route for returning posts of a specific category
  app.get("/api/barber/category/:category", function(req, res) {
    db.Post.findAll({
      where: {
        category: req.params.category
      }
    })
      .then(function(dbBarber) {
        res.json(dbBarber);
      });
  });

// route for saving a new post
  app.post("/api/barber", function(req, res) {
    console.log(req.body);
    db.Barber.create({
      //title: req.body.title,
      //body: req.body.body,
      //category: req.body.category
    })
      .then(function(dbBarber) {
        res.json(dbBarber);
      });
  });





};
