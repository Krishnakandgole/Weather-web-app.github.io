const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const apikey = "e5e668ebb1e865929cca55d0cc9237d4";

const inputBox = document.querySelector("#input");
const Button = document.querySelector("#btn");
const temp = document.querySelector("#tem");
const cityName = document.querySelector(".city-name");
const humidity = document.querySelector("#humidity");
const windSpeed = document.querySelector("#wind-speed");
const imageBox = document.querySelector(".img");
const show = document.querySelector(".s-container");

const checkWeather = async (city) => {
  let responce = await fetch(apiUrl + city + `&appid=${apikey}`);
  let data = await responce.json();
  if (responce.status == 404) {
    alert("Sorry, This city name is not valid......");
  } else {
    temp.innerHTML = Math.round(data.main.temp) + "°C";
    cityName.innerHTML = data.name;
    humidity.innerHTML = data.main.humidity + "%";
    windSpeed.innerHTML = data.wind.speed + "KM/H";

    if (data.weather[0].main == "Clouds") {
      imageBox.src = "/Weather/img/cloud.png";
    } else if (data.weather[0].main == "Clear") {
      imageBox.src = "/Weather/img/clear.png";
    } else if (data.weather[0].main == "Drizzle") {
      imageBox.src = "/Weather/img/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      imageBox.src = "/Weather/img/mist.png";
    } else if (data.weather[0].main == "Rain") {
      imageBox.src = "/Weather/img/rain.png";
    } else if (data.weather[0].main == "Snow") {
      imageBox.src = "/Weather/img/snow.png";
    }
    show.style.display = "block";
  }

};

Button.addEventListener("click", () => {
  input = inputBox.value;
  checkWeather(input);
});
 

//"Today completed the weather app by using html css and js"