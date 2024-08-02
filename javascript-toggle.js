const toggle = document.querySelector("#btn");
const container = document.querySelectorAll("#container")[1];

toggle.addEventListener("mouseover", () => {
    container.classList.toggle("hide");
});