import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const emailEl = document.querySelector('input[name="email"]');
const messageEl = document.querySelector('textarea[name="message"]');
const dataBase = {
  email: '',
  message: '',
};

formEl.addEventListener('input', throttle(textInput, 500));
formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  console.log(dataBase);
}

function textInput(e) {
  dataBase[e.target.name] = e.target.value;
  const stringifyData = JSON.stringify(dataBase);
  localStorage.setItem('feedback-form-state', stringifyData);
}

function savedText() {
  const getData = localStorage.getItem('feedback-form-state');
  const parsedData = JSON.parse(getData);
  if (parsedData) {
    emailEl.value = parsedData.email;
    messageEl.value = parsedData.message;
  }
}

savedText();
