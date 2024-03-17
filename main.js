// main.js
document.addEventListener("DOMContentLoaded", function() {
    const apiKey = "ddd883487a403db0bd896b80050ae911";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const weatherIcon = document.querySelector(".weather-icon");

    async function checkWeather(city) {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

        if (response.status == 404) {
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
        } else {
            const data = await response.json();

            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

            if (data.weather[0].main == "Clouds") {
                weatherIcon.src = "images and video/clear.png";
            } else if (data.weather[0].main == "Rain") {
                weatherIcon.src = "images and video/rain.png";
            } else if (data.weather[0].main == "Drizzle") {
                weatherIcon.src = "images and video/drizzle.png";
            } else if (data.weather[0].main == "Mist") {
                weatherIcon.src = "images and video/mist.png";
            }

            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";
        }
    }

    searchBtn.addEventListener("click", () => {
        checkWeather(searchBox.value);
    });
});
