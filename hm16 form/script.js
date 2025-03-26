// <!-- Додайте нову опцію до елемента `<select>` -->
// <!-- Маємо <select>:

//     <select id="genres">
//       <option value="rock">Рок</option>
//       <option value="blues" selected>Блюз</option>
//     </select>
//     Використовуючи JavaScript:
    
//     Виведіть значення та текст обраної опції.
//     Додайте опцію: <option value="classic">Класика</option>.
//     Зробіть її обраною.
//     Зверніть увагу: якщо ви все зробили правильно, то ваше сповіщення
//  має показати значення blues. -->

let newList = document.querySelector('#genres');
newList.newOption('Класика','classic');
