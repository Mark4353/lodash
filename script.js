const slider = document.querySelector(".slider__input");
const image = document.querySelector(".slider__image");
const field = document.getElementById("game-field");
const ball = document.getElementById("ball");
// 1

const resizeImage = () => {
  const scale = slider.value / 100;
  image.style.transform = `scale(${scale})`;

};

slider.addEventListener("input", _.debounce(resizeImage, 100));
// 2

const moveBall = _.debounce((event) => {
  const fieldRect = field.getBoundingClientRect();
  const clickX = event.clientX - fieldRect.left;
  const clickY = event.clientY - fieldRect.top;
  ball.style.top = `${clickY - ball.offsetHeight / 5}px`;
  ball.style.left = `${clickX - ball.offsetWidth / 5}px`;
},200);

field.addEventListener("click", moveBall);
