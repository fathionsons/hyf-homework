let inputCity = document.querySelector('input');
let btn = document.getElementById('searchbutton');
btn.addEventListener("click", function () {
  let cityName = inputCity.value;
  if (cityName === " ") {
    alert("Could you please enter the city, I'm impatient.");
    return false;
  }
  document.querySelector('#theweather').style.visibility = "visible";

  
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=f8552d0e00cb87d3f30c34cf9aa9f3b8')
    .then(response => response.json())
    .then(response => {
      console.log(response);
      let cityName = document.querySelector('#thecity');
      let cityTemp = document.querySelector('#prefetchonsfathi');
      let cityHumidity = document.querySelector('#hm');
      let cityDesc = document.querySelector('#responseons');
      let windSpeed = document.querySelector("#wd");

      cityName.innerHTML = response.name;
      cityTemp.innerHTML = Math.floor(response.main.temp - 273.15) + "&#176" + "C ";
      cityHumidity.innerHTML = "humidity :" + " " + response.main.humidity + "%";
      windSpeed.innerHTML = "windspeed :" + " " + Math.floor(response.wind.speed) + " " + "m/s";
      let weatherDesc = response.weather[0].description;
      let iconId = response.weather[0].icon;
      let img = document.querySelector("#imageons").src = "http://openweathermap.org/img/w/" + iconId + ".png";
    })
})

let currentLocEvent = document.getElementById('thelocationofyou');
  
  currentLocEvent.addEventListener('click',getLocation);
function getCityByLocation (lat,lon){
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=6f7ef7a9fe25ab961ed052229ba8c3b6`
  fetch(url)
  .then(response => response.json())
          .then((info) => {
          
          });
}
console.log(Response)
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } 
}
function showPosition(position) {
lat = position.coords.latitude;
lon = position.coords.longitude; 
getCityByLocation(lat,lon)
}
console.log(position)
//*fathi ons//
//* yourlocation button seems to be working,because the icon of the location in my browser
//*shows that, it does something, but i cannot show it as an information