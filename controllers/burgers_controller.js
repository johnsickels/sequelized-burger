var express = require("express");
var db = require("../models");

var router = express.Router();

router.get("/", function (req, res) {

    db.Burger.findAll({
        include: [db.Chef]
    }).then(function (dbBurger) {
        var hbsObject = {
            burgers: dbBurger
        };
        res.render("index", hbsObject);
    });

    router.post("/api/burgers", function (req, res) {
        console.log(req.body.name);
        console.table(req.body);
        
        db.Burger.create({
            burger_name: req.body.name,
            Chef: {
                chef_name: req.body.chef
            }
        }, {
                include: [db.Chef]
            }).then(function (dbChef) {
                res.json(dbChef);
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