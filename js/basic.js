let burger = document.getElementById("burger");
let overlay = document.querySelector("section");
let showMenu = false;

overlay.style.display = "none";

// Fonction pour montrer ou cacher le menu
function toggleMenu() {
  showMenu = !showMenu;
  if (showMenu) {
    showOverlay();
  } else {
    hideOverlay();
  }
}

// Fonction pour afficher le menu
function showOverlay() {
  window.scrollTo(0, 0);
  burger.classList.add("active");
  overlay.style.display = "block";
  gsap.to(overlay, 1, {
    clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
    ease: "expo.in"
  });
}

// Fonction pour cacher le menu
function hideOverlay() {
  burger.classList.remove("active");
  gsap.to(overlay, 1, {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
    ease: "expo.out",
    onComplete: () => (overlay.style.display = "none")
  });
}

// Gestionnaire d'événement pour le clic sur le burger
burger.addEventListener("click", toggleMenu);

// Gestion des événements pour les liens de niveau A
document.querySelectorAll('.level-a a').forEach(function (link) {
  link.addEventListener('mouseover', function () {
    scaleIcon(link, 1.5);
  });

  link.addEventListener('mouseout', function () {
    scaleIcon(link, 1);
  });
});

// Fonction pour mettre à l'échelle l'icône à gauche des liens de niveau A
function scaleIcon(link, scaleValue) {
  const previousElement = link.previousElementSibling;
  if (previousElement && previousElement.tagName === 'I') {
    previousElement.style.transform = `scale(${scaleValue})`;
    previousElement.style.transition = 'transform 0.3s ease';
  }
}

// Extension de la zone cliquable pour les éléments de niveau 3
document.querySelectorAll(".level-3 li").forEach(function (item) {
  item.addEventListener("click", function () {
    let link = item.querySelector("a");
    if (link) {
      window.location.href = link.href;
    }
  });
});

// Extension de la zone cliquable sur le logo h1
let h1Logo = document.querySelector("h1.nav__logo");
if (h1Logo) {
  h1Logo.addEventListener("click", function () {
    let link = h1Logo.querySelector("a");
    if (link) {
      window.location.href = link.href;
    }
  });
}

document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
      createCallButton();
  }, 15000); // 15 seconds

  function createCallButton() {
      // Création du bouton
      var callButton = document.createElement("a");
      callButton.setAttribute("href", "https://cal.com/yanklinnomme");
      callButton.setAttribute("target", "_blank");

      // Remplacez le chemin d'accès du code SVG ici
      var svgCode = `
        <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
          <svg width="25%" height="25%" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
          <g transform="matrix(1.29246,0,0,1.29246,-20.6918,-32.9959)">
            <circle cx="54.695" cy="64.215" r="35.785" style="fill:rgb(243,248,216);"/>
          </g>
          <g transform="matrix(1.25806,0,0,1.25806,-18.8102,-30.7868)">
            <circle cx="54.695" cy="64.215" r="35.785" style="fill:rgb(15,47,43);"/>
          </g>
          <g id="comments-solid.svg" transform="matrix(3.16748,0,0,3.16748,50,50)">
            <g transform="matrix(1,0,0,1,-10,-8)">
              <g transform="matrix(1,0,0,1,0.000342014,0)">
                <path d="M6.5,11C10.091,11 13,8.538 13,5.5C13,2.463 10.091,0 6.5,0C2.909,0 0,2.463 0,5.5C0,6.706 0.459,7.822 1.238,8.731C1.128,9.025 0.966,9.284 0.794,9.503C0.644,9.697 0.491,9.847 0.378,9.95C0.322,10 0.275,10.041 0.244,10.066C0.228,10.078 0.216,10.087 0.209,10.091L0.203,10.097C0.031,10.225 -0.044,10.45 0.025,10.653C0.094,10.856 0.284,11 0.5,11C1.181,11 1.869,10.825 2.441,10.609C2.728,10.5 2.997,10.378 3.231,10.253C4.191,10.728 5.306,11 6.5,11Z" style="fill:rgb(243,248,216);fill-rule:nonzero;"/>
              </g>
              <g transform="matrix(1,0,0,1,0.000342014,0)">
                <path d="M14,5.5C14,9.009 10.903,11.653 7.234,11.969C7.994,14.294 10.512,16 13.5,16C14.694,16 15.809,15.728 16.772,15.253C17.006,15.378 17.272,15.5 17.559,15.609C18.131,15.825 18.819,16 19.5,16C19.716,16 19.909,15.859 19.975,15.653C20.041,15.447 19.969,15.222 19.794,15.094L19.788,15.088C19.781,15.081 19.769,15.075 19.753,15.063C19.722,15.038 19.675,15 19.619,14.947C19.506,14.844 19.353,14.694 19.203,14.5C19.031,14.281 18.869,14.019 18.759,13.728C19.538,12.822 19.997,11.706 19.997,10.497C19.997,7.597 17.344,5.219 13.978,5.012C13.991,5.172 13.997,5.334 13.997,5.497L14,5.5Z" style="fill:rgb(129,147,130);fill-rule:nonzero;"/>
              </g>
            </g>
          </g>
        </svg>
      `;

      // Création de l'élément SVG
      var svg = new DOMParser().parseFromString(svgCode, 'image/svg+xml').documentElement;

      // Ajout du style CSS au bouton
      callButton.style.position = "fixed";
      callButton.style.bottom = "20px";
      callButton.style.right = "20px";
      callButton.style.zIndex = "999";
      
      // Assemblage des éléments
      callButton.appendChild(svg);

      // Ajout du bouton à la page
      document.body.appendChild(callButton);
  }
  
  // Fonction pour ouvrir le lien dans une nouvelle fenêtre lorsque le bouton est cliqué
  document.addEventListener("click", function(event) {
      var target = event.target;
      if (target.tagName === "svg" && target.parentNode.tagName === "A") {
          event.preventDefault();
          window.open(target.parentNode.href, "_blank");
      }
  });
});
