const toDoForm = document.getElementById("todo-form");
// 이미 찾아놓은 요소 안의 또다른 요소를 찾고자 할 때
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function handleToDoSubmit(event) {
  event.preventDefault();
  // 사용자가 값을 입력하고 엔터를 눌렀을 때 입력칸이 비워지도록 만들기 -> 그전에 입력한 값을 저장하는 것은 필수!
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  paintToDo(newToDo);
}

// 브라우저에 투두를 그려주는 함수
function paintToDo(newToDo) {
  // li를 만들고 그 안에 span을 이용하여 요소를 만들어줄 것임. 삭제버튼도 만들 것이기 때문!
  const li = document.createElement("li");
  const span = document.createElement("span");
  // span에 내가 입력한 투두 입력
  span.innerText = newToDo;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", delTodo);
  // li 밑에 span과 버튼이 위치하도록
  li.appendChild(span);
  li.appendChild(button);
  // 투두와 버튼이 입력되어있는 li를 투두 리스트에 추가
  toDoList.appendChild(li);
}

// 브라우저의 투두를 삭제하는 함수
function delTodo(event) {
  // 이벤트가 발생한 타겟의 부모에게 접근 -> 타겟의 부모는 span과 button을 가지고 있는 li.
  const deleteLi = event.target.parentElement;
  // 그 li를 삭제하는 것.
  deleteLi.remove();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
