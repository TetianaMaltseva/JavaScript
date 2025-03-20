// 1. Перевірка наявності дочірніх елементів (children)

//   Дано HTML-код:

//   <div id="container">
//       <p>Це параграф</p>
//   </div>
//   Напиши код, який:

//   Перевірить, чи є у #container дочірні елементи.
//   Виведе "Контейнер порожній", якщо дочірніх елементів немає.
let showChildren = document.getElementById('container');
 if(showChildren.children.length === 0){
  showChildren.textContent = 'Контейнер порожній';
 }else{
  console.log(showChildren.children[0]);
 }


//   2. Отримання останнього елемента списку (lastElementChild, textContent)
//   Дано HTML-код:

//   <ul id="menu">
//       <li>Один</li>
//       <li>Два</li>
//       <li>Три</li>
//   </ul>
//   Напиши код, який отримає останній елемент списку та виведе його текст.
let listFirst = document.querySelector('#menu');
let itemLast = listFirst.lastElementChild.textContent;
console.log(itemLast);


//   3. Отримання батьківського елемента (parentElement)
//   Дано HTML-код:

//   <section>
//       <div>
//           <p id="text">Цей текст всередині div.</p>
//       </div>
//   </section>
//   Напиши код, який знайде батьківський <div> для параграфа та виведе його в консоль.
let paragraph = document.querySelector('#text');
let parent = paragraph.parentElement;
console.log(parent);

//   4. Знаходження всіх li в ul (querySelectorAll(використати селектори), textContent)
//   Дано HTML-код:

//   <ul id="items">
//       <li>Елемент 1</li>
//       <li>Елемент 2</li>
//       <li>Елемент 3</li>
//   </ul>
//   Напиши код, який отримає всі <li> у списку #items і виведе їхній текст у консоль.
let list = document.getElementById("items"); 
let items = list.getElementsByTagName("li"); 
Array.from(items).forEach(item => console.log(item.textContent));

//   5. Отримання найближчого section для кнопки
//   Дано HTML-код:

//   <section>
//       <div>
//           <button id="btn">Натисни мене</button>
//       </div>
//   </section>
//   Напиши код, який знайде найближчий <section> для кнопки.
let btn = document.querySelector('#btn');
let sect = btn.closest('section');
console.log(sect);