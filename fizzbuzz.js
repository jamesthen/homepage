/*
When a user inputs a number
Loop from 1 to the entered number
If the current number is divisible by 3 then print "Fizz"
If the current number is divisible by 5 then print "Buzz"
If the current number is divisible by 3 and 5 then print "FizzBuzz"
Otherwise print the current number
*/

let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

for (let fb = 1; fb <= answer; fb++) {
    if (fb % 5 === 0 && fb % 3 === 0) {
        console.log("FizzBuzz");
    } else if (fb % 5 === 0) {
            console.log("Buzz");
    }
        else if (fb % 3 === 0) {
            console.log("Fizz");
        }
    else {
        console.log(fb);
}
}