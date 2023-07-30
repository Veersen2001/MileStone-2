const apiKey = '59877548'; // Replace this with your actual API key

const searchButton = document.getElementById('searchButton');
const movieTitleInput = document.getElementById('movieTitle');
const movieDetailsDiv = document.getElementById('movieDetails');

searchButton.addEventListener('click', searchMovie);

async function searchMovie() {
  const movieTitle = movieTitleInput.value.trim();
  if (movieTitle === '') {
    alert('Please enter a movie title');
    return;
  }

  try {
    const response = await fetch(` http://www.omdbapi.com/?t=${movieTitle}&apikey=${apiKey}`);
    const data = await response.json();

    if (data.Response === 'False') {
      alert('Movie not found. Please try again.');
      return;
    }

    displayMovieDetails(data);
  } catch (error) {
    alert('An error occurred. Please try again later.');
  }
}

function displayMovieDetails(movie) {
  movieDetailsDiv.innerHTML = `
    <h1> you can't download !sorry..<h1>
    <h2>${movie.Title}</h2>
    <img src="${movie.Poster}" alt="${movie.Title} Poster">
    <p><strong>Year:</strong> ${movie.Year}</p>
    <p><strong>Director:</strong> ${movie.Director}</p>
    <p><strong>Actors:</strong> ${movie.Actors}</p>
    <p><strong>Plot:</strong> ${movie.Plot}</p>
    <p><strong>IMDb Rating:</strong> ${movie.imdbRating}</p>
  `;
}
