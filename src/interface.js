
// const APIKEY = "4481c1667b78a102b6675a3d766ddafc"

/*fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=4481c1667b78a102b6675a3d766ddafc&units=metric')
	.then((response) => {
		return response.json()
	})
	.then((data) => {
    document.querySelector('#city').innerText = data.name;
    document.querySelector('#current-temperature').innerText = data.main.temp;
	});*/

//refactoring version of the festch above
const displayWeather = (city) => {
  console.log("displayweather", city)
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4481c1667b78a102b6675a3d766ddafc&units=metric`

  fetch(url)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      console.log({data})
      document.querySelector('#city').innerText = data.name;
      document.querySelector('#current-temperature').innerText = (Math.round(data.main.temp));
      document.querySelector('#description').innerText = data.weather[0].description;
      //document.querySelector('#weather-icon').innerText = data.weather[0].icon;
    })
}

//.then(data=>console.log(Math.round(data.main.temp)))

displayWeather('London');

document.querySelector('#select-city').addEventListener('submit', (event)=> {
  event.preventDefault();
  const city = document.querySelector('#current-city').value;

  displayWeather(city);
})


/////////////// Thermostat ////////////////////

document.addEventListener("DOMContentLoaded", () => {
  const updateTemperature = () => {
    document.querySelector('#temperature').innerText = thermostat.temperature;
    document.querySelector('#temperature').className = thermostat.energyUsage();
  }

  const thermostat = new Thermostat();
  updateTemperature();

  document.querySelector('#temperature-up').addEventListener('click', () => {
    thermostat.up(); //update the model
    updateTemperature(); //update the view
  });

  document.querySelector('#temperature-down').addEventListener('click', () => {
    thermostat.down(); 
    updateTemperature(); 
  });

  document.querySelector('#temperature-reset').addEventListener('click', () => {
    thermostat.resetTemperature();
    updateTemperature();
  });

  document.querySelector('#powersaving_on').addEventListener('click', () => {
    thermostat.switchPowerSavingModeOn();
    document.querySelector('#power-saving-status').innerText = 'ON';
  });

  document.querySelector('#powersaving_off').addEventListener('click', () => {
    thermostat.switchPowerSavingModeOff();
    document.querySelector('#power-saving-status').innerText = 'OFF';
  });
});

