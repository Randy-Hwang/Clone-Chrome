const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function handleLoginClick() {
  console.log(loginInput.value);
}

loginButton.addEventListener("click", handleLoginClick);
// commit test -> after pull
