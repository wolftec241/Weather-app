const Dom = {
    displayWeather(data) {
        const currentConditions = data.currentConditions;
        const weatherInfo = document.getElementById('weather-info');

        weatherInfo.innerHTML = `
            <p>Temperature: ${currentConditions.temp}°F</p>
            <p>Condition: ${currentConditions.conditions}</p>
            <p>Humidity: ${currentConditions.humidity}%</p>
            <p>Wind Speed: ${currentConditions.windspeed} km/h</p>
        `;
    },

    displayLoading(name){
        const cityName = document.getElementById('city-name');
        const weatherInfo = document.getElementById('weather-info');
        cityName.textContent = `${this.capitalizedFirstLetter(name)} Weather`;
        weatherInfo.textContent = 'Loading...';
    },
    
    capitalizedFirstLetter(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    },

    displayError(message) {
        const weatherInfo = document.getElementById('weather-info');
        weatherInfo.innerHTML = `<p class="error">${message}</p>`;
    }
};

export default Dom;