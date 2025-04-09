/* <form id="loginForm">
  <label for="login">Логін:</label>
  <input type="text" id="login" />
  <span id="loginError" style="color: red"></span>
  <br />
  <button type="submit">Надіслати</button>
// </form> */// <!-- Вправа 1: Перевірка мінімальної довжини логіна Завдання: Реалізуйте перевірку,
// щоб логін містив щонайменше 5 символів. Рішення: -->
let loginForm = document.querySelector('#loginForm');
let loginInput = document.querySelector('#login');
loginInput.addEventListener('input', function(){
  let textError = document.querySelector('#loginError');
  if(this.value.length < 5){
    textError.textContent = 'Login must contain a min of 5 characters';
    this.setCustomValidity('Login must contain a min of 5 characters');
  }else{
    this.setCustomValidity('');
    textError.textContent = '';
  }
});
loginForm.addEventListener('submit', function(event){
  if(!loginForm.checkValidity()){
    event.preventDefault();
    loginInput.reportValidity();
  }
});

// Вправа 2: Перевірка, чи введене значення є числом Завдання: Поле введення віку
// повинно приймати тільки числові значення. Рішення:

// <form id="ageForm">
//   <label for="age">Вік:</label>
//   <input type="text" id="age" />
//   <span id="ageError" style="color: red"></span>
//   <br />
//   <button type="submit">Надіслати</button>
// </form>
let ageForm = document.querySelector('#ageForm');
let ageInput = document.querySelector('#age');

ageInput.addEventListener('input', function(){
  let textError =  document.querySelector('#ageError');
  let value = ageInput.value.trim();

  if(value === '' || isNaN(value)){
    ageInput.setCustomValidity('Please enter a number');
    textError.textContent = 'Please enter a number'; 
  }else{
    ageInput.setCustomValidity('');
    textError.textContent = ''; 
  }
});
ageForm.addEventListener('submit', function(event){
  if(!ageForm.checkValidity()){
    event.preventDefault();
    ageInput.reportValidity();
  }
});


// Вправа 3: Валідація форми перед надсиланням Завдання: Заборонити надсилання
// форми, якщо не заповнені всі поля. Рішення:

// <form id="formCheck">
//   <label for="email">Email:</label>
//   <input type="email" id="email" />
//   <br />
//   <label for="password">Пароль:</label>
//   <input type="password" id="password" />
//   <br />
//   <button type="submit">Надіслати</button>
// </form>
// <div style="padding: 25px;"></div>
let checkForm = document.querySelector('#formCheck');
let emailInput = document.querySelector('#email');
let passwordInput = document.querySelector('#password');


