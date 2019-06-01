// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

// The code that will call the ORM functions using burger specific input for the ORM.
var burger = {
    selectAll: function(cb) {
        orm.selectAll(function(res) {
            cb(res);
        });
    },
    insertOne: function(burger_name, cb) {
        orm.insertOne(burger_name, function(res) {
            cb(res);
        });
    },
    updateOne: function(burgerName, cb) {
        orm.updateOne(burgerName, function(res) {
            cb(res);
        });
    },
    deleteOne: function(burgerName, cb) {
        orm.deleteOne(burgerName, function(res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller
module.exports = burger;