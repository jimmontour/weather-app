import { cityInfo } from './getWeather';

const container = document.querySelector('.container');

export default function updateBackground() {
  if (cityInfo.condition.toLowerCase() === 'snow') {
    console.log('its snowing!', container);
  } else {
    console.log('its not snowing');
  }
}
