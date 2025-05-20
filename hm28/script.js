// Завдання 1 (тема: типи даних + оператори):
// Напиши функцію smartAdd(a, b), яка:
// якщо обидва числа — додає їх
// якщо обидва рядки — з'єднує
// якщо один з них булевий — повертає "Invalid"
// в інших випадках — повертає null
function smartAdd(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else if (typeof a === "string" && typeof b === "string") {
    return a + b;
  } else if (typeof a === "boolean" || typeof b === "boolean") {
    return "Invalid";
  } else {
    return null;
  }
}
console.log(smartAdd(3, 5));
console.log(smartAdd("I'", "am"));
console.log(smartAdd(3, true));
console.log(smartAdd(3, undefined));
// Завдання 2 (тема: тернарний оператор):
// Реалізуй функцію getGreeting(hour) з одним рядком коду, яка повертає:
// "Good night" — якщо 0 <= hour < 6
// "Good morning" — якщо 6 <= hour < 12
// "Good afternoon" — якщо 12 <= hour < 18
// "Good evening" — якщо hour >= 18
function getGreeting(hour) {
  return hour >= 0 && hour < 6
    ? "Good night"
    : hour >= 6 && hour < 12
    ? "Good moning"
    : hour >= 12 && hour < 18
    ? "Good afternoon"
    : "Good evening";
}
console.log(getGreeting(2));
console.log(getGreeting(7));
console.log(getGreeting(15));
console.log(getGreeting(20));
// Завдання 3 (тема: вкладені if і логіка):
// Напиши функцію canDrive(age, hasLicense), яка:
// повертає "Can drive" якщо age >= 18 і hasLicense === true
// повертає "Too young" якщо age < 18
// повертає "Need a license" якщо age >= 18, але hasLicense === false
function canDrive(age, hasLicense) {
  if (age >= 18 && hasLicense === true) {
    return "Can drive";
  } else if (age >= 18 && hasLicense === false) {
    return "Need a license";
  } else {
    return "Too young";
  }
}
console.log(canDrive(18, true));
console.log(canDrive(18, false));
console.log(canDrive(16, true));
console.log(canDrive(16, false));
// Завдання 4 (тема: switch + булева логіка):
// Реалізуй функцію getDayType(day):
// приймає day (число від 1 до 7)
// повертає "Weekend" для 6 або 7
// повертає "Weekday" для 1–5
// у інших випадках — "Invalid day"

function getDayType(day) {
  switch (day) {
    case 1:
      return "Weekday";
    case 2:
      return "Weekday";
    case 2:
      return "Weekday";
    case 4:
      return "Weekday";
    case 5:
      return "Weekday";
    case 6:
      return "Weekend";
    case 7:
      return "Weekend";
    default:
      return "Invalid day";
  }
}
console.log(getDayType(1));
console.log(getDayType(6));
console.log(getDayType(10));
// Завдання 5 (тема: вкладені цикли + continue):
// Напиши функцію triangle(n), яка:
// виводить в консоль числа від 1 до n у вигляді числового трикутника,
// пропускаючи парні числа через continue.
// Для n = 4 результат:
// 1
// 3
function triangle(n) {
  let current = 1;
  let rowLength = 1;
  while (current <= n) {
    let row = "";
    let count = 0;

    for (let i = 0; i < rowLength && current <= n; ) {
      if (current % 2 === 0) {
        current++;
        continue;
      }
      row += current + " ";
      current++;
      i++;
    }
    if (row.length > 0) {
      console.log(row.trim());
    }
    rowLength++;
  }
}
triangle(19);
// Завдання 6 (тема: функції + return):
// Реалізуй функцію isLeapYear(year):
// повертає true, якщо рік високосний (ділиться на 4 і не на 100, або на 400)
// інакше — false
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isLeapYear(2022));
console.log(isLeapYear(2024));

// Завдання 7 (тема: функції + замикання):
// Створи функцію createLimiter(limit), яка повертає іншу функцію increment().
// Ця внутрішня функція:
// щоразу збільшує лічильник на 1
// але не перевищує limit
// повертає поточне значення
// const inc = createLimiter(3);
// inc(); // 1
// inc(); // 2
// inc(); // 3
// inc(); // 3

// Завдання 8 (тема: функції + аргументи):
// Напиши функцію sumOnlyNumbers(), яка приймає будь-яку кількість аргументів і повертає суму тільки числових значень.
// Не використовуй масиви.
// sumOnlyNumbers(1, "a", true, 4); // 5

// Завдання 9 (тема: колбек-функції):
// Реалізуй функцію executeTwice(callback), яка:
// приймає функцію callback як аргумент
// викликає її двічі
// повертає масив із двох результатів

// Завдання 10 (тема: рекурсія):
// Напиши рекурсивну функцію countDigits(n), яка:
// повертає кількість цифр у числі n
// не використовуй перетворення в рядок
// countDigits(123); // 3
function countDigits(n) {
  n = Math.abs(n);
  if (n < 10) {
    return 1;
  } else {
    return 1 + countDigits(Math.floor(n / 10));
  }
}
console.log(countDigits(123));
console.log(countDigits(-1235));
