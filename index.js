/**
 * core module
 * custom module
 * third party module 
 */

const fs = require ("node:fs");
const path = require("node:path");
const express = require("express");
const anything = require("./utils.js");
//anything.sayHi("Omar");

const app = express();
const port = 3000;

//url method >> handler
//get product

/**
 * @method GET
 * @url /product
 * @params none
 * 
 */
app.get("/product", (req, res, next) => {
    let  data = fs.readFileSync("./product.json", "utf-8");
    data = JSON.parse(data);
    // logic of code
    //res.setHeader("Content-Type", "application/json");
    //res.write(JSON.stringify(data));
    //res.end();

    //logic of code
    /**
     * res.send
     * res.json
     * res.status   >> customize status code
     * res.sendFile
     */
    //res.status(201).json(data);
    res.sendFile(path.resolve("./product.json"));

} );
/**
 * @method POST
 * @url /product
 */


app.post("/product",
    (req,res, next) => {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk;
        });
        req.on("end", () => {
            //pares body 
            req.body = JSON.parse(req.body);
            req.body = body;
            next();
        });
    },
    (req, res,next) => { 
    let body = "";
    req.on("data", (chunk) => {
        body += chunk;
    });
    req.on('end', () => {
        body = JSON.parse(body);
        console.log(body);
        const data = fs.readFileSync("./product.json", "utf-8");
        // add new data  >> body
        data = JSON.parse(data);
        data.push(req.body);
        fs.writeFileSync("./product.json", JSON.stringify(data));
        res.json({message: "Product added successfully", success:true});
    });
});


// consept midleware , is a function
//app.post(
//    "/dkg",
    /** 
    (req,res,next) => {
        req.username = "john"; //>> middleware >> is a function that takes req, res, next and do something with them
        if (1) next();
        console.log(1);  // login
    },  //>> middleware
    (req,res,next) => {
        console.log(req.username); //>> middleware
        next();
        console.log(2):  // is admin
        },  //>> middleware
    (req,res,next) => {
        next();
        console.log(3);  // phtos upload
    },  //>> middleware
    */
//    (req,res,next) => {}  //>> handler
//);
// last next we don't need to call it because it's the last function in the chain
//global error middleware


app.listen(3000, () => {
    console.log("Server is running on port ", port);
});
