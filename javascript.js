const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const para = document.createElement("p");
container.appendChild(para);
para.textContent = "ME TOO!";
para.classList.add("red");

para.setAttribute("class", "highlight");

const headerThree = document.createElement("h3");
container.appendChild(headerThree);
headerThree.textContent = "I'm a blue h3!";
headerThree.classList.add("blue");

const divTwo = document.createElement("div");
container.appendChild(divTwo);
divTwo.classList.add("blacknpink");

const divTwoH1 = document.createElement("h1");
divTwo.appendChild(divTwoH1);
divTwoH1.textContent = "I'm in a div";

const divTwoP = document.createElement("p");
divTwo.appendChild(divTwoP);
divTwoP.textContent = "ME TOO!";

const button = document.querySelector("#btn");
// button.onclick = () => {
//     headerThree.classList.toggle("blue");
//     headerThree.classList.toggle("red");
// }

button.addEventListener("click", function (e) {
    e.target.style.background = "blue";
  });

  const convertToFahrenheit = function(tempC) {
    let fTemp = (tempC * 9/5) + 32;
    let roundedTempF = Math.round(fTemp * 10)/10;
    return roundedTempF;
  };

  console.log(convertToFahrenheit(100));