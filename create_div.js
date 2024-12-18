// Sélectionne l'élément avec l'animation
const progress = document.querySelector('.progress');

// Ajout de l'écouteur pour l'événement 'animationend'
progress.addEventListener('animationend', () => {
  // Redirige vers la page souhaitée
  window.location.href = 'dalto.html'; // Remplacez par l'URL de la page cible
});
