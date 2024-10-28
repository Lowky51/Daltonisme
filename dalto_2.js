var colorWell_2;
var defaultColor_2 = "#ffffff";

window.addEventListener("load", startup_2, false);

function startup_2() {
    colorWell_2 = document.querySelector("#colorWell_2");
    colorWell_2.value = defaultColor;
    colorWell_2.addEventListener("input", updateFirst_2, false);
    colorWell_2.addEventListener("change", updateAll_2, false);
    colorWell_2.select();


}

function updateFirst_2(event) {
    var p_2 = document.getElementById('couleur0');

    if (p_2) {
        p_2.style.backgroundColor = event.target.value;
    }
    
}

function updateAll_2(event) {
    var p_2 = document.getElementById('couleur0');
    if (p_2) {
        p_2.style.backgroundColor = event.target.value;
    }
    console.log(colorWell_2.value)
}



const positions = [
    { x: 150, y: -621 },
    { x: 150, y: 67 },
    { x: 150, y: 67 },
    { x: 150, y: 67 },
];

let currentIndex = 0;
let offsetX = 0; 
let currentColor = colorWell_2; 



function createDiv(index) {
    const newDiv = document.createElement('div');
    newDiv.className = 'new-div';
    newDiv.id = 'couleur' + index;

  

    
    const position = positions[index % positions.length];
    newDiv.style.marginLeft = `${position.x + offsetX}px`;
    newDiv.style.marginTop = `${position.y}px`;

    
    newDiv.style.backgroundColor = colorWell_2;

    document.getElementById('container').appendChild(newDiv);
}

function createMultipleDivs() {
    for (let i = 0; i < positions.length; i++) {
        createDiv(currentIndex);
        currentIndex++;
    }
    offsetX += 150; 
}


window.addEventListener("load", startup_3, false);

function startup_3() {
    colorWell_2 = document.querySelector("#colorWell_2");
    colorWell_2.value = defaultColor_2;
    colorWell_2.addEventListener("input", updateColor_2, false);
}

function apply_2() {
    
    var hex = colorWell_2.value;
    document.getElementById("CouleurOrigine").style.backgroundColor = hex;
    // Appeler les fonctions de transformation si nécessaire
    updateColor_2(hex);
    
}



function updateColor_2() {
    var hex = colorWell_2.value;
    
    document.getElementById("couleur0").style.backgroundColor = hex;
    console.log(hex)

    

    if (output.innerHTML == 1) {
        let deuteranopeHex = hexToDeuteranope_1(hex);
        document.getElementById("couleur2").style.backgroundColor = deuteranopeHex;

        let tritanopeHex = hexToTritanope_1(hex);
        document.getElementById("couleur3").style.backgroundColor = tritanopeHex;

        let protanopeHex = hexToProtanope_1(hex);
        document.getElementById("couleur1").style.backgroundColor = protanopeHex;
    }

    if (output.innerHTML == 2) {
        let deuteranopeHex = hexToDeuteranope_2(hex);
        document.getElementById("couleur2").style.backgroundColor = deuteranopeHex;

        let tritanopeHex = hexToTritanope_2(hex);
        document.getElementById("couleur3").style.backgroundColor = tritanopeHex;

        let protanopeHex = hexToProtanope_2(hex);
        document.getElementById("couleur1").style.backgroundColor = protanopeHex;
    }

    if (output.innerHTML == 3) {
        let deuteranopeHex = hexToDeuteranope_3(hex);
        document.getElementById("couleur2").style.backgroundColor = deuteranopeHex;

        let tritanopeHex = hexToTritanope_3(hex);
        document.getElementById("couleur3").style.backgroundColor = tritanopeHex;

        let protanopeHex = hexToProtanope_3(hex);
        document.getElementById("couleur1").style.backgroundColor = protanopeHex;

    }

    if (output.innerHTML == 4) {
        let deuteranopeHex = hexToDeuteranope_4(hex);
        document.getElementById("couleur2").style.backgroundColor = deuteranopeHex;

        let tritanopeHex = hexToTritanope_4(hex);
        document.getElementById("couleur3").style.backgroundColor = tritanopeHex;

        let protanopeHex = hexToProtanope_4(hex);
        document.getElementById("couleur1").style.backgroundColor = protanopeHex;
    }

    if (output.innerHTML == 5) {
        let deuteranopeHex = hexToDeuteranope_5(hex);
        document.getElementById("couleur2").style.backgroundColor = deuteranopeHex;

        let tritanopeHex = hexToTritanope_5(hex);
        document.getElementById("couleur3").style.backgroundColor = tritanopeHex;

        let protanopeHex = hexToProtanope_5(hex);
        document.getElementById("couleur1").style.backgroundColor = protanopeHex;
    }

    if (output.innerHTML == 6) {
        let deuteranopeHex = hexToDeuteranope_6(hex);
        document.getElementById("couleur2").style.backgroundColor = deuteranopeHex;

        let tritanopeHex = hexToTritanope_6(hex);
        document.getElementById("couleur3").style.backgroundColor = tritanopeHex;

        let protanopeHex = hexToProtanope_6(hex);
        document.getElementById("couleur1").style.backgroundColor = protanopeHex;

    }

    if (output.innerHTML == 7) {
        let deuteranopeHex = hexToDeuteranope_7(hex);
        document.getElementById("couleur2").style.backgroundColor = deuteranopeHex;

        let tritanopeHex = hexToTritanope_7(hex);
        document.getElementById("couleur3").style.backgroundColor = tritanopeHex;

        let protanopeHex = hexToProtanope_7(hex);
        document.getElementById("couleur1").style.backgroundColor = protanopeHex;
    }

    if (output.innerHTML == 7) {
        let deuteranopeHex = hexToDeuteranope_7(hex);
        document.getElementById("couleur2").style.backgroundColor = deuteranopeHex;

        let tritanopeHex = hexToTritanope_7(hex);
        document.getElementById("couleur3").style.backgroundColor = tritanopeHex;

        let protanopeHex = hexToProtanope_7(hex);
        document.getElementById("couleur1").style.backgroundColor = protanopeHex;
    }

    if (output.innerHTML == 7) {
        let deuteranopeHex = hexToDeuteranope_7(hex);
        document.getElementById("couleur2").style.backgroundColor = deuteranopeHex;

        let tritanopeHex = hexToTritanope_7(hex);
        document.getElementById("couleur3").style.backgroundColor = tritanopeHex;

        let protanopeHex = hexToProtanope_7(hex);
        document.getElementById("couleur1").style.backgroundColor = protanopeHex;

    }

    if (output.innerHTML == 8) {
        let deuteranopeHex = hexToDeuteranope_8(hex);
        document.getElementById("couleur2").style.backgroundColor = deuteranopeHex;

        let tritanopeHex = hexToTritanope_8(hex);
        document.getElementById("couleur3").style.backgroundColor = tritanopeHex;

        let protanopeHex = hexToProtanope_8(hex);
        document.getElementById("couleur1").style.backgroundColor = protanopeHex;
    }

    if (output.innerHTML == 9) {
        let deuteranopeHex = hexToDeuteranope_9(hex);
        document.getElementById("couleur2").style.backgroundColor = deuteranopeHex;

        let tritanopeHex = hexToTritanope_9(hex);
        document.getElementById("couleur3").style.backgroundColor = tritanopeHex;

        let protanopeHex = hexToProtanope_9(hex);
        document.getElementById("couleur1").style.backgroundColor = protanopeHex;
    }

    if (output.innerHTML == 10) {
        let deuteranopeHex = hexToDeuteranope_10(hex);
        document.getElementById("couleur2").style.backgroundColor = deuteranopeHex;

        let tritanopeHex = hexToTritanope_10(hex);
        document.getElementById("couleur3").style.backgroundColor = tritanopeHex;

        let protanopeHex = hexToProtanope_10(hex);
        document.getElementById("couleur1").style.backgroundColor = protanopeHex;

    }
}