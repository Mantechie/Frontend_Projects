const button = document.getElementById("get-weather-btn");
const select = document.getElementById("city-select");

// Fetch weather data
async function getWeather(city) {
  try {
    const response = await fetch(`https://weather-proxy.freecodecamp.rocks/api/city/${city}`);
    
    if (!response.ok) {
      throw new Error("Network response failed");
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error(error);
    return null;
  }
}

// Display weather data
async function showWeather(city) {
  const data = await getWeather(city);

  if (!data) {
    alert("Something went wrong, please try again later.");
    return;
  }

  document.getElementById("weather-container").style.display = "block";

  document.getElementById("weather-icon").src =
    data.weather?.[0]?.icon || "";

  document.getElementById("weather-main").textContent =
    data.weather?.[0]?.main || "N/A";

  document.getElementById("location").textContent =
    data.name || "N/A";

  document.getElementById("main-temperature").textContent =
    `Temperature: ${data.main?.temp ?? "N/A"} °C`;

  document.getElementById("feels-like").textContent =
    `Feels like: ${data.main?.feels_like ?? "N/A"} °C`;

  document.getElementById("humidity").textContent =
    `Humidity: ${data.main?.humidity ?? "N/A"} %`;

  document.getElementById("wind").textContent =
    `Wind Speed: ${data.wind?.speed ?? "N/A"} m/s`;

  document.getElementById("wind-gust").textContent =
    `Wind Gust: ${data.wind?.gust ?? "N/A"} m/s`;
}

// Button click event
button.addEventListener("click", () => {
  const city = select.value;

  if (!city) return; // Do nothing if no city selected

  showWeather(city);
});