const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  // event.preventDefault -> form을 제출했을 때 브라우저가 새로고침을 비롯한 기본적으로 프로그래밍된 동작들을 하지않도록 막는 코드
  // 함수의 첫 번째 아규먼트(인자)는 무조건 이벤트에 대한 정보를 담아서 준다. 보통 event라고 적는것이 관례.
  event.preventDefault();

  const username = loginInput.value;
  // localStorage.setItem("username", username); -> 웹브라우저에서 이용가능한 아주 작은 DataBase
  // 첫 번째 아규먼트는 key값, 두 번째 아규먼트는 value 값을 저장한다.
  localStorage.setItem(USERNAME_KEY, username);

  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreetings(username);
}

// greeting 코드 중복 작성 방지를 위한 함수, greeting 보여주기 함수
function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

// localStorage 에 저장된 이름이 없을 경우 -> 로그인폼 보여주기
// 저장된 이름이 있을 경우 -> 저장된 이름 보여주기
const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
  // show login form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show greeting
  paintGreetings(savedUsername);
}
