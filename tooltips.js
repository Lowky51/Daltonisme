/* SOURCE

Bouton Copier-Coller : 
https://stackoverflow.com/questions/62488005/how-to-implement-copy-to-clipboard-in-browser-javascript

Tooltip: 
https://www.w3schools.com/howto/howto_css_tooltip.asp
https://stackoverflow.com/questions/54569616/javascript-copy-to-clipboard-function-messages-doesnt-work-if-used-twice
*/

/* BOUTON COPIER-COLLER */

let copyText = document.getElementById("le_texte");

function copyCode() {
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value) 
}

/* ToolTips : Le texte change au clic */

function clicked_on(){
    document.getElementById('future-clicked').innerHTML = 'Copié !';
}