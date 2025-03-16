//  //*********************************************************TRY...CATCH...FINALLY
//   //   Завдання 1: Робота з finally
//   //   Що виведе цей код у консоль?
//   //  Перед помилкою 
//   //  Щось пішло не так Вброс помилки в catch
//   // Блок finally виконується завжди 
//   // Після try...catch...finally

//      try {
//         console.log("Перед помилкою");
//        throw new Error("Щось пішло не так");
//      } catch (error) {
//          console.log("Оброблено:", error.message);
//      } finally {
//          console.log("Блок finally виконується завжди");
//     }
//    console.log("Після try...catch...finally");



//   //   Завдання 2: Перевірка введених даних
//   //   Напиши функцію parseNumber(input), яка намагається перетворити input на число.
//   //  Якщо введено не число, функція повинна викидати помилку "'Некоректне число'". 
//   // Використай try...catch для обробки помилки та виведи відповідне повідомлення.
function parseNumber(input){
  try{
    let number = Number(input);
    if (isNaN(number)){
      throw new Error('Некоректне число');
    }
    console.log('число:', number);
    return number;
  }
  catch(error){
    console.error(error.message);
    return null;

  }
}
parseNumber(123);
parseNumber('jjj');

//   //  Вправи на тему "Обіцянки (Promise) в ES6" з відповідями
//   // 🔹 Вправа 1: Використання reject
//   // Що виведе цей код у консоль? ❌ Помилка!
//   //В коде resolve не вызывается и значит этот блок пропускается ,
//   //  промис сразу переходит в состояние отклонен и управление передаётся catch()

//   const myPromise = new Promise((resolve, reject) => {
//      reject("❌ Помилка!");
//    });

//    myPromise
//     .then((message) => console.log(message))
//     .catch((error) => console.error(error));


//   // 🔹 Вправа 2: .catch() при помилці у then()
//   // Що виведе цей код? ❌ Щось пішло не так!  В .then() вызывается throw new Error, 
//   // создавая ошибку. Ошибка перехватывается в .catch(), который выводит её в консоль.

//    const myPromise1 = new Promise((resolve) => {
//      resolve(10);
//    });

//    myPromise1
//      .then((num) => {
//        throw new Error("❌ Щось пішло не так!");
//      })
//      .catch((error) => console.error(error.message));


//   // 🔹 Вправа 3: Promise.all()
//   // Що виведе цей код? ✅ Перше ✅ Друге Так как .all чекає виконання всіх обіцянок

//    const promise1 = new Promise((resolve) => setTimeout(() => resolve("✅ Перше"), 1000));
//    const promise2 = new Promise((resolve) => setTimeout(() => resolve("✅ Друге"), 2000));

//    Promise.all([promise1, promise2]).then((results) => console.log(results));


//   // 🔹 Вправа 4: Комбінація Promise.allSettled()
//   // Що виведе цей код? Масив з  об'єктами, так як allSettled  чекає на виконання всіх обіцянок, 
//   // незалежно від іх состояния  ( успіх або помилка) в отдичие від all

  //  const promise3 = new Promise((resolve) => setTimeout(() => resolve("✅ Успіх"), 1000));
  //  const promise4 = new Promise((_, reject) => setTimeout(() => reject("❌ Помилка"), 2000));
  //   Promise.allSettled([promise3, promise4]).then((results) => console.log(results));

//   //**************************   📝 Вправи та відповіді по темі async/await
//   // 🔹 Вправа 1: await у функції
//   // Що виведе цей код у консоль? Чому ⏳ Очікуємо...🚀 Дані отримані! спочатку виконуеться 
// синхроний код 

    // async function getData() {
    //  let result = await Promise.resolve("🚀 Дані отримані!");
    //   console.log(result);
    // }

    // getData();
    // console.log("⏳ Очікуємо...");


//   // 🔹 Вправа 2: Послідовне виконання await
//   // Який буде порядок виводу у консоль? Чому 1️⃣ Початок 📄Дані 1  📄 Дані 2 "🏁 Кінець 
//   // await зупиняє виконання loadData до завершення кожного промис

//    async function loadData() {
//      console.log("1️⃣ Початок");

//     let data1 = await new Promise((resolve) => setTimeout(() => resolve("📄 Дані 1"), 2000))      console.log(data1);

//      let data2 = await new Promise((resolve) => setTimeout(() => resolve("📄 Дані 2"), 1000));
//      console.log(data2);

//      console.log("🏁 Кінець");
//    }

//    loadData();


// //   // 🔹 Вправа 3: Використання fetch
// //   // Що виведе цей код? Чому   Leanne Graham   fatch це промис тому ми працюємо з await и він 
// //  повернув нам данні з сервера

//    async function getUser() {
//     let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
//     let user = await response.json();
//     console.log(user.name);
//    }

//   getUser();


//   // 🔹 Вправа 4: Чому setTimeout не працює з await?
//   // Що виведе цей код? Чому 🏁 Кінець  ⏳ююю Затримка .awaite працюе тільки з промисами и не 
//   // зупиняє setTimeout  и йде далі, а через 2 сек сработает setTimeout

//   async function delay() {
//     await setTimeout(() => console.log("⏳ююю Затримка"), 2000);
//     console.log("🏁 Кінець");
//    }

//    delay();

