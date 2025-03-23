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
