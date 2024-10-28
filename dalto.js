var slider = document.getElementById("myRange");
var output = document.getElementById("test");


output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
    output.innerHTML = this.value;
    apply()
    apply_2()
    apply_3()
    apply_4()
    apply_5()
    updateColor()
    updateColor_2()
    updateColor_3()
    updateColor_4()
    updateColor_5()



}

var colorWell;
var defaultColor = "#ffffff";

window.addEventListener("load", startup, false);

function startup() {
    colorWell = document.querySelector("#colorWell");
    colorWell.value = defaultColor;
    colorWell.addEventListener("input", updateFirst, false);
    colorWell.addEventListener("change", updateAll, false);
    colorWell.select();


}

function updateFirst(event) {
    var p = document.getElementById('CouleurOrigine');

    if (p) {
        p.style.backgroundColor = event.target.value;
    }
    console.log(colorWell.value)
}

function updateAll(event) {
    var p = document.getElementById('CouleurOrigine');
    if (p) {
        p.style.backgroundColor = event.target.value;
    }
}



// Deuteranope  - 01

function hexToDeuteranope_1(hex) {

    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);

    let newR = 0.866435 * r + 0.177704 * g + -0.044139 * b;
    let newG = 0.049567 * r + 0.939063 * g + 0.011370 * b;
    let newB = -0.003453 * r + 0.007233 * g + 1.996220 * b;


    newR = Math.min(255, Math.max(0, Math.round(newR)));
    newG = Math.min(255, Math.max(0, Math.round(newG)));
    newB = Math.min(255, Math.max(0, Math.round(newB)));


    let newHex2 = "#" + ((1 << 24) + (newR << 16) + (newG << 8) + newB).toString(16).slice(1).toUpperCase();

    return newHex2;
}


// TRITANOPE  -  01


function hexToTritanope_1(hex) {

    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);

    let newR = 0.926670 * r + 0.092514 * g + -0.019184 * b;
    let newG = 0.021191 * r + 0.964503 * g + 0.014306 * b;
    let newB = 0.008437 * r + 0.054813 * g + 0.936750 * b;


    newR = Math.min(255, Math.max(0, Math.round(newR)));
    newG = Math.min(255, Math.max(0, Math.round(newG)));
    newB = Math.min(255, Math.max(0, Math.round(newB)));


    let newHex2 = "#" + ((1 << 24) + (newR << 16) + (newG << 8) + newB).toString(16).slice(1).toUpperCase();

    return newHex2;
}

// PROTANOPE  -  01

function hexToProtanope_1(hex) {

    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);

    let newR = 0.856167 * r + 0.182038 * g + -0.038205 * b;
    let newG = 0.029342 * r + 0.955115 * g + 0.015544 * b;
    let newB = -0.002880 * r + -0.001563 * g + 1.004443 * b;



    newR = Math.min(255, Math.max(0, Math.round(newR)));
    newG = Math.min(255, Math.max(0, Math.round(newG)));
    newB = Math.min(255, Math.max(0, Math.round(newB)));


    let newHex2 = "#" + ((1 << 24) + (newR << 16) + (newG << 8) + newB).toString(16).slice(1).toUpperCase();

    return newHex2;
}

// Deuteranope  -  02

function hexToDeuteranope_2(hex) {

    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);

    let newR = 0.760729 * r + 0.319078 * g + -0.079807 * b;
    let newG = 0.090568 * r + 0.889315 * g + 0.020117 * b;
    let newB = -0.006027 * r + 0.013325 * g + 0.992702 * b;


    newR = Math.min(255, Math.max(0, Math.round(newR)));
    newG = Math.min(255, Math.max(0, Math.round(newG)));
    newB = Math.min(255, Math.max(0, Math.round(newB)));


    let newHex2 = "#" + ((1 << 24) + (newR << 16) + (newG << 8) + newB).toString(16).slice(1).toUpperCase();

    return newHex2;
}

// TRITANOPE  -  02


function hexToTritanope_2(hex) {

    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);

    let newR = 0.895720 * r + 0.133330 * g + -0.029050 * b;
    let newG = 0.029997 * r + 0.945400 * g + 0.024603 * b;
    let newB = 0.013027 * r + 0.104707 * g + 0.882266 * b;


    newR = Math.min(255, Math.max(0, Math.round(newR)));
    newG = Math.min(255, Math.max(0, Math.round(newG)));
    newB = Math.min(255, Math.max(0, Math.round(newB)));


    let newHex2 = "#" + ((1 << 24) + (newR << 16) + (newG << 8) + newB).toString(16).slice(1).toUpperCase();

    return newHex2;
}

// PROTANOPE  -  02

function hexToProtanope_2(hex) {

    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);

    let newR = 0.734766 * r + 0.334872 * g + -0.069637 * b;
    let newG = 0.051840 * r + 0.919198 * g + 0.028963 * b;
    let newB = -0.004928 * r + -0.004209 * g + 1.009137 * b;


    newR = Math.min(255, Math.max(0, Math.round(newR)));
    newG = Math.min(255, Math.max(0, Math.round(newG)));
    newB = Math.min(255, Math.max(0, Math.round(newB)));


    let newHex2 = "#" + ((1 << 24) + (newR << 16) + (newG << 8) + newB).toString(16).slice(1).toUpperCase();

    return newHex2;
}

// Deuteranope  -  03

function hexToDeuteranope_3(hex) {

    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);

    let newR = 0.675425 * r + 0.433850 * g + -0.109275 * b;
    let newG = 0.125303 * r + 0.847755 * g + 0.026942 * b;
    let newB = -0.007950 * r + 0.018572 * g + 0.989378 * b;


    newR = Math.min(255, Math.max(0, Math.round(newR)));
    newG = Math.min(255, Math.max(0, Math.round(newG)));
    newB = Math.min(255, Math.max(0, Math.round(newB)));


    let newHex2 = "#" + ((1 << 24) + (newR << 16) + (newG << 8) + newB).toString(16).slice(1).toUpperCase();

    return newHex2;
}


// TRITANOPE  -  03


function hexToTritanope_3(hex) {

    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);

    let newR = 0.905871 * r + 0.127791 * g + -0.033662 * b;
    let newG = 0.026856 * r + 0.941251 * g + 0.031893 * b;
    let newB = 0.013410 * r + 0.148296 * g + 0.838294 * b;


    newR = Math.min(255, Math.max(0, Math.round(newR)));
    newG = Math.min(255, Math.max(0, Math.round(newG)));
    newB = Math.min(255, Math.max(0, Math.round(newB)));


    let newHex2 = "#" + ((1 << 24) + (newR << 16) + (newG << 8) + newB).toString(16).slice(1).toUpperCase();

    return newHex2;
}

// PROTANOPE  -  03

function hexToProtanope_3(hex) {

    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);

    let newR = 0.630323 * r + 0.465641 * g + -0.095964 * b;
    let newG = 0.069181 * r + 0.890046 * g + 0.040773 * b;
    let newB = -0.006308 * r + -0.007724 * g + 1.014032 * b;


    newR = Math.min(255, Math.max(0, Math.round(newR)));
    newG = Math.min(255, Math.max(0, Math.round(newG)));
    newB = Math.min(255, Math.max(0, Math.round(newB)));


    let newHex2 = "#" + ((1 << 24) + (newR << 16) + (newG << 8) + newB).toString(16).slice(1).toUpperCase();

    return newHex2;
}

// Deuteranope  -  04

function hexToDeuteranope_4(hex) {

    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);

    let newR = 0.605511 * r + 0.528560 * g + -0.216562 * b;
    let newG = 0.155318 * r + 0.812366 * g + 0.032316 * b;
    let newB = -0.009376 * r + 0.023176 * g + 0.986200 * b;


    newR = Math.min(255, Math.max(0, Math.round(newR)));
    newG = Math.min(255, Math.max(0, Math.round(newG)));
    newB = Math.min(255, Math.max(0, Math.round(newB)));


    let newHex2 = "#" + ((1 << 24) + (newR << 16) + (newG << 8) + newB).toString(16).slice(1).toUpperCase();

    return newHex2;
}


// TRITANOPE  -  04


function hexToTritanope_4(hex) {

    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);

    let newR = 0.948035 * r + 0.089490 * g + -0.037526 * b;
    let newG = 0.014364 * r + 0.946792 * g + 0.038844 * b;
    let newB = 0.010853 * r + 0.193991 * g + 0.795156 * b;

    newR = Math.min(255, Math.max(0, Math.round(newR)));
    newG = Math.min(255, Math.max(0, Math.round(newG)));
    newB = Math.min(255, Math.max(0, Math.round(newB)));


    let newHex2 = "#" + ((1 << 24) + (newR << 16) + (newG << 8) + newB).toString(16).slice(1).toUpperCase();

    return newHex2;
}

// PROTANOPE  -  04

function hexToProtanope_4(hex) {

    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);

    let newR = 0.539009 * r + 0.579343 * g + -0.118352 * b;
    let newG = 0.082546 * r + 0.866121 * g + 0.051332 * b;
    let newB = -0.007136 * r + -0.011959 * g + 1.019095 * b;

    newR = Math.min(255, Math.max(0, Math.round(newR)));
    newG = Math.min(255, Math.max(0, Math.round(newG)));
    newB = Math.min(255, Math.max(0, Math.round(newB)));


    let newHex2 = "#" + ((1 << 24) + (newR << 16) + (newG << 8) + newB).toString(16).slice(1).toUpperCase();

    return newHex2;
}

// Deuteranope  -  05

function hexToDeuteranope_5(hex) {

    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);

    let newR = 0.547494 * r + 0.607765 * g + -0.155259 * b;
    let newG = 0.181692 * r + 0.781742 * g + 0.036566 * b;
    let newB = -0.010410 * r + 0.027275 * g + 0.983136 * b;


    newR = Math.min(255, Math.max(0, Math.round(newR)));
    newG = Math.min(255, Math.max(0, Math.round(newG)));
    newB = Math.min(255, Math.max(0, Math.round(newB)));


    let newHex2 = "#" + ((1 << 24) + (newR << 16) + (newG << 8) + newB).toString(16).slice(1).toUpperCase();

    return newHex2;
}


// TRITANOPE  -  05


function hexToTritanope_5(hex) {

    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);

    let newR = 1.017277 * r + 0.027029 * g + -0.044306 * b;
    let newG = -0.006113 * r + 0.958479 * g + 0.047634 * b;
    let newB = 0.006379 * r + 0.248708 * g + 0.744913 * b;


    newR = Math.min(255, Math.max(0, Math.round(newR)));
    newG = Math.min(255, Math.max(0, Math.round(newG)));
    newB = Math.min(255, Math.max(0, Math.round(newB)));


    let newHex2 = "#" + ((1 << 24) + (newR << 16) + (newG << 8) + newB).toString(16).slice(1).toUpperCase();

    return newHex2;
}

// PROTANOPE  -  05

function hexToProtanope_5(hex) {

    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);

    let newR = 0.458064 * r + 0.679578 * g + -0.137642 * b;
    let newG = 0.092785 * r + 0.846313 * g + 0.060902 * b;
    let newB = -0.007494 * r + -0.016807 * g + 1.024301 * b;

    newR = Math.min(255, Math.max(0, Math.round(newR)));
    newG = Math.min(255, Math.max(0, Math.round(newG)));
    newB = Math.min(255, Math.max(0, Math.round(newB)));


    let newHex2 = "#" + ((1 << 24) + (newR << 16) + (newG << 8) + newB).toString(16).slice(1).toUpperCase();

    return newHex2;
}

// Deuteranope  -  06

function hexToDeuteranope_6(hex) {

    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);

    let newR = 0.498864 * r + 0.674741 * g + -0.173604 * b;
    let newG = 0.205199 * r + 0.754872 * g + 0.039929 * b;
    let newB = -0.011131 * r + 0.030969 * g + 0.980162 * b;


    newR = Math.min(255, Math.max(0, Math.round(newR)));
    newG = Math.min(255, Math.max(0, Math.round(newG)));
    newB = Math.min(255, Math.max(0, Math.round(newB)));


    let newHex2 = "#" + ((1 << 24) + (newR << 16) + (newG << 8) + newB).toString(16).slice(1).toUpperCase();

    return newHex2;
}


// TRITANOPE  -  06


function hexToTritanope_6(hex) {

    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);

    let newR = 1.104996 * r + -0.046633 * g + -0.058363 * b;
    let newG = -0.032137 * r + 0.971635 * g + 0.060503 * b;
    let newB = 0.001336 * r + 0.317922 * g + 0.680742 * b;


    newR = Math.min(255, Math.max(0, Math.round(newR)));
    newG = Math.min(255, Math.max(0, Math.round(newG)));
    newB = Math.min(255, Math.max(0, Math.round(newB)));


    let newHex2 = "#" + ((1 << 24) + (newR << 16) + (newG << 8) + newB).toString(16).slice(1).toUpperCase();

    return newHex2;
}

// PROTANOPE  -  06

function hexToProtanope_6(hex) {

    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);

    let newR = 0.385450 * r + 0.769005 * g + -0.154455 * b;
    let newG = 0.100526 * r + 0.829802 * g + 0.069673 * b;
    let newB = -0.007442 * r + -0.022190 * g + 1.029632 * b;

    newR = Math.min(255, Math.max(0, Math.round(newR)));
    newG = Math.min(255, Math.max(0, Math.round(newG)));
    newB = Math.min(255, Math.max(0, Math.round(newB)));


    let newHex2 = "#" + ((1 << 24) + (newR << 16) + (newG << 8) + newB).toString(16).slice(1).toUpperCase();

    return newHex2;
}

// Deuteranope  -  07

function hexToDeuteranope_7(hex) {

    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);

    let newR = 0.457771 * r + 0.731899 * g + -0.189670 * b;
    let newG = 0.226409 * r + 0.731012 * g + 0.042579 * b;
    let newB = -0.011595 * r + 0.034333 * g + 0.977261 * b;


    newR = Math.min(255, Math.max(0, Math.round(newR)));
    newG = Math.min(255, Math.max(0, Math.round(newG)));
    newB = Math.min(255, Math.max(0, Math.round(newB)));


    let newHex2 = "#" + ((1 << 24) + (newR << 16) + (newG << 8) + newB).toString(16).slice(1).toUpperCase();

    return newHex2;
}


// TRITANOPE  -  07


function hexToTritanope_7(hex) {

    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);

    let newR = 1.193214 * r + -0.109812 * g + -0.083402 * b;
    let newG = -0.058496 * r + 0.979410 * g + 0.079086 * b;
    let newB = -0.002346 * r + 0.403492 * g + 0.598854 * b;


    newR = Math.min(255, Math.max(0, Math.round(newR)));
    newG = Math.min(255, Math.max(0, Math.round(newG)));
    newB = Math.min(255, Math.max(0, Math.round(newB)));


    let newHex2 = "#" + ((1 << 24) + (newR << 16) + (newG << 8) + newB).toString(16).slice(1).toUpperCase();

    return newHex2;
}

// PROTANOPE  -  07

function hexToProtanope_7(hex) {

    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);

    let newR = 0.319627 * r + 0.849633 * g + -0.169261 * b;
    let newG = 0.106241 * r + 0.815969 * g + 0.077790 * b;
    let newB = -0.007025 * r + -0.028051 * g + 1.035076 * b;


    newR = Math.min(255, Math.max(0, Math.round(newR)));
    newG = Math.min(255, Math.max(0, Math.round(newG)));
    newB = Math.min(255, Math.max(0, Math.round(newB)));


    let newHex2 = "#" + ((1 << 24) + (newR << 16) + (newG << 8) + newB).toString(16).slice(1).toUpperCase();

    return newHex2;
}


// Deuteranope  -  08

function hexToDeuteranope_8(hex) {

    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);

    let newR = 0.422823 * r + 0.781057 * g + -0.203881 * b;
    let newG = 0.245752 * r + 0.709602 * g + 0.044646 * b;
    let newB = -0.011843 * r + 0.037423 * g + 0.974421 * b;


    newR = Math.min(255, Math.max(0, Math.round(newR)));
    newG = Math.min(255, Math.max(0, Math.round(newG)));
    newB = Math.min(255, Math.max(0, Math.round(newB)));


    let newHex2 = "#" + ((1 << 24) + (newR << 16) + (newG << 8) + newB).toString(16).slice(1).toUpperCase();

    return newHex2;
}


// TRITANOPE  -  08


function hexToTritanope_8(hex) {

    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);

    let newR = 1.257728 * r + -0.139648 * g + -0.118081 * b;
    let newG = -0.078003 * r + 0.975409 * g + 0.102594 * b;
    let newB = -0.003316 * r + 0.501214 * g + 0.502102 * b;


    newR = Math.min(255, Math.max(0, Math.round(newR)));
    newG = Math.min(255, Math.max(0, Math.round(newG)));
    newB = Math.min(255, Math.max(0, Math.round(newB)));


    let newHex2 = "#" + ((1 << 24) + (newR << 16) + (newG << 8) + newB).toString(16).slice(1).toUpperCase();

    return newHex2;
}

// PROTANOPE  -  08

function hexToProtanope_8(hex) {

    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);

    let newR = 0.259411 * r + 0.923008 * g + -0.182420 * b;
    let newG = 0.110296 * r + 0.804340 * g + 0.085364 * b;
    let newB = -0.006276 * r + -0.034346 * g + 1.040622 * b;


    newR = Math.min(255, Math.max(0, Math.round(newR)));
    newG = Math.min(255, Math.max(0, Math.round(newG)));
    newB = Math.min(255, Math.max(0, Math.round(newB)));


    let newHex2 = "#" + ((1 << 24) + (newR << 16) + (newG << 8) + newB).toString(16).slice(1).toUpperCase();

    return newHex2;
}

// Deuteranope  -  09

function hexToDeuteranope_9(hex) {

    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);

    let newR = 0.392952 * r + 0.823610 * g + -0.216562 * b;
    let newG = 0.263559 * r + 0.690210 * g + 0.046232 * b;
    let newB = -0.011910 * r + 0.040281 * g + 0.971630 * b;

    newR = Math.min(255, Math.max(0, Math.round(newR)));
    newG = Math.min(255, Math.max(0, Math.round(newG)));
    newB = Math.min(255, Math.max(0, Math.round(newB)));


    let newHex2 = "#" + ((1 << 24) + (newR << 16) + (newG << 8) + newB).toString(16).slice(1).toUpperCase();

    return newHex2;
}


// TRITANOPE  -  09


function hexToTritanope_9(hex) {

    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);

    let newR = 1.278864 * r + -0.125333 * g + -0.153531 * b;
    let newG = -0.084748 * r + 0.957674 * g + 0.127074 * b;
    let newB = -0.000989 * r + 0.601151 * g + 0.399838 * b;


    newR = Math.min(255, Math.max(0, Math.round(newR)));
    newG = Math.min(255, Math.max(0, Math.round(newG)));
    newB = Math.min(255, Math.max(0, Math.round(newB)));


    let newHex2 = "#" + ((1 << 24) + (newR << 16) + (newG << 8) + newB).toString(16).slice(1).toUpperCase();

    return newHex2;
}

// PROTANOPE  -  09

function hexToProtanope_9(hex) {

    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);

    let newR = 0.203876 * r + 0.990338 * g + -0.194214 * b;
    let newG = 0.112975 * r + 0.794542 * g + 0.092483 * b;
    let newB = -0.005222 * r + -0.041043 * g + 1.046265 * b;


    newR = Math.min(255, Math.max(0, Math.round(newR)));
    newG = Math.min(255, Math.max(0, Math.round(newG)));
    newB = Math.min(255, Math.max(0, Math.round(newB)));


    let newHex2 = "#" + ((1 << 24) + (newR << 16) + (newG << 8) + newB).toString(16).slice(1).toUpperCase();

    return newHex2;
}

// Deuteranope  -  10

function hexToDeuteranope_10(hex) {

    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);

    let newR = 0.367322 * r + 0.860646 * g + -0.227968 * b;
    let newG = 0.280085 * r + 0.672501 * g + 0.047413 * b;
    let newB = -0.011820 * r + 0.042940 * g + 0.968881 * b;

    newR = Math.min(255, Math.max(0, Math.round(newR)));
    newG = Math.min(255, Math.max(0, Math.round(newG)));
    newB = Math.min(255, Math.max(0, Math.round(newB)));


    let newHex2 = "#" + ((1 << 24) + (newR << 16) + (newG << 8) + newB).toString(16).slice(1).toUpperCase();

    return newHex2;
}


// TRITANOPE  -  10


function hexToTritanope_10(hex) {

    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);

    let newR = 1.255528 * r + -0.076749 * g + -0.178779 * b;
    let newG = -0.078411 * r + 0.930809 * g + 0.147602 * b;
    let newB = 0.004733 * r + 0.691367 * g + 0.303900 * b;

    newR = Math.min(255, Math.max(0, Math.round(newR)));
    newG = Math.min(255, Math.max(0, Math.round(newG)));
    newB = Math.min(255, Math.max(0, Math.round(newB)));


    let newHex2 = "#" + ((1 << 24) + (newR << 16) + (newG << 8) + newB).toString(16).slice(1).toUpperCase();

    return newHex2;
}

// PROTANOPE  -  10

function hexToProtanope_10(hex) {

    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);

    let newR = 0.152286 * r + 0.052583 * g + -0.204868 * b;
    let newG = 0.114503 * r + 0.786281 * g + 0.099216 * b;
    let newB = -0.003882 * r + -0.048116 * g + 1.051998 * b;


    newR = Math.min(255, Math.max(0, Math.round(newR)));
    newG = Math.min(255, Math.max(0, Math.round(newG)));
    newB = Math.min(255, Math.max(0, Math.round(newB)));


    let newHex2 = "#" + ((1 << 24) + (newR << 16) + (newG << 8) + newB).toString(16).slice(1).toUpperCase();

    return newHex2;
}




window.addEventListener("load", startup, false);

function startup() {
    colorWell = document.querySelector("#colorWell");
    colorWell.value = defaultColor;
    colorWell.addEventListener("input", updateColor, false);
}

function apply() {
    
    var hex = colorWell.value;
    document.getElementById("CouleurOrigine").style.backgroundColor = hex;
    // Appeler les fonctions de transformation si nécessaire
    updateColor(hex);
}






function updateColor() {
    var hex = colorWell.value;
    
    document.getElementById("CouleurOrigine").style.backgroundColor = hex;
    // document.getElementById("couleur0").style.backgroundColor = hex;

    

    if (output.innerHTML == 1) {
        let deuteranopeHex = hexToDeuteranope_1(hex);
        document.getElementById("deuteranopeCouleur").style.backgroundColor = deuteranopeHex;
        // document.getElementById("couleur2").style.backgroundColor = deuteranopeHex;

        let tritanopeHex = hexToTritanope_1(hex);
        document.getElementById("tritanopeCouleur").style.backgroundColor = tritanopeHex;
        // document.getElementById("couleur3").style.backgroundColor = tritanopeHex;

        let protanopeHex = hexToProtanope_1(hex);
        document.getElementById("protanopeCouleur").style.backgroundColor = protanopeHex;
        // document.getElementById("couleur1").style.backgroundColor = protanopeHex;
    }

    if (output.innerHTML == 2) {
        let deuteranopeHex = hexToDeuteranope_2(hex);
        document.getElementById("deuteranopeCouleur").style.backgroundColor = deuteranopeHex;
        // document.getElementById("couleur2").style.backgroundColor = deuteranopeHex;

        let tritanopeHex = hexToTritanope_2(hex);
        document.getElementById("tritanopeCouleur").style.backgroundColor = tritanopeHex;
        // document.getElementById("couleur3").style.backgroundColor = tritanopeHex;

        let protanopeHex = hexToProtanope_2(hex);
        document.getElementById("protanopeCouleur").style.backgroundColor = protanopeHex;
        // document.getElementById("couleur1").style.backgroundColor = protanopeHex;
    }

    if (output.innerHTML == 3) {
        let deuteranopeHex = hexToDeuteranope_3(hex);
        document.getElementById("deuteranopeCouleur").style.backgroundColor = deuteranopeHex;
        // document.getElementById("couleur2").style.backgroundColor = deuteranopeHex;

        let tritanopeHex = hexToTritanope_3(hex);
        document.getElementById("tritanopeCouleur").style.backgroundColor = tritanopeHex;
        // document.getElementById("couleur3").style.backgroundColor = tritanopeHex;

        let protanopeHex = hexToProtanope_3(hex);
        document.getElementById("protanopeCouleur").style.backgroundColor = protanopeHex;
        // document.getElementById("couleur1").style.backgroundColor = protanopeHex;
    }

    if (output.innerHTML == 4) {
        let deuteranopeHex = hexToDeuteranope_4(hex);
        document.getElementById("deuteranopeCouleur").style.backgroundColor = deuteranopeHex;

        let tritanopeHex = hexToTritanope_4(hex);
        document.getElementById("tritanopeCouleur").style.backgroundColor = tritanopeHex;

        let protanopeHex = hexToProtanope_4(hex);
        document.getElementById("protanopeCouleur").style.backgroundColor = protanopeHex;
    }

    if (output.innerHTML == 5) {
        let deuteranopeHex = hexToDeuteranope_5(hex);
        document.getElementById("deuteranopeCouleur").style.backgroundColor = deuteranopeHex;

        let tritanopeHex = hexToTritanope_5(hex);
        document.getElementById("tritanopeCouleur").style.backgroundColor = tritanopeHex;

        let protanopeHex = hexToProtanope_5(hex);
        document.getElementById("protanopeCouleur").style.backgroundColor = protanopeHex;
    }

    if (output.innerHTML == 6) {
        let deuteranopeHex = hexToDeuteranope_6(hex);
        document.getElementById("deuteranopeCouleur").style.backgroundColor = deuteranopeHex;

        let tritanopeHex = hexToTritanope_6(hex);
        document.getElementById("tritanopeCouleur").style.backgroundColor = tritanopeHex;

        let protanopeHex = hexToProtanope_6(hex);
        document.getElementById("protanopeCouleur").style.backgroundColor = protanopeHex;
    }

    if (output.innerHTML == 7) {
        let deuteranopeHex = hexToDeuteranope_7(hex);
        document.getElementById("deuteranopeCouleur").style.backgroundColor = deuteranopeHex;

        let tritanopeHex = hexToTritanope_7(hex);
        document.getElementById("tritanopeCouleur").style.backgroundColor = tritanopeHex;

        let protanopeHex = hexToProtanope_7(hex);
        document.getElementById("protanopeCouleur").style.backgroundColor = protanopeHex;
    }

    if (output.innerHTML == 8) {
        let deuteranopeHex = hexToDeuteranope_8(hex);
        document.getElementById("deuteranopeCouleur").style.backgroundColor = deuteranopeHex;

        let tritanopeHex = hexToTritanope_8(hex);
        document.getElementById("tritanopeCouleur").style.backgroundColor = tritanopeHex;

        let protanopeHex = hexToProtanope_8(hex);
        document.getElementById("protanopeCouleur").style.backgroundColor = protanopeHex;
    }

    if (output.innerHTML == 9) {
        let deuteranopeHex = hexToDeuteranope_9(hex);
        document.getElementById("deuteranopeCouleur").style.backgroundColor = deuteranopeHex;

        let tritanopeHex = hexToTritanope_9(hex);
        document.getElementById("tritanopeCouleur").style.backgroundColor = tritanopeHex;

        let protanopeHex = hexToProtanope_9(hex);
        document.getElementById("protanopeCouleur").style.backgroundColor = protanopeHex;
    }

    if (output.innerHTML == 10) {
        let deuteranopeHex = hexToDeuteranope_10(hex);
        document.getElementById("deuteranopeCouleur").style.backgroundColor = deuteranopeHex;

        let tritanopeHex = hexToTritanope_10(hex);
        document.getElementById("tritanopeCouleur").style.backgroundColor = tritanopeHex;

        let protanopeHex = hexToProtanope_10(hex);
        document.getElementById("protanopeCouleur").style.backgroundColor = protanopeHex;
    }

}

