const loginToggle = document.getElementById('login-toggle');
const registerToggle = document.getElementById('register-toggle');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const formContent = document.querySelector('.form-content');

loginToggle.addEventListener('click', () => {
  formContent.style.transform = 'translateX(0)';
  loginToggle.classList.add('active');
  registerToggle.classList.remove('active');
});

registerToggle.addEventListener('click', () => {
  formContent.style.transform = 'translateX(-50%)';
  registerToggle.classList.add('active');
  loginToggle.classList.remove('active');
});