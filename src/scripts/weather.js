import Dom from './Dom.js';

const apiKey = 'N3WK7ERDUYFCFTYJPAZ59Z5WK';

const weather = (() => {
    async function fetchWeather(city) {
        const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${apiKey}`;
        
        try {
            Dom.displayLoading(city);
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('City not found');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching weather data:', error);
            Dom.displayError('Failed to find this city. Please try again.');
            return null;
        }
    }
    return { fetchWeather };
})();

export default weather;