const reset = document.querySelector("#reset");
const generate = document.getElementById("generate");
const container = document.querySelector("#container");
const input = document.querySelector("#input");

let cols = 16;
let rows = 16
let totalBlocks = cols*rows

generate.addEventListener('click', createSketchPad);
reset.addEventListener("click", resetDefualt)

function createSketchPad() {
    let cols = input.value;
    let rows = input.value;
    totalBlocks = cols*rows;
    container.innerHTML = "";
    container.style.cssText = `display: grid; grid-template-columns: repeat(${cols}, auto); grid-template-rows: repeat(${rows}, auto)`;
    if (cols > 64 || cols < 16 || (isNaN(cols))) {
        alert("please enter a number between 16 and 64")
    } else {
        for (let i = 0; i < totalBlocks; i++) {
            let newDiv = document.createElement("div");
            newDiv.addEventListener("mouseover", changeColor)
            newDiv.classList.add("box")
            container.appendChild(newDiv);
            console.log("div")
        }
    }
    
    
}

function changeColor(e) {
    let input = color.value;
    if (input !== "#000000") {
        e.target.style.backgroundColor = `${input}`;
    } else {
        e.toElement.classList.add("hover");
    }
    
}


function resetDefualt() {

    let cols = 16;
    let rows = 16
    let totalBlocks = cols*rows
    
    container.innerHTML = "";
    container.style.cssText = `display: grid; grid-template-columns: repeat(${cols}, auto); grid-template-rows: repeat(${rows}, auto)`;
    for (let i = 0; i < totalBlocks; i++) {
        let newDiv = document.createElement("div");
        newDiv.addEventListener("mouseover", changeColor)
        newDiv.classList.add("box")
        container.appendChild(newDiv);
        console.log("div")
    }
}

resetDefualt()
