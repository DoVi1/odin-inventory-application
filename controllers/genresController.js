const db = require("../db/queries/queries");
const { strToSlug, slugToStr } = require("../js/utils");
const { capitaliseStr } = require("../js/utils");

exports.postNewGenre = async function (req, res) {
	await db.insertGenre(req.body);
	res.redirect("/genres");
};

exports.getAllGenres = async function (req, res) {
	const genres = await db.getAllGenres();
	genres.forEach(genre => (genre.slug = strToSlug(genre.genre)));
	res.render("./genres/genres", { title: "Genres", genres });
};

exports.getNewGenreForm = function (req, res) {
	res.render("./genres/newGenre", { title: "New Genre" });
};

exports.getBooksByGenre = async function (req, res) {
	const genreSlug = req.params.genre;
	const genre = slugToStr(genreSlug);
	const books = await db.getBooksByGenre(genre);
	res.render("./genres/genre", { title: "Genres", genre, books });
};
