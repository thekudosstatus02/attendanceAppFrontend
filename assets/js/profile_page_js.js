function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition, showError);
    } else { 
        document.getElementById("location").innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    document.getElementById("location").innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
    
    
    // API call to get the distance from Admin block...
    function fetchData(param1, param2) {
        // Construct the URL with parameters
        const url = `https://api.example.com/data?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}`;
      
        // Make a GET request to the API endpoint
        fetch(url)
          .then(response => {
            // Check if the response was successful (status code 2xx)
            if (response.ok) {
              // Parse the response JSON data
              return response.json();
            } else {
              // Handle the error if the response was not successful
              throw new Error('Error: ' + response.status);
            }
          })
          .then(data => {
            // Process the retrieved data
            document.getElementById("distance").innerHTML = data;
            console.log(data);
            console.log(data);
            console.log(data);
            console.log(data);
            // Do something with the data
          })
          .catch(error => {
            // Handle any errors that occurred during the request
            console.error(error);
          });
      }
      
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            document.getElementById("location").innerHTML = "User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            document.getElementById("location").innerHTML = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            document.getElementById("location").innerHTML = "The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            document.getElementById("location").innerHTML = "An unknown error occurred.";
            break;
    }
}
