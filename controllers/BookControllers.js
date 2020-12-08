const Book = require("../models/Book");

// @desc Get all books
// @route GET /api/v1/books
// @access Public
exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        return res.status(200).json({
            success: true,
            number: books.length,
            data: books,
        });
    } catch (error) {
        return res.status(404).json({
            success: false,
            message: error
        });
    }
};

// @desc    Create a book
// @route   POST /api/v1/books
// @access  Public
exports.createBook = async (req, res) => {
    try {
        const book = await Book.create(req.body);
        return res.status(201).json({ success: true, data: book });
    } catch (error) {
        return res.status(404).json({
            success: false,
            message: error,
        });
    }
};