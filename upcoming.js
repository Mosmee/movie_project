const URLL = "http://localhost:3000/upcoming";

// Assuming your external JS file is named main.js

document.addEventListener("DOMContentLoaded", function () {
    // Use Axios to fetch data from db.json
   

 
    axios.get(URLL)
      .then(function (response) {
        // Handle the data and create card elements
        const videos = response.data; // Assuming your JSON structure is an array of videos
        console.log(response.data);
  
        // Filter videos with genre 'crime'
        const upcomingVideos = videos.filter(video => video.year === '2024');
       
  
        // Get the video container element
        const videoContainer_upcoming = document.getElementById('video-container-upcoming');
       
        // Loop through each crime video and create a card
        upcomingVideos.forEach(function (video) {
          // Create a new card element
          const card = document.createElement('div');
          card.className = 'col-lg-3 col-md-4 col-sm-6';
          card.innerHTML = `
          <div class="video-card">
          <img src="${video.image}" alt="${video.title}">
          <div class="row details no-margin">
          [<h6>${video.title}</h6>]
          </div>
          <button type="button" class="btn btn-danger " >
          <a href="teaser.html"> 
                         Play Now </a>
                    </button>
        </div>
      `;
  
          // Append the card to the video container
          videoContainer_upcoming.appendChild(card);
        });

        
      })
      .catch(function (error) {
        console.error('Error fetching data:', error);
      });
    });
  
  

