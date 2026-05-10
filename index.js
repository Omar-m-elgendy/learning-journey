const express = require("express");
const mysql = require("mysql2");
const app = express();
const port = 3000;
// connection to DB

const dbConnection = mysql.createConnection({
    host: "localhost",  //  127.0.0.1  >> clever cloud >> 500m for free
    //by default: 3306,
    user: "root",
    password: "",
    database: "uber"
});
// check connection


dbConnection.connect((err) => {
    if (err) {
        console.error("fail to connect to database: ", err);
    } else {
        console.log(" db connected to database successfully");
    }
});
// builtin middleware express.json() >> parsing body >> row json

app.use(express.json()); // global middleware >> for all routes

//API >> add user
app.post("/users", (req, res, next) => {
    //get data from request body
    const { name, email, password } = req.body;
    // prepare query to execute in DB
    let query = `INSERT INTO drivers (name, email, password) VALUES ("${name}", "${email}", "${password}")`;
    // prepare statment
    dbConnection.execute(query, (error, results) => {
        if (error) {
            if (error.errorno === 1062) {
                return res.status(409).json({ message: "email already exists", success: false });
            }
            return res.status(500).json({ message: "server error", error });
        }
        if (results.affectedRows == 0) {
            return res.status(500).json({ message: "fail to create user", success: false });
        }
        //send response
        return res.status(201).json({ message: "user created successfully", success: true,userId: results.insertId });
    //console.log({name, email, password}); // to make sure data is received correctly
        //const query = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
    });
});

/*
// define a route
app.get("/", (req, res) => {
    res.send("Hello World!");
});
*/
app.listen(port, () => {
    console.log("App is running on port ", port);
});