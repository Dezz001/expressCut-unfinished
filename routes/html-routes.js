var path = require("path");

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("/customerLogin", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/customerLogin.html"));
  });

  app.get("/barberLogin", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/barberLogin.html"));
  });

  app.get("/customerPage", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/user.html"));
  });

  app.get("/barberPage", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/barber.html"));
  });







  app.get("/customerRegistration", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/customerRegistration.html"));
  });

  app.get("/barberRegistration", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/barberRegistration.html"));
  });

// OR

  app.get("/customerRegistration", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/newCustomer.html"));
  });

  app.get("/barberRegistration", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/newBarber.html"));
  });

};