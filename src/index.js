import './main.css';
import getWeather, { cityInfo } from './app/getWeather';
import searchCity from './app/searchCity';

// Variables:
let cityName = '';

// CACHE DOM:
const submit = document.querySelector('.weather-search__btn');
const input = document.querySelector('.weather-search__input');

// Event Delegation:
submit.addEventListener('click', () => {
  console.log('clicked');
  cityName = input.value.toLowerCase();
  console.log(cityName);
  getWeather(`${cityName}`);
});

// Run:
