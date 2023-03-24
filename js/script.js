const Mario = document.querySelector(".Mario");

const jump = () => {
 Mario.classList.add("jump")

  setTimeout(() => {

    Mario.classList.remove("jump");

  },500);

} 

const loop = setInterval(() => {

const pipePosition = pipe.offsetleft;

pipe.style.animation = 'none';
pipe.style.left = `${pipePosition}px`;

}, 10);

document.addEventListener("keydown", jump);