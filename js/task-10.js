function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('input');
const createBtnEl = document.querySelector('[data-create]');
const destroyBtnEl = document.querySelector('[data-destroy]');
const boxesEl = document.querySelector('#boxes');
let size = 30;

const onCreateBtnClick = () => {
  createBoxes(inputEl.value);
  inputEl.value = '';
};

const onDestroyBtnClick = () => {
  destroyBoxes();
};

function createBoxes(amount) {
  if (amount < 1) {
    return;
  }
  const boxes = [];
  for (let i = 1; i <= amount; i += 1) {
    console.log(i);
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.width = size + 'px';
    box.style.height = size + 'px';
    box.style.backgroundColor = getRandomHexColor();
    size += 10;
    boxes.push(box);
  }
  boxesEl.append(...boxes);
}
function destroyBoxes() {
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(box => box.remove());
}

createBtnEl.addEventListener('click', onCreateBtnClick);
destroyBtnEl.addEventListener('click', onDestroyBtnClick);
