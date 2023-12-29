const URLL = "http://localhost:3000/film";
const url1 = "http://localhost:3000/tvShows";

// Assuming your external JS file is named main.js

document.addEventListener("DOMContentLoaded", function () {
    // Use Axios to fetch data from db.json
   

 
    axios.get(URLL)
      .then(function (response) {
        
        const videos = response.data; 
        console.log(response.data);
  
        // Filter videos with genre 'crime'
        const crimeVideos = videos.filter(video => video.Genre === 'Crime');
        crimeVideos.sort((a, b) => b.Year - a.Year);
  
        // Get the video container element
        const videoContainer_crime = document.getElementById('video-container-crime');
       
  
        // Loop through each crime video and create a card
        crimeVideos.forEach(function (video) {
          // Create a new card element
          const card = document.createElement('div');
          card.className = 'col-lg-3 col-md-4 col-sm-6 ';
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
          videoContainer_crime.appendChild(card);
        });

        
      })
      .catch(function (error) {
        console.error('Error fetching data:', error);
      });
    });

    document.addEventListener("DOMContentLoaded", function () {
   

 
    axios.get(url1)
      .then(function (response) {
        const videos = response.data;
        console.log(response.data);
  
        
        
        const crimeshows = videos.filter(video => video.genre === 'Crime');
  
        // Get the video container element
        const videoContainer_shows = document.getElementById('video-container-shows');
       
  
        // Loop through each crime video and create a card
        crimeshows.forEach(function (video) {
          // Create a new card element
          const card = document.createElement('div');
          card.className = 'col-lg-3 col-md-4 col-sm-6 ';
          card.innerHTML = `
            <div class="video-card">
              <img src="${video.image}" alt="${video.title}">
              <div class="row details no-margin">
              [<h6>${video.title}</h6>]
              
              </div>
              <button type="button" class="btn btn-danger " >
              <a href="single.html"> 
                             Play Now </a>
                        </button>
            </div>
          `;
  
          // Append the card to the video container
          videoContainer_shows.appendChild(card);
        });

        
      })
      .catch(function (error) {
        console.error('Error fetching data:', error);
      });
    });
  
  

