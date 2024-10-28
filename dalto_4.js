var colorWell_4;
var defaultColor_4 = "#ffffff";

window.addEventListener("load", startup_4, false);

function startup_4() {
    colorWell_4 = document.querySelector("#colorWell_4");
    colorWell_4.value = defaultColor;
    colorWell_4.addEventListener("input", updateFirst_4, false);
    colorWell_4.addEventListener("change", updateAll_4, false);
    colorWell_4.select();


}

function updateFirst_4(event) {
    var p_4 = document.getElementById('couleur8');

    if (p_4) {
        p_4.style.backgroundColor = event.target.value;
    }
    
}

function updateAll_4(event) {
    var p_4 = document.getElementById('couleur8');
    if (p_4) {
        p_4.style.backgroundColor = event.target.value;
    }
   
}



window.addEventListener("load", startup_5, false);

function startup_5() {
    colorWell_3 = document.querySelector("#colorWell_4");
    colorWell_3.value = defaultColor_3;
    colorWell_3.addEventListener("input", updateColor_4, false);
}

function apply_4() {
    
    var hex = colorWell_4.value;
    document.getElementById("CouleurOrigine").style.backgroundColor = hex;
    // Appeler les fonctions de transformation si nécessaire
    updateColor_3(hex);
    
}



function updateColor_4() {
    var hex = colorWell_4.value;
    
    document.getElementById("couleur8").style.backgroundColor = hex;
    

    

    if (output.innerHTML == 1) {
        let deuteranopeHex = hexToDeuteranope_1(hex);
        document.getElementById("couleur10").style.backgroundColor = deuteranopeHex;

        let tritanopeHex = hexToTritanope_1(hex);
        document.getElementById("couleur11").style.backgroundColor = tritanopeHex;

        let protanopeHex = hexToProtanope_1(hex);
        document.getElementById("couleur9").style.backgroundColor = protanopeHex;
    }

    if (output.innerHTML == 2) {
        let deuteranopeHex = hexToDeuteranope_2(hex);
        document.getElementById("couleur10").style.backgroundColor = deuteranopeHex;

        let tritanopeHex = hexToTritanope_2(hex);
        document.getElementById("couleur11").style.backgroundColor = tritanopeHex;

        let protanopeHex = hexToProtanope_2(hex);
        document.getElementById("couleur9").style.backgroundColor = protanopeHex;
    }

    if (output.innerHTML == 3) {
        let deuteranopeHex = hexToDeuteranope_3(hex);
        document.getElementById("couleur10").style.backgroundColor = deuteranopeHex;

        let tritanopeHex = hexToTritanope_3(hex);
        document.getElementById("couleur11").style.backgroundColor = tritanopeHex;

        let protanopeHex = hexToProtanope_3(hex);
        document.getElementById("couleur9").style.backgroundColor = protanopeHex;

    }

    if (output.innerHTML == 4) {
        let deuteranopeHex = hexToDeuteranope_4(hex);
        document.getElementById("couleur10").style.backgroundColor = deuteranopeHex;

        let tritanopeHex = hexToTritanope_4(hex);
        document.getElementById("couleur11").style.backgroundColor = tritanopeHex;

        let protanopeHex = hexToProtanope_4(hex);
        document.getElementById("couleur9").style.backgroundColor = protanopeHex;
    }

    if (output.innerHTML == 5) {
        let deuteranopeHex = hexToDeuteranope_5(hex);
        document.getElementById("couleur10").style.backgroundColor = deuteranopeHex;

        let tritanopeHex = hexToTritanope_5(hex);
        document.getElementById("couleur11").style.backgroundColor = tritanopeHex;

        let protanopeHex = hexToProtanope_5(hex);
        document.getElementById("couleur9").style.backgroundColor = protanopeHex;
    }

    if (output.innerHTML == 6) {
        let deuteranopeHex = hexToDeuteranope_6(hex);
        document.getElementById("couleur10").style.backgroundColor = deuteranopeHex;

        let tritanopeHex = hexToTritanope_6(hex);
        document.getElementById("couleur11").style.backgroundColor = tritanopeHex;

        let protanopeHex = hexToProtanope_6(hex);
        document.getElementById("couleur9").style.backgroundColor = protanopeHex;

    }

    if (output.innerHTML == 7) {
        let deuteranopeHex = hexToDeuteranope_7(hex);
        document.getElementById("couleur10").style.backgroundColor = deuteranopeHex;

        let tritanopeHex = hexToTritanope_7(hex);
        document.getElementById("couleur11").style.backgroundColor = tritanopeHex;

        let protanopeHex = hexToProtanope_7(hex);
        document.getElementById("couleur9").style.backgroundColor = protanopeHex;
    }

    if (output.innerHTML == 7) {
        let deuteranopeHex = hexToDeuteranope_7(hex);
        document.getElementById("couleur10").style.backgroundColor = deuteranopeHex;

        let tritanopeHex = hexToTritanope_7(hex);
        document.getElementById("couleur11").style.backgroundColor = tritanopeHex;

        let protanopeHex = hexToProtanope_7(hex);
        document.getElementById("couleur9").style.backgroundColor = protanopeHex;
    }

    if (output.innerHTML == 7) {
        let deuteranopeHex = hexToDeuteranope_7(hex);
        document.getElementById("couleur10").style.backgroundColor = deuteranopeHex;

        let tritanopeHex = hexToTritanope_7(hex);
        document.getElementById("couleur11").style.backgroundColor = tritanopeHex;

        let protanopeHex = hexToProtanope_7(hex);
        document.getElementById("couleur9").style.backgroundColor = protanopeHex;

    }

    if (output.innerHTML == 8) {
        let deuteranopeHex = hexToDeuteranope_8(hex);
        document.getElementById("couleur10").style.backgroundColor = deuteranopeHex;

        let tritanopeHex = hexToTritanope_8(hex);
        document.getElementById("couleur11").style.backgroundColor = tritanopeHex;

        let protanopeHex = hexToProtanope_8(hex);
        document.getElementById("couleur9").style.backgroundColor = protanopeHex;
    }

    if (output.innerHTML == 9) {
        let deuteranopeHex = hexToDeuteranope_9(hex);
        document.getElementById("couleur10").style.backgroundColor = deuteranopeHex;

        let tritanopeHex = hexToTritanope_9(hex);
        document.getElementById("couleur11").style.backgroundColor = tritanopeHex;

        let protanopeHex = hexToProtanope_9(hex);
        document.getElementById("couleur9").style.backgroundColor = protanopeHex;
    }

    if (output.innerHTML == 10) {
        let deuteranopeHex = hexToDeuteranope_10(hex);
        document.getElementById("couleur10").style.backgroundColor = deuteranopeHex;

        let tritanopeHex = hexToTritanope_10(hex);
        document.getElementById("couleur11").style.backgroundColor = tritanopeHex;

        let protanopeHex = hexToProtanope_10(hex);
        document.getElementById("couleur9").style.backgroundColor = protanopeHex;

    }
}