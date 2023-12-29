const URLL = "http://localhost:3000/tvShows";

document.addEventListener("DOMContentLoaded", function () {
    
   

 
    axios.get(URLL)
      .then(function (response) {
        
        const videos = response.data; 
        console.log(response.data);
  
       
        const crimeshows = videos.filter(video => video.genre === 'Crime');
        const actionshows = videos.filter(video => video.genre === 'Action');
        const dramashows = videos.filter(video => video.genre === 'Drama');
        const suspenseshows = videos.filter(video => video.genre === 'Suspense');
  
      
        const videoContainer_crime = document.getElementById('video-container1-crime');
        const videoContainer_action = document.getElementById('video-container1-action');
        const videoContainer_drama= document.getElementById('video-container1-drama');
        const videoContainer_suspense = document.getElementById('video-container1-suspense');
  
       
        crimeshows.forEach(function (video) {
          
          const card = document.createElement('div');
          card.className = 'col-lg-3 col-md-4 col-sm-6';
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
  
         
          videoContainer_crime.appendChild(card);
        });

        suspenseshows.forEach(function (video) {
     
            const card = document.createElement('div');
            card.className = 'col-lg-3 col-md-4 col-sm-6';
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
    
          
            videoContainer_suspense.appendChild(card);
          });


          actionshows.forEach(function (video) {
          
            const card = document.createElement('div');
            card.className = 'col-lg-3 col-md-4 col-sm-6';
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
         
            videoContainer_action.appendChild(card);
          });


          dramashows.forEach(function (video) {
           
            const card = document.createElement('div');
            card.className = 'col-lg-3 col-md-4 col-sm-6';
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
    
            
            videoContainer_drama.appendChild(card);
          });
      })
      .catch(function (error) {
        console.error('Error fetching data:', error);
      });
    });
  
  

