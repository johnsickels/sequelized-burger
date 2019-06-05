// Inside the burgers_controller.js file, import the following:

// Express
var express = require("express");
// burger.js
var db = require("../models");

// Create the router for the app, and export the router at the end of your file.
var router = express.Router();

router.get("/", function (req, res) {
    var chefId;

    db.Burger.findAll({
        include: [db.Chef]
    }).then(function (dbBurger) {
        var hbsObject = {
            burgers: dbBurger
        };
        res.render("index", hbsObject);
    });

    // router.post("/api/chefs", function (req, res) {
    //     db.Chef.create({
    //         chef_name: req.body.chef
    //     }).then(function (dbChef) {
    //         // res.json({ id: dbChef.insertId });
    //         console.log("chef added");
    //         chefId = dbChef.id;
    //         console.table(dbChef.id)
    //     })
    // });

    router.post("/api/burgers", function (req, res) {
        console.log("Nested post");
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
    
    // router.post("/api/burgers", function (req, res) {
    //     console.log("post");

    //     router.get("/api/chefs", function (req, res) {
    //         console.log("get");
    //         var query = {};
    //         if (req.query.chef_id) {
    //             query.ChefId = req.query.chef_id;
    //         }
    //         db.Burgers.findOne({
    //             where: query,
    //             include: [db.Chef]
    //         }).then(function (data) {
    //             console.log("Nested get for chef ID here: " + data);
    //             res.json(data)
    //             db.Burger.create({
    //                 burger_name: req.body.name,
    //                 ChefId: 1
    //             }).then(function (dbBurger) {
    //                 res.json({ id: dbBurger.insertId });
    //             })
    //         })
    //     })

    // });

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