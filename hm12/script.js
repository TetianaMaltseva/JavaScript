  /********************************VAR,LET,CONST*************************************************/
  //   Завдання 1: Область видимості (var vs let)
  //   Що виведе цей код? Поясніть чому.

    if (true) {
       var a = 10;
         let b = 20;
     }
     console.log(a); //10 
  //   console.log(b); is not defined. 
  // Тому що, let має блочну область бачення, а var функціональну


  //   Завдання 2: Чи викличе помилку? (const)
  //   Чи спрацює цей код? Якщо ні, чому?

     const d = 50;
     // d = 100; Hi, буде помилка, так як const не дозволяє змінювати значення після ініціалізації
    console.log(d);



  //   Завдання 3: Виправлення коду (const і об'єкти)
  //   Що потрібно змінити, щоб код не викликав помилку?

     const user = { name: "Nick" };
      // user = { name: "Alex" };
     user.name = "Alex";
     console.log(user);
   



  /********************************СТРІЛКОВІ ФУНКЦІЇ*************************************************/

  // Завдання 1: Чому цей код не працює? Як виправити, використавши звичайну функцію?

  //  const person = {
  //      name: "Alice",
  //     greet: () => {
  //          console.log(`Hello, my name is ${this.name}`);
  //      }
  // };
  // person.greet(); 
  // ❓ Що виведе код? Як виправити? Hello, my name is . Стрілкова функция не має свого this, а успадковує його.
  const person = {
          name: "Alice",
          greet() {
              console.log(`Hello, my name is ${this.name}`);
        }
     };
     person.greet(); 


  // Завдання 2: Робота з масивами
  // Що виведе цей код? Чому
//[1*1,2*2,3*3,4*4]=[1,4,9,16] Метод map() создаёт новый масив с результатами вызова 
// вказанной функції на кожном елементі данного масива и повертає масив результатів цій функції.

   const numbers = [1, 2, 3, 4];
  const squares = numbers.map(num => num * num);
   console.log(squares);


  // Завдання 3: Чому new не працює?
  // Що станеться при виконанні цього коду? Як виправити, використавши звичайну функцію?
  //  Стрілкові функції не можна використовувати з new, використати звичайну функцию

  // const Person = (name) => {
  //     this.name = name;
  // };
  // const user = new Person("Alice");
  function Person (name) {
        this.name = name;
   };
   const user1 = new Person("Alice");
   console.log(user1);

  //*************************************************   Вправи на шаблонні рядки (Template Literals) в ES6
  // 🔹 Завдання 1: Багаторядковий текст
  // Створіть рядок, який містить таку структуру, використовуючи шаблонні рядки (без \n і +):
const winners = `
 1. Переможець - Олексій
 2. Друге місце - Марина
 3. Третє місце - Сергій`;
 console.log(winners);

  // Результати:
  // 1. Переможець - Олексій
  // 2. Друге місце - Марина
  // 3. Третє місце - Сергій


  // 🔹 Завдання 2: Вставка функцій у шаблонні рядки
  // Є функція, яка повертає поточний рік. Використайте її всередині шаблонного рядка:

   function getYear() {
       return new Date().getFullYear();
   }
  console.log(`Зараз ${getYear()}` );


  // Зараз 2025 рік.


  // 🔹 Завдання 3: Теговані шаблони (Tagged Templates)
  // Що виведе код? Чому

   function tag(strings, value) {
       return `${strings[0]}${value.toUpperCase()}${strings[1]}`;
   }

   const user2 = "nick";
   console.log(tag`Привіт, ${user2}, як справи?`); // Привіт, NICK, як справи?
   //В нас э шаблона строка  яка передасть в функцію пeрший аргумент strings - 
   // масив строкових частей("привіт", "як справи") та другий аргумент value (user). 
//Т.е ми отримуемо strings[0] - привіт,  дали value  в верхньому регістрі NICK
//  та strings [1] як справи


  //************************************ Вправи на деструктуризацію масивів і об'єктів
  // 🔹 Завдання 1: Пропуск елементів масиву
  // Є масив:

   const colors = ["red", "green", "blue", "yellow"];
  // Отримайте перший і третій елементи, пропустивши другий. 
  // (ВИКОРИСТАТИ ДЕСТРУКТУРИЗАЦІЮ МАСИВІВ)
 const [first, ,third, ,] = colors;
 console.log(first);
 console.log(third);

  // 🔹 Завдання 2: Деструктуризація об'єкта
  // Дано об'єкт:

   const user3 = {
    name1: "Alice",
    age: 25,
    country: "USA"
   };
  // Витягніть значення у змінні name, age, country за допомогою деструктуризації.
 const{name1,age,country} = user3;
 console.log(name1);
 console.log(age);
 console.log(country);

  // 🔹 Завдання 3: Значення за замовчуванням
  // Дано об'єкт, у якому немає age:

   const person1 = {
     name: "Bob"
   };
  // Отримайте name і age, встановивши age значення за замовчуванням 30.
  //  Використовуйте деструктурізацію об'єктів і значення за замовчуваням
 const {name2, age1 = 30} = person1;
 console.log(age1);

  // 🔹 Завдання 4: Вкладена деструктуризація
  // Є об'єкт:

  const employee = {
     id: 1,
     personalInfo: {
      firstName: "John",
       lastName: "Doe"
    }
   };
  // Витягніть firstName та lastName у змінні окремо. 
  // Використовуйте вкладену деструктурізацію
 const {id, personalInfo:{firstName,lastName}} = employee;
 console.log(firstName);
 console.log(lastName);


  //***************  Вправи на оператори ...spread та ...rest з відповідями

  // 🔹 Завдання 1: Об'єднання масивів
  // Є два масиви:

   const arr1 = [10, 20, 30];
   const arr2 = [40, 50, 60];
  // Об'єднайте arr1 та arr2 у новий масив mergedArray за допомогою ...spread.
 const arr3 = [...arr1, ...arr2];
 console.log(arr3);

  // 🔹 Завдання 2: Додавання нових властивостей до об'єкта
  // Є об'єкт:

   const car = { brand: "Toyota", model: "Corolla" };
  // Створіть новий об'єкт updatedCar, додавши властивість year: 2022 за допомогою ...spread.
const updatedCar = {...car, year: 2022};
console.log(updatedCar);


  // 🔹 Завдання 3: Деструктуризація масиву з ...rest
  // Є масив:

   const fruits = ["apple", "banana", "cherry", "date"];
  // Витягніть перший елемент у змінну firstFruit, а решту у масив remainingFruits.
 const [firstFruit, ...remainingFruits] = fruits;
console.log(firstFruit);
console.log(remainingFruits);

  // 🔹 Завдання 4: Використання ...spread у функції
  // Є масив чисел:

  const numbers1 = [10, 20, 30, 40, 50];
 console.log(Math.max(...numbers1));
  // Передайте елементи масиву у Math.max(), використовуючи ...spread.

//***********************************************************IMPORT,EXPORT

  // 1 Експорт функції за замовчуванням (export default)
  // 📌 Завдання:
  // У файлі math.js створіть функцію square(n), яка повертає квадрат числа,
  //  та експортуйте її за замовчуванням.
  //  Потім імпортуйте її у main.js і викличте для числа 4.

  // // math.js
  // // (тут має бути функція і експорт за замовчуванням)

  // // main.js
  // // (тут має бути імпорт та виклик функції)

  // 2 Імпорт всього модуля (* as)
  // 📌 Завдання:
  // Є модуль mathOperations.js, який експортує функції add, subtract та multiply.
  // Імпортуйте весь модуль у calculator.js під іменем mathOps і використайте функцію add.

  // // mathOperations.js
  // export function add(a, b) {
  //   return a + b;
  // }

  // export function subtract(a, b) {
  //   return a - b;
  // }

  // export function multiply(a, b) {
  //   return a * b;
  // }

  // // calculator.js
  // // (тут має бути імпорт всього модуля та використання функції add)