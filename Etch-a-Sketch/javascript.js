document.addEventListener("DOMContentLoaded", function() { 
    
    let container = document.querySelector("#container");
    container.style.cssText = "display: flex; flex-direction: column; margin: 50px 100px;";

    let container2 = document.createElement("div");
    container2.style.cssText = "display: flex; flex-wrap: wrap;";

    let button = document.createElement("button");
    button.textContent = "Set Grid Size";
    button.addEventListener("click", getGridSize);
    button.style.cssText = "flex: 1; margin: 20px auto;"

    container.appendChild(button);

    let gridSize = 16;
    
    function getGridSize() {
        gridSize = parseInt(prompt("Number of squares per side for the new grid?"))
        while (gridSize > 64 || isNaN(gridSize)) {
            gridSize = parseInt(prompt("Number of squares per side for the new grid? 0 - 64 only"))
        }
        container2.innerHTML = "";
        createGrid(gridSize);
    }


    function createGrid(gridSize) {
        for (let i = 0; i < gridSize * gridSize; i++) {
            const flexItem = document.createElement('div');
            flexItem.style.cssText = `flex: 1 1 calc(100% / ${gridSize+1}); height: calc(600px / ${gridSize}); background-color: white; border: 1px solid #ccc;`;
            flexItem.addEventListener('mouseover', () => {
                flexItem.style.backgroundColor = 'blue';
            });
            /* flexItem.addEventListener('mouseout', () => {
                
                flexItem.style.backgroundColor = 'white';
            }); */
            container2.appendChild(flexItem);
        }
    }

    createGrid(gridSize);

    container.appendChild(container2);
});