const positions = [
    { x: 80, y: 20 },
    { x: 210, y: -105 },
    { x: 360, y: -105 },
    { x: 510, y: -105 },
];

let currentIndex = 0;
let offsetX = 0; 
let currentColor = colorWell; 

function createDiv(index, isFirst) {
    const newDiv = document.createElement('div');
    
    newDiv.className = 'new-div';
    newDiv.id = 'couleur' + index;

    const newP = document.createElement('p');
    newP.style.marginTop = '-25px';
    newP.className = "new-p";
    newP.textContent = "";

    const position = positions[index % positions.length];
    newDiv.style.marginLeft = `${position.x + offsetX}px`;
    newDiv.style.marginTop = `${position.y}px`;

    newDiv.style.backgroundColor = currentColor;

    document.getElementById('container').appendChild(newDiv);
    document.getElementById('couleur' + index).appendChild(newP);

    // Ajoutez le champ de couleur uniquement pour la première div
    if (isFirst) {
        const newInputColor = document.createElement('input');
        newInputColor.type = "color";
        newInputColor.style.marginLeft = "-60px"
        newInputColor.id = 'colorWell'
        document.getElementById('couleur' + index).appendChild(newInputColor);

        const newInputText = document.createElement('input');
        newInputText.type = "text"
        newInputText.style.height = "20px"
        newInputText.style.width = "55px"
        newInputText.style.marginLeft = "-60px"
        newInputText.style.marginTop = "30px"
        document.getElementById('couleur' + index).appendChild(newInputText);

    }
}

function createMultipleDivs() {
    for (let i = 0; i < positions.length; i++) {
        createDiv(currentIndex, i === 0); // Passer true uniquement pour la première div
        currentIndex++;
    }
    offsetX += 0; 
}