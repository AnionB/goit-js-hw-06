const inputEl = document.querySelector('#name-input');
const nameSpanEl = document.querySelector('#name-output');
const onChangeInput = () => {
  nameSpanEl.textContent = inputEl.value;
  if (inputEl.value === '') {
    nameSpanEl.textContent = 'Anonymous';
  }
};
inputEl.addEventListener('input', onChangeInput);
