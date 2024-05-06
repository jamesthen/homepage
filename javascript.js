let myInt = 5;
let myFloat = 6.667;
myInt;
myFloat;
console.log(myInt)
console.log(myFloat)

let lotsOfDecimal = 1.903248983429843209843098423;
let twoDecimalPlaces = lotsOfDecimal.toFixed(2);

let myNumber = "74";
myNumber = Number(myNumber) + 3;

document.getElementById("demo").innerHTML = (typeof myInt + typeof myFloat + twoDecimalPlaces + "<br>" + myNumber);


const num1 = 10;
const num2 = 50;
9 * num1; //90
num1 ** 3; //1000
num2 / num1; // 5
5 + 10 * 3; // 45
(num2 % 9) * num1; // 50
num2 + num1 / 8 + 2; // 6


document.getElementById("maths").innerHTML = (num2 + num1 / 8 + 2);