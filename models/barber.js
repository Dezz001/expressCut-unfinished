module.exports = function(sequelize, DataTypes) {
    var Barber = sequelize.define("Barber", {
      // Giving the Author model a name of type STRING
      Firstname: DataTypes.STRING,
      Lastname: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      phone: DataTypes.STRING,
      email: DataTypes.STRING,
      address: DataTypes.STRING,
      Calendy: DataTypes.STRING,
      Profile: DataTypes.STRING
    });
  
    return Barber;
  };
  