// <!-- ****************************************Фокусування: focus/blur -->

// <!-- div, який можна відредагувати
// Створіть <div>, який при кліканні на ньому, перетворюється на <textarea>.

// Текстова область дозволяє редагувати HTML всередині <div>.

// Коли користувач натискає Enter або <textarea> втрачає фокус, тоді знову з’являється <div>, який містить в собі HTML введений в <textarea>. -->

// <!-- ОПИС ЯК РОБИЛИ: -->

// <!-- Кістяк програми -->
// <!-- <ul>
//     <li>Клікніть на div щоб відредагувати.</li>
//     <li>Натискання Enter або втрата фокусу збереже вміст поля введення.</li>
//   </ul>

//   <div id="view" class="view">Текст</div>


    let area = null;
    let view = document.getElementById('view');

   view.style.marginBottom = '100px';

     view.onclick = function() {
       editStart();
      };

     function editStart() {
        area = document.createElement('textarea');
        area.id = "myTextarea";
        area.placeholder = "Enter text";
        area.rows = 5;
        area.cols = 50;
        area.value = view.innerText;

       view.replaceWith(area);
       area.focus();

       area.onkeydown = function(event) {
        if (event.key == 'Enter') {
          this.blur();
        }

        area.onblur = function() {
          editEnd();
        };
      };

     }

     function editEnd() {
      view.innerHTML = area.value;
      area.replaceWith(view);
      // area.remove();
     }

// <!--Опис функцій коду для редагування тексту в <div>
// 1.	Обробник кліку на <div>
//   o	Коли користувач клікає на елемент, потрібно запустити функцію редагування.
//   o	Використовується подія onclick, яка викликає функцію для початку редагування.
// 2.	Функція для запуску редагування (editStart)
//   o	Створюється елемент <textarea>, який замінює початковий <div>.
//   o	У це поле вставляється поточний текст із <div>.
//   o	Додається обробник подій для натискання клавіші Enter, який зберігає текст.
//   o	Також додається обробник події втрати фокусу, який завершує редагування.
//   o	Після заміни фокус автоматично переходить у поле введення.
// 3.	Функція завершення редагування (editEnd)
//   o	Береться значення з <textarea> і передається назад у <div>.
//   o	Поле <textarea> замінюється початковим <div>, але вже з оновленим текстом.
//  -->
