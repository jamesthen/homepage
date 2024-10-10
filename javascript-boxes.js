const addBoxButton = document.querySelector(`[data-add-box]`);
const grid = document.querySelector(`.grid`);
const boxes = document.querySelectorAll(`.box`);

addBoxButton.addEventListener("click", ()=> {
    const box = document.createElement(`div`);
    box.classList.add(`box`);
    grid.append(box);
});

function addGlobalEventListener(type, selector, callback, parent = document) {
    parent.addEventListener(type, e => {
        if (e.target.matches(selector)) {
            callback(e);
        };
    });
};
 
addGlobalEventListener("click", ".box", e => {
    e.target.classList.toggle("clicked");
}, grid);

// boxes.forEach(box => {
//     box.addEventListener("click", e => {
//         box.classList.toggle("clicked")
//     });
// });
//create the div
//assign the class
//append to grid