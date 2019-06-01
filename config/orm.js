// Import MySQL connection.
var connection = require("../config/connection.js");

// In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

var orm = {
    // selectAll()
    selectAll: function (cb) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        })
    },
    // insertOne()
    insertOne: function (burgerName, cb) {
        var queryString = 'INSERT INTO burgers (burger_name) VALUES ("';
        queryString += burgerName;
        queryString += '")';

        console.log(queryString);
        
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    // updateOne()
    updateOne: function (burgerId, cb) {
        var queryString = "UPDATE burgers SET devoured = 1 WHERE id = ";
        queryString += burgerId;

        console.log(queryString);
        
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    // deleteOne()
    deleteOne: function (burgerId, cb) {
        var queryString = "DELETE FROM burgers WHERE id = ";
        queryString += burgerId;

        console.log(queryString);
        
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    }
};

// Export the ORM object in module.exports.
module.exports = orm;