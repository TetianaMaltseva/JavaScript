// 1. Напишіть функцію, яка приймає 2 числа і повертає -1, якщо
// перше менше, ніж друге; 1 - якщо перше більше, ніж друге;
// 0 - якщо числа рівні.
function checkNumber(a,b){
  if(a < b)
    return -1;
  if(a > b)
    return 1;
  if(a === b)
      return 0;
}
console.log(checkNumber(4,5));
console.log(checkNumber(5,4));
console.log(checkNumber(5,5));
// 2. Напишіть функцію, яка вираховує факторіал переданого
// їй числа.
// a! = (a – 1)! × a
function calcFactorial(a){
  return a === 1 ? a : a * calcFactorial(a - 1);
}
console.log(calcFactorial(5));
// 3. Напишіть функцію, яка приймає три окремі цифри і перетворює їх на одне число. Наприклад:
//  цифри 1, 4, 9 перетворяться на число 149.
function showNumber(a,b,c){
  return Number(a + '' + b + '' +c);
}
console.log(showNumber(9,8,0));
// 4. Напишіть функцію, яка приймає довжину та ширину прямокутника і обчислює його площу. 
// Якщо у функцію передали
// 1 параметр, вона вираховує площу квадрата.
function calcArea(width,height){
  if(height === undefined){
    return width * width;
  }
  return width * height;
}
console.log(calcArea(4,5));
console.log(calcArea(4));

function calcArea1(width,height = width){
  return width * height;
}
console.log(calcArea1(4,5));
console.log(calcArea1(4));

// 5. Напишіть функцію, яка перевіряє, чи є передане їй число
// досконалим. Досконале число – це число, що дорівнює сумі
// всіх своїх власних дільників. Найти делители, проссумировать, сравнить
function checkIsPerfectNumber(p){
  let sum = 0;
  for(let i = 1; i <= p/2; i++){
    if(p % i === 0){
      sum += i;
    }
  }
  return  sum === p // ? `${p} - is a perfect number.` : `${p} - is not a perfect number.`;
}
console.log(checkIsPerfectNumber(28));
console.log(checkIsPerfectNumber(8));
// 6. Напишіть функцію, яка приймає мінімальне і максимальне
// значення для діапазону і виводить ті числа з діапазону, які
// є досконалими. Використовуйте написану раніше функцію,
// щоб перевірити число на досконалість.
function checkPerfNumInRange(min, max){
  let range =[];
  for(let i = min; i <= max; i++){
    if(checkIsPerfectNumber(i)){
      range.push(i);
    }
  }
return range;
}
console.log(checkPerfNumInRange(1,500));
// 7.Напишіть функцію, яка приймає час (години, хвилини, секунди) і виводить його на екран у 
// форматі «година:  хвилини:секунди».
// Якщо при виклику функції хвилини та/або секунди не були передані, виводити їх як 00.
function showTime(hours, minutes = 0,seconds = 0){
  let date = new Date();
   date.setHours(hours);
   date.setMinutes(minutes);
   date.setSeconds(seconds);
   return date.toLocaleTimeString('en-GB');
}
console.log(showTime(5,10,5));
console.log(showTime(5,10));
console.log(showTime(5));
// 8. Напишіть функцію, яка приймає години, хвилини та секунди і повертає цей час у секунди.
function showTime2(hours, minutes,seconds){
   return hours * 3600 + minutes * 60 + seconds;
}
console.log(showTime2 (1,10,5));

// 9. Напищіть функцію, яка приймає кількість секунд, переводить їх у години, хвилини та секунди
//  і повертає у вигляді рядка «година:хвилини:секунди».
function showReturnTime(seconds){
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds % 3600) / 60);
  let second = seconds % 60;
  return `${hours}:${minutes.toString().padStart(2, "0")}:${second.toString().padStart(2, "0")} `;
}
console.log(showReturnTime(4205));
// 10. Напишіть функцію, яка підраховує різницю між датами.
//  Функція приймає 6 параметрів, що описують 2 дати,
// і повертає результат у вигляді рядка «година:хвилини:
// секунди». Під час виконання завдання використовуйте
// функції з попередніх 2 завдань: спочатку обидві дати переведіть у секунди,
//  дізнайтеся різницю в секундах, а потім
// різницю переведіть назад у «година:хвилини:секунди».
function diffDate(h1,m1,s1,h2,m2,s2){

  let date1 = showTime2(h1,m1,s1);
  //console.log(date1)
  let date2 = showTime2(h2,m2,s2);
  //console.log(date2)

  let result = Math.abs(date1 - date2);
  return showReturnTime(result);
 
}
console.log(diffDate(2,23,45,1,23,45));