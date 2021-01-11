import { cityInfo } from './getWeather';

// DOM CACHE:
const cityTemp = document.getElementById('temp');
const cityFeelsLike = document.getElementById('feels-like');
const cityHighOf = document.getElementById('high-of');
const cityLowOf = document.getElementById('low-of');
const cityHumidity = document.getElementById('humidity');
const cityPressure = document.getElementById('pressure');
const cityWindSpeed = document.getElementById('wind-speed');
const cityTitle = document.getElementById('city-title');

export default function printWeather() {
  console.log(cityInfo);
  cityTemp.innerText = cityInfo.temp;
  cityFeelsLike.innerText = cityInfo.feelsLike;
  cityHighOf.innerText = cityInfo.tempMax;
  cityLowOf.innerText = cityInfo.tempMin;
  cityHumidity.innerText = cityInfo.humidity;
  cityPressure.innerText = cityInfo.pressure;
  cityWindSpeed.innerText = cityInfo.windSpeed;
  cityTitle.innerText = cityInfo.name;
}
