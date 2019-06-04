module.exports = function (sequelize, DataTypes) {
    var Chef = sequelize.define("Chef", {
      chef_name: DataTypes.STRING
    });

    Chef.associate = function(models) {
        Chef.hasMany(models.Burger)
    };
    return Chef;
  };