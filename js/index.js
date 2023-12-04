// Fonction pour détecter si le navigateur est Microsoft Edge
function isMicrosoftEdge() {
  return /Edge|Edg/.test(navigator.userAgent);
}

// Fonction pour appliquer les images de secours pour Microsoft Edge
function applyMicrosoftEdgeStyles() {
  let hiClasses = [".hi-1", ".hi-2", ".hi-3", ".hi-4", ".hi-5", ".hi-6"];
  let pngImagePaths = [
    "./images/animation.png",
    "./images/writing.png",
    "./images/formation.png",
    "./images/illustration.png",
    "./images/programming.png",
    "./images/construction.png"
  ];

  hiClasses.forEach((classSelector, index) => {
    let element = document.querySelector(classSelector);
    if (element) {
      element.style.backgroundImage = `url(${pngImagePaths[index]})`;
    }
  });
}

// Fonction pour configurer l'animation avec GreenSock
function setupGreenSockAnimation() {
  let del = 3;
  let i = 1;

  let tl = gsap.timeline({
    repeat: -1,
    yoyo: true,
    ease: "expo.out"
  });

  gsap.set(["#hero-1 h2, #hero-1 h1, #hero-1 h3"], {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
  });

  gsap.set(
    [
      `#hero-2 h2, #hero-3 h2, #hero-4 h2, #hero-5 h2, #hero-6 h2,
      #hero-2 h1, #hero-3 h1, #hero-4 h1, #hero-5 h1, #hero-6 h1,
      #hero-2 h3, #hero-3 h3, #hero-4 h3, #hero-5 h3, #hero-6 h3`
    ],
    {
      clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
    }
  );

  while (i < 6) {
    tl.to(`#hero-${i} h2`, 0.9, {
      clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
      delay: del
    })
      .to(
        `#hero-${i} h1`,
        0.9,
        {
          clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
        },
        "-=0.3"
      )
      .to(
        `#hero-${i} h3`,
        0.9,
        {
          clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
        },
        "-=0.3"
      )
      .to(
        `#hero-${i} .hi-${i}`,
        0.7,
        {
          clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
        },
        "-=1"
      )
      .to(`#hero-${i + 1} h2`, 0.9, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
      })
      .to(
        `#hero-${i + 1} h1`,
        0.9,
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
        },
        "-=0.3"
      )
      .to(
        `#hero-${i + 1} h3`,
        0.9,
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
        },
        "-=0.3"
      );

    if (i === 5) {
      tl.to({}, 1.5, {});
    }
    i++;
  }
}


// Fonction pour gérer le clic sur le logo
function handleLogoClick() {
  var burger = document.getElementById('burger');
  burger.classList.add('highlight');

  setTimeout(function () {
    burger.classList.remove('highlight');
  }, 1000);
}

// Fonction principale exécutée après le chargement du DOM
function main() {
  if (isMicrosoftEdge()) {
    applyMicrosoftEdgeStyles();
  }

  setupGreenSockAnimation();

  // Ajouter un gestionnaire d'événement pour le clic sur le logo
  var logo = document.querySelector('.nav__logo a');
  logo.addEventListener('click', handleLogoClick);

  var h1Logo = document.querySelector('h1.nav__logo');
  if (h1Logo) {
    h1Logo.addEventListener('click', function () {
      logo.click();
    });
  }
}

// Ajouter un gestionnaire d'événement pour le chargement du DOM
document.addEventListener('DOMContentLoaded', main);
