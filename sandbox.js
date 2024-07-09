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


  for (let i = 0; i < 100; i++) {
    ctx.beginPath();
    ctx.fillStyle = "rgb(255 0 0 / 50%)";
    ctx.arc(
      random(canvas.width),
      random(canvas.height),
      random(50),
      0,
      2 * Math.PI,
    );
    ctx.fill();
  }



  let output = document.querySelector('.output');
output.innerHTML = '';

// let i = 10;

// const para = document.createElement('p');
// para.textContent = ;
// output.appendChild(para);

  for (let i = 10; i > 0; i--) {
    if (i = 10 || 0) {
      if (i = 10) {
        para.textContent = "countdown 10";
      } else {
        para.textContent = "Blast off!";
      }
    } else if {
      para.textContent = i;
    }
  }

  while (i >= 0) {
    const para = document.createElement('p');
    if (i === 10) {
      para.textContent = 'countdown ${i}';
    } else if (i === 0) {
      para.textContent = "Blast off!";
    } else {
      para.textContent = i;
    }
    output.appendChild(para);
    i--
  }




  const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

  const admitted = document.querySelector('.admitted');
  const refused = document.querySelector('.refused');
  
  admitted.textContent = 'Admit: ';
  refused.textContent = 'Refuse: ';
  
  for (const person of people) {
    if (person === 'Phil' || person === 'Lola') {
      refused.textContent += `${person}, `;
    } else {
      admitted.textContent += `${person}, `;
    }
  }
  
  refused.textContent = refused.textContent.slice(0,refused.textContent.length-2) + '.';
  admitted.textContent = admitted.textContent.slice(0,admitted.textContent.length-2) + '.';
