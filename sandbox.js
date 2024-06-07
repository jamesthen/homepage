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

  // Sandbox test playground used for solving problems

  function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Did parents allow you?');
    }
  }


  function checkAge(age) {
    return (age > 18)? true : confirm('Did your parents allow you?'); 
   }

  function checkAge(age) {
   return (age > 18) || confirm('Did your parents allow you?');
  }


function min(a,b) {
    if min(a < b) {
        return min(a);
    }
    if min (a > b) {
        return min(b);
    }
}

function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }
  
  ask(
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); }
  );



  let ask = (question, yes, no) => {
    if (confirm(question)) yes(); 
    else no();
  }

  ask(
    "Do you agree?",
    () => alert("You agreed."):
    () => alert("You canceled the execution.");
  );
