const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const booksSchema = {
	title: String
};

const Book = mongoose.model('Book', booksSchema);

router.route('/create').post((req, res) => {
	const bookname = req.body.title;
	const newBook = new Book({
		title: bookname
	});
	newBook.save();
});

router.route('/books').get((req, res) => {
	Book.find().then((foundBooks) => res.json(foundBooks));
});

module.exports = router;
