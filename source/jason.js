function changeTemp(display) {
  let changeWeather = Math.round(display.data.temperature.current);
  let innerTemp = document.querySelector("span.temp-value");
  innerTemp.innerHTML = changeWeather;
}

function respond(event) {
  event.preventDefault();
  let entry = document.querySelector("#got-form");
  let city = entry.value;
  let apiKey = "8ab570aff7t8c4d757b9f03613oab792";
  let theLink = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(theLink).then(changeTemp);

  let cityElement = document.querySelector("h1");
  cityElement.innerHTML = city;

  let currentDate = new Date();

  currentDate.getDay();
  currentDate.getDate();
  currentDate.getHours();
  currentDate.getMinutes();

  let dateMap = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let date1Map = dateMap[currentDate.getDay()];
  let hourMap = currentDate.getHours();
  let minuteMap = currentDate.getMinutes();

  let currentDetails = document.querySelector("span.java-date");
  currentDetails.innerHTML = ` ${date1Map} ${hourMap}:${minuteMap} hrs,`;
}
let formInput = document.querySelector("input.input-1");
let selectForm = document.querySelector("form");
selectForm.addEventListener("submit", respond);
