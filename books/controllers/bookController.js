const Books = require("../models/books");
const Book = require("../models/books");

const getAll = async(req, res) => {
    try {
        const books = await Books.find({});
        if(!books){
            return res.send("No book is available")
        }else{
            return res.send(books);
        } 
    } catch (error) {
       return res.send(error);
    }
}

const getById = async(req, res) => {
    try {
        const books = await Books.findById(req.params.id);
        if(!books){
            return res.send("No book is available")
        }else{
            return res.send(books);
        } 
    } catch (error) {
       return res.send(error);
    }
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

const remove = async (req, res) => {
    try {
        const book = await Books.findById(req.params.id);
        if (book) { 
            await Book.deleteOne(book);
            return res.send({ message: "Deleted Successfully" });
        } else {
            return res.send({ message: "No Book Available By This Id" });
        }
    } catch (error) {
        return res.status(400).send({ message: error.message });
    }
}

module.exports = {
    getAll,
    create,
    getById,
    remove
}