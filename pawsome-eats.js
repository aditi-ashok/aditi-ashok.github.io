// Define a function to search for dog-friendly restaurants
function searchDogFriendlyRestaurants() {
    // Get user input for location
    var location = document.getElementById('locationInput').value;
  
    // Define Yelp API endpoint and query parameters
    var apiUrl = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search';
    var term = 'dog friendly';
    var apiKey = 'oRc9-C72u38kHp3pS2W7S42ezwi7n4JQIfA893O0DWRS6EMhkp8w2r6eYHJMjD87YLIiyeOPAV2dbm6qnfl-j41-tfGQMmQFpWpCdwZGWWCcRCNqA4KguDJPoeMpZHYx' 

    // Make Axios GET request to Yelp API
    axios.get(apiUrl, {
      params: {
        term: term,
        location: location,
        limit:10
      },
      headers: {
        Authorization: 'Bearer oRc9-C72u38kHp3pS2W7S42ezwi7n4JQIfA893O0DWRS6EMhkp8w2r6eYHJMjD87YLIiyeOPAV2dbm6qnfl-j41-tfGQMmQFpWpCdwZGWWCcRCNqA4KguDJPoeMpZHYx' 
      }
    }) 
    .then(function (response) {
      // Handle successful API response
      console.log(response.data); // Access the API response data
      // Do something with the data, e.g., display results on your web page
       // Clear previous search results
       var restaurantList = document.getElementById('restaurantList');
       restaurantList.innerHTML = '';

        // Display results on the web page
        var restaurants = response.data.businesses;
        restaurants.forEach(function (restaurant) {
            var restaurantItem = document.createElement('div');
            restaurantItem.className = 'restaurant-item';

            var nameElement = document.createElement('h2');
            var nameText = document.createTextNode(restaurant.name);
            nameElement.appendChild(nameText);

            var addressElement = document.createElement('p');
            var addressText = document.createTextNode(restaurant.location.address1 + ', ' + restaurant.location.city + ', ' + restaurant.location.state + ' ' + restaurant.location.zip_code);
            addressElement.appendChild(addressText);

            restaurantItem.appendChild(nameElement);
            restaurantItem.appendChild(addressElement);
            restaurantList.appendChild(restaurantItem);
        
        });
    })
    .catch(function (error) {
      // Handle API request error
      console.error('Error fetching data from Yelp API:', error);
    });
  } 
  