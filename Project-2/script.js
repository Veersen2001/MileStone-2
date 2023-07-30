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
  
    
    <h2 style="color:#fff;">${movie.Title}</h2>
    <img style ="height:500px;width:400px" src="${movie.Poster}" alt="${movie.Title} Poster">
    <button style=" background-color:red ">Download</button>
  
  `;
}
