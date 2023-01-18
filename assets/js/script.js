var cityInput = $("#city-search");
var searchBtn = $("#search-input");
var cityBtn = $(".cityBtn")
var temp = $(".temp");
var wind = $(".wind");
var humidity = $(".humidity");
var cityTitle = $(".city-title")

var dateA = $(".date-one");
// var iconA = $(".conditon-one")
var tempA = $("#temp-one");
var windA = $("#wind-one");
var humidityA = $("#humidity-one");

var dateB = $(".date-two");
// var iconB = $(".conditon-two")
var tempB = $("#temp-two");
var windB = $("#wind-two");
var humidityB = $("#humidity-two");

var dateC = $(".date-three");
// var iconC = $(".conditon-three")
var tempC = $("#temp-three");
var windC = $("#wind-three");
var humidityC = $("#humidity-three");

var dateD = $(".date-four");
// var iconD = $(".conditon-four")
var tempD = $("#temp-four");
var windD = $("#wind-four");
var humidityD = $("#humidity-four");

var dateE = $(".date-five");
// var iconE = $(".conditon-five")
var tempE = $("#temp-five");
var windE = $("#wind-five");
var humidityE = $("#humidity-five");


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
    var currentWeather = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial&appid=d8540a4fbc73181f1dfa2d03253a4a74';
    var forecast = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=imperial&appid=d8540a4fbc73181f1dfa2d03253a4a74';

    

    

    console.log(city);
    console.log(currentWeather);
    console.log(forecast);

    function displayTodayWeather() {
        
        if (searchBtn) {
            cityTitle.text(cityInput.val())
            fetch(currentWeather)
                .then(function (response) {
                return response.json();
                //   console.log(response)
            })
                .then(function (data) {
                    cityTitle.textContent = cityInput.val();
                    temp.text("Temp: " + data.main.temp + " °F") 
                    wind.text("Wind: " + data.wind.speed + " mph")  
                    humidity.text("Humidity: " + data.main.humidity + " %") 
                    console.log(data);
                    console.log(temp);
                    console.log(wind);
                    console.log(humidity); 
                    console.log(cityTitle);
            });
            

            currentWeather
            console.log(currentWeather)
        } else {
            console.log("try to enter a city")   
        }    
    };
    console.log(displayTodayWeather);


    function displayForecast() {
        
        if (searchBtn) {
            fetch(forecast)
                .then(function (response) {
                    return response.json();
                            //   console.log(response)
                })
                .then(function (data) {
                    dateA.text("Date: " + data.list[0].dt_txt) 
                    // iconA.text("Date: " + data.list[0].weather[0].icon + "png") 
                    tempA.text("Temp: " + data.list[0].main.temp + " °F") 
                    windA.text("Wind: " + data.list[0].wind.speed + " mph") 
                    humidityA.text("Humidity: " + data.list[0].main.humidity + " %"); 
                    // console.log(iconA) 

                    dateB.text("Date: " + data.list[8].dt_txt) 
                    tempB.text("Temp: " + data.list[8].main.temp + " °F") 
                    windB.text("Wind: " + data.list[8].wind.speed + " mph") 
                    humidityB.text("Humidity: " + data.list[8].main.humidity + " %"); 

                    dateC.text("Date: " + data.list[16].dt_txt) 
                    tempC.text("Temp: " + data.list[16].main.temp + " °F") 
                    windC.text("Wind: " + data.list[16].wind.speed + " mph") 
                    humidityC.text("Humidity: " + data.list[16].main.humidity + " %"); 

                    dateD.text("Date: " + data.list[24].dt_txt) 
                    tempD.text("Temp: " + data.list[24].main.temp + " °F") 
                    windD.text("Wind: " + data.list[24].wind.speed + " mph") 
                    humidityD.text("Humidity: " + data.list[24].main.humidity + " %"); 

                    dateE.text("Date: " + data.list[32].dt_txt) 
                    tempE.text("Temp: " + data.list[32].main.temp + " °F") 
                    windE.text("Wind: " + data.list[32].wind.speed + " mph") 
                    humidityE.text("Humidity: " + data.list[32].main.humidity + " %"); 
                    console.log(data);
                    // console.log(dataA);
                    // console.log(tempA);
                    // console.log(windA);
                    // console.log(humidityA);                   
                }); 

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
