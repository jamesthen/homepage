//For JS Notes + playground

// arrow notation
const newString = originalString.replace(/apple/g, (match, offset) => {
    return offset + ":fruit";
});

console.log(newString);

// function notation
const newString2 = originalString.replace(/apple/g, function(match, offset) {
    return offset + ":fruit";
});

console.log(newString2);



//Short form
function random(number) {
    return Math.floor(Math.random() * number);
  }
//long form
function random(number) {
    const result = Math.floor(Math.random() * number);
    return result;
  }