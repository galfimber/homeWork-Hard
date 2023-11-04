let num = 266219;
let res = 1;
num = Array.from(String(num));
for(let i = 0; i < num.length; i++){
    let num2 = Number(num[i]);
    res *= num2;
}
console.log(res);
res **= 3;
res = String(res);
console.log(res.substr(0, 2));