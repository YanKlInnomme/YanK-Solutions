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