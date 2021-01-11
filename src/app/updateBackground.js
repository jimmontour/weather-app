import { cityInfo } from './getWeather';

const container = document.querySelector('.container');

export default function updateBackground() {
  if (cityInfo.condition.toLowerCase() === 'snow') {
    console.log('its snowing!', container);
    container.style.background =
      'blue url("https://images.unsplash.com/photo-1610377550697-807a629c2d81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80")';
  } else {
    console.log('its not snowing');
  }
}
