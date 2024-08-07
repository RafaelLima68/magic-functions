const movies = require("../data/movies");

function getMovieById(id) {
  if (id === undefined || typeof id !== 'number') {
    return undefined;
  }

  const movie = movies.find(movie => movie.id === id);

  return movie;
}

module.exports = {
  getMovieById
}