async function AddtoFav(title) {
    console.log("Title", title);
    const user = JSON.parse(sessionStorage.getItem("userData"));
    const userId = user[0].id;

    try {
        const response = await axios.get(`http://localhost:3000/user/${userId}`);
        const userData = response.data;

        if (!userData.favourites) {
            userData.favourites = [];
        }

       
        if (userData.favourites.includes(title)) {
            alert(`${title} is already in favorites!`);
            return; 
        }

        userData.favourites.push(title);

        await axios.patch(`http://localhost:3000/user/${userId}`, userData);
        alert("Successfully added to Favourites");
        console.log("Added to favorites:", title);
        displayFavorites(userId);
    } catch (error) {
        console.error("Error adding to favorites:", error);
    }
}

async function removeFavorite(title) {
    const user = JSON.parse(sessionStorage.getItem("userData"));
    const userId = user[0].id;

    try {
        const response = await axios.get(`http://localhost:3000/user/${userId}`);
        const userData = response.data;

        if (!userData.favourites) {
            userData.favourites = [];
        }

        const index = userData.favourites.indexOf(title);
        if (index !== -1) {
            
            userData.favourites.splice(index, 1);
            await axios.patch(`http://localhost:3000/user/${userId}`, userData);
            console.log("Removed from favorites:", title);
            displayFavorites(userId);
            alert(`Removed ${title} from favorites!`);
        } else {
            alert(`${title} is not in favorites.`);
        }
    } catch (error) {
        console.error("Error removing from favorites:", error);
    }
}

async function displayFavorites(userId) {
    try {
        const userResponse = await axios.get(`http://localhost:3000/user/${userId}`);
        const userData = userResponse.data;

        if (userData.favourites && userData.favourites.length > 0) {
            const moviesResponse = await axios.get(URLL);
            const movies = moviesResponse.data;
            const favoriteMovies = movies.filter(movie => userData.favourites.includes(movie.Title));
            const favoriteContainer = document.getElementById('favorite-container');
            favoriteContainer.innerHTML = '';

            favoriteMovies.forEach(function (movie) {
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
                        <button type="button" class="btn btn-danger" onclick="removeFavorite('${movie.Title}')">
                            Remove
                        </button>
                    </div>
                `;
                favoriteContainer.appendChild(card);
            });
        }
    } catch (error) {
        console.error("Error fetching user's favorites:", error);
    }
}

const user = JSON.parse(sessionStorage.getItem("userData"));
const userId = user[0].id;
displayFavorites(userId);
