import searchCity from './searchCity';
import printWeather from './printWeather';
import updateBackground from './updateBackground';

export const cityInfo = {
  name: '',
  temp: '',
  tempMax: '',
  tempMin: '',
  condition: '',
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
    cityInfo.tempMax = weatherData.main.temp_max;
    cityInfo.tempMin = weatherData.main.temp_min;
    cityInfo.condition = weatherData.weather[0].main;
    printWeather();
    updateBackground();
  } catch (err) {
    alert(err);
  }
}
