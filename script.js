// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=lucknow&appid=f424b9c9d2c753461cd7043f41e3a8be&units=metric"

// Api and key---------------
const apiKey = "f424b9c9d2c753461cd7043f41e3a8be";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

// function to fetch api to fide the data------
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json(); // data in json formate
    console.log(data)

    // if data not found then display error and hide the other element--------
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block"
        document.querySelector('.weather').style.display = "none"
    }

    // set data on the element-------
    document.querySelector('.city').innerHTML = data.name
    // document.querySelector('.temp').innerHTML = data.main.temp + "°c"
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°c"
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%"
    document.querySelector('.wind').innerHTML = data.wind.speed + " Km/h"
    document.querySelector('.weather-info').innerHTML = data.weather[0].description

    // console.log(data.weather[0].icon)
    document.querySelector('.image').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="" width=160px height=160px >`

    // display and hide the element------
    document.querySelector('.weather').style.display = "block"
    document.querySelector(".error").style.display = "none"
    


}
// create event listener to perform activeity---------
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})
