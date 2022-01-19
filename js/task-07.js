const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
textEl.style.fontSize = inputEl.value + 'px';

const onChangeInput = action => {
  textEl.style.fontSize = `${action.currentTarget.value}px`;
};
inputEl.addEventListener('input', onChangeInput);
