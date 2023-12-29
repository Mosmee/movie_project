document.addEventListener("DOMContentLoaded", function () {

  axios.get('http://localhost:3000/songs')
    .then(function (response) {

      const music = response.data;
      console.log(music);
      //assigned a container for id where the card needs to be pushed
      const musicContainer = document.getElementById('music-container');

      music.forEach(function (song) {
        const card = document.createElement('div');
        card.className = 'col-lg-3 col-md-4 col-sm-6';
        card.innerHTML = `
          <div class="music-card" style="max-width: 400px; margin: 10px; padding: 10px; text-align: center;">
          <img src="${song.image}" alt="${song.title}" style="max-width: 100%; height: auto;">
          <div class="details" style="display: flex; flex-direction: column; align-items: center; margin-top: 10px;">
            <h6>${song.title}</h6>
            <div class="col-md-12 col-12 no-padding">
              <audio type="mp3" controls src="${song.audio}" style="width: 100%;"></audio>
              <div class="timeline"></div>
            </div>
          </div>
        </div>
          `;

        // Append the card to the music container
        musicContainer.appendChild(card);
      });
    })
    .catch(function (error) {
      console.error('Error fetching data:', error);
    });

});
