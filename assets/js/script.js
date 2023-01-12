var cityInput = $("#city-search");
var searchBtn = $("#search-input");
var cityBtn = $(".cityBtn")
var temp = $(".temp");
var wind = $(".wind");
var humidity = $(".humidity");
var cityTitle = $(".city-title")

var city = "";

console.log(cityInput);
// console.log(searchBtn);
console.log(cityBtn);
console.log(temp);
console.log(wind);
console.log(humidity);


searchBtn.on("click", function(event) {
    event.preventDefault();
    city = cityInput.val();
    currentWeather
    forecast 
    var currentWeather = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=d8540a4fbc73181f1dfa2d03253a4a74';
    var forecast = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=d8540a4fbc73181f1dfa2d03253a4a74';

    fetch(currentWeather)
        .then(function (response) {
        return response.json();
        //   console.log(response)
        })
        .then(function (data) {
          temp = "Temp: " + data.main.temp
            wind = "Wind: " + data.wind.speed
            humidity = "Humidity: " + data.main.humidity
        console.log(data);
        console.log(temp);
        console.log(wind);
        console.log(humidity);  
        });

    fetch(forecast)
            .then(function (response) {
            return response.json();
            //   console.log(response)
            })
            .then(function (data) {
                temp = "Temp: " + data.list[0].main.temp
                wind = "Wind: " + data.list[0].wind.speed
                humidity = "Humidity: " + data.list[0].main.humidity
            console.log(data);
            console.log(temp);
            console.log(wind);
            console.log(humidity);
            
            }); 

    console.log(city);
    console.log(currentWeather);
    console.log(forecast);

function displayTodayWeather() {
    
    if (searchBtn) {
        cityTitle.textContent = cityInput.val();
        console.log(cityTitle);

        currentWeather
        console.log(currentWeather)
    } else {
        console.log("try to enter a city")   
    }    
};
console.log(displayTodayWeather);


function displayForecast() {
    
    if (searchBtn) {
        forecast
        console.log(forecast)
    } else {
        console.log("try to enter a city")
        
    }
    
 

}
console.log(displayForecast);
displayForecast();
displayTodayWeather(); 

}

);
