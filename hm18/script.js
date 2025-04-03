// <!-- ************Вправи з відповідями: Обробка подій форми в JavaScript -->
// Вправа 1: Автоматичне форматування номера телефону Завдання: Реалізуйте поле
// введення номера телефону, яке автоматично додає +380 на початку, якщо його
// немає. ДАНО:

// <form>
//   <label for="phone">Телефон:</label>
//   <input type="tel" id="phone" placeholder="+380XXXXXXXXX" />
//   <button type="submit">Надіслати</button>
// </form>
document.getElementById('phone').addEventListener('input', function () {
  let input = this.value;
  if(!input.startsWith('+380')){
    input = input.replace(/\D/g,"");//delete number with input
    if(input.startsWith("380")){
      input = "+" + input;
    }else{
      input = "+380" + input;
    }
    this.value = input;
  }

});
// Вправа 2: Підрахунок символів у полі коментаря Завдання: Реалізуйте текстове
// поле для коментаря, яке показує кількість введених символів (максимум 200
// символів). 

// <form>
//   <label for="comment">Коментар:</label>
//   <textarea id="comment" maxlength="200"></textarea>
//   <p id="charCount">0 / 200</p>
// </form>

document.querySelector('#comment').addEventListener('input', function() {
  let textarea = this.value;
  let outSpases = textarea.replace(/\s/g,'');
  let count = outSpases.length;

  document.querySelector('#charCount').textContent = count + "/ 200";
 
});
// document.querySelector('#comment').addEventListener('input', function() {
//   let textarea = this.value.replace(/\s/g,'');
//   let count = 0;
//   let message = document.querySelector('#charCount');

//   for (let letter of textarea) {
//       count ++; 
//    }
//    message.textContent = count + "/ 200";
// });

// Вправа 3: Вимкнення кнопки відправки, якщо чекбокс не відзначено Завдання:
// Користувач має погодитися з умовами використання, перш ніж натиснути кнопку
// "Надіслати". Рішення:

// <form>
//   <input type="checkbox" id="agree" /> Я погоджуюся з умовами
//   <br />
//   <button type="submit" id="submitBtn" disabled>Надіслати</button>
// </form>
let check = document.querySelector('#agree');
let but = document.querySelector('#submitBtn');

check.addEventListener('change', function(){
but.disabled = !check.checked;
});
 but.addEventListener('submit',function(event){
 if(!check.checked){
   event.preventDefault();
  }else{
  alert('Вы маєте погодитися з умовами');  
 }  
});

// Вправа 4: Перевірка відповідності паролів Завдання: Реалізуйте два поля введення
// пароля. Користувач не може надіслати форму, якщо паролі не співпадають. Рішення:

//   <label for="password1">Пароль:</label>
//   <input type="password" id="password1" />

//   <label for="password2">Повторіть пароль:</label>
//   <input type="password" id="password2" />

//   <p id="passwordError" style="color: red"></p>

//   <button type="submit" id="submitPassword">Надіслати</button>
// </form>

document.querySelector('#passwordForm').addEventListener('submit', function(event){
let password1 = document.querySelector('#password1').value;
let password2 = document.querySelector('#password2').value;
let message = document.querySelector('#passwordError')

if(password1 !== password2){
  event.preventDefault();
  message.textContent = `The passwords don't match`; 
}else{
  message.textContent = "";
}
});

// Вправа 5: Динамічна зміна кольору фону Завдання: Змініть колір фону сторінки на
// вибраний користувачем із випадаючого списку. Рішення:
// <form>
//   <label for="color">Виберіть колір фону:</label>
//   <select id="color">
//     <option value="white">Білий</option>
//     <option value="lightblue">Блакитний</option>
//     <option value="lightgreen">Зелений</option>
//     <option value="lightyellow">Жовтий</option>
//   </select>
// </form>

let select = document.querySelector('#color2');
select.addEventListener('change', function(){

  let selectedColor = select.value;

  switch(selectedColor) {
    case 'white':
      document.body.style.backgroundColor = 'white';
      break;
    case 'lightblue':
      document.body.style.backgroundColor = 'lightblue';
      break;
    case 'lightgreen':
      document.body.style.backgroundColor = 'lightgreen'
      break;
    case 'lightyellow':
       document.body.style.backgroundColor = 'lightyellow'
      break;
    default:
      document.body.style.backgroundColor = 'lightgrey'
  }
});