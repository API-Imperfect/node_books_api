const express = require("express");

const { createBook, getAllBooks } = require("../controllers/BookControllers");

//intialize the express Router
const router = express.Router();

// declare the routes
router.route("/books").get(getAllBooks).post(createBook);

module.exports = router;
