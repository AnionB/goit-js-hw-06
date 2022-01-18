const formEl = document.querySelector('.login-form');

const onSubmitBtnClick = event => {
  event.preventDefault();
  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  if (email !== '' && password !== '') {
    console.log({ email, password });
    event.currentTarget.reset();
    return;
  }

  alert('Все поля долны быть заволнены');
};

formEl.addEventListener('submit', onSubmitBtnClick);
