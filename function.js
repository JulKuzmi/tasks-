// // Локальные переменные в функции
// function sayHi() {
//   let hello = "tell me hi";
//   console.log(hello);
// }
// sayHi();

// // У функции есть доступ к внешним переменным.Если одноимённая переменная объявляется внутри функции, тогда она перекрывает внешнюю

// let name = "Olga";

// function showMessage() {
//   let name = "Ari";
//   let message = "Добрый вечер" + name;
//   console.log(message);
// }
// showMessage();

// function ageVerification(question) {
//   let userAge = prompt(question);

//   if (userAge >= 18) {
//     console.log("Вам уже есть 18! Добро пожаловать");
//   } else {
//     console.log("Ой, Вы пока слишком  молоды");
//   }
// }

// ageVerification("Сколько вам лет?");

function delProduct() {
  let del = confirm("Вы правда хотите удалить товар из корзины?");
  del
    ? alert("Вы удалили товар из корзины")
    : alert("Не волнуйтесь, товар не удален из корзины");
}
