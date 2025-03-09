// ЗАГАЛЬНІ ПРАВИЛА:
// 1) Не модифікувати вхідні параметри!!!!

// 1.Напишіть функцію, яка приймає 2 рядки та порівнює їх
// довжину. Функція повертає 1, якщо в першому рядку
// більше символів, ніж у другому; -1 – якщо у другому більше символів, ніж у першому;
//  0 – якщо рядки однакової
// довжини. (length)
function lenghtStr(a,b){
  if(a.length > b.length){
    return 1;
  }else if(a.length === b.length){
    return 0;
  }else{
    return -1;
}}
console.log(lenghtStr('acook','cook88'));

let lenghtStr1 = (str1,str2) => {
  if(str1.length > str2.length)
    return 1;
  if(str1.length === str2.length)
      return 0;
  if(str1.length < str2.length)
    return -1;
}
console.log(lenghtStr1('absjj','asd'));
// 2. Напишіть функцію, яка переводить у верхній регістр перший символ переданого рядка.
// (toUpperCase, slice)
function ucFirst(str) {
   if (!str) return str;
   return str[0].toUpperCase() + str.slice(1);
   };
   console.log(ucFirst("abcd"));
// 3. Напишіть функцію, яка підраховує кількість голосних
// літер у переданому рядку. (створити рядок з голосними літерами і шукати в ньому, includes) 

 function countToVowels(letters) {
     let vowels = 'aeiouyAEIOUYяиюэоаыуеЕУЫАОЭЯИЮ';
     let count = 0;

     for (let letter of letters) {
      if(vowels.includes(letter)){
        count ++;
      } 
     }
     return count;
   }
   console.log(countToVowels('Привет Mary!'));

// 4. Напишіть функцію для перевірки спаму в переданому
// рядку. Функція повертає true, якщо рядок містить спам.
// Спамом вважати наступні слова: 100% безкоштовно,
// збільшення продажів, тільки сьогодні, не видаляйте, ххх. 
// Функція має бути нечутливою до регістру.
// (створити масив рідків зі спамом, toLowerCase, some, includes)
function identifySpam(str) {
  let spams = ['100% безкоштовно','збільшення продажів', 
              'тільки сьогодні', 'не видаляйте', 'ххх'];
  return spams.some(spam =>str.toLowerCase().includes(spam.toLowerCase()))
}
console.log(identifySpam('Tільки Сьогодні 100% Безкоштовно, приходьте'));
console.log(identifySpam('Приходьте ми поряд!'));

//2) str.toLowerCase().includes(spam.toLowerCase()))
// 5. Напишіть функцію скорочення рядка. Функція приймає
// рядок та його максимальну довжину. Якщо довжина рядка більша, ніж максимальна, необхідно відкинути зайві
// символи, додавши замість них трикрапку. 
// Наприклад: truncate("Hello, world!", 8) має повернути "Hello...".(length, slice)
function truncString(str,maxlength){
  if(str.length > maxlength){
    return str.slice(0,maxlength - 1) + "...";
  }else{
    return str;
  }
}
console.log(truncString('Hello Alex', 5));

// function truncate(str, maxLength){ return str.length > maxLength ? str.slice(0, maxLength - 3) + "..." : str; } 4) В averadeValue трохи зламана логіка, треба було так function averageWordLength(sentence) { const words = sentence.split(/\s+/); const totalLength = words.reduce((sum, word) => sum + word.length, 0); return words.length ? totalLength / words.length : 0; }
// 6. Напишіть функцію, яка перевіряє, чи є переданий рядок
// паліндромом. (split,reverse,join)
function palindrome(str){
  let reversStr = str.split('').reverse().join('');
  return str === reversStr;
}
console.log(palindrome('madam'));
console.log(palindrome('made'));
// 7. Напишіть функцію, яка підраховує кількість слів у реченні. (trim,split, length)
function countWords(sent){
 return sent.trim().split(/\s+/).length;
  }
console.log(countWords('Hello I am Alex!'));
// 8. Напишіть функцію, яка повертає найдовше слово з речення.(split,reduce)
 // console.log(prices.reduce((acc, price) => acc * price, 1));

function returnsLangWord(str){
   return str.split(/\s+/).reduce((acc,word) => word.length > acc.length ? word : acc,'');
}
 console.log(returnsLangWord('Hello I am Alex!'));
// 9. Напишіть функцію, яка підраховує середню довжину
// слова у реченні.(split,reduce)
function averadeValue(str){
  return str.split(/\s+/).reduce((acc,word,_,arr) => acc + word.length / arr.length,0);
}
console.log(averadeValue('Hello I am Alex!'));
// 10. Напишіть функцію, яка приймає рядок і символ і виводить
// індекси, за якими знаходиться цей символ у рядку. Також
// виведіть, скільки разів зустрічається цей символ у рядку(psuh,length)
// let pos = -1;
// while ((pos = str.indexOf(target, pos + 1)) != -1) {
//   alert( pos );
// 

function sumSimbols(str,num){
  let simbol = [];
  let index = str.indexOf(num);

  while(index !== -1){
    simbol.push(index);
    index = str.indexOf(num,index + 1);
  }
  console.log(`Index: ${simbol} , nummer of occurrences: ${simbol.length} `);
}
sumSimbols('Alex!!!!','!');

 