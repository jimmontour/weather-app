import { cityInfo } from './getWeather';

export default function updateBackground() {
  const backgroundImg = document.querySelector('.weather-image');
  const weatherDescription = document.querySelector('.weather-description');

  if (cityInfo.condition.toLowerCase() === 'snow') {
    backgroundImg.style.background =
      'url("https://images.unsplash.com/photo-1606590314099-10968fd18f26?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80")';
    weatherDescription.innerText = 'Get your shovel ready, cause its snowing!';
  } else if (cityInfo.condition.toLowerCase() === 'rain') {
    backgroundImg.style.background =
      'url("https://images.unsplash.com/photo-1549754219-d6ce720de7dc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80")';
    weatherDescription.innerText(
      'Looks like rain today, so bring your umbrella!'
    );
  } else if (cityInfo.condition.toLowerCase() === 'clear') {
    weatherDescription.innerText = 'Clear sky today!';
    backgroundImg.style.background =
      'url("https://images.unsplash.com/photo-1551524163-cae1431815c0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1300&q=80")';
  } else if (cityInfo.condition.toLowerCase() === 'clouds') {
    backgroundImg.style.background =
      'url("https://images.unsplash.com/photo-1534088568595-a066f410bcda?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1289&q=80")';
    weatherDescription.innerText =
      'Looks like a cloudy day today.  No sunglasses required!';
  } else {
    backgroundImg.style.background =
      'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1052&q=80")';
  }
}
