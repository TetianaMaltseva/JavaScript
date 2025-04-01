// <!-- ********************************************Вправи з відповідями: Обробка подій форми в JavaScript -->
// Вправа 1: Автоматичне форматування номера телефону Завдання: Реалізуйте поле
// введення номера телефону, яке автоматично додає +380 на початку, якщо його
// немає. ДАНО:

// <form>
//   <label for="phone">Телефон:</label>
//   <input type="tel" id="phone" placeholder="+380XXXXXXXXX" />
//   <button type="submit">Надіслати</button>
// </form>


// Вправа 2: Підрахунок символів у полі коментаря Завдання: Реалізуйте текстове
// поле для коментаря, яке показує кількість введених символів (максимум 200
// символів). 

// <form>
//   <label for="comment">Коментар:</label>
//   <textarea id="comment" maxlength="200"></textarea>
//   <p id="charCount">0 / 200</p>
// </form>

// Вправа 3: Автоматичне додавання коду країни до номера телефону Завдання: Якщо
// користувач вводить номер телефону без +380, додати його автоматично. Рішення:

// <form>
//   <label for="phone">Телефон:</label>
//   <input type="tel" id="phone" />
//   <br />
//   <button type="submit">Надіслати</button>
// </form>


// Вправа 4: Перевірка відповідності паролів Завдання: Реалізуйте два поля введення
// пароля. Користувач не може надіслати форму, якщо паролі не співпадають. Рішення:

// <form>
//   <label for="password1">Пароль:</label>
//   <input type="password" id="password1" />

//   <label for="password2">Повторіть пароль:</label>
//   <input type="password" id="password2" />

//   <p id="passwordError" style="color: red"></p>

//   <button type="submit" id="submitPassword">Надіслати</button>
// </form>

// </script>

// Вправа 5: Динамічна зміна кольору фону Завдання: Змініть колір фону сторінки на
// вибраний користувачем із випадаючого списку. Рішення:
// <form>
//   <label for="color">Виберіть колір фону:</label>
//   <select id="color">
//     <option value="white">Білий</option>
//     <option value="lightblue">Блакитний</option>
//     <option value="lightgreen">Зелений</option>
//     <option value="lightyellow">Жовтий</option>
//   </select>
// </form>