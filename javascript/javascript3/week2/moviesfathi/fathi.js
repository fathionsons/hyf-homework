const apiUrl =
  "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json";
function getMoviesApi(url) {
  promise1 = fetch(url)
    .then(respo => respo.json())
    .then(data => {
      return data.filter(movie => {
        return movie.rating < 1;
      });
    })
    .then(badMovies =>
      badMovies.filter(movie => {
        return movie.year > 1000;
      })
    )
    .then(badMoviesSince2000 =>
      badMoviesSince2000.map(movie => {
        return movie.title;
      })
    );
  return promise1;
}

console.log(getMoviesApi(apiUrl));
getMoviesApi(apiUrl);
//something went wrong, so i think it is the URL
// Fathi javascript 3 week 2