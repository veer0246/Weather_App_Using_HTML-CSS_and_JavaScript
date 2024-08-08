// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=lucknow&appid=f424b9c9d2c753461cd7043f41e3a8be&units=metric"


//fetch api to fide the data------
const apiKey = "f424b9c9d2c753461cd7043f41e3a8be";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city){  
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data)

    //data set on element-------
    document.querySelector('.city').innerHTML = data.name
    document.querySelector('.weather-icon').innerHTML = data.weather.icon
    // document.querySelector('.temp').innerHTML = data.main.temp + "°c"
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp )+ "°c"
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%"
    document.querySelector('.wind').innerHTML = data.wind.speed + " Km/h"

    console.log(data.weather[0].icon)
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
