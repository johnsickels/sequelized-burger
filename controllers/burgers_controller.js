// Inside the burgers_controller.js file, import the following:

// Express
var express = require("express");
// burger.js
var db = require("../models");

// Create the router for the app, and export the router at the end of your file.
var router = express.Router();

router.get("/", function (req, res) {
    db.Burger.findAll().then(function(dbBurger) {
        var hbsObject = {
            burgers: dbBurger
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
        
    })
    // burger.selectAll(function (data) {
    //     var hbsObject = {
    //         burgers: data
    //     };
    //     console.log(hbsObject);
    //     res.render("index", hbsObject);
    // });

    router.post("/api/burgers", function (req, res) {
        // burger.insertOne(req.body.name, function (result) {
            
        //     console.log("Created");
        //     res.json({ id: result.insertId });
            
        // });
    });

    router.put("/api/burgers/:id", function (req, res) {
        var condition = "id = " + req.params.id;

        console.log("condition", condition);
        // burger.updateOne(req.params.id, function (result) {
        //     console.log("devoured");
        //     res.json({ id: result.insertId });
            
            
        // });
    });

    router.delete("/api/burgers/:id", function (req, res) {
        var condition = "id = " + req.params.id;

        console.log("condition", condition);
        // burger.deleteOne(req.params.id, function (result) {
        //     console.log("deleted");
        //     res.json({ id: result.insertId });
            
            
        // });
    });
});

// Export routes for server.js to use.
module.exports = router;