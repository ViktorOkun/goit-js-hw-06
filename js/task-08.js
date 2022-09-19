const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', onLoginFormSubmit);

function onLoginFormSubmit(event) {
  event.preventDefault();
  const { elements: { email, password } } = event.currentTarget;

  if (email.value && password.value) {
    const data = {
      email: email.value,
      password: password.value
    }

    console.log(data);
    event.currentTarget.reset();
    return;
  }

  alert('All fields must be filled!');
};
