// Fetch dog-friendly restaurants using the Yelp API with user input location
function fetchDogFriendlyRestaurants() {
    const locationInput = document.getElementById('locationInput').value;
  
    // Make an Axios request to the Yelp API
    axios.get(`https://api.yelp.com/v3/businesses/search`, {
      headers: {
        'Authorization': 'Bearer oRc9-C72u38kHp3pS2W7S42ezwi7n4JQIfA893O0DWRS6EMhkp8w2r6eYHJMjD87YLIiyeOPAV2dbm6qnfl-j41-tfGQMmQFpWpCdwZGWWCcRCNqA4KguDJPoeMpZHYx' 
      },
      params: {
        term: 'dog friendly',
        location: locationInput
      }
    })
      .then(response => {
        const data = response.data;
        const restaurantsList = document.getElementById('restaurants');
        restaurantsList.innerHTML = '';
        data.businesses.forEach(restaurant => {
          // Render restaurant items as desired
          const restaurantItem = document.createElement('li');
          restaurantItem.textContent = restaurant.name;
          restaurantsList.appendChild(restaurantItem);
        });
      })
      .catch(error => {
        console.error('Error fetching data from Yelp API:', error);
      });
  }
  
  // Attach event listener to search button
  document.getElementById('searchButton').addEventListener('click', () => {
    fetchDogFriendlyRestaurants();
  });
  