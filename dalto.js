var colorWell;
var colorTextInput;
var defaultColor = "#58D4D1";
var selectedColor = defaultColor;

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

    const prota0 =  [[1.0, 0.0, -0.0], 
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

    const result1 = interpolateMatrices(prota0, prota1, t);
    updateColor(result1, "protanopeCouleur");

    const result2 = interpolateMatrices(deuta0, deuta1, t);
    updateColor(result2, "deuteranopeCouleur");

    const result3 = interpolateMatrices(trita0, trita1, t);
    updateColor(result3, "tritanopeCouleur");
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


