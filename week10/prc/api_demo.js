const API_KEY = "f34226b8317feebe5c91ec105e324c0c";
const CITY = "Tampere";

const showChart = (data) => {
  const temps = data.list.map((item) => item.main.temp);
  const dates = data.list.map((item) => item.dt_txt);
  const feelsLike = data.list.map((item) => item.main.feels_like);

  // console.log(temps);
  // console.log(dates);

  const context = document.getElementById("weather-forecast").getContext("2d");
  const weatherChart = new Chart(context, {
    type: "line",
    data: {
      labels: dates,
      datasets: [
        {
          label: "Temperature (Celsius)",
          data: temps,
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        },
        {
          label: "Feels like temperature (Celsius)",
          data: feelsLike,
          backgroundColor: "lightblue",
          borderColor: "blue",
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        // x: { beginAtZero: false },
        y: { beginAtZero: false },
      },
    },
  });
};

const fetchWeatherData = async () => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?units=metric&q=${CITY}&appid=${API_KEY}`
    );
    const data = await response.json();
    // console.log(data);
    showChart(data);
  } catch (err) {
    console.error(err);
  }
};

fetchWeatherData();
