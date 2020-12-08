require("dotenv").config();
const express = require("express");
const connectDB = require("./database/db");

// initialize app
const app = express();

// connect to database
connectDB()

// enable app to parse JSON
app.use(express.json());

// Load route files
const BookRoutes =require("./routes/BookRoutes");

// declare PORT
const PORT = process.env.PORT || 5000;

// Mount Routers- create routes
app.get("/", (req, res) => {
    res.json({
        Hi: "Welcome to The NodeJs Book API",
    });
});

app.use("/api/v1", BookRoutes)

// server should listen to this port
// using `` ES6 template literals
app.listen(
    PORT,
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
    )
);
