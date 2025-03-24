// 🔹 Події миші (click, dblclick, mouseover, mouseout, contextmenu)
//   1. Додайте обробник dblclick, який змінюватиме текст кнопки після подвійного кліку.
const btn = document.getElementById('changeBackground');
btn.addEventListener('dblclick', () => {
  btn.style.color = 'violet';
});
//   2. Додайте обробник mouseout, який змінюватиме фон кнопки в червоний після виходу миші.
btn.addEventListener('mouseout', () => {
      btn.style.backgroundColor = 'red';
    });


//  🔹 Події клавіатури (keydown, keyup, keypress)
//   3. Виведіть у консоль символ, який був введений (keypress).
let simbol = document.querySelector("#myInput");
  simbol.addEventListener('keypress',function(event){ 
      console.log('було введенo:', event.code);
 });
//   4. Реалізуйте перевірку, якщо натиснута клавіша "Enter", 
// виведіть повідомлення "Натиснуто Enter". (event.key)
document.addEventListener('keydown', function(event) {
  if(event.key === "Enter"){
    console.log("Натиснуто Enter");
  }else{
    console.log('було нажато: ', event.key);
  } 
})
//  🔹 Події форми (input, change, submit, focus, blur)
//   5. Перевіряйте введене значення у select, і якщо вибрано "option2", виведіть якесь
//  повідомлення. (change, value)
//   ДАНО:
//   <select id="options" name="options">
//         <option value="option1">Вариант 1</option>
//         <option value="option2">Вариант 2</option>
//         <option value="option3">Вариант 3</option>
//     </select>
let valueSelect = document.querySelector("#options");
  valueSelect.addEventListener('change',function(){ 
    let selected = this.value;
    if(selected === "option2"){
      alert("Вариант 2");
    }else{
      console.log('обрано: ', selected);
    }
 });
//   6. Додайте обробник blur, який перевірятиме, чи поле вводу не порожнє. (value)
//   ДАНО:
//   <input type="text">;
let blurCheck = document.querySelector("#blurCheck");
  blurCheck.addEventListener('blur',function(){ 
    let inputValue = this.value.trim();
    if(inputValue === ""){
      console.log("The input field is blank");
    }else{
      console.log('The text of the field is: ', inputValue);
    }
 });
// *8  🔹 Події документа та вікна
//  (load, scroll, resize, beforeunload, copy)
//   7. Відстежуйте прокрутку сторінки і виводьте поточну позицію window.scrollY.
//  (window,scroll)
window.addEventListener('scroll', function(){
  console.log(window.scrollY);
});
//   8. Виведіть повідомлення при копіюванні тексту (document, copy).
document.addEventListener('copy', function(){
  console.log('Text copied.');
});
// ****  🔹 Видалення обробника події
// 9. Є кнопка, при натисканні на яку з’являється повідомлення "Кнопка натиснута!".
// Потрібно видалити цей обробник після першого кліку, щоб повідомлення більше не з’являлося.
document.querySelector('#mestBtn').addEventListener('click', function(){
    console.log('Кнопка була натиснута!');
   }, {once: true});
// ****************************************об'єкт події (event)
// 🔹 Вправа 10. Визначення елемента, на якому сталася подія
// 📌 Завдання:
// Додайте обробник події для всього документа та виведіть у консоль елемент,
//  на якому сталася подія.
document.addEventListener('click', function(event){
  console.log('The event occurred on: ', event.target)
})
// 🔹 Вправа 11. Визначення натиснутої клавіші
// 📌 Завдання:
// Напишіть код, який буде виводити в консоль символ клавіші при натисканні.

document.addEventListener('keydown', function(event) {    
   console.log(event.key); // символ клавіш
});
// ***********Вправи на тему "Спливання та делегування подій в JavaScript"

// Вправа 12: Зупинка спливання
// Завдання:
// Є код, модифікуй код так, щоб при натисканні на кнопку спрацьовував тільки її обробник,
//  але не обробник div.
// ДАНО:
// <div id="parent" style="padding: 20px; background: lightblue;">
//   <button id="child">Натисни мене</button>
// </div>
  document.getElementById("parent").addEventListener("click", function () {
    alert("Клік на батьківському елементі!");
 });
  document.getElementById("child").addEventListener("click", function (event) {
     event.stopPropagation();
    alert("Клік на кнопці!");

});
//Якщо натиснути кнопку, спочатку спрацює "Клік на кнопці!".
// Потім спрацює "Клік на батьківському елементі!", оскільки подія "спливає" вгору по DOM
// 📌 Що зміниться?
// Тепер "Клік на батьківському елементі!" не з’явиться, тому що подія не "спливатиме" вгору.
//Якщо натиснути кнопку, спочатку спрацює "Клік на кнопці!".
// Вправа 13: Додавання нового елемента в делеговану структуру
// Завдання:
// Є код, модифікуй так, щоб при натисканні кнопки додавався новий пункт списку,
//  і він теж реагував на кліки.
//   ДАНО:
// <ul id="menu">
//   <li>Елемент 1</li>
//   <li>Елемент 2</li>
//   <li>Елемент 3</li>
// </ul>

  document.getElementById("menu").addEventListener("click", function (event) {
    if (event.target.tagName === "li") {
      console.log("Ви натиснули: " + event.target.textContent);
     }
   });
   document.getElementById("child").addEventListener("click", function (event) {
  let newItem = document.createElement('li');
  newItem.textContent = 'New element li ' + (document.querySelectorAll('#menu li').length + 1);
  document.getElementById('menu').appendChild(newItem)
});


//** Вправи на тему "Стандартна поведінка подій і preventDefault в JavaScript"

// Вправа 14: Скасування відправки форми
// Завдання:
// Форма за замовчуванням відправляється та перезавантажує сторінку.
//  Забороніть її відправку та виведіть "Форма не була відправлена!".

// <form id="testForm">
//   <input type="text" placeholder="Ваше ім'я">
//   <button type="submit">Відправити</button>
// </form>

  document.getElementById("testForm").addEventListener("submit", function (event) {
   event.preventDefault();
   console.log("Форма не була відправлена!");
  });

// Вправа 15: Дозволити введення тільки цифр
// Завдання:
// Поле вводу має приймати тільки цифри.
//  Якщо користувач натискає будь-яку іншу клавішу, введення не повинно відбуватися.

// <input type="text" id="onlyNumbers" placeholder="Введіть число">

  document.getElementById("onlyNumbers").addEventListener("keypress", function (event) {
 let number = event.key;
 if(!/[0-9]/.test(number)){
  event.preventDefault();
 }
   });









 // *********************************🔹 1-5. Події миші (click, dblclick, mouseover, mouseout, contextmenu)
      //   1. Додайте обробник події click, який змінюватиме колір кнопки при натисканні.

      //   const btn = document.getElementById('myButton');
      //   btn.addEventListener('click', () => {
      //       btn.style.backgroundColor = 'red';
      //   });

      //   3. Додайте обробник mouseover, який змінюватиме фон кнопки при наведенні миші.

      //   btn.addEventListener('mouseover', () => {
      //       btn.style.backgroundColor = 'blue';
      //   });

      // **************  🔹 6-10. Події клавіатури (keydown, keyup, keypress)
      //   6. Виведіть у консоль код натиснутої клавіші (keydown).

      //   document.addEventListener('keydown', (event) => {
      //       console.log('Код клавіші:', event.code);
      //   });

      //   8. Додайте обробник keyup, який змінюватиме текст у span після відпускання клавіші.

      //   const span = document.getElementById('output');
      //   document.addEventListener('keyup', (event) => {
      //       span.textContent = `Відпущено: ${event.key}`;
      //   });

      // **************  🔹 Події форми (input, change, submit, focus, blur)
      //   11. Виведіть у консоль поточне значення поля вводу (input).

      //   const input = document.getElementById('name');
      //   input.addEventListener('input', () => {
      //       console.log('Введено:', input.value);
      //   });

      //   13. Додайте обробник focus, який змінюватиме фон поля вводу.

      //   input.addEventListener('focus', () => {
      //       input.style.backgroundColor = 'lightblue';
      //   });

      // *******************  🔹 Події документа та вікна (load, scroll, resize, beforeunload, copy)
      //   16. Додайте обробник load, який покаже повідомлення після повного завантаження сторінки.

      //   window.addEventListener('load', () => {
      //       alert('Сторінка завантажена!');
      //   });

      //   18. Виведіть розміри вікна при його зміні (resize).

      //   window.addEventListener('resize', () => {
      //       console.log(`Ширина: ${window.innerWidth}, Висота: ${window.innerHeight}`);
      //   });
      // ****************************************об'єкт події (event)
      // 🔹 Вправа 1. Визначення типу події
      // 📌 Завдання:
      // Напишіть обробник подій, який буде виводити в консоль тип події (event.type).
      // Використовуйте події миші та клавіатури.

      // document.addEventListener('click', function(event) {
      //     console.log(event.type); // Що буде виведено?
      // });

      // document.addEventListener('keydown', function(event) {
      //     console.log(event.type); // Що буде виведено?
      // });
      // ✅ Відповідь:
      // При кліку → "click"
      // При натисканні клавіші → "keydown"

      // 🔹 Вправа 3. Координати кліку миші
      // 📌 Завдання:
      // Отримайте координати курсора під час кліку на сторінці.

      // document.addEventListener('click', function(event) {
      //     console.log(`Координати: X=${event.clientX}, Y=${event.clientY}`);
      // });
      // ✅ Відповідь:
      // Залежить від місця кліку. Наприклад:
      // Координати: X=200, Y=150

      // 🔹 Вправа 9. Відстеження натискання Enter
      // 📌 Завдання:
      // Зробіть так, щоб при натисканні Enter текст у полі вводу з'являвся в <p>.

      // html
      // Copy code
      // <input type="text" id="inputField">
      // <p id="output"></p>

      // <script>
      // document.getElementById('inputField').addEventListener('keydown', function(event) {
      //     if (event.key === 'Enter') {
      //         document.getElementById('output').textContent = this.value;
      //     }
      // });
      // ✅ Відповідь:
      // При введенні "Hello" і натисканні Enter, <p> міститиме "Hello".

      // ********************************Вправи на тему "Спливання та делегування подій в JavaScript"
      // Вправа 1: Розуміння спливання подій
      // Завдання:
      // Є кнопка всередині div. Додай обробники кліку на обидва елементи та поясни порядок їхнього виклику.

      // <div id="parent" style="padding: 20px; background: lightblue;">
      //   <button id="child">Натисни мене</button>
      // </div>

      //   document.getElementById("parent").addEventListener("click", function () {
      //     alert("Клік на батьківському елементі!");
      //   });

      //   document.getElementById("child").addEventListener("click", function () {
      //     alert("Клік на кнопці!");
      //   });

      // ✅ Відповідь:

      // Якщо натиснути кнопку, спочатку спрацює "Клік на кнопці!".
      // Потім спрацює "Клік на батьківському елементі!", оскільки подія "спливає" вгору по DOM.

      // Вправа 3: Делегування подій
      // Завдання:
      // У тебе є список <ul>, в якому є кілька <li>. Додай обробник подій на <ul>, щоб при натисканні на будь-який <li> відображався його текст.

      // <ul id="menu">
      //   <li>Елемент 1</li>
      //   <li>Елемент 2</li>
      //   <li>Елемент 3</li>
      // </ul>

      //   document.getElementById("menu").addEventListener("click", function (event) {
      //     if (event.target.tagName === "LI") {
      //       alert("Ви натиснули: " + event.target.textContent);
      //     }
      //   });

      // ✅ Відповідь:

      // Обробник стоїть на <ul>, а не на кожному <li>.
      // Якщо клікнути на <li>, подія "спливе" до <ul>.
      // event.target.tagName === "LI" перевіряє, що натиснуто саме <li>, а не <ul>.

      //********************* Вправи на тему "Стандартна поведінка подій і preventDefault в JavaScript"
      // Вправа 1: Заборона переходу за посиланням
      // Завдання:
      // Є посилання, яке веде на https://google.com. Твоє завдання – зробити так, щоб при кліку воно не працювало, а замість цього з’являлось повідомлення "Перехід заблоковано!".

      // <a href="https://google.com" id="myLink">Перейти на Google</a>

      //   document.getElementById("myLink").addEventListener("click", function (event) {
      //     // Допиши код тут
      //   });

      // ✅ Відповідь:

      // event.preventDefault(); // Забороняємо перехід
      // alert("Перехід заблоковано!");

      // Вправа 3: Заборона відкриття контекстного меню
      // Завдання:
      // Блокуй правий клік миші, щоб контекстне меню не відкривалося. При натисканні правої кнопки має з’являтися "Контекстне меню заблоковано!".

      // <p>Спробуйте натиснути правою кнопкою миші</p>

      //   document.addEventListener("contextmenu", function (event) {
      //     // Допиши код тут
      //   });

      // ✅ Відповідь:

      // event.preventDefault();

      // alert("Контекстне меню заблоковано!");