// 1. Що виведе цей код? Поясніть чому.

let arr = ['a', 'b', 'c'];
let iterator = arr[Symbol.iterator]();

console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
// код виведе cпочатку а, потім b, c. сначала мы вызвали встроенный итератор arr[Symbol.iterator](),
//  и именно его next() генерирует значения.
// 

// 2. Який з об’єктів перебираний? Обери всі правильні варіанти, об'ясніть чому.

// a)
 let obj = {a: 1, b: 2}

// b) 
let arr2 = [1, 2, 3]

// c) 
let str = "hello"

// d) 
let map = new Map()
//  b, c, d массив, строка, структура данных Map() это итерируемые объекты. А Object() нет, так как
// не имеет встроенный Symbol.iterator

// 3. Що виведе цикл? Об'ясніть чому.

let str1 = "OK";
for (let char of str) {
console.log(char);
}
 //  2 раза: по одному для каждого символа  O, затем K,
 // Для строки for..of перебирает символы.


// 4. В чому різниця між масивом і об’єктом з властивістю length, наприклад 
let obj1 = {0: "a", 1: "b", length: 2} //— чи можна такий об’єкт ітерувати через for..of?
/*Массив это итерируемый объект, работает с for...of, имеет множество методов, поддерживает
Symbol.iterator
Объекты, имеющие индексированные свойства и length, называются псевдомассивами. 
объект, который является псевдомассивом, нельзя итерировать. Нет методов массива, не поддерживает
Symbol.iterator  */



// 5. Поясни, що таке Symbol.iterator і яку роль він виконує.
//специальный встроенный метод Symbol.iterator позволяет использовать любой объект в цикле for..of
// он возвращает итератор объект с методом next()
 

// 6. Як завершення ітерації позначається у методі .next()?
//метод next(), который возвращает объект {done: Boolean, value: any}, 
// где done:true сигнализирует об окончании процесса итерации, 
// в противном случае value – следующее значение.


// 7. Який буде результат виконання цього коду?

let arr1 = [10, 20, 30];
let iter = arr1[Symbol.iterator]();

console.log(iter.next());// Object {done: false, value 10}
console.log(iter.next());// Object {done: false, value 20}
console.log(iter.next());// Object {done: false, value 30}
console.log(iter.next());// Object {done: true, value undefined}


// 8. Створи об'єкт wordLetters, який буде перебирати літери у заданому слові, 
// але в зворотному порядку.

// Очікуване використання:
function wordLetters(str){
  return {
    [Symbol.iterator](){
      let i = str.length - 1;
        return {
            next(){
              return i >= 0
                ? {value: str[i--], done: false}
                : {done: true};
        }
      };
    }
  };
};
    for (let char of wordLetters("hello")) {
    console.log(char);
}


  //   let range = {
      //     from: 1,
      //     to: 5,
      //   };

      //   // 1. виклик for..of спочатку викликає цю функцію
      //   range[Symbol.iterator] = function () {
      //     // 2. Далі, for..of працює тільки з цим ітератором,
      //  запитуючи у нього наступні значення
      //     return {
      //       current: this.from,
      //       last: this.to,

      //       next() {
      //         // 4. він повинен повертати значення як об’єкт {done:.., value :...}
      //         if (this.current <= this.last) {
      //           return { done: false, value: this.current++ };
      //         } else {
      //           return { done: true };
      //         }
      //       },
      //     };
      //   };

      //   // тепер це працює!
      //   for (let num of range) {
      //     alert(num); // 1, потім 2, 3, 4, 5
      //   }

      //  2. Створи перебираний об'єкт evenRange(from, to), 
      // який повертатиме тільки парні числа в діапазоні (включно).

      //   for (let num of evenRange(3, 10)) {
      //     console.log(num);
      //   }
      // Результат:
      //   4;
      //   6;
      //   8;
      //   10;

      //   function evenRange(from, to) {
      //     return {
      //       [Symbol.iterator]() {
      //         let current = from % 2 === 0 ? from : from + 1;
      //         return {
      //           next() {
      //             if (current > to) {
      //               return { done: true };
      //             } else {
      //               let value = current;
      //               current += 2;
      //               return { value, done: false };
      //             }
      //           },
      //         };
      //       },
      //     };
      //   }

      //   for (let num of evenRange(3, 10)) {
      //     console.log(num);
      //   }

      //   3. Напиши функцію take(iterable, count), 
      // яка приймає перебираний об'єкт і повертає новий, що повертає тільки count перших значень.

      //   let arr = [10, 20, 30, 40, 50];

      //   for (let value of take(arr, 3)) {
      //     console.log(value);
      //   }

      //   // Результат:
      //   10
      //   20
      //   30;

      //   function take(iterable, count) {
      //     let iterator = iterable[Symbol.iterator]();
      //     return {
      //       [Symbol.iterator]() {
      //         return {
      //           next() {
      //             if (count-- > 0) {
      //               return iterator.next();
      //             } else {
      //               return { done: true };
      //             }
      //           },
      //         };
      //       },
      //     };
      //   }

