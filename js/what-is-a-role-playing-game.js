  // Fonction pour générer un nombre aléatoire entre min et max inclus
function getRandomRotation(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Sélectionnez toutes les div avec la classe "area"
  const areaDivs = document.querySelectorAll('.area');
  
  areaDivs.forEach(areaDiv => {
    // Sélectionnez tous les mots dans la div "area"
    const words = areaDiv.textContent.split(' ');
  
    // Créez une chaîne HTML pour les mots avec rotation aléatoire par défaut
    const defaultRotatedWords = words.map(word => {
      const rotation = getRandomRotation(-7, 7);
      return `<span class="rotate-text" style="display: inline-block; transform: rotate(${rotation}deg); transition: transform 0.5s">${word}&nbsp;</span>`;
    });
  
    // Créez une chaîne HTML pour les mots droits au survol
    const hoverStraightWords = words.join(' ');
  
    // Remplacez le contenu de la div "area" avec les mots tournés par défaut
    areaDiv.innerHTML = defaultRotatedWords.join('');
  
    // Ajoutez un gestionnaire d'événement pour gérer le survol
    areaDiv.addEventListener('mouseenter', () => {
      // Appliquez la transition pour rendre la rotation plus fluide
      areaDiv.querySelectorAll('.rotate-text').forEach(span => {
        span.style.transform = 'rotate(0deg)';
      });
    });
  
    // Ajoutez un gestionnaire d'événement pour gérer la sortie du survol
    areaDiv.addEventListener('mouseleave', () => {
      // Réinitialisez la rotation à sa valeur d'origine pour une transition inverse
      areaDiv.querySelectorAll('.rotate-text').forEach(span => {
        const rotation = getRandomRotation(-7, 7);
        span.style.transform = `rotate(${rotation}deg)`;
      });
    });
});
