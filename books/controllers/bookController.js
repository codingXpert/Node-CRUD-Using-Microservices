const Book = require("../models/books");

const getAll = (req, res) => {
    return res.send("This is book service");
}

const create = async (req, res) => {
    try {
        const newBook = await Book.create(req.body);
        if (newBook) { 
            return res.status(201).send({ message: "New Book Created Successfully" });
        } else {
            return res.status(400).send({ message: "Failed to create new book" });
        }
    } catch (error) {
        return res.status(400).send({ message: error.message });
    }
}


module.exports = {
    getAll,
    create
}