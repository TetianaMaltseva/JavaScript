// Вправа 1. Створи базу даних notesDB версії 1 з об’єктним сховищем notes, де ключем є поле noteId.
// Підказка: використай keyPath: "noteId" у методі createObjectStore.
let myDataBase = indexedDB.open("notesDB", 1);

myDataBase.onupgradeneeded = function (event) {
  let db = event.target.result;
  db.createObjectStore("notes", { keyPath: "noteId" });
};
myDataBase.onsuccess = function (event) {
  const db = event.target.result;
  console.log("The database has been successfully opened", db);
};
myDataBase.onerror = function (event) {
  console.error("Error when opening the database", event.target.error);
};
// Вправа 2. Додай нову нотатку { noteId: 101, text: "Підготувати звіт" } до сховища notes.
// Підказка: відкрий транзакцію в режимі "readwrite".
myDataBase.onsuccess = function (event) {
  let db = event.target.result;
  let transaction = db.transaction("notes", "readwrite");
  let store = transaction.objectStore("notes");
  let note = {
    noteId: 101,
    text: "Підготувати звіт",
  };
  let addRequest = store.add(note);
  addRequest.onsuccess = function () {
    console.log("Note added successfully");
  };
  addRequest.onerror = function () {
    console.error("Error when adding a note");
  };
};
// Вправа 3. Зчитай нотатку з noteId = 101 і виведи її текст у консоль.
// Підказка: метод get(noteId) і обробка в onsuccess.

myDataBase.onsuccess = function (event) {
  let db = event.target.result;
  let transaction = db.transaction("notes", "readwrite");
  let store = transaction.objectStore("notes");
  let getRequest = store.get(101);
  getRequest.onsuccess = function () {
    let note = getRequest.result;
    if (note) {
      console.log("Found:", note.text);
    } else {
      console.log("No note with this id was found");
    }
  };
};

// Вправа 4. Онови текст нотатки з noteId = 101 на "Підготувати фінальний звіт".
// Підказка: метод put(...) замінює запис, якщо ключ уже існує.

myDataBase.onsuccess = function (event) {
  let db = event.target.result;
  let transaction = db.transaction("notes", "readwrite");
  let store = transaction.objectStore("notes");
  let updateRequest = store.put({
    noteId: 101,
    text: "Підготувати фінальний звіт",
  });
  updateRequest.onsuccess = function () {
    console.log("The note has been updated successfully");
  };
  updateRequest.onerror = function () {
    console.error("Update error");
  };
};
// Вправа 5. Видали нотатку з noteId = 101 зі сховища.
// Підказка: використай метод delete(noteId) у транзакції.
myDataBase.onsuccess = function (event) {
  let db = event.target.result;
  let transaction = db.transaction("notes", "readwrite");
  let store = transaction.objectStore("notes");
  let deleteRequest = store.delete(101);
  deleteRequest.onsuccess = function () {
    console.log("The note has been deleted");
  };
  deleteRequest.onerror = function (event) {
    console.error("Deletion error", event.target.error);
  };
};
