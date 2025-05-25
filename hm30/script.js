// Тема 8. Розширені структури
// Завдання 1. Деструктуризація
// Напиши функцію getFullName, яка приймає об’єкт:
// { firstName: "Olga", lastName: "Ivanova" }
// і повертає рядок "Olga Ivanova" з використанням деструктуризації об’єкта.
function getFullName(user) {
  const { firstName, lastName } = user;
  return `${firstName} ${lastName}`;
}
console.log(getFullName({ firstName: "Olga", lastName: "Ivanova" }));
// Завдання 2. Spread і Rest
// Створи функцію sumAll, яка:
// приймає будь-яку кількість аргументів
// повертає їхню суму
// Використай rest-параметри.
function sumAll(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9));
// Завдання 3. Безпечний доступ
// Напиши функцію getStreet(user), яка повертає адресу користувача:
// user.address?.street ?? "Not specified"
// Перевір роботу функції на об'єкті без address.
function getStreet(user) {
  return user.address?.street ?? "Not specified";
}
console.log(getStreet({ firstName: "Olga", lastName: "Ivanova" }));
// Тема 9. Класи та об’єктно-орієнтоване програмування
// Завдання 4. Клас і метод
// Створи клас Rectangle, який має:
// властивості width, height
// метод area() — повертає площу
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  area() {
    return this.height * this.height;
  }
}

// Завдання 5. Наслідування
// Створи клас Square, який наслідує Rectangle, але має тільки одне поле side.
// const s = new Square(5);
// s.area(); // 25
class Square extends Rectangle {
  constructor(side) {
    super(side, side);
    this.side = side;
  }
}
const s = new Square(5);
console.log(s.area()); // 25
// Завдання 6. Приватне поле і геттер
// Створи клас BankAccount з приватним полем #balance.
// Метод deposit(amount) додає гроші,
//  а геттер balance повертає поточний стан.

class BankAccount {
  #balance;

  constructor(initialBalans = 0) {
    this.#balance = initialBalans;
  }
  deposit(amount) {
    this.#balance += amount;
  }
  get balance() {
    return this.#balance;
  }
}

const account = new BankAccount();
account.deposit(1000);
console.log(account.balance); // 1000

// Завдання 8. Експорт за замовчуванням
// Створи модуль logger.js, який експортує за замовчуванням функцію log(msg).
// Імпортуй її в script.js і викличи з рядком "Started".
import log from "./logger.js";

log("Started");
// Завдання 9. Імпорт з перейменуванням
// У модулі helpers.js є функція calculate().
// Імпортуй її у script.js під ім'ям calc() та викличи.
import { calculate as calc } from "./helpers.js";
console.log(calc(10, 5));
// Тема 11. Модулі (ES Modules)
// Завдання 7. Іменований експорт
// Створи файл math.js з іменованими функціями add і multiply.
// У script.js імпортуй їх та виведи результат обчислень у консоль.

import { add, multiply } from "./math.js";
console.log(add(10, 20));
console.log(multiply(10, 10));

// Тема 12. Обробка помилок
// Завдання 10. try...catch
// Напиши функцію parseData(json), яка парсить JSON.
// Якщо формат невалідний — повертає "Invalid JSON".
function parseData(json) {
  try {
    const data = JSON.parse(json);
    return data;
  } catch (e) {
    return "Invalid JSON";
  }
}
console.log(parseData('{"currency":"USD", "value": 100}'));
console.log(parseData('{ "val": EUR}'));
// Завдання 13. throw
// Створи функцію validateAge(age), яка:
// кидає помилку "Too young" якщо age < 18
// інакше повертає "Allowed"
function validateAge(age) {
  if (age < 18) {
    throw new Error("Too young");
  }
  return "Allowed";
}
try {
  console.log(validateAge(14));
} catch (error) {
  console.error(error.message);
}
console.log(validateAge(44));

// Завдання 14. Власна помилка
// Створи клас ValidationError, що наслідує Error.
// Створи функцію register(name), яка кидає ValidationError("Name is too short"),
//  якщо ім’я менше 3 символів.
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}
function register(name) {
  if (name.length < 3) {
    throw new ValidationError("Name is too short");
  }
  return `User ${name} added`;
}
try {
  console.log(register("Fa"));
} catch (error) {
  if (error instanceof ValidationError) {
    console.error("Валідаційна помилка:", error.message);
  } else {
    console.log("Невідома помилка");
  }
}
console.log(register("Sonya"));
