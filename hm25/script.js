// Завдання 1. Лічильник кліків у sessionStorage
// Створіть кнопку. Кожне натискання збільшує лічильник,
//  який зберігається в sessionStorage. Після перезавантаження вкладки
//  лічильник має зберігатися, а після закриття вкладки — обнулятись.
let count = Number(sessionStorage.getItem("clickCount")) || 0;
document.getElementById("count").textContent = count;
document.getElementById("clickBtn").addEventListener("click", () => {
  count++;
  sessionStorage.setItem("clickCount", count);
  document.getElementById("count").textContent = count;
});

// Завдання 2. Очистити localStorage
// Створи кнопку, яка очищає всі дані в localStorage і
//  оновлює інтерфейс. ( location.reload(); // оновити сторінку)
localStorage.setItem("name", "Hanna");
let showStatus = document.querySelector("#showStatus");
let clearBtn = document.querySelector("#clearBtn");

function updateStatus() {
  if (localStorage.length === 0) {
    showStatus.textContent = "LocalStorage is empty";
  } else {
    showStatus.textContent = "LocalStorage has date";
  }
}

clearBtn.addEventListener("click", () => {
  localStorage.clear();
  updateStatus();

  setTimeout(() => {
    location.reload();
  }, 2000);
});
updateStatus();

// Завдання 3. Робота з об'єктами
//  Збережіть об'єкт користувача {name: "Olga", age: 25} у localStorage.
// Потім прочитайте його і виведіть в консоль у вигляді об'єкта.
let user = { name: "Olga", age: 25 };
localStorage.setItem("user", JSON.stringify(user));
let savedUser = JSON.parse(localStorage.getItem("user"));
console.log(savedUser);
