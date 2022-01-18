const inputEl = document.querySelector('#validation-input');
const onLossFocus = action => {
  if (
    action.currentTarget.value.length ===
    Number(action.currentTarget.dataset.length)
  ) {
    action.currentTarget.classList.remove('invalid');
    action.currentTarget.classList.add('valid');
    return;
  }
  return action.currentTarget.classList.add('invalid');
};
inputEl.addEventListener('blur', onLossFocus);
