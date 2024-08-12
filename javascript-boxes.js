const addBoxButton = document.querySelector(`[data-add-box]`);
const grid = document.querySelector(`.grid`);
const boxes = document.querySelectorAll(`.box`);

addBoxButton.addEventListener("click", ()=> {
    const box = document.createElement(`div`);
    box.classList.add(`box`);
    grid.append(box);
});

document.addEventListener("click", e => {
    if (e.target.matches(`.box`)) {
        e.target.classList.toggle("clicked");
    };
});

// boxes.forEach(box => {
//     box.addEventListener("click", e => {
//         box.classList.toggle("clicked")
//     });
// });
//create the div
//assign the class
//append to grid