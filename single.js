const URLL = "http://localhost:3000/single";
document.addEventListener('DOMContentLoaded', function () {
    // Fetch image data from the server
    axios.get(URLL)
      .then(function (response) {
        // Handle the data received from the server
        const imageData = response.data;
        // Filter images by genre "Mystery"
        const mysteryImages = imageData.filter(image => image.genre.includes('Mystery'));
        updateImageGallery(mysteryImages);
      })
      .catch(function (error) {
        console.error('Error fetching image data:', error);
      });
  });
  
  function updateImageGallery(imageData) {
    const imageGalleryDiv = document.getElementById('imageGallery');
  
    // Iterate through the filtered image data and create elements for each image
    imageData.forEach(function (image) {
      const contribghyElement = document.createElement('div');
      contribghyElement.classList.add('contri-bghy');
      contribghyElement.innerHTML = `
        <div class="image">
          <a href="${image.videoUrl}">
            <img src="${image.image}" alt="${image.title}">
          </a>
        </div>
        <div class="detail">
          <h6>${image.title}</h6>
          <span>${image.genre}</span>
        </div>
      `;
      imageGalleryDiv.appendChild(contribghyElement);
    });
  }
  