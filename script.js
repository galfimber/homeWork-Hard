const week = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];
const month = [
  "Января",
  "Февраля",
  "Марта",
  "Апреля",
  "Мая",
  "Июня",
  "Июля",
  "Августа",
  "Сентября",
  "Октября",
  "Ноября",
  "Декабря",
];
const typeA = document.querySelector(".typeA");

const time1 = function () {
  let time = new Date();
  let hour = "";
  let minute = "";
  let second = "";

  switch (true) {
    case time.getHours() % 10 === 1 && Math.floor(time.getHours() / 10) !== 1:
      hour = "час";
      break;
    case time.getHours() % 10 > 1 &&
      time.getHours() % 10 < 5 &&
      Math.floor(time.getHours() / 10) !== 1:
      hour = "часа";
      break;
    default:
      hour = "часов";
  }

  switch (true) {
    case time.getMinutes() % 10 === 1 &&
      Math.floor(time.getMinutes() / 10) !== 1:
      minute = "минута";
      break;
    case time.getMinutes() % 10 > 1 &&
      time.getMinutes() % 10 < 5 &&
      Math.floor(time.getMinutes() / 10) !== 1:
      minute = "минуты";
      break;
    default:
      minute = "минут";
  }

  switch (true) {
    case time.getSeconds() % 10 === 1 &&
      Math.floor(time.getSeconds() / 10) !== 1:
      second = "секунда";
      break;
    case time.getSeconds() % 10 > 1 &&
      time.getSeconds() % 10 < 5 &&
      Math.floor(time.getSeconds() / 10) !== 1:
      second = "секунды";
      break;
    default:
      second = "секунд";
  }

  typeA.innerHTML = `<div>Сегодня ${week[time.getDay()]}, ${time.getDate()} ${
    month[time.getMonth()]
  } ${time.getFullYear()} года, ${time.getHours()} ${hour} ${time.getMinutes()} ${minute} ${time.getSeconds()} ${second}</div>`;
};

setInterval(time1, 1000);

const typeB = document.querySelector(".typeB");

const time2 = function () {
  let time = new Date();
  let day = {
    date: String(time.getDate()),
    month: String(time.getMonth()),
    hour: String(time.getHours()),
    minute: String(time.getMinutes()),
    second: String(time.getSeconds()),
  };

  for (key in day) {
    if (day[key] < 10 && day[key] >= 0) {
      day[key] = "0" + day[key];
    }
  }

  typeB.innerHTML = `<div>${day.date}.${day.month}.${time.getFullYear()} - ${
    day.hour
  }:${day.minute}:${day.second}</div>`;
};

setInterval(time2, 1000);
