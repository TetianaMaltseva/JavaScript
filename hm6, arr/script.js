// Масиви
// 0) Створіть масив let arr = [1, 2, 3, 4, 5]. Зменшіть його довжину до 3 і виведіть результат.
// Змініть довжину масиву до 7. Що з'явиться в нових елементах?
 let arr = [1, 2, 3, 4, 5];
 arr.length = 3;
 console.log(arr);// [1,2,3]
 arr.length = 7; // empty * 4 пустоты
 console.log(arr);

// 1) Створіть масив let colors = ['red', 'green', 'blue']. Отримайте останній елемент за допомогою
//  методу at().
// Використовуючи індекси, замініть другий елемент масиву на yellow.
let colors = ['red', 'green', 'blue'];
console.log(colors.at(-1));
colors[2] = 'yelow';
console.log(colors);

// 2) 
// Створіть масив cars з елементами "Ford","Mazda","Renault", "Volvo"
// Додайте "BMW" в кінець масиву.
// Замініть "Mazda","Renault" на "Toyota", покажіть видалені елементи (splice)
// Видаліть перший елемент масиву та покажіть його.
// Вставте "Infinity" та "WW" на початок масиву.
let cars = ["Ford","Mazda","Renault", "Volvo"];
cars.push('BMW');
//console.log(cars);
let newCars = cars.splice(1,2,"Toyota")
//console.log(cars);
console.log(newCars);
//let firsEl = 
console.log(cars.shift());
cars.unshift("Infinity", "WW");
console.log(cars);
// 3)
// Напишіть функцію multInput() яка:
// Просить користувача ввести дані за допомогою prompt та зберігає їх в масив.
// Закінчує робити запити в користувача після того, як введено не числове значення, порожня
//  строка або натиснуто “відмінити”.
// Підраховує та повертає результат перемноження елементів масиву.
// P.S. Нуль 0 це – валідне число, будь ласка, не зупиняйте функцію при введені 0. (prompt,
//    будь-який цикл обходу масиву)

function multInput(){
  let arr =[];
  while(true) {
    let user = prompt('Please enter the date');

    if(isNaN(user) || user == "" || user == null){
    break;
  }
  arr.push(user);
  }
  return arr.reduce((acc, res) => acc * res, 1); 
}
console.log(multInput());

// Методи масивів
// 0) Напишіть функцію stylesCorrection(str), яка перетворює такі рядки “my!short!string” 
// в “my-short-string”.
// Тобто знаки оклику видаляються і заміняються на знак дифіс.
// (split, join)
function stylesCorrection(str){
  return str.split('!').join('-'); 
}
console.log(stylesCorrection("my!short!string"));

// 1) 
// let arr = [{id: 0, value: 5}, {id: 1, value: 3}, {id: 2, value: 8}, {id: 3, value: 1}];
// Напишіть функцію filterRange(arr, a, b), яка приймає масив arr, шукає в ньому елементи
//  в яких властивість value >= a та <= b і віддає масив цих елементів.Функція повинна повертати
//   новий масив і не змінювати вихідний. (filter)
let arr1 = [{id: 0, value: 5}, {id: 1, value: 3}, {id: 2, value: 8}, {id: 3, value: 1}];
 function filterRange(arr, a, b){
  return arr.filter((item => item.value >= a && item.value <= b));
}
 console.log(filterRange(arr1, 2,5));
//  console.log(arr1);

// 2) 
// let arr = [{id: 0, value: 5}, {id: 1, value: 3}, {id: 2, value: 8}, {id: 3, value: 1}];
// Напишіть функцію copyAndSort(arr, sort). Значення sort може бути або "DESC", або "ASC".
//  Якщо "DESC" тоді сортуємо від найбільшого до найменьшего, відповідно якцщо "ASC" то навпаки.
//  Функція має зробити КОПІЮ масиву arr, відсортувати елементи за властивістю value, відповідно до
//  параметру sort і повернути результат. (slice, sort)

  //   prices.slice().sort((a, b) => {
  //     return b - a;
  //   }

function copyAndSort(arr, sort){
  let newArr = arr.slice(0,4);
  newArr.sort((a,b) => {
    if(sort === 'DESC')
     return b.value - a.value;
    if(sort === 'ASC')
      return a.value - b.value;
  });
  return newArr
}
console.log(copyAndSort(arr1,'DESC'));
console.log(copyAndSort(arr1,'ASC'));
// console.log(arr1);

// 3) 
// cars = [{id: 0, brandsli: 'Ford'}, {id: 1, brand: 'Toyota'}, {id: 2, brand: Mazda'}];
// У вас є масив об’єктів cars, і в кожному з них є car.brand. Напишіть код, 
// який перетворює їх в масив брендів: let brands = ['Ford', 'Toyota', 'Mazda']; (map)
let cars1 = [{id: 0, brand: 'Ford'}, {id: 1, brand: 'Toyota'}, {id: 2, brand: 'Mazda'}];
let brands = cars1.map(item => item.brand);
console.log(brands);
console.log(cars1);