// Локальные переменные в функции
function sayHi() {
  let hello = "tell me hi";
  console.log(hello);
}
sayHi();

// У функции есть доступ к внешним переменным.Если одноимённая переменная объявляется внутри функции, тогда она перекрывает внешнюю

let name = "Olga";

function showMessage() {
  let name = "Ari";
  let message = "Добрый вечер" + name;
  console.log(message);
}
showMessage();
