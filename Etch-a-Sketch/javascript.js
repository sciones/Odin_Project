document.addEventListener("DOMContentLoaded", function() { 
    
    let container = document.querySelector("#container");

    for (let i = 0; i < 16 * 16; i++) {
        const flexItem = document.createElement('div');
        flexItem.className = 'flex-item';
        container.appendChild(flexItem);
    }
});