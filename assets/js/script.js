var cityInput = $("#city-input");
var searchBtn = $("#search-input");
var cityBtn = $(".cityBtn")
var temp = $(".temp");
var wind = $(".wind");
var humidity = $(".humidity");

var city = "";

console.log(cityInput);
// console.log(searchBtn);
console.log(cityBtn);
console.log(temp);
console.log(wind);
console.log(humidity);

// var currentWeather = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=d8540a4fbc73181f1dfa2d03253a4a74';
// var forecast = 'https://api.openweathermap.org/data/2.5/forecast?q={city name}&appid=d8540a4fbc73181f1dfa2d03253a4a74'

// console.log(currentWeather)
// console.log(forecast)
// fetch('https://api.openweathermap.org/data/2.5/forecast?q=Sacramento&appid=d8540a4fbc73181f1dfa2d03253a4a74')
// .then(function (response) {
//   return response.json();
// //   console.log(response)
// })
// .then(function (data) {
//   console.log(data);
// });

var currentWeather = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityInput + '&appid=d8540a4fbc73181f1dfa2d03253a4a74';

function displayTodayWeather() {
    if (cityInput === searchBtn) {
        // var currentWeather = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityInput + '&appid=d8540a4fbc73181f1dfa2d03253a4a74';
        currentWeather
        console.log(currentWeather)

    } else {
        currentWeather
        console.log("try to enter a city")
        fetch(currentWeather)
        .then(function (response) {
        return response.json();
        //   console.log(response)
        })
        .then(function (data) {
        console.log(data);
        });
    }

//     fetch(currentWeather)
//         .then(function (response) {
//         return response.json();
//         //   console.log(response)
//         })
//         .then(function (data) {
//         console.log(data);
//         });
// }

console.log(displayTodayWeather)

function displayForecast() {
    if (cityInput === searchBtn) {
        var forecast = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityInput + '&appid=d8540a4fbc73181f1dfa2d03253a4a74';
        console.log(forecast)
        fetch(forecast)
        .then(function (response) {
        return response.json();
        //   console.log(response)
        })
        .then(function (data) {
        console.log(data);
        });
    } else {
        console.log("try to enter a city")
    }
    
    // fetch(forecast)
    //     .then(function (response) {
    //     return response.json();
    //     //   console.log(response)
    //     })
    //     .then(function (data) {
    //     console.log(data);
    //     });

}
console.log(displayForecast)

// displayForecast()
// displayTodayWeather()


searchBtn.on('click', function(event) {
    event.preventDefault();
    
    // cityInput = event.target[0].value.trim();
    // var format = event.target[1].value;

    if (cityInput) {
        displayForecast();
        displayTodayWeather();

        cityInput.textContent = '';
        // document.getElementById('city-input').textContent = ""
    } else {
        alert('Please enter your search');
    }

});}