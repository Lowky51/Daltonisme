var colorWell;
var colorTextInput;
var defaultColor = getRandomColor(); // Valeur initiale pour la couleur par défaut
let results = { result1: null, result2: null, result3: null };
let squareColors = []; // Tableau pour stocker les couleurs des carrés
let currentIndex = 0;
let offsetX = 0;

document.getElementById('CouleurOrigine').style.backgroundColor = defaultColor

window.addEventListener("load", startup, false);
function startup() {
    slider.oninput()
    colorWell = document.querySelector("#colorWell");
    colorTextInput = document.querySelector("#colorTextInput");

    colorWell.value = defaultColor;
    colorTextInput.value = defaultColor;

    colorWell.addEventListener("input", updateFirst, false);
    colorWell.addEventListener("change", updateAll, false);
    colorTextInput.addEventListener("input", updateFromText, false);

    colorWell.select();

    initBaseDivs();

    // Ajouter un écouteur d'événements au bouton
    document.getElementById("createLinesButton").addEventListener("click", createMultipleLines);
}

function initBaseDivs() {
    updateColor(results.result1, "protanopeCouleur", defaultColor);
    updateColor(results.result2, "deuteranopeCouleur", defaultColor);
    updateColor(results.result3, "tritanopeCouleur", defaultColor);
}

function updateFirst(event) {
    defaultColor = event.target.value;
    colorTextInput.value = defaultColor;
    updateDisplayColor();
    synchronizeLastThreeDivs(); // Synchroniser les trois dernières divs
}

function updateFromText(event) {
    defaultColor = event.target.value;
    colorWell.value = defaultColor;
    updateDisplayColor();
    synchronizeLastThreeDivs(); // Synchroniser les trois dernières divs
}

function updateAll(event) {
    defaultColor = event.target.value;
    updateDisplayColor();
    synchronizeLastThreeDivs(); // Synchroniser les trois dernières divs
}

function updateDisplayColor() {
    var p = document.getElementById('CouleurOrigine');
    if (p) {
        p.style.backgroundColor = defaultColor;
    }
}

var slider = document.getElementById("myRange");
var output = document.getElementById("test");

output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
    const t = parseFloat(this.value);
    // Matrices pour la transformation des couleurs
    const prota0 = [[1.0, 0.0, -0.0], 
                    [0.0, 1.0, 0.0], 
                    [-0.0, -0.0, 1.0]];

    const prota1 = [[0.152286, 1.052583, -0.204868], 
                    [0.114503, 0.786281, 0.099216], 
                    [-0.003882, -0.048116, 1.051998]];

    const deuta0 = [[1.0, 0.0, -0.0], 
                    [0.0, 1.0, 0.0], 
                    [-0.0, -0.0, 1.0]];

    const deuta1 = [[0.367322, 0.860646, -0.227968], 
                    [0.280085, 0.786281, 0.099216], 
                    [-0.011820, 0.042940, 0.968881]];

    const trita0 = [[1.0, 0.0, -0.0], 
                    [0.0, 1.0, 0.0], 
                    [-0.0, -0.0, 1.0]];
    const trita1 = [[1.255528, -0.076749, -0.178779], 
                    [-0.078411, 0.930809, 0.147602], 
                    [0.004733, 0.691367, 0.303900]];

    results.result1 = interpolateMatrices(prota0, prota1, t);
    results.result2 = interpolateMatrices(deuta0, deuta1, t);
    results.result3 = interpolateMatrices(trita0, trita1, t);

    updateColor(results.result1, "protanopeCouleur", defaultColor);
    updateColor(results.result2, "deuteranopeCouleur", defaultColor);
    updateColor(results.result3, "tritanopeCouleur", defaultColor);

    for (let i = 0; i < squareColors.length; i += 4) {
        const baseColor = squareColors[i];
        if (baseColor) {
            for (let j = 1; j <= 3; j++) {
                updateColor(j === 1 ? results.result1 : (j === 2 ? results.result2 : results.result3), "couleur" + (i + j), baseColor);
            }
        }
    }
};

function interpolateMatrices(A, B, t) {
    const C = [];
    for (let i = 0; i < A.length; i++) {
        C[i] = [];
        for (let j = 0; j < A[i].length; j++) {
            C[i][j] = A[i][j] + t * (B[i][j] - A[i][j]);
        }
    }
    return C;
}

function updateColor(result, elementId, baseColor) {
    let r = parseInt(baseColor.slice(1, 3), 16);
    let g = parseInt(baseColor.slice(3, 5), 16);
    let b = parseInt(baseColor.slice(5, 7), 16);

    let newR = result[0][0] * r + result[0][1] * g + result[0][2] * b;
    let newG = result[1][0] * r + result[1][1] * g + result[1][2] * b;
    let newB = -result[2][0] * r + result[2][1] * g + result[2][2] * b;

    newR = Math.min(255, Math.max(0, Math.round(newR)));
    newG = Math.min(255, Math.max(0, Math.round(newG)));
    newB = Math.min(255, Math.max(0, Math.round(newB)));

    let hex = "#" + ((1 << 24) + (newR << 16) + (newG << 8) + newB).toString(16).slice(1).toUpperCase();
    document.getElementById(elementId).style.backgroundColor = hex;
}

// Fonction pour générer une couleur hexadécimale aléatoire
function getRandomColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + randomColor.padStart(6, '0'); // Assure que la couleur a toujours 6 chiffres
}

const positions = [
    { x: 80, y: 20 },
    { x: 210, y: -105 },
    { x: 360, y: -105 },
    { x: 510, y: -105 },
];

function createDiv(index, isFirst) {
    const newDiv = document.createElement('div');
    newDiv.className = 'new-div';
    newDiv.id = 'couleur' + index;

    const newP = document.createElement('p');
    newP.style.marginTop = '-25px';
    newP.className = "new-p";

    const position = positions[index % positions.length];
    newDiv.style.marginLeft = `${position.x + offsetX}px`;
    newDiv.style.marginTop = `${position.y}px`;

    const randomColor = getRandomColor(); // Obtenez une couleur aléatoire
    newDiv.style.backgroundColor = randomColor; // Appliquez la couleur aléatoire
    squareColors[index] = randomColor; // Stockez la couleur dans le tableau

    document.getElementById('container').appendChild(newDiv);
    document.getElementById('couleur' + index).appendChild(newP);

    if (isFirst) {
        const newInputColor = document.createElement('input');
        newInputColor.type = "color";
        newInputColor.style.marginLeft = "-60px";
        newInputColor.id = 'colorWell' + index;

        newInputColor.value = randomColor; // Mettez la couleur aléatoire dans l'input
        newInputColor.addEventListener('input', (event) => {
            newDiv.style.backgroundColor = event.target.value; // Change la couleur de la div
            squareColors[index] = event.target.value; // Mettez à jour la couleur dans le tableau
            syncLineColors(event.target.value, index); // Synchronisez les couleurs de la ligne
        });

        document.getElementById('couleur' + index).appendChild(newInputColor);

        const newInputText = document.createElement('input');
        newInputText.type = "text";
        newInputText.id = 'colorTextInput' + index;
        newInputText.style.height = "20px";
        newInputText.style.width = "55px";
        newInputText.style.marginLeft = "-60px";
        newInputText.style.marginTop = "30px";
        newInputText.value = randomColor; // Mettez la couleur aléatoire dans l'input texte
        newInputText.addEventListener('input', (event) => {
            newInputColor.value = event.target.value; // Synchronisez l'input de couleur avec l'input de texte
            newDiv.style.backgroundColor = event.target.value; // Change la couleur de la div
            squareColors[index] = event.target.value; // Mettez à jour la couleur dans le tableau
            syncLineColors(event.target.value, index); // Synchronisez les couleurs de la ligne
        });

        document.getElementById('couleur' + index).appendChild(newInputText);

        const newButton = document.createElement('button');
        newButton.textContent = "-";
        newButton.className = 'buttonsuppr';
        newButton.onclick = () => supprdiv(index); // Passer l'index à supprdiv
        document.getElementById('couleur' + index).appendChild(newButton);
    }
}

function syncLineColors(selectedColor, index) {
    const lineStartIndex = Math.floor(index / 4) * 4; // Commence à partir de la première div de la ligne
    for (let i = lineStartIndex; i < lineStartIndex + 4; i++) {
        if (i < squareColors.length) {
            squareColors[i] = selectedColor; // Met à jour la couleur dans le tableau
            updateColor(results.result1, "couleur" + i, selectedColor); // Met à jour les divs existantes
        }
    }
}

function synchronizeLastThreeDivs() {
    const startIndex = Math.floor(currentIndex / 4) * 4; // Commencer à partir de la première div de la ligne
    for (let i = 1; i <= 3; i++) {
        const index = startIndex + i;
        if (index < squareColors.length) {
            const color = squareColors[startIndex]; // Obtenez la couleur de la première div de la ligne
            squareColors[index] = color; // Synchroniser la couleur
            updateColor(results.result1, "couleur" + index, color); // Met à jour les divs existantes
        }
    }
}

function createMultipleLines() {
    for (let i = 0; i < 5; i++) {
        createMultipleDivs();
    }
}

function createMultipleDivs() {
    for (let i = 0; i < positions.length; i++) {
        createDiv(currentIndex, i === 0); // Passer true uniquement pour la première div
        currentIndex++;
    }
    offsetX += 0; // Si vous voulez espacer les lignes, vous pouvez ajuster cette valeur
}

function supprdiv(index) {
    const divToRemove = document.getElementById('couleur' + index);
    if (divToRemove) {
        divToRemove.remove();
        squareColors[index] = '';
    }
}
