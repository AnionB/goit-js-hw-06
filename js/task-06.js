const inputEl = document.querySelector('#validation-input');
const checkLength = () => {
  if (inputEl.value.length === Number(inputEl.dataset.length)) {
    inputEl.classList.remove('invalid');
    inputEl.classList.add('valid');
    return;
  }
  return inputEl.classList.add('invalid');
};
inputEl.addEventListener('blur', checkLength);
