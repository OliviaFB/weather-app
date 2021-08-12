// let weather = {
//   paris: {
//     temp: 19.7,
//     humidity: 80,
//   },
//   tokyo: {
//     temp: 17.3,
//     humidity: 50,
//   },
//   lisbon: {
//     temp: 30.2,
//     humidity: 20,
//   },
//   "san francisco": {
//     temp: 20.9,
//     humidity: 100,
//   },
//   moscow: {
//     temp: -5,
//     humidity: 20,
//   },
// };

// let city = prompt("Please enter a city");
// city = city.trim().toLowerCase();

// if (
//   city === "paris" ||
//   city === "tokyo" ||
//   city === "lisbon" ||
//   city === "san francisco" ||
//   city === "moscow"
// ) {
//   let fahrenheit = (weather[city].temp * 9) / 5 + 32;
//   alert(
//     `It is currently ${weather[city].temp}˚C (or ${fahrenheit} ˚F) in ${city} with a humidity of ${weather[city].humidity}%`
//   );
// } else {
//   alert(
//     `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
//   );
// }

// Date

let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();

if (minutes < 10) {
  minutes = "0".concat(minutes);
}

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[now.getDay()];

let date = now.getDate();
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
let month = months[now.getMonth()];
let year = now.getFullYear();

document.getElementById("time").innerHTML = `${hours}:${minutes}`;
document.getElementById("date").innerHTML = `${day} ${month} ${date}, ${year}`;

// Search engine

function displayConditions(response) {
  document.querySelector("#selected-city").innerHTML = response.data.name;
  document.querySelector(".temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].description;
}

function searchCity(city) {
  let apiKey = "d6f21b3a0cd54e52da7c23d8eae1a64e";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayConditions);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCity(city);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

// Current location

// function searchLocation(position) {

// }

// function getCurrentLocation(event) {
//   event.preventDefault();
//   navigator.geolocation.getCurrentPosition(searchLocation);
// }

// let currentLocationButton = document.querySelector("#button-yellow");
// currentLocationButton.addEventListener("click", getCurrentLocation);

// Degree conversion

// function convertFahrenheit() {
//   let degree = document.querySelector(".temperature");
//   degree.innerHTML = 66;
// }

// let celsius = document.querySelector("#fahrenheit-link");
// celsius.addEventListener("click", convertFahrenheit);

// function convertCelsius() {
//   let degree = document.querySelector(".temperature");
//   degree.innerHTML = 19;
// }

// let fahrenheit = document.querySelector("#celsius-link");
// fahrenheit.addEventListener("click", convertCelsius);
