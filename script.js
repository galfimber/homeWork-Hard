const week = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];
let date = new Date();
let today = date.getDay();
const parent = document.querySelector(".text");

function text() {
  for (let key of week) {
    const item = document.createElement("li");
    if (key === week[today]) {
      item.style.fontWeight = "Bold";
    }
    if (key === "Суббота" || key === "Воскресенье") {
      item.style.fontStyle = "italic";
    }
    parent.appendChild(item);
    item.innerHTML = key;
  }
}
text();
