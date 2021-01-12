import { cityInfo } from './getWeather';

export default function updateBackground() {
  const backgroundImg = document.querySelector('.weather-image');
  const weatherDescription = document.querySelector('.weather-description');

  if (cityInfo.condition.toLowerCase() === 'snow') {
    console.log('snow');
    weatherDescription.innerText = 'Get your shovel ready, cause its snowing!';
    backgroundImg.style.background = ""
  } else if (cityInfo.condition.toLowerCase() === 'rain') {
    console.log('rain');
    weatherDescription.innerText =
      'Looks like rain today, so bring your umbrella!';
  } else if (cityInfo.condition.toLowerCase() === 'clear') {
    console.log('clear');
    weatherDescription.innerText = 'Clear sky today!';
  } else if (cityInfo.condition.toLowerCase() === 'clouds') {
    console.log('clouds');
    weatherDescription.innerText =
      'Looks like a cloudy day today.  No sunglasses required!';
  } else {
    console.log('whatever');
  }
}
