const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
const onChangeInput = action => {
  textEl.style.fontSize = `${action.currentTarget.value}px`;
  console.log(action.currentTarget);
};
inputEl.addEventListener('input', onChangeInput);
