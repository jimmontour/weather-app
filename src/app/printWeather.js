import { cityInfo } from './getWeather';

// DOM CACHE:
const cityTemp = document.getElementById('temp');
const cityHighOf = document.getElementById('high-of');
const cityLowOf = document.getElementById('low-of');
const cityTitle = document.getElementById('city-title');

export default function printWeather() {
  console.log(cityInfo);
  cityTemp.innerText = cityInfo.temp;
  cityHighOf.innerText = cityInfo.tempMax;
  cityLowOf.innerText = cityInfo.tempMin;
  cityTitle.innerText = cityInfo.name;
}
