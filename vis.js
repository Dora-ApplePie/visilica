let nameP = prompt("Как тебя зовут, мой друг?");
alert("Привет, " + nameP);

const words = [
  "пидораска",
  "макака",
  "выдра",
  "оладушек",
  "шашлык",
  "виселица",
  "света",
  "мерседес"
  ];
  let word = words[Math.floor(Math.random() * words.length)];

let answerArray = [];
for (let i = 0; i < word.length; i++) {
answerArray[i] = "_";
}

let remainingLetters = word.length;
var guesses = 10;

while (remainingLetters > 0 && guesses > 0) {
  alert(answerArray.join(" "));

  var guess = prompt("Угадайте букву, или нажмите Отмена для выхода из игры.");
  if (guess === null) {
  break;

  } else if (guess.length !== 1) {
  alert("Пожалуйста, введите одну букву.");
  } else {
    guesses--;
    guess = guess.toLowerCase();
    for (var j = 0; j < word.length; j++) {
    if (word[j] === guess) {
    answerArray[j] = guess;
    remainingLetters--;
      } 
    }
  }
  }
  alert(answerArray.join(" "));
  if (guesses > 0) {
  alert("Отлично, " + nameP +"! Было загадано слово: " + word + "!" + " Получи приз у организатора конкурса, если справилась))))");
  } else {
    alert("Очень плохо! Было загадано слово: " + word);}