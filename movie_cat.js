const URLL = "http://localhost:3000/film";


document.addEventListener("DOMContentLoaded", function () {
 


  axios.get(URLL)
    .then(function (response) {
      
      const videos = response.data; 
      console.log(response.data);

    
      const crimeVideos = videos.filter(video => video.Genre === 'Crime');
      const actionVideos = videos.filter(video => video.Genre === 'Action');
      const dramaVideos = videos.filter(video => video.Genre === 'Drama');
      const adventurevideos = videos.filter(video => video.Genre === 'Adventure');

      const videoContainer_crime = document.getElementById('video-container-crime');
      const videoContainer_action = document.getElementById('video-container-action');
      const videoContainer_drama = document.getElementById('video-container-drama');
      const videoContainer_adventure = document.getElementById('video-container-adventure');

      
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

      
        videoContainer_crime.appendChild(card);
      });

      adventurevideos.forEach(function (video) {
      
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
            `;

       
        videoContainer_adventure.appendChild(card);
      });


      actionVideos.forEach(function (video) {
       
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
            `;

      
        videoContainer_action.appendChild(card);
      });


      dramaVideos.forEach(function (video) {
        
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
            `;

        
        videoContainer_drama.appendChild(card);
      });
    })
    .catch(function (error) {
      console.error('Error fetching data:', error);
    });
});



