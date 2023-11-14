let arr = ["2", "10", "12", "20", "34", "40", "42"];

const isSimple = function (num) {
  let i = 2;
  const limit = Math.sqrt(num);
  while (i <= limit) {
    if (num % i === 0) {
      return false;
    }
    i += 1;
  }
  return true;
};

console.log("Задание 1")

for (let i = 0; i < arr.length; i++) {
  if (arr[i].at(0) === "2" || arr[i].at(0) === "4") {
    console.log(arr[i]);
  }
}

console.log("Задание 2")

for (let i = 2; i <= 100; i++) {
  if (isSimple(i)) {
    console.log(`Делители этого числа: 1 и ${i}`);
  }
}
