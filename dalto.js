var colorWell;
var colorTextInput;
var defaultColor = "#58D4D1";
var selectedColor = defaultColor;
let results = { result1: null, result2: null, result3: null };
let squareColors = []; // Tableau pour stocker les couleurs des carrés

window.addEventListener("load", startup, false);
function startup() {
    colorWell = document.querySelector("#colorWell");
    colorTextInput = document.querySelector("#colorTextInput");

    colorWell.value = defaultColor;
    colorTextInput.value = defaultColor;

    colorWell.addEventListener("input", updateFirst, false);
    colorWell.addEventListener("change", updateAll, false);
    colorTextInput.addEventListener("input", updateFromText, false);

    colorWell.select();
}

function updateFirst(event) {
    selectedColor = event.target.value;
    colorTextInput.value = selectedColor;
    updateDisplayColor();
}

function updateFromText(event) {
    selectedColor = event.target.value;
    colorWell.value = selectedColor;
    updateDisplayColor();
}

function updateAll(event) {
    selectedColor = event.target.value;
    updateDisplayColor();
}

function updateDisplayColor() {
    var p = document.getElementById('CouleurOrigine');
    if (p) {
        p.style.backgroundColor = selectedColor;
    }
}

var slider = document.getElementById("myRange");
var output = document.getElementById("test");

output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;

    const t = parseFloat(this.value);

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

    result1 = interpolateMatrices(prota0, prota1, t);
    updateColor(result1, "protanopeCouleur");

    result2 = interpolateMatrices(deuta0, deuta1, t);
    updateColor(result2, "deuteranopeCouleur");

    result3 = interpolateMatrices(trita0, trita1, t);
    updateColor(result3, "tritanopeCouleur");

    // Met à jour les trois dernières divs de chaque rangée
    for (let i = 0; i < squareColors.length; i += 4) {
        for (let j = 1; j <= 3; j++) { // Met à jour les 3 dernières divs
            if (i + j < squareColors.length) {
                const colorResult = j === 1 ? result1 : (j === 2 ? result2 : result3);
                updateColor(colorResult, "couleur" + (i + j));
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

function updateColor(result, elementId) {
    let r = parseInt(selectedColor.slice(1, 3), 16);
    let g = parseInt(selectedColor.slice(3, 5), 16);
    let b = parseInt(selectedColor.slice(5, 7), 16);

    let newR = result[0][0] * r + result[0][1] * g + result[0][2] * b;
    let newG = result[1][0] * r + result[1][1] * g + result[1][2] * b;
    let newB = -result[2][0] * r + result[2][1] * g + result[2][2] * b;

    newR = Math.min(255, Math.max(0, Math.round(newR)));
    newG = Math.min(255, Math.max(0, Math.round(newG)));
    newB = Math.min(255, Math.max(0, Math.round(newB)));

    let hex = "#" + ((1 << 24) + (newR << 16) + (newG << 8) + newB).toString(16).slice(1).toUpperCase();
    document.getElementById(elementId).style.backgroundColor = hex;

}




const positions = [
    { x: 80, y: 20 },
    { x: 210, y: -105 },
    { x: 360, y: -105 },
    { x: 510, y: -105 },
];

let currentIndex = 0;
let offsetX = 0;
let currentColor = '';
let  = []; // Assurez-vous que ce tableau est défini

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

    newDiv.style.backgroundColor = currentColor; // Utilisez currentColor ici
    squareColors[index] = currentColor; // Stockez la couleur dans le tableau

    document.getElementById('container').appendChild(newDiv);
    document.getElementById('couleur' + index).appendChild(newP);

    if (isFirst) {
        const newInputColor = document.createElement('input');
        newInputColor.type = "color";
        newInputColor.style.marginLeft = "-60px";
        newInputColor.id = 'colorWell' + index;

        newInputColor.addEventListener('input', (event) => {
            newDiv.style.backgroundColor = event.target.value; // Change la couleur de la div
            squareColors[index] = event.target.value; // Mettez à jour la couleur dans le tableau
        });

        document.getElementById('couleur' + index).appendChild(newInputColor);

        const newInputText = document.createElement('input');
        newInputText.type = "text";
        newInputText.id = 'colorTextInput';
        newInputText.style.height = "20px";
        newInputText.style.width = "55px";
        newInputText.style.marginLeft = "-60px";
        newInputText.style.marginTop = "30px";
        document.getElementById('couleur' + index).appendChild(newInputText);

        const newButton = document.createElement('button');
        newButton.textContent = "-";
        newButton.className = 'buttonsuppr';
        newButton.onclick = () => supprdiv(index); // Passer l'index à supprdiv
        document.getElementById('couleur' + index).appendChild(newButton);
    }

    function supprdiv(index) {
        // Supprime la div correspondante
        const divToRemove = document.getElementById('couleur' + index);
        divToRemove.className = ''
        if (divToRemove) {
            divToRemove.remove();
            squareColors[index] = ''; // Réinitialiser la couleur si nécessaire
        }
    }
}

function createMultipleDivs() {
    for (let i = 0; i < positions.length; i++) {
        createDiv(currentIndex, i === 0); // Passer true uniquement pour la première div
        currentIndex++;
    }
    offsetX += 0;
}