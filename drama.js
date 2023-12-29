const URLL = "http://localhost:3000/film";

// Assuming your external JS file is named main.js

document.addEventListener("DOMContentLoaded", function () {
    // Use Axios to fetch data from db.json
   

 
    axios.get(URLL)
      .then(function (response) {
        // Handle the data and create card elements
        const videos = response.data; // Assuming your JSON structure is an array of videos
        console.log(response.data);
  
        // Filter videos with genre 'crime'
    
        const dramaVideos = videos.filter(video => video.Genre === 'Drama');
      
        // Get the video container element
     
         const videoContainer_drama = document.getElementById('video-container-drama');
      
        // Loop through each crime video and create a card
        dramaVideos.forEach(function (video) {
          // Create a new card element
          const card = document.createElement('div');
          card.className = 'col-lg-3 col-md-4 col-sm-6';
          card.innerHTML = `
          <div>
          <div class="video-card">
          <img src="${video.Poster}" alt="${video.Title}">
          <div class="row details no-margin">
              [<h6>${video.Title}</h6>]-[
              <div class="">${video.Runtime}</div>]-[
              <div class="">${video.imdbRating}</div>]
          </div>
          <div class="row details no-margin ">
              <button type="button" class="btn btn-danger col-md-8">
                  <a href="single.html">Play Now</a>
              </button>
              <button type="button" onClick="AddtoFav('${video.Title}')" class="btn btn-success col-md-4">
                  <i class="fas fa-heart"></i></button>
          </div>
          </div>
          </div>
      `;
  
          // Append the card to the video container
          videoContainer_drama.appendChild(card);
        });

       
      })
      .catch(function (error) {
        console.error('Error fetching data:', error);
      });
    });
  
  

