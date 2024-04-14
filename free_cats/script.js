// Define the URL endpoint to fetch data from
const apiUrl = 'https://cataas.com/cat?position=center';

// Define headers for the request
const headers = {
  'accept': 'image/*'
};


document.querySelector('#getCat').addEventListener('click', function (e){
    let img = document.querySelector('#generated_img');
    img.src = "";
    document.querySelector('.loader-container').style.display = 'flex';
    
    fetch(apiUrl, {
        method: 'GET',
        headers: headers
      })
        .then(response => {
          // Check if response is successful (status code 200)
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          // Handle the response data, but for an image you may not need to parse it
          return response.blob();
        })
        .then(blob => {
          // Create a URL object from the blob data received
          const imageUrl = URL.createObjectURL(blob);
          // Now you can use imageUrl to display the image or perform further actions
          console.log('Image URL:', imageUrl);
          img.src = imageUrl;
          document.querySelector('.loader-container').style.display = 'none';
          img.style.display = 'block'; 
        })
        .catch(error => {
          // Handle any errors that occurred during the fetch
          console.error('There was a problem with the fetch operation:', error);
        });
});




// Fetch data using Fetch API with GET method
