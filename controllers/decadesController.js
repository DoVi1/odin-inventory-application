const db = require("../db/queries/queries");

exports.getAllDecades = async function (req, res) {
	const data = await db.getAllDecades();
	const centuries = data.reduce((previousCenturiesValue, decadeEntry) => {
		const decade = Number(decadeEntry.decade, 10);
		const century = Math.floor(decade / 100) * 100;

		previousCenturiesValue[century] = (previousCenturiesValue[century]) ?
			previousCenturiesValue[century].concat([decadeEntry]) :
			[decadeEntry]
		return previousCenturiesValue

	}, {})
	res.render("allDecades", { title: "Decades", centuries });
};

exports.getBooksByDecade = async function (req, res) {
	const decade = req.params.decade;
	const decadeNum = Number(decade.replace(/\D/g, ""));
	const books = await db.getBooksByDecade(decadeNum);
	res.render("decade", { title: "Decades", decade, books });
};
