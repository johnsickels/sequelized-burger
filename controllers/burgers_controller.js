// Inside the burgers_controller.js file, import the following:

// Express
var express = require("express");
// burger.js
var db = require("../models");

// Create the router for the app, and export the router at the end of your file.
var router = express.Router();

router.get("/", function (req, res) {
    db.Burger.findAll().then(function (dbBurger) {
        var hbsObject = {
            burgers: dbBurger
        };
        res.render("index", hbsObject);
    });

    router.post("/api/burgers", function (req, res) {
        db.Burger.create({
            burger_name: req.body.name
        }).then(function (dbBurger) {
            res.json({ id: dbBurger.insertId });
        })
    });

    router.put("/api/burgers/:id", function (req, res) {
        db.Burger.update({
            devoured: 1
        }, {
                where: {
                    id: req.params.id
                }
            }).then(function (dbBurger) {
                res.json({ id: dbBurger.insertId });
            })
    });

    router.delete("/api/burgers/:id", function (req, res) {
        db.Burger.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbBurger) {
            res.json({ id: dbBurger.insertId });
        })
    });
});

// Export routes for server.js to use.
module.exports = router;