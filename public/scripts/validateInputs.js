import { doesBookExistByAuthor } from "./checkDatabase.js";
import { doesAuthorExist } from "./checkDatabase.js";
import { doesGenreExist } from "./checkDatabase.js";

export const validateTitle = async function (book, author) {
	const titleAvailable = await doesBookExistByAuthor(book, author);

	return titleAvailable;
};

export const validateAuthor = async function (author) {
	const authorExists = await doesAuthorExist(author);

	return authorExists;
};

export const validateGenres = async function (genresInput) {
	const genresArr = genresInput
		.replace(/,\s*$/, "")
		.split(",")
		.map(genre => genre.trim());

	const checkedGenres = await Promise.all(
		genresArr.map(async genre => {
			const exists = await doesGenreExist(genre);
			return !exists ? genre : null;
		})
	);
	const notFoundGenres = checkedGenres.filter(genre => genre !== null);

	return { areGenresValid: notFoundGenres.length === 0, invalidGenres: notFoundGenres };
};
