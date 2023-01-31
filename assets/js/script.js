var cityInput = $("#city-search");
var searchBtn = $("#search-input");
// var cityBtn = $(".cityBtn");

var cityArr = JSON.parse(localStorage.getItem("cityArr",)) || [];
var future = JSON.parse(localStorage.getItem("future",)) || [];

var city = "";

function pastSearch() {
  for(var i = 0; i< cityArr.length; i++){
    if(i < 10){
        i++;
        var cities = document.querySelector('.cities')
        var cityBtn = docuement.createElement('button')
        cityBtn.textContent = JSON.parse(localStorage.getItem("cityArr",)) || [i];
        cities.appendChild(cityBtn)
    }
  }
  
}

function getCoords(city) {
  console.log(city);
  var geoUrl =
    "http://api.openweathermap.org/geo/1.0/direct?q=" +
    city +
    "&limit=5&appid=d8540a4fbc73181f1dfa2d03253a4a74";
  fetch(geoUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      displayWeather(data[0].lat, data[0].lon);
    });
}

function displayWeather(lat, lon) {
  // if (searchBtn) {
  // cityTitle.text(cityInput.val())
  var currentWeather =
    "https://api.openweathermap.org/data/2.5/weather?lat=" +
    lat +
    "&lon=" +
    lon +
    "&units=imperial&appid=d8540a4fbc73181f1dfa2d03253a4a74";
    
  fetch(currentWeather)
    .then(function (response) {
      return response.json();
      //   console.log(response)
    })
    .then(function (data) {
      console.log(data);
      var weatherLog = document.querySelector(".weather-log");
      var cityTitle = document.createElement("h2");
      var temp = document.createElement("p");
      var wind = document.createElement("p");
      var humidity = document.createElement("p");
      cityTitle.textContent = data.name;
      temp.textContent = "Temp: " + data.main.temp + " °F";
      wind.textContent = "Wind: " + data.wind.speed + " mph";
      humidity.textContent = "Humidity: " + data.main.humidity + " %";

      weatherLog.appendChild(cityTitle);
      weatherLog.appendChild(temp);
      weatherLog.appendChild(wind);
      weatherLog.appendChild(humidity);
      console.log(cityTitle);
    });
 displayForecast(lat, lon)
  
}

function displayForecast(lat,lon) {
  var forecast =
    "https://api.openweathermap.org/data/2.5/forecast?lat=" +
    lat +
    "&lon=" +
    lon +
    "&units=imperial&appid=d8540a4fbc73181f1dfa2d03253a4a74";
  fetch(forecast)
    .then(function (response) {
        future.push(response.json());
        localStorage.setItem("future", JSON.stringify(future));
      return response.json();
      
      //   console.log(response)
    })
    .then(function (data) {
        console.log(data);
        var list = data.list;
        console.log(list)
        for(var i = 0; i < list.length; i++){
            if(i % 7 === 0){
                
                var future = document.querySelector('.five-day-forecast');
                var forecastDay = document.createElement('div');
                var date = document.createElement('h3');
                var tempTwo = document.createElement('p');
                var windTwo = document.createElement('p');
                var humidityTwo = document.createElement('p');

                date.textContent = "Date: " + JSON.stringify(list[i].dt_txt).slice(1, 11);
                tempTwo.textContent = "Temp: " + list[i].main.temp + " °F";
                windTwo.textContent = "Wind: " + list[i].wind.speed + " mph";
                humidityTwo.textContent = "Humidity: " + list[i].main.humidity + " %";

                forecastDay.appendChild(date);
                forecastDay.appendChild(tempTwo);
                forecastDay.appendChild(windTwo);
                forecastDay.appendChild(humidityTwo);
                
                future.appendChild(forecastDay);
                
            }
        }
      
    });

  // localStorage.setItem("future", JSON.stringify(forecast))
  // forecast
  // console.log(forecast)
}

console.log(displayWeather);

searchBtn.on("click", function (event) {
  event.preventDefault();
  city = cityInput.val();
  

  console.log(city);
  if (!cityArr.includes(city)) {
    cityArr.push(city);
    localStorage.setItem("cityArr", JSON.stringify(cityArr));
     
  } 
  getCoords(city);
  pastSearch()
});
// pastSearch()
