import getWeather from './getWeather';

const input = document.querySelector('.weather-search__input');
const submit = document.querySelector('.weather-search__btn');

submit.addEventListener('click', () => {
  getWeather(`${input.value.toLowerCase()}`);
});
