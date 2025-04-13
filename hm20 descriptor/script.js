// 1. Зробіть властивість email незаписуваною. Та продемонструйте результат, поясніть.

 let account = {};
 Object.defineProperty(account,'email',{
  value: 'max@gmail.com',
  enumerable: true,
  configurable:true
 });
 account.email = 'eva@gmail.com';
 console.log(account.email); /* флаг writable cделаем свойство доступным только для чтения,
 свойство создано «с нуля», для нового свойства необходимо явно указывать все флаги,
  для которых значение true.
  Если свойство существует, defineProperty обновит его флаги.
   В противном случае метод создаёт новое свойство с указанным значением и флагами;
    если какой-либо флаг не указан явно, ему присваивается значение false
  */

// 2. Створіть властивість points, яка не відображається в for...in. Продемонструйте.

 let game = {
  name: 'Birds',
  id: '30',
 };
 Object.defineProperty(game,'points',{
  value: '0',
  writable: true,
  configurable:true
 });
 for (let key in game) console.log(key);

// 3. Зробіть властивість level неможливою для видалення. Продемонcтруйте.
 let player = {};
Object.defineProperty(player,'level',{
  value: '0',
  writable: true,
  enumerable: true,
 });
 delete player.level;
 console.log(player);

// 4. Створіть об’єкт car з властивостями brand і year з різними дескрипторами.

let car = {};
Object.defineProperties(car,{
  brand: {
    value: 'BMV',
    writable: true,
    enumerable: true},
  year: {
    value: 2024,
    writable: true,
    configurable:true}
 });
// 5. Виведіть дескриптор властивості brand у попередньому об’єкті.
let descriptor = Object.getOwnPropertyDescriptor(car,'brand');
console.log(JSON.stringify(descriptor, null, 2))

// 6. Додайте властивість з десприктором configurable: false. Спробуйте змінити configurable:
//  false на true у вже існуючій властивості.
// Поясніть що станеться.
let obj = {};
Object.defineProperty(obj,'obst',{
  value: 'kaki',
  writable: true,
  enumerable: true,
 });
// Object.defineProperty(obj, "obst", { configurable: true });
//Определение свойства как неконфигурируемого – это дорога в один конец.
//  Мы не можем изменить его обратно с помощью defineProperty.

// 7. Зробіть властивість isAdmin неперелічуваною та незмінною. Продемонструйте.

let user = {};
Object.defineProperty(user,'isAdmin',{
  value: 'yes',
  configurable: true
 });
 let descriptor2 = Object.getOwnPropertyDescriptor(user,'isAdmin');
console.log(JSON.stringify(descriptor2, null, 2))
 

// 8. Створіть об'єкт, який не можна розширювати, і спробуйте додати властивість. Продемоснтвруйте.

let user2 = {};
Object.preventExtensions(user2);
// Object.defineProperty(user2,'isAdmin',{
//   value: 'yes',
//   configurable: true
//  });
//  console.log(user2);

// 9. Заморозьте об’єкт book і спробуйте змінити властивість. Продемонструйте.

let book = { title: "JS Guide" };
Object.freeze(book);
//Object.defineProperty(book, "title", { configurable: true });

// 10. Запечатайте об’єкт options і спробуйте видалити та додати властивості. Продемонструйте.

 let options = { debug: true };
 Object.seal(options);
 
 delete options.debug;
//  Object.defineProperty(options,'false',{
//   value: 'no',
//  });
 console.log(options)