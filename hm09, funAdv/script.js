//SPREAD, REST

// Вправа 1: Використання rest у функції
// Завдання: Напишіть функцію multAll, яка приймає будь-яку кількість аргументів і повертає результат їх перемноження.
// Приклад
//   console.log(multAll(1, 2, 3, 4, 5)); // Очікуваний результат: 120
function multAll(...numbers){
    return numbers.reduce((acc, num) => acc * num, 1);
}
console.log(multAll(1, 2, 3, 4, 5));
//   2. Функція з spread
// Є масив чисел. Створіть функцію findMin(numbers). Використайте оператор spread, щоб передати 
// його у Math.min для знаходження найменшого числа.
function findMin(numbers){
  return Math.min(...numbers);
}
let arr = [3, 7, 2, 9, 4];
console.log(findMin(arr)); // Очікуваний результат: 8

//   3. Деструктуризація з rest. Створіть функцію splitArray(values).
// Виділи перший елемент масиву в змінну, а решту значень помісти в інший масив.

// Завдання
// const values = [10, 20, 30, 40];
function splitArray(values){
  let[first, ...rest] = values;
  return { first, rest };
}
let arr1 =[10,20,30,40];
console.log(splitArray(arr1)); // { first: 10, rest: [20, 30, 40] }

// 1. Глобальна та локальна область видимості
// Що виведе цей код? Поясни відповідь.

 let a = 10;

 function test() {
     let a = 20;
     console.log(a); // 20 локальная видима только внутри
}

test(); // 20 функция 
console.log(a); //10 выведит глобальную переменную, так как локальная объявлена внутри ф-ии и видима только там


//     2. Лексичне оточення
//   Що виведе цей код? Поясніть відповідь.выведит 10 innen() вызывается внутри outer(), а х = 10 доступна из лексического окружения
   let x = 5;
  function outer() {
      let x = 10; // лексическое окружение outer
      function inner() {
          console.log(x); //10  доступ к х из окружения outer
      }
      inner();
  }
  outer();

// Вправа 3: Лічильник на замиканні
// Завдання: Напишіть функцію counter(), яка повертає функцію-лічильник.
//  Функція, яка повертається, має рахувати від 1 і більше.
// Викликаємо цю фукцію один раз, отримаємо 1. Викликаємо другий раз отримаємо 2 і т.д.
function counter(){
  let count = 0;
   return function(){
    count ++;
    return count;
   }
}
const myCounter = counter();
console.log(myCounter()); // 1
console.log(myCounter()); // 2
console.log(myCounter()); // 3

// Методи об'єктів та this.
// Створіть калькулятор
// Створіть об’єкт calculator з трьома методами:

// read() запитує два значення та зберігає їх як властивості об’єкта з іменами a та b відповідно.
// sum() повертає суму збережених значень.
// mul() множить збережені значення і повертає результат.
 let calculator = {
  a:0,
  b:0,
  read(){
    this.a = +prompt('First number',0);
    this.b = +prompt('Second number',0);
  },
  sum(){
    return this.a + this.b;
  
  },
  mul(){
    return this.a * this.b;
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
