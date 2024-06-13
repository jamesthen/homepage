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

const car = { make: "Toyota", model: "Camry", year: 2021 };
for (let key in car) {
    console.log(`${key}: ${car[key]}`);
}

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);
    }
}

for (let i = 0; i <= 20; i++) {
    console.log(i);
}


let androidVersions = ["Cupcake", "Donut", "Eclair", "Froyo", "Gingerbread", "Honeycomb", "Icecream Sandwich", "Jellybean", "Kitkit", "Lollipop", "Marshmellow", "Nougat"];

for (const androidVersion of androidVersions) {
    console.log(androidVersion);
}

function fVersion(androidVersion) {
    return androidVersion.startsWith("E");
}

myFavoriteVersion = "My favorite Android Versions are:";

let filteredVersion = androidVersions.filter(fVersion);

console.log(filteredVersion);

let z = 0

while (z <= 3) {
    console.log(z);
    z++
}

console.log("BREAK POINT --------")

let j = 10

do {
    j--
    console.log(j)
} while (j>0);


console.log("BREAK POINT --------")

for (let f = 0; f <= 3; f++) {
    console.log(f);
}

let sum = 0;

while (true) {

  let value = +prompt("Enter a number", '');

  if (!value) break; // (*)

  sum += value;

}
alert( 'Sum: ' + sum );


console.log("BREAK POINT --------")

let items = [1, 2, 3, 'stop', 5, 6];

while (true) {
    if (items.length === 0) {
        // No more items to process
        break;
    }

    let item = items.shift();

    if (item === 'stop') {
        console.log("Stop item found, stopping processing...");
        break;
    }

    if (typeof item !== 'number') {
        console.log("Invalid item, stopping processing...");
        break;
    }

    // Process the item
    console.log(`Processing item: ${item}`);
}


for (let i = 0; i < 10; i++) {

    // if true, skip the remaining part of the body
    if (i % 2 == 0) continue;
  
    alert(i); // 1, then 3, 5, 7, 9
  }