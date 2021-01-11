import './main.css';

const cityName = 'buffalo';

async function getWeather() {
  try {
    const weatherRequest = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=9fea2eee139f9e0daabf0cf1f712a5fa`,
      { mode: 'cors' }
    );
    const weatherData = await weatherRequest.json();
    const temp = console.log(weatherData.main.temp);
  } catch (err) {
    console.log(err);
  }
}

getWeather();
