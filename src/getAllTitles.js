const movies = require("../data/movies");

const getAllTitles = (movies) => {
 if (!movies || movies.length === 0) {
  return [];
 }

  return movies.map(movies => movies.titulo)

}

module.exports = {
  getAllTitles
}