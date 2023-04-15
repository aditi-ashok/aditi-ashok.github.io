// Fetch dog-friendly restaurants using Yelp API with user input location
function fetchDogFriendlyRestaurants() {
    const locationInput = document.getElementById('locationInput').value;
    console.log("location input: ", locationInput)
  
    const url = `https://api.yelp.com/v3/businesses/search?term=dog+friendly&location=${locationInput}`;
  
    // Make an AJAX request using Axios
    axios.get(url, {
      headers: {
        'Authorization': 'Bearer oRc9-C72u38kHp3pS2W7S42ezwi7n4JQIfA893O0DWRS6EMhkp8w2r6eYHJMjD87YLIiyeOPAV2dbm6qnfl-j41-tfGQMmQFpWpCdwZGWWCcRCNqA4KguDJPoeMpZHYx'
      }
    })
      .then(response => {
        const data = response.data;
        const restaurantsList = document.getElementById('restaurants');
        restaurantsList.innerHTML = '';
        data.businesses.forEach(restaurant => {
          const restaurantItem = document.createElement('li');
          restaurantItem.classList.add('restaurant-item');
  
          const restaurantName = document.createElement('h3');
          restaurantName.textContent = restaurant.name;
  
          const restaurantAddress = document.createElement('p');
          restaurantAddress.textContent = restaurant.location.address1;
  
          const restaurantPhone = document.createElement('p');
          restaurantPhone.textContent = `Phone: ${restaurant.phone}`;
  
          restaurantItem.appendChild(restaurantName);
          restaurantItem.appendChild(restaurantAddress);
          restaurantItem.appendChild(restaurantPhone);
  
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
  