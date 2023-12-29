const URLL = "http://localhost:3000/film";

document.addEventListener("DOMContentLoaded", function () {
   
   

 
    axios.get(URLL)
      .then(function (response) {
        
        const videos = response.data; 
        console.log(response.data);
  
       
        const crimeVideos = videos.filter(video => video.Genre === 'Crime');
      
  
       
        const videoContainer_crime = document.getElementById('video-container-crime');
       
  
        
        crimeVideos.forEach(function (video) {
          
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
          videoContainer_crime.appendChild(card);
        });

        
      })
      .catch(function (error) {
        console.error('Error fetching data:', error);
      });
    });
  
  

