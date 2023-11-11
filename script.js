const string = "     12345678911234567892123456789312345   ";

const spaceRemove = function (string) {
  const res = string.trim();
  if (typeof string !== "string") {
    return "Передана не строка, передайте строку";
  } else if (res.length > 30) {
    return res.slice(0, 30) + "...";
  }
};

console.log(spaceRemove(string));
