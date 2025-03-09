// Завдання 1: Властивість [[Prototype]] і __proto__
//   Створіть об'єкт animal з властивістю legs: 4.
//   Створіть об'єкт dog, встановіть йому прототип animal.
//   Виведіть dog.legs. Чому значення не задане безпосередньо в dog?
//  Показати підтвердження за допомогою hasOwnProperty.
let animal = {
  legs: 4
};
let dog = {
  __proto__: animal
}
 console.log(dog.legs);//   движок не нашел св-во в dog и использует прототип animal
 console.log(dog.hasOwnProperty('legs'));
//   Завдання 2: Запис і видалення властивостей
//   Використовуючи код з попереднього завдання, додайте dog.legs = 3.
//   Виведіть dog.legs і animal.legs. Чи змінилася властивість у animal?
//   Видаліть dog.legs, а потім знову виведіть dog.legs. Поясніть що відбулось.
// Прототип используется только для чтения свойств.
dog.legs = 3;
console.log(dog.legs);// вызов legs находит метод непосредственно в объекте и выполняет его, не используя прототип:
console.log(animal.legs);// no, oперации записи/удаления работают напрямую с объектом, мы работали с dog
delete dog.legs;// oперации записи/удаления работают напрямую с объектом
console.log(dog.legs); //движок не нашел св-во в dog (мы его удалили) и использует прототип animal
//  Завдання 3: Пошук методів у прототипі
//  Створіть об'єкт parent з методом sayHello(), який виводить "Hello from parent".
//  Створіть об'єкт child, встановіть йому прототип parent.
//  Викличте child.sayHello().
let parent = {
  eat: 2,
  sayHello(){
    console.log('Hello from parent');
  }
};
let child = {
  __proto__: parent
};
child.sayHello();

//   Завдання 4: this у наслідуваних методах
//   Створіть user з name: "Alice" і методом sayName(), який виводить this.name.
//   Створіть admin, встановіть йому прототип user і змініть name на "Bob".
//   Викличте admin.sayName(). Покажіть результати, та поясніть.
let user = {
  name: 'Alice',
  sayName(){
    console.log(this.name);
  }
};
let admin = {
  __proto__: user,
  name: 'Bob'
};
admin.sayName();//Неважно, где находится метод: в объекте или его прототипе.
//  При вызове метода this указывает на объект перед точкой.

//   Завдання 5: for..in і власні/успадковані властивості
//   Використовуючи код з попереднього завдання, переберіть admin у for..in.
//   Використайте Object.keys(admin). Чому результати відрізняються?
for(let key in admin){
  console.log(key);
} //проходит и по своим, и по унаследованным ключам name, sayName
console.log(Object.keys(admin));//возвращает только собственные ключи [name]

// Базовий синтксис класів
// Завдання 1: Створення класу
// Створіть клас Person з конструктором, який приймає name і age.
// Додайте метод sayHello(), який виводить Hello, my name is {name}.
// Створіть об'єкт user на основі Person і викличте sayHello().
// Завдання 2: Гетери та сетери
// Додайте у клас Person гетер info, який повертає рядок "{name} is {age} years old".
// Додайте сетер age, який перевіряє, що вік не може бути від’ємним (якщо так, вивести помилку).
// Створіть об’єкт та протестуйте ці методи.
 class Person{
   constructor(name,age){
     this.name = name;
     this._age = age;
   }
    sayHello(){
      console.log(`Hello, my name is ${this.name}`)
    }
   get info() {
     return `${this.name} is ${this._age} years old`;
   }
  set age(value){
    if (value < 0) {
             console.error('Error');
          } else {
            this._age = value;
          }
        }
   }
 let user1 = new Person('Rene');
 user1.sayHello();
 let user2 = new Person('Peter', 15);
 console.log(user2.info);
 let user3 = new Person('Peter', 24);
 user3.age = -24;


 class Person2 {
  constructor(name, age) {
      if (age < 0) {
          throw new Error("Ошибка: Возраст не может быть отрицательным!"); 
      }
      this.name = name;
      this._age = age;
  }

  get info() {
      return `${this.name} is ${this._age} years old`;
  }

  set age(value) {
      if (value < 0) {
          console.error("Ошибка: Возраст не может быть отрицательным!");
      } else {
          this._age = value;
      }
  }
}

  let user4 = new Person2('Olaf', -25); 
console.log(user4);


 




