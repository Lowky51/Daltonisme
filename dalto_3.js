var colorWell_3;
var defaultColor_3 = "#ffffff";

window.addEventListener("load", startup_3, false);

function startup_3() {
    colorWell_3 = document.querySelector("#colorWell_3");
    colorWell_3.value = defaultColor;
    colorWell_3.addEventListener("input", updateFirst_3, false);
    colorWell_3.addEventListener("change", updateAll_3, false);
    colorWell_3.select();


}

function updateFirst_3(event) {
    var p_3 = document.getElementById('couleur4');

    if (p_3) {
        p_3.style.backgroundColor = event.target.value;
    }
    
}

function updateAll_3(event) {
    var p_3 = document.getElementById('couleur4');
    if (p_3) {
        p_3.style.backgroundColor = event.target.value;
    }
   
}



window.addEventListener("load", startup_4, false);

function startup_4() {
    colorWell_2 = document.querySelector("#colorWell_3");
    colorWell_2.value = defaultColor_3;
    colorWell_2.addEventListener("input", updateColor_3, false);
}

function apply_3() {
    
    var hex = colorWell_3.value;
    document.getElementById("CouleurOrigine").style.backgroundColor = hex;
    // Appeler les fonctions de transformation si nécessaire
    updateColor_3(hex);
    
}



function updateColor_3() {
    var hex = colorWell_3.value;
    
    document.getElementById("couleur4").style.backgroundColor = hex;
    

    

    if (output.innerHTML == 1) {
        let deuteranopeHex = hexToDeuteranope_1(hex);
        document.getElementById("couleur6").style.backgroundColor = deuteranopeHex;

        let tritanopeHex = hexToTritanope_1(hex);
        document.getElementById("couleur7").style.backgroundColor = tritanopeHex;

        let protanopeHex = hexToProtanope_1(hex);
        document.getElementById("couleur5").style.backgroundColor = protanopeHex;
    }

    if (output.innerHTML == 2) {
        let deuteranopeHex = hexToDeuteranope_2(hex);
        document.getElementById("couleur6").style.backgroundColor = deuteranopeHex;

        let tritanopeHex = hexToTritanope_2(hex);
        document.getElementById("couleur7").style.backgroundColor = tritanopeHex;

        let protanopeHex = hexToProtanope_2(hex);
        document.getElementById("couleur5").style.backgroundColor = protanopeHex;
    }

    if (output.innerHTML == 3) {
        let deuteranopeHex = hexToDeuteranope_3(hex);
        document.getElementById("couleur6").style.backgroundColor = deuteranopeHex;

        let tritanopeHex = hexToTritanope_3(hex);
        document.getElementById("couleur7").style.backgroundColor = tritanopeHex;

        let protanopeHex = hexToProtanope_3(hex);
        document.getElementById("couleur5").style.backgroundColor = protanopeHex;

    }

    if (output.innerHTML == 4) {
        let deuteranopeHex = hexToDeuteranope_4(hex);
        document.getElementById("couleur6").style.backgroundColor = deuteranopeHex;

        let tritanopeHex = hexToTritanope_4(hex);
        document.getElementById("couleur7").style.backgroundColor = tritanopeHex;

        let protanopeHex = hexToProtanope_4(hex);
        document.getElementById("couleur5").style.backgroundColor = protanopeHex;
    }

    if (output.innerHTML == 5) {
        let deuteranopeHex = hexToDeuteranope_5(hex);
        document.getElementById("couleur6").style.backgroundColor = deuteranopeHex;

        let tritanopeHex = hexToTritanope_5(hex);
        document.getElementById("couleur7").style.backgroundColor = tritanopeHex;

        let protanopeHex = hexToProtanope_5(hex);
        document.getElementById("couleur5").style.backgroundColor = protanopeHex;
    }

    if (output.innerHTML == 6) {
        let deuteranopeHex = hexToDeuteranope_6(hex);
        document.getElementById("couleur6").style.backgroundColor = deuteranopeHex;

        let tritanopeHex = hexToTritanope_6(hex);
        document.getElementById("couleur7").style.backgroundColor = tritanopeHex;

        let protanopeHex = hexToProtanope_6(hex);
        document.getElementById("couleur5").style.backgroundColor = protanopeHex;

    }

    if (output.innerHTML == 7) {
        let deuteranopeHex = hexToDeuteranope_7(hex);
        document.getElementById("couleur6").style.backgroundColor = deuteranopeHex;

        let tritanopeHex = hexToTritanope_7(hex);
        document.getElementById("couleur7").style.backgroundColor = tritanopeHex;

        let protanopeHex = hexToProtanope_7(hex);
        document.getElementById("couleur5").style.backgroundColor = protanopeHex;
    }

    if (output.innerHTML == 7) {
        let deuteranopeHex = hexToDeuteranope_7(hex);
        document.getElementById("couleur6").style.backgroundColor = deuteranopeHex;

        let tritanopeHex = hexToTritanope_7(hex);
        document.getElementById("couleur7").style.backgroundColor = tritanopeHex;

        let protanopeHex = hexToProtanope_7(hex);
        document.getElementById("couleur5").style.backgroundColor = protanopeHex;
    }

    if (output.innerHTML == 7) {
        let deuteranopeHex = hexToDeuteranope_7(hex);
        document.getElementById("couleur6").style.backgroundColor = deuteranopeHex;

        let tritanopeHex = hexToTritanope_7(hex);
        document.getElementById("couleur7").style.backgroundColor = tritanopeHex;

        let protanopeHex = hexToProtanope_7(hex);
        document.getElementById("couleur5").style.backgroundColor = protanopeHex;

    }

    if (output.innerHTML == 8) {
        let deuteranopeHex = hexToDeuteranope_8(hex);
        document.getElementById("couleur6").style.backgroundColor = deuteranopeHex;

        let tritanopeHex = hexToTritanope_8(hex);
        document.getElementById("couleur7").style.backgroundColor = tritanopeHex;

        let protanopeHex = hexToProtanope_8(hex);
        document.getElementById("couleur5").style.backgroundColor = protanopeHex;
    }

    if (output.innerHTML == 9) {
        let deuteranopeHex = hexToDeuteranope_9(hex);
        document.getElementById("couleur6").style.backgroundColor = deuteranopeHex;

        let tritanopeHex = hexToTritanope_9(hex);
        document.getElementById("couleur7").style.backgroundColor = tritanopeHex;

        let protanopeHex = hexToProtanope_9(hex);
        document.getElementById("couleur5").style.backgroundColor = protanopeHex;
    }

    if (output.innerHTML == 10) {
        let deuteranopeHex = hexToDeuteranope_10(hex);
        document.getElementById("couleur6").style.backgroundColor = deuteranopeHex;

        let tritanopeHex = hexToTritanope_10(hex);
        document.getElementById("couleur7").style.backgroundColor = tritanopeHex;

        let protanopeHex = hexToProtanope_10(hex);
        document.getElementById("couleur5").style.backgroundColor = protanopeHex;

    }
}