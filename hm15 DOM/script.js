// 1. Отримання значення атрибута
// Дано HTML:

// <a href="https://example.com" id="link">Перейти на сайт</a>
// <button id="getHref">Отримати атрибут href</button>
// Напишіть код, щоб при натисканні на кнопку вивести в консоль значення атрибута href.
document.querySelector('#getHref').addEventListener('click', function(){
  let link = document.querySelector('#link').href;
  console.log(link);
});

// 2. Заміна тексту на кліку
// Дано HTML:

// <p id="paragraph">Старий текст</p>
// <button id="replaceText">Заміна тексту</button>
// Напишіть код, щоб при натисканні на кнопку текст у параграфі змінювався на "Нове значення!".
document.querySelector('#replaceText').addEventListener('click', function(){
 let text = 'Нове значення!'
  document.querySelector('#paragraph').textContent = text; 
 console.log(text);
});
// 3. Зміна фону елемента
// Дано HTML:

// <div id="box" style="width: 100px; height: 100px;"></div>
// <button id="changeBackground">Змінити фон</button>
// Напишіть код, щоб при натисканні на кнопку фон елемента змінився на жовтий.
document.querySelector('#changeBackground').addEventListener('click', function(){
document.querySelector('#box').style.background = 'yellow'; 
});
// 4. Додавання нового класу
// Дано HTML:

// <div id="box" class="old-class"></div>
// <button id="addClass">Додати новий клас</button>
// Напишіть код, щоб при натисканні на кнопку додавати новий клас "new-class" до елемента.
document.querySelector('#addClass').addEventListener('click', function(){
  let newClas = document.querySelector('#box2'); 
  newClas.classList.toggle('new-class');
  console.log(newClas);
  });

// 5. Видалення всіх елементів списку
// Дано HTML:

// <ul id="list">
//   <li>Елемент 1</li>
//   <li>Елемент 2</li>
//   <li>Елемент 3</li>
// </ul>
// <button id="clearList">Очистити список</button>
// Напишіть код, щоб при натисканні на кнопку видалити всі елементи списку.
document.querySelector('#clearList').addEventListener('click', function(){
  // let remove = document.querySelector('#list'); 
  // remove.innerHTML = "";
  // console.log(remove);

   let remove2 = document.querySelector('#list'); 
   while(remove2.firstChild){
    remove2.removeChild(remove2.firstChild);
   }
   console.log(remove2);
  });
// 6. Додавання події на елемент
// Дано HTML:

// <button id="alertBtn">Натисни мене</button>
// Напишіть код, щоб при натисканні на кнопку з'являлося вікно повідомлення 
// з текстом "Кнопка була натиснута!".

// document.querySelector('#alertBtn').addEventListener('click', function(){
//  alert('Кнопка була натиснута!');
//   });

 let message =  document.querySelector('#alertBtn');
 function showMessage(){
  alert('Кнопка була натиснута!');
 }
message.addEventListener('click', showMessage);
//   7. Додавання списку елементів за введеним текстом
// Дано HTML:

// <input type="text" id="itemInput">
// <button id="addItem">Додати</button>
// <ul id="list2"></ul>
// Напишіть код, щоб при введенні тексту в поле і натисканні 
// кнопки додавати елемент у список.
 document.querySelector('#addItem').addEventListener('click', function(){
   let input = document.querySelector('#itemInput'); 
   let text = input.value.trim();// Получаем текст и убираем лишние пробелы

   if(text !== ""){
     let li = document.createElement('li'); // Создаём новый элемент <li>
     li.textContent = text; // Добавляем текст в <li>
    document.querySelector('#list2').appendChild(li); // Добавляем <li> в список
    input.value = ""; // Очищаем поле ввода
  }else{
    alert('Поле ввода пустое, введите значение');
   }
   });



     //     Вправи на навігацію по DOM

  // 1. Отримання елементів через document
  // Завдання 1.1
  // Дано HTML-код:

  // <h1 id="title">Заголовок</h1>
  // <p class="text">Перший параграф</p>
  // <p class="text">Другий параграф</p>
  // Напиши код, який:

  // Отримає <h1> за id та виведе його в консоль.
  // Отримає всі <p> за класом та виведе їхню кількість.

  // 🔹 Відповідь:

  // const title = document.getElementById("title");
  // console.log(title); // <h1 id="title">Заголовок</h1>

  // const paragraphs = document.getElementsByClassName("text");
  // console.log(paragraphs.length); // 2

  // 2. Переміщення між елементами (родичі)
  // Завдання 2.1
  // Дано HTML-код:

  // <ul id="list">
  //     <li>Перший</li>
  //     <li>Другий</li>
  //     <li>Третій</li>
  // </ul>
  // Напиши код, який:

  // Отримає <ul> за id.
  // Виведе його першого та останнього нащадка.

  // 🔹 Відповідь:

  // const list = document.getElementById("list");

  // console.log(list.firstElementChild.textContent); // "Перший"
  // console.log(list.lastElementChild.textContent); // "Третій"

  // 3. Навігація між сусідніми елементами
  // Завдання 3.1
  // Дано HTML-код:

  // <ul>
  //     <li id="second">Другий</li>
  //     <li>Третій</li>
  // </ul>
  // Напиши код, який:

  // Отримає <li id="second">.
  // Знайде його попереднього та наступного сусіда та виведе їх у консоль.

  // 🔹 Відповідь:

  // const secondItem = document.getElementById("second");

  // console.log(secondItem.previousElementSibling?.textContent || "Немає"); // "Перший" (якщо є)
  // console.log(secondItem.nextElementSibling.textContent); // "Третій"

  // 4. Робота з querySelector та querySelectorAll
  // Завдання 4.1
  // Дано HTML-код:

  // <div class="container">
  //     <p class="text">Один</p>
  //     <p class="text">Два</p>
  // </div>
  // Напиши код, який:

  // Отримає перший <p> із класом text.
  // Отримає всі <p> та виведе їхню кількість.

  // 🔹 Відповідь:

  // const firstParagraph = document.querySelector(".text");
  // console.log(firstParagraph.textContent); // "Один"

  // const allParagraphs = document.querySelectorAll(".text");
  // console.log(allParagraphs.length); // 2

  //   5. Перевірка, чи є у списку елементи
  // Дано HTML-код:

  // <ul id="tasks"></ul>
  // Напиши код, який перевірить, чи є у #tasks дочірні елементи, і виведе "Список порожній" або "Є завдання".

  // 🔹 Відповідь:

  // const tasks = document.getElementById("tasks");

  // if (tasks.children.length > 0) {
  //     console.log("Є завдання");
  // } else {
  //     console.log("Список порожній");
  // }

  // 6. Використання closest()
  // Завдання 6.1
  // Дано HTML-код:

  // <section>
  //     <article>
  //         <p id="myParagraph">Цей текст всередині статті.</p>
  //     </article>
  // </section>
  // Напиши код, який знайде найближчий <article> для параграфа.

  // 🔹 Відповідь:

  // const paragraph = document.getElementById("myParagraph");

  // console.log(paragraph.closest("article")); // <article>...</article>

  //Маніпуляції з DOM

  //   1. Зміна тексту елемента
  // Дано HTML:

  // <h1 id="header">Старий заголовок</h1>
  // <button id="changeText">Змінити текст</button>
  // Напишіть код, щоб при натисканні на кнопку текст заголовка змінився на "Новий заголовок".

  // 🔹 Відповідь:

  // document.getElementById("changeText").addEventListener("click", function() {
  //   document.getElementById("header").textContent = "Новий заголовок";
  // });

  // 2. Зміна HTML контенту елемента

  // Дано HTML:

  // <div id="content"><p>Старий текст</p></div>
  // <button id="changeHTML">Змінити HTML</button>
  // Напишіть код, щоб при натисканні на кнопку HTML-контент у <div> змінився на <p>Новий текст</p>.

  // 🔹 Відповідь:

  // document.getElementById("changeHTML").addEventListener("click", function() {
  //   document.getElementById("content").innerHTML = "<p>Новий текст</p>";
  // });

  // 3. Зміна атрибутів елемента
  // Дано HTML:

  // <img id="image" src="old-image.jpg" alt="Старе зображення">
  // <button id="changeImage">Змінити зображення</button>
  // Напишіть код, щоб при натисканні на кнопку змінити атрибути src і alt на нові.

  // 🔹 Відповідь:

  // document.getElementById("changeImage").addEventListener("click", function() {
  //   const image = document.getElementById("image");
  //   image.setAttribute("src", "new-image.jpg");
  //   image.setAttribute("alt", "Нове зображення");
  // });

  // 4. Зміна стилю елемента
  // Дано HTML:

  // <div id="box" style="width: 100px; height: 100px; background-color: red;"></div>
  // <button id="changeStyle">Змінити стиль</button>
  // Напишіть код, щоб при натисканні на кнопку розмір елемента збільшився до 200px, а колір фону змінився на синій.

  // 🔹 Відповідь:

  // document.getElementById("changeStyle").addEventListener("click", function() {
  //   const box = document.getElementById("box");
  //   box.style.width = "200px";
  //   box.style.backgroundColor = "blue";
  // });

  // 5. Додавання нового елемента

  // Дано HTML:

  // <ul id="list"></ul>
  // <button id="addItem">Додати елемент</button>
  // Напишіть код, щоб при натисканні на кнопку додався новий елемент <li>Елемент 1</li> у список.

  // 🔹 Відповідь:

  // document.getElementById("addItem").addEventListener("click", function() {
  //   const newItem = document.createElement("li");
  //   newItem.textContent = "Елемент 1";
  //   document.getElementById("list").appendChild(newItem);
  // });

  // 6. Видалення елемента
  // Дано HTML:

  // <ul id="list">
  //   <li>Елемент 1</li>
  //   <li>Елемент 2</li>
  // </ul>
  // <button id="removeItem">Видалити останній елемент</button>
  // Напишіть код, щоб при натисканні на кнопку видалявся останній елемент списку.

  // 🔹 Відповідь:

  // document.getElementById("removeItem").addEventListener("click", function() {
  //   const list = document.getElementById("list");
  //   list.removeChild(list.lastElementChild);
  // });

  // 7. Переміщення елемента між списками
  // Дано HTML:

  // <ul id="list1">
  //   <li>Елемент 1</li>
  //   <li>Елемент 2</li>
  // </ul>
  // <ul id="list2"></ul>
  // <button id="moveItem">Перемістити перший елемент</button>
  // Напишіть код, щоб при натисканні на кнопку перший елемент зі списку #list1 переміщувався в #list2.

  // 🔹 Відповідь:

  // document.getElementById("moveItem").addEventListener("click", function() {
  //   const list1 = document.getElementById("list1");
  //   const list2 = document.getElementById("list2");
  //   const item = list1.firstElementChild;
  //   list2.appendChild(item);
  // });

  // 8. Перемикання класу
  // Дано HTML:

  // <div id="box" class="inactive"></div>
  // <button id="toggleClass">Перемикати клас</button>
  // Напишіть код, щоб при натисканні на кнопку змінювався клас у елемента: якщо клас "inactive", змінювати на "active" і навпаки.

  // 🔹 Відповідь:

  // document.getElementById("toggleClass").addEventListener("click", function() {
  //   const box = document.getElementById("box");
  //   box.classList.toggle("active");
  //   box.classList.toggle("inactive");
  // });

  // 9. Додавання тексту до елемента
  // Дано HTML:

  // <p id="text">Текст:</p>
  // <button id="addText">Додати текст</button>
  // Напишіть код, щоб при натисканні на кнопку додавати до існуючого тексту у параграфі слово "Додано".

  // 🔹 Відповідь:

  // document.getElementById("addText").addEventListener("click", function() {
  //   document.getElementById("text").textContent += " Додано";
  // });

  // 10. Зміна шрифта елемента
  // Дано HTML:

  // <p id="text">Цей текст буде змінено</p>
  // <button id="changeFont">Змінити шрифт</button>
  // Напишіть код, щоб при натисканні на кнопку шрифт тексту змінювався на "Arial".

  // 🔹 Відповідь:

  // document.getElementById("changeFont").addEventListener("click", function() {
  //   document.getElementById("text").style.fontFamily = "Arial";
  // });

  //   11. Перемикання видимості елемента
  // Дано HTML:

  // <p id="text">Цей текст можна приховати.</p>
  // <button id="toggleVisibility">Перемкнути видимість</button>
  // Напишіть код, щоб при натисканні на кнопку змінювати стиль display на "none" або "block".

  // 🔹 Відповідь:

  // document.getElementById("toggleVisibility").addEventListener("click", function() {
  //   const text = document.getElementById("text");
  //   text.style.display = text.style.display === "none" ? "block" : "none";
  // });

  //   12. Таймер зворотного відліку
  // Завдання 8.1
  // Дано HTML:

  // <p>Залишилось секунд: <span id="timer">10</span></p>
  // <button id="startTimer">Старт</button>
  // Напишіть код, щоб після натискання на кнопку почався зворотний відлік до 0.

  // 🔹 Відповідь:

  // document.getElementById("startTimer").addEventListener("click", function() {
  //   let time = 10;
  //   const timerSpan = document.getElementById("timer");
  //   const interval = setInterval(function() {
  //     time--;
  //     timerSpan.textContent = time;
  //     if (time === 0) clearInterval(interval);
  //   }, 1000);
  // });

  //   13. Зміна порядку списку
  // Дано HTML:

  // <ul id="list">
  //   <li>Елемент 1</li>
  //   <li>Елемент 2</li>
  //   <li>Елемент 3</li>
  // </ul>
  // <button id="reverseList">Перевернути список</button>
  // Напишіть код, щоб при натисканні кнопки змінювався порядок елементів списку.

  // 🔹 Відповідь:

  // document.getElementById("reverseList").addEventListener("click", function() {
  //   const list = document.getElementById("list");
  //   const items = Array.from(list.children).reverse();
  //   list.innerHTML = "";
  //   items.forEach(item => list.appendChild(item));
  // });
