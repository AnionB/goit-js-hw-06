const counterValueEl = document.querySelector('#value');
let counterValue = 0;
const decrementBtnEl = document.querySelector('[data-action="decrement"]');
const decreaseValue = () => {
  counterValue -= 1;
  counterValueEl.textContent = counterValue;
};
decrementBtnEl.addEventListener('click', decreaseValue);

const incrementBtnEl = document.querySelector('[data-action="increment"]');
const increaseValue = () => {
  counterValue += 1;
  counterValueEl.textContent = counterValue;
};
incrementBtnEl.addEventListener('click', increaseValue);
