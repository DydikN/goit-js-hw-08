import throttle from 'lodash.throttle';

const storage = 'feedback-form-state';

const formEl = document.querySelector('.feedback-form');
const emailEl = document.querySelector('input');
const messageEl = document.querySelector('textarea');
const dataBase = {};

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(textInput, 500));

savedText();

function onFormSubmit(e) {
  e.preventDefault();
  dataBase.email = formEl.elements.email.value;
  dataBase.message = formEl.elements.message.value;

  console.log(dataBase);

  formEl.reset();
  localStorage.removeItem(storage);
}

function textInput(e) {
  dataBase[e.target.name] = e.target.value;
  localStorage.setItem(storage, JSON.stringify(dataBase));
}

function savedText() {
  const savedForm = localStorage.getItem(storage);
  if (savedForm) {
    const parceSavedForm = JSON.parse(savedForm);
    for (const prop in parceSavedForm) {
      if (parceSavedForm.hasOwnProperty(prop)) {
        formEl.elements[prop].value = parceSavedForm[prop];
        dataBase[prop] = parceSavedForm[prop];
      }
    }
  }
}
