// API endpoint URL with proxy server
const apiUrl = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search';

// Yelp API credentials
const apiKey = 'oRc9-C72u38kHp3pS2W7S42ezwi7n4JQIfA893O0DWRS6EMhkp8w2r6eYHJMjD87YLIiyeOPAV2dbm6qnfl-j41-tfGQMmQFpWpCdwZGWWCcRCNqA4KguDJPoeMpZHYx';

// Search button click event
document.getElementById('searchButton').addEventListener('click', function () {
    const locationInput = document.getElementById('locationInput').value;
    if (locationInput) {
        // Clear previous results
        document.getElementById('restaurantList').innerHTML = '';
        // Call Yelp API
        searchRestaurants(locationInput);
    } else {
        alert('Please enter a location to search.');
    }
});

// Function to search restaurants using Yelp API
function searchRestaurants(location) {
    const headers = {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
    };

    const params = {
        term: 'dog friendly',
        location: location
    };

    $.ajax({
        url: apiUrl,
        method: 'GET',
        headers: headers,
        data: params,
        success: function (response) {
            displayRestaurants(response.businesses);
        },
        error: function (error) {
            console.error('Error fetching data from Yelp API:', error);
        }
    });
}

// Function to display restaurant results
function displayRestaurants(restaurants) {
    const restaurantList = document.getElementById('restaurantList');

    if (restaurants.length > 0) {
        const ul = document.createElement('ul');
        ul.className = 'restaurant-ul';
        restaurantList.appendChild(ul);

        restaurants.forEach(restaurant => {
            const li = document.createElement('li');
            li.className = 'restaurant-li';
            li.textContent = restaurant.name;
            ul.appendChild(li);
        });
    } else {
        restaurantList.textContent = 'No restaurants found.';
    }
}
