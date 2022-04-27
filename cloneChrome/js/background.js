// img폴더에 있는 파일을 배열로 만들고, 여기서 랜덤한 숫자를 얻는 코드
// Math.random()은 0에서 1사이의 랜덤한 소수점숫자를 얻는 것 아니었나? 여기에 10을 곱하고 내림을 해야 1부터 10까지의 정수가 나온다.
// 근데 3을 곱한다고 해서 1부터 3까지의 정수가 나오나?
// 0.9에 3을 곱해도 2.7로 가능은 하다만... 정말 이 방법이 맞는지 의문점이 든다.

const images = ["0.jpeg", "1.png", "2.jpeg"];
const chosenImg = images[Math.floor(Math.random() * images.length)];

// 랜덤하게 정해진 이미지를 html에 직접 추가하는 방법
// querySelector, querySelectorAll 처럼 html에 만들어진 요소를 가져와서 수정하는 것이 아니라,
// 자바스크립트가 요소를 만들어서 html에 추가하게 될 것임.
const bgImg = document.createElement("img");
bgImg.src = `img/${chosenImg}`;
document.body.appendChild(bgImg);
