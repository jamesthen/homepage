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

let num1 = 4;
num1++;
num1;
console.log(num1);

const MAX = 57;
let actual = MAX - 13;
let percentage = actual / MAX;
document.getElementById("percent").innerHTML = (percentage);


let button = document.querySelector("button");

button.addEventListener("click", updateName);

function updateName() {
    let name = prompt("Enter a new name");
    button.textContent = `Player 1: ${name}`;
    console.log(`hello there ${name}`);
}

function favoriteAnimal(animal) {
    return animal + " is my favorite animal";
}

console.log(favoriteAnimal('goat'));


let randomNumber = Math.random();
randomNumber = randomNumber * 100;
console.log(randomNumber);


myFunction();


function myFunction(){
    console.log("My function is running");
};

let myString = "I am a string";

let updatedString = myString.replace("string", "G.O.A.T.");

console.log(updatedString);

function square(number) {
    return number * number;
}

console.log(square(2));

const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");

textBox.addEventListener("keydown", (event) => {
  output.textContent = `You pressed "${event.key}".`;
});



const originalString = "apple orange apple banana apple";


let add7 = (n) => n + 7;
console.log(add7(2));

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(capitalize('capitalized'));

function lastLetter(str) {
    return str.slice(-1);
}

console.log(lastLetter('hellot'));

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
  console.log(cat);
}