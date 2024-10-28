var colorWell_5;
var defaultColor_5 = "#ffff00";

window.addEventListener("load", startup_5, false);

function startup_5() {
    colorWell_5 = document.querySelector("#colorWell_5");
    colorWell_5.value = defaultColor;
    colorWell_5.addEventListener("input", updateFirst_5, false);
    colorWell_5.addEventListener("change", updateAll_5, false);
    colorWell_5.select();


}

function updateFirst_5(event) {
    var p_5 = document.getElementById('couleur12');

    if (p_5) {
        p_5.style.backgroundColor = event.target.value;
    }
    
}

function updateAll_4(event) {
    var p_5 = document.getElementById('couleur12');
    if (p_5) {
        p_5.style.backgroundColor = event.target.value;
    }
   
}



window.addEventListener("load", startup_6, false);

function startup_6() {
    colorWell_4 = document.querySelector("#colorWell_5");
    colorWell_4.value = defaultColor_4;
    colorWell_4.addEventListener("input", updateColor_5, false);
}

function apply_5() {
    
    var hex = colorWell_5.value;
    document.getElementById("CouleurOrigine").style.backgroundColor = hex;
    // Appeler les fonctions de transformation si nécessaire
    updateColor_4(hex);
    
    
}



function updateColor_5() {
    var hex = colorWell_5.value;
    console.log(colorWell_5.value)
    
    document.getElementById("couleur12").style.backgroundColor = hex;
    

    

    if (output.innerHTML == 1) {
        let deuteranopeHex = hexToDeuteranope_1(hex);
        document.getElementById("couleur14").style.backgroundColor = deuteranopeHex;

        let tritanopeHex = hexToTritanope_1(hex);
        document.getElementById("couleur15").style.backgroundColor = tritanopeHex;

        let protanopeHex = hexToProtanope_1(hex);
        document.getElementById("couleur13").style.backgroundColor = protanopeHex;
    }

    if (output.innerHTML == 2) {
        let deuteranopeHex = hexToDeuteranope_2(hex);
        document.getElementById("couleur14").style.backgroundColor = deuteranopeHex;

        let tritanopeHex = hexToTritanope_2(hex);
        document.getElementById("couleur15").style.backgroundColor = tritanopeHex;

        let protanopeHex = hexToProtanope_2(hex);
        document.getElementById("couleur13").style.backgroundColor = protanopeHex;
    }

    if (output.innerHTML == 3) {
        let deuteranopeHex = hexToDeuteranope_3(hex);
        document.getElementById("couleur14").style.backgroundColor = deuteranopeHex;

        let tritanopeHex = hexToTritanope_3(hex);
        document.getElementById("couleur15").style.backgroundColor = tritanopeHex;

        let protanopeHex = hexToProtanope_3(hex);
        document.getElementById("couleur13").style.backgroundColor = protanopeHex;

    }

    if (output.innerHTML == 4) {
        let deuteranopeHex = hexToDeuteranope_4(hex);
        document.getElementById("couleur14").style.backgroundColor = deuteranopeHex;

        let tritanopeHex = hexToTritanope_4(hex);
        document.getElementById("couleur15").style.backgroundColor = tritanopeHex;

        let protanopeHex = hexToProtanope_4(hex);
        document.getElementById("couleur13").style.backgroundColor = protanopeHex;
    }

    if (output.innerHTML == 5) {
        let deuteranopeHex = hexToDeuteranope_5(hex);
        document.getElementById("couleur14").style.backgroundColor = deuteranopeHex;

        let tritanopeHex = hexToTritanope_5(hex);
        document.getElementById("couleur15").style.backgroundColor = tritanopeHex;

        let protanopeHex = hexToProtanope_5(hex);
        document.getElementById("couleur13").style.backgroundColor = protanopeHex;
    }

    if (output.innerHTML == 6) {
        let deuteranopeHex = hexToDeuteranope_6(hex);
        document.getElementById("couleur14").style.backgroundColor = deuteranopeHex;

        let tritanopeHex = hexToTritanope_6(hex);
        document.getElementById("couleur15").style.backgroundColor = tritanopeHex;

        let protanopeHex = hexToProtanope_6(hex);
        document.getElementById("couleur13").style.backgroundColor = protanopeHex;

    }

    if (output.innerHTML == 7) {
        let deuteranopeHex = hexToDeuteranope_7(hex);
        document.getElementById("couleur14").style.backgroundColor = deuteranopeHex;

        let tritanopeHex = hexToTritanope_7(hex);
        document.getElementById("couleur15").style.backgroundColor = tritanopeHex;

        let protanopeHex = hexToProtanope_7(hex);
        document.getElementById("couleur13").style.backgroundColor = protanopeHex;
    }

    if (output.innerHTML == 7) {
        let deuteranopeHex = hexToDeuteranope_7(hex);
        document.getElementById("couleur14").style.backgroundColor = deuteranopeHex;

        let tritanopeHex = hexToTritanope_7(hex);
        document.getElementById("couleur15").style.backgroundColor = tritanopeHex;

        let protanopeHex = hexToProtanope_7(hex);
        document.getElementById("couleur13").style.backgroundColor = protanopeHex;
    }

    if (output.innerHTML == 7) {
        let deuteranopeHex = hexToDeuteranope_7(hex);
        document.getElementById("couleur14").style.backgroundColor = deuteranopeHex;

        let tritanopeHex = hexToTritanope_7(hex);
        document.getElementById("couleur15").style.backgroundColor = tritanopeHex;

        let protanopeHex = hexToProtanope_7(hex);
        document.getElementById("couleur13").style.backgroundColor = protanopeHex;

    }

    if (output.innerHTML == 8) {
        let deuteranopeHex = hexToDeuteranope_8(hex);
        document.getElementById("couleur14").style.backgroundColor = deuteranopeHex;

        let tritanopeHex = hexToTritanope_8(hex);
        document.getElementById("couleur15").style.backgroundColor = tritanopeHex;

        let protanopeHex = hexToProtanope_8(hex);
        document.getElementById("couleur13").style.backgroundColor = protanopeHex;
    }

    if (output.innerHTML == 9) {
        let deuteranopeHex = hexToDeuteranope_9(hex);
        document.getElementById("couleur14").style.backgroundColor = deuteranopeHex;

        let tritanopeHex = hexToTritanope_9(hex);
        document.getElementById("couleur15").style.backgroundColor = tritanopeHex;

        let protanopeHex = hexToProtanope_9(hex);
        document.getElementById("couleur13").style.backgroundColor = protanopeHex;
    }

    if (output.innerHTML == 10) {
        let deuteranopeHex = hexToDeuteranope_10(hex);
        document.getElementById("couleur14").style.backgroundColor = deuteranopeHex;

        let tritanopeHex = hexToTritanope_10(hex);
        document.getElementById("couleur15").style.backgroundColor = tritanopeHex;

        let protanopeHex = hexToProtanope_10(hex);
        document.getElementById("couleur13").style.backgroundColor = protanopeHex;

    }
}