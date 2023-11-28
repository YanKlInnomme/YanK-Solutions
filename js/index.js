let isMicrosoftEdge = /Edge/.test(navigator.userAgent) || /Edg/.test(navigator.userAgent);
console.log(isMicrosoftEdge);

// Vérifier si le navigateur est Microsoft Edge
if (isMicrosoftEdge) {
  // Microsoft Edge détecté, appliquer les images de secours

  // Modifiez les images de fond en utilisant les classes hi-n
  let hiClasses = [
    ".hi-1",
    ".hi-2",
    ".hi-3",
    ".hi-4",
    ".hi-5",
    ".hi-6"
  ];

  // Chemins vers les images de secours au format PNG
  let pngImagePaths = [
    "./images/animation.png",
    "./images/writing.png",
    "./images/formation.png",
    "./images/illustration.png",
    "./images/programming.png",
    "./images/construction.png"
  ];

  for (let i = 0; i < hiClasses.length; i++) {
    let element = document.querySelector(hiClasses[i]);
    if (element) {
      element.style.backgroundImage = `url(${pngImagePaths[i]})`;
    }
  }
}

let heroImage = document.querySelector(".hero-image");
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

document.addEventListener('DOMContentLoaded', function() {
  var logo = document.querySelector('.nav__logo a');
  var burger = document.getElementById('burger');

  logo.addEventListener('click', function() {
    burger.classList.add('highlight');

    // Ajoutez un délai pour permettre à l'animation de se terminer avant de supprimer la classe
    setTimeout(function() {
      burger.classList.remove('highlight');
    }, 1000); // ajustez le délai en fonction de la durée de votre animation
  });
});
