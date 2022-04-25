const API_KEY = "82c8310f4f6db262c2923d16ddbd89f2";

function geoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = data.weather[0].main;
    });
}

function geoError() {}

// 현재 위치를 알 수 있음. 두 개의 아규먼트를 필요로 하는데, 첫 번째는 모든게 정상일 때의 함수,
// 두 번째는 에러가 발생했을 때 실행할 함수
navigator.geolocation.getCurrentPosition(geoOk, geoError);
