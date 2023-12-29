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
  
        const actionVideos = videos.filter(video => video.Genre === 'Action');
       
  
        // Get the video container element
    
         const videoContainer_action = document.getElementById('video-container-action');
      
  
        // Loop through each crime video and create a card
        actionVideos.forEach(function (video) {
          // Create a new card element
          const card = document.createElement('div');
          card.className = 'col-lg-3 col-md-4 col-sm-6';
          card.innerHTML = `
          <div class="video-card">
          <img src="${video.Poster}" alt="${video.Title}">
          <div class="row details no-margin">              
            [<h6>${video.Title}</h6>]-[
              <div class="">${video.Runtime}</div>]-[
              <div class="">${video.imdbRating}</div>]
            </div>
            <button type="button" class="btn btn-danger " >
              <a href="single.html"> 
                             Play Now </a>
                        </button>
          </div>
          </div>
        </div>
      `;
          // Append the card to the video container
          videoContainer_action.appendChild(card);
        });

        
      })
      .catch(function (error) {
        console.error('Error fetching data:', error);
      });
    });
  
  

