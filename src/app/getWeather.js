import searchCity from './searchCity';

export const cityInfo = {
  name: '',
  temp: '',
  feelsLike: '',
  humidity: '',
  pressure: '',
  tempMax: '',
  tempMin: '',
  windSpeed: '',
};

export default async function getWeather(cityName) {
  try {
    const weatherRequest = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=9fea2eee139f9e0daabf0cf1f712a5fa`,
      { mode: 'cors' }
    );
    const weatherData = await weatherRequest.json();
    cityInfo.name = weatherData.name;
    cityInfo.temp = weatherData.main.temp;
    cityInfo.feelsLike = weatherData.main.feels_like;
    cityInfo.humidity = weatherData.main.humidity;
    cityInfo.pressure = weatherData.main.pressure;
    cityInfo.tempMax = weatherData.main.temp_max;
    cityInfo.tempMin = weatherData.main.temp_min;
    cityInfo.icon = weatherData.icon;
    cityInfo.windSpeed = weatherData.wind.speed;
    // initiate printWeather
  } catch (err) {
    console.log(err);
  }
}
