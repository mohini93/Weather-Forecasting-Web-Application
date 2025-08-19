document.getElementById('weather-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const city = document.getElementById('city').value;
    const apiKey = 'f2b989e9f88b4ac2ba9c4f9999135116'; // ← your real key here
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        const { name, sys, main, weather } = data;
        document.getElementById('weather-result').innerHTML = `
          <h2>${name}, ${sys.country}</h2>
          <p>${weather[0].description}</p>
          <p>Temperature: ${main.temp}°C</p>
        `;
      })
      .catch(error => {
        document.getElementById('weather-result').innerHTML = `<p>Unable to fetch weather information.</p>`;
      });
  });
  
