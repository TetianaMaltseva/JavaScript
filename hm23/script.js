 //*******************Object.values,keys,entries
//    1. Підсумуйте властивості
//   Є об’єкт salaries з довільною кількістю властивостей, що містять заробітні плати.

//   //   Напишіть функцію sumSalaries(salaries), що повертає суму всіх зарплат
//  за допомогою Object.values та циклуfor..of.

//   //   Якщо об’єкт salaries порожній, тоді результат повинен бути 0.

//   //   Наприклад:
let salaries = {
  "Іван": 100,
  "Петро": 300,
  "Марія": 250
  };
 
  function sumSalaries(salaries){
    
    let result = 0;
    for (let value of Object.values(salaries)){
     result += value;
    }
    return result;
  }

console.log( sumSalaries(salaries) ); // 650


//   //   2. Порахуйте властивості
//   // Напишіть функцію count(obj), що повертає кількість властивостей об’єкта:

let user = {
  name: 'Іван',
  age: 30
 };

 function count(obj) {
  return Object.keys(obj).length;
}
 console.log( count(user) ); // 2
//   // Намагайтеся зробити код якомога коротшим.

//   // P.S. Ігноруйте символьні властивості, враховуйте лише “звичайні”.

//    //**********************************************Set

//    Вправа 3: Лічильник унікальних слів
// Завдання:
// Напиши функцію countUniqueWords(str), яка приймає рядок, розбиває його на слова, і повертає Map,
//  де ключ — це слово, а значення — скільки разів воно зустрічається.

 function countUniqueWords(str) {

  const words = str.split(/\s+/);
  const wordsMap = new Map();

  for (const word of words){
    const count = wordsMap.get(word) || 0;
    wordsMap.set(word, count + 1);
  }
  return wordsMap;
 }

 console.log(countUniqueWords("apple orange banana apple orange apple"));

// Очікуваний результат:

// Map(3) { 'apple' => 3, 'orange' => 2, 'banana' => 1 }

// Вправа 4: Пошук за значенням
// Завдання:
// Є Map, де ключ — ім’я студента, а значення — його бал.
//  Напиши функцію findStudentsByGrade(map, grade), 
// яка повертає масив імен студентів з вказаним балом.

 const students = new Map([
  ["Anna", 90],
  ["Boris", 85],
  ["Clara", 90],
  ["Dmitry", 70]
 ]);
function findStudentsByGrade(map, grade){
 const result = [];
 for(let [name, studentGrade] of map){
   if(studentGrade === grade){
    result.push(name);
   }
 }
 return result;
}
console.log(findStudentsByGrade(students, 90));

const findStudentsByGrade2 = (map, grade)=>Array.from(map).filter(([name,studentGrade])=>
  studentGrade === grade).map(([name])=>name);
console.log(findStudentsByGrade2(students, 85));
// Очікуваний результат:

// ["Anna", "Clara"]

// Вправа 5: Заміна значень у Map
// Завдання:
// Є Map, де ключ — це товар, а значення — його ціна.
//  Зроби функцію applyDiscount(map, percent), яка повертає нову Map,
//  в якій до кожної ціни застосована знижка (відсоток).

 const products = new Map([
  ["Bread", 20],
  ["Milk", 30],
  ["Cheese", 50]
 ]);

 function applyDiscount(map, percent){

  const productsDiscounted = new Map();

 for(const[key, value] of map){
  const discountedPrice = value - (value * percent / 100);
  productsDiscounted.set(key, discountedPrice);
 }
return productsDiscounted;
 }

 console.log(applyDiscount(products, 10));

 function applyDiscount2(map, percent){
  const discounted = Array.from(map).map(([key, value]) =>{
  const discountedPrice = value - (value * percent / 100);
  return[key, discountedPrice];
});
return new Map(discounted);
 }
 console.log(applyDiscount2(products, 50));

// Очікуваний результат:

// Map(3) { 'Bread' => 18, 'Milk' => 27, 'Cheese' => 45 }