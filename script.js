const lang = prompt("Выберите язык: ru или en");
if (lang == "ru") {
  console.log(
    "Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье"
  );
} else if (lang == "en") {
  console.log("Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday");
} else {
  console.log("Выбран неверный язык");
}

switch (lang) {
  case "ru":
    console.log(
      "Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье"
    );
    break;
  case "en":
    console.log(
      "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday"
    );
    break;
  default:
    console.log("Выбран неверный язык");
}

const week = {
  ru: [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье",
  ],
  en: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
};
console.log(week[lang]);


const namePerson = prompt("Введите имя");
namePerson == 'Артем' ? console.log('директор') : namePerson == 'Александр' ? console.log('преподаватель') : console.log('студент');