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

    router.post("/api/chefs", function (req, res) {
        db.Chef.create({
            chef_name: req.body.chef
        }).then(function (dbChef) {

            res.json({ id:dbChef.insertId });
            console.log("chef added");
        })
    });

    router.post("/api/burgers", function (req, res) {
        console.log("post");
        
        router.get("/api/chefs", function(req, res) {
            console.log("get");
            
            db.Chef.findOne({
                where: {
                    chef_name: $("#chef")
                }
            }).then(function (data) {
                console.log("Nested get for chef ID here: " + data);
                
            })
        })
        // db.Burger.create({
        //     burger_name: req.body.name,
        //     ChefId: 1
        // }).then(function (dbBurger) {
        //     res.json({ id: dbBurger.insertId });
        // })
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