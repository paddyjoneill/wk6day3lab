const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getTitles = function() {
  const result = this.films.map((film) => {
    return film.title
  })
  return result
}

Cinema.prototype.findFilmByTitle = function (title) {
  const result = this.films.find((film) => film.title === title)
  return result
}

Cinema.prototype.filterByGenre = function (genre) {
  const result = this.films.filter((film) => film.genre === genre)
  return result
}

module.exports = Cinema;
