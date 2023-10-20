function getRandomRotation(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  const areaDivs = document.querySelectorAll('.area');
  
  areaDivs.forEach(areaDiv => {
    const words = areaDiv.textContent.split(' ');
  
    const defaultRotatedWords = words.map(word => {
      const rotation = getRandomRotation(-7, 7);
      return `<span class="rotate-text" style="display: inline-block; transform: rotate(${rotation}deg); transition: transform 0.5s">${word}&nbsp;</span>`;
    });
  
    const hoverStraightWords = words.join(' ');
  
    areaDiv.innerHTML = defaultRotatedWords.join('');
  
    areaDiv.addEventListener('mouseenter', () => {
      areaDiv.querySelectorAll('.rotate-text').forEach(span => {
        span.style.transform = 'rotate(0deg)';
      });
    });
  
    areaDiv.addEventListener('mouseleave', () => {
      areaDiv.querySelectorAll('.rotate-text').forEach(span => {
        const rotation = getRandomRotation(-7, 7);
        span.style.transform = `rotate(${rotation}deg)`;
      });
    });
});

const isMicrosoftEdge = /Edge/.test(navigator.userAgent) || /Edg/.test(navigator.userAgent);

const imageElement1 = document.querySelector('.area-2 img');
imageElement1.src = `../images/role-playing-game.${isMicrosoftEdge ? 'png' : 'avif'}`;

const imageElement2 = document.querySelector('.area-4 img');
imageElement2.src = `../images/family.${isMicrosoftEdge ? 'png' : 'avif'}`;