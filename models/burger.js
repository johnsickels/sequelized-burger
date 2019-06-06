// // Export the database functions for the controller

module.exports = function (sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: DataTypes.STRING,
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
  Burger.associate = function(models) {
    Burger.belongsTo(models.Chef, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Burger;
};
