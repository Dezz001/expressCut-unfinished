module.exports = function(sequelize, DataTypes) {
    var Customer = sequelize.define("Customer", {
      // Giving the Author model a name of type STRING
      Firstname: DataTypes.STRING,
      Lastname: DataTpes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      phone: DataTypes.STRING,
      email: DataTypes.STRING
    });

    return Customer;
  };
  