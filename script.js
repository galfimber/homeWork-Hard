const string = "     12345678911234567892123456789312345   ";

const spaceRemove = function (string) {
  if (typeof string !== "string") {
    console.log("Передана не строка, передайте строку");
  } else if (string.trim().length > 30) {
    console.log(string.trim().slice(0, 30) + "...");
  } else {
    console.log(string.trim().slice(0, 30) + "...");
  }
};

spaceRemove(string);
