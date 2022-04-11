// 그냥 #clock만 적어도 무방하고, h2#clock으로 적어도 무방함.
const clock = document.querySelector("h2#clock");

// 시:분:초를 보여주는 시계 함수
function getClock() {
  const date = new Date();
  // String으로 시, 분, 초를 각각 얻고, padStart를 활용하여 01, 02, 03과 같은 형식으로 표현한다.
  // padStart(글자의 수, 부족할 때 채워넣을 글자)
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock();
//일정간격마다 함수 실행. 첫번째 아규먼트는 실행할 함수, 두 번째 아규먼트는 간격을 밀리초 단위로 적어놓은 것.
setInterval(getClock, 1000);
