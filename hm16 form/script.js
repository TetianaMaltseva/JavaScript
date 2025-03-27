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



let optionSelected = genres.options[genres.selectedIndex];
console.log( optionSelected.value );
console.log( optionSelected.text );

let newOption = new Option('Класика','classic');
//let newOption = new Option('Класика','classic', true);
genres.append(newOption);

genres.options[2].selected = true;
// newOption.selected = true;


  
