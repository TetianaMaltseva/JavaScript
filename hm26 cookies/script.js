// 1.	Створи cookie з ім’ям currency і значенням UAH, яке зберігається 5 днів.

const date = new Date();
date.setDate(date.getDate() + 5);
document.cookie = "currency=UAN; expires=" + date.toUTCString() + "; path=/";

// 2.	Створи cookie userType=premium, яке буде діяти тільки в межах шляху /account.
document.cookie = "userType=premium; path=/account";
// 3.	Створи cookie accepted=true з обмеженням SameSite=Lax.
document.cookie = "accepted=true; SameSite=Lax";
// 4.	Напиши функцію deleteCookie(name), яка повністю видаляє cookie з іменем name,
//  незалежно від значення.
function deleteCookie(name) {
  document.cookie = `${name}=; expires=Thu,01 Jan 00:00:00 UTC; path/;`;
}
// 5.	Створи cookie fontSize=large, яке живе 2 години, але доступне лише через HTTPS
// і на всьому сайті.
document.cookie = "fontSize=large; max-age=7200; path=/;secure";
// 6.	Напиши функцію hasCookie(name), яка повертає true,
// якщо cookie з таким іменем існує, і false — якщо ні.
function hasCookie(name) {
  const result = document.cookie.split(";");
  return result.some((result) => result.startsWith(`${name}=`));
}
console.log(hasCookie("admin"));
// 7.	Створи cookie auth=yes з максимально можливим терміном життя (наприклад, 10 років).
const date1 = new Date();
date.setFullYear(date1.getFullYear() + 10);
document.cookie = "auth=yes; expires=" + date1.toUTCString() + "; path=/";

// 8.	Створи cookie visitCount, яке збільшує своє значення на +1 при кожному завантаженні сторінки.

const date2 = new Date(); //создаем
date.setDate(date2.getDate() + 5);
document.cookie = "visitCount = 0; expires=" + date2.toUTCString() + "; path=/";

function getCookie(name) {
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? match[2] : null;
}
function setCookie(name, value, days) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
}

let count = parseInt(getCookie("visitCount")) || 0;
++count;
setCookie("visitCount", count);
console.log(`${count}`);

// 9.	Створи cookie popupClosed=true, яке зберігається до кінця сесії
// (тобто без expires або max-age).
document.cookie = "popupClosed=true; path=/";

// 10.	Зроби скрипт, який зчитує всі cookies, розбиває їх на
//  об’єкти {key: ..., value: ...} і виводить у консоль масив таких об’єктів.
const resultArray = document.cookie.split(";").map((cookie) => {
  const [key, value] = cookie.split("=");
  return { key, value };
});
console.log(resultArray);
