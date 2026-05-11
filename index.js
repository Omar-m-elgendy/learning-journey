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
        console.log("db connected to database successfully");
    }
});

// builtin middleware express.json() >> parsing body >> row json
app.use(express.json()); // global middleware >> for all routes

// API >> add driver (Changed from users to drivers)
app.post("/drivers", (req, res, next) => {
    //get data from request body
    const { name, email, password } = req.body;
    
    // prepare query to execute in DB  >> Using ? protects against SQL injection 
    let query = `INSERT INTO drivers (name, email, password) VALUES (?, ?, ?)`;
    
    // prepare statement
    dbConnection.execute(query, [name, email, password], (error, results) => {
        if (error) {
            // Fixed typo: errno instead of errorno
            if (error.errno === 1062) { 
                return res.status(409).json({ message: "email already exists", success: false });
            }
            return res.status(500).json({ message: "server error", error });
        }
        if (results.affectedRows == 0) {
            // Updated message to match 'driver'
            return res.status(500).json({ message: "fail to create driver", success: false }); 
        }
        //send response (Updated message to match 'driver')
        return res.status(201).json({ message: "driver created successfully", success: true, driverId: results.insertId });
    });
});

app.listen(port, () => {
    console.log("App is running on port ", port);
});
