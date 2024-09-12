const db = require("../db/queries");

async function getAllBooks(req, res) {
	const books = await db.getAllBooks();
	res.render("index", { title: "Home", books });
}

async function getBooksByAuthor(req, res) {
	const authorSlug = req.params.author;
	const { author } = (await db.getAuthorBySlug(authorSlug))[0];
	const books = await db.getBooksByAuthor(author);
	res.render("author", { title: "Authors", author, books });
}

async function getBooksByGenre(req, res) {
	const genreSlug = req.params.genre;
	const genre = genreSlug
		.split("-")
		.map(word => word.charAt(0).toUpperCase() + word.slice(1))
		.join(" ");
	const books = await db.getBooksByGenre(genre);
	res.render("genre", { title: "Genres", genre, books });
}

async function getAllAuthors(req, res) {
	const authors = await db.getAllAuthors();
	res.render("allAuthors", { title: "Authors", authors });
}

async function getAllGenres(req, res) {
	const genres = await db.getAllGenres();
	genres.forEach(genre => (genre.slug = genre.genre.toLowerCase().replaceAll(" ", "-")));
	res.render("allGenres", { title: "Genres", genres });
}

module.exports = { getAllBooks, getBooksByAuthor, getBooksByGenre, getAllAuthors, getAllGenres };
