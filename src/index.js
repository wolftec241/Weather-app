import "./style/style.css";
import "./index.html";
import Dom from "./scripts/Dom.js";
import weather from "./scripts/weather.js";


const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("search-input");

searchBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    const city = searchInput.value.trim().toLowerCase();//removing whitespaces
    if (city) {
        const data = await weather.fetchWeather(city);
        if (data) {
            Dom.displayWeather(data);
        }
    } else {
        Dom.displayError("Please enter a city name");
    }
});

searchInput.addEventListener('keypress', async (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        searchBtn.click();
    }
});

