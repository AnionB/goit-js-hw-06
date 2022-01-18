const counterValueEl = document.querySelector('#value');
let counterValue = 0;

const decrementBtnEl = document.querySelector('[data-action="decrement"]');
const incrementBtnEl = document.querySelector('[data-action="increment"]');

const onDecreaseBtnClick = () => {
  counterValue -= 1;
  counterValueEl.textContent = counterValue;
};
const onIncreaseBtnClick = () => {
  counterValue += 1;
  counterValueEl.textContent = counterValue;
};

decrementBtnEl.addEventListener('click', onDecreaseBtnClick);
incrementBtnEl.addEventListener('click', onIncreaseBtnClick);
