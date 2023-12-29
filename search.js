// Define the API URL
const apiUrl = "http://localhost:3000/film";

// Function to perform a search based on user input
function performSearch() {
 // Get the value from the search input element, remove leading/trailing spaces, and convert to lowercase for consistent comparison
const searchInputValue = document
.getElementById("searchInput") 
.value.trim()                 
.toLowerCase();              


  // Check if the search input is empty
  if (searchInputValue === "") {
    // Display a message to enter a valid name if the search input is empty
    const searchResultsContainer = document.getElementById("searchResults");
    searchResultsContainer.innerHTML = "Please enter a search term.";
    return;
  }

  // Fetch data from the API endpoint
  axios.get(apiUrl)
    .then((response) => {
      const data = response.data;
      
      // Filter data based on search input value
      const searchResults = data.filter(
        (film) =>
          film.Title.toLowerCase().includes(searchInputValue) ||
          film.Genre.toLowerCase().includes(searchInputValue) ||
          film.Year.toLowerCase().includes(searchInputValue) ||
          film.Actors.toLowerCase().includes(searchInputValue) ||
          film.Language.toLowerCase().includes(searchInputValue) ||
          film.Type.toLowerCase().includes(searchInputValue) 
      );
      
      // Display the filtered search results
      displayResults(searchResults);
    })
    .catch((error) => console.error("Error fetching data:", error));
}

// Function to display search results
function displayResults(results) {
  const searchResultsContainer = document.getElementById("searchResults");

  // Clear the previous search results
  searchResultsContainer.innerHTML = "";

  // Check if there are no search results
  if (results.length === 0) {
    // Display a message for no results found
    searchResultsContainer.innerHTML = "No results found.";
    return;
  }


  const spaceforcode = `<div class="container"><div class="row video-title no-margin"><h3>Your Search Result</h3></div></div>`;
  searchResultsContainer.innerHTML = spaceforcode;

  results.forEach((movie) => {
    const card = document.createElement('div');
    card.className = 'col-lg-3 col-md-4 col-sm-6';
    card.innerHTML = `
      <div class="video-card">
        <img src="${movie.Poster}" alt="${movie.Title}">
        <div class="row details no-margin">
          [<h6>${movie.Title}</h6>]-[
          <div class="">${movie.Runtime}</div>]-[
          <div class="">${movie.imdbRating}</div>]
        </div>
        <button type="button" class="btn btn-danger">
          <a href="single.html">Play Now</a>
        </button>
      </div>
    `;
    searchResultsContainer.appendChild(card);
  });
}
