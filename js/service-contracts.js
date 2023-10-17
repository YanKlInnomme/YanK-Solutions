function toggleMenuItems() {
  const screenWidth = window.innerWidth;

  const mobileMenuItems = document.querySelectorAll('.mobile-menu-item');
  const desktopMenuItems = document.querySelectorAll('.desktop-menu-item');

  if (screenWidth < 600) { // Pour les téléphones
    mobileMenuItems.forEach(item => item.style.display = 'block');
    desktopMenuItems.forEach(item => item.style.display = 'none');
  } else { // Pour les tablettes et grands écrans
    mobileMenuItems.forEach(item => item.style.display = 'none');
    desktopMenuItems.forEach(item => item.style.display = 'block');
  }
}

// Exécutez la fonction au chargement de la page et lors du redimensionnement de la fenêtre
window.addEventListener('load', toggleMenuItems);
window.addEventListener('resize', toggleMenuItems);

document.addEventListener("DOMContentLoaded", function() {
  // Cacher tous les éléments contract__ en ajoutant la classe .hidden
  const contractElements = document.querySelectorAll('[id^="contract__"]');
  contractElements.forEach(function(element) {
    element.classList.add("hidden");
  });

  // Montrer le contract__tabletop-animation en supprimant la classe .hidden
  const tabletopAnimationContract = document.getElementById("contract__tabletop-animation");
  tabletopAnimationContract.classList.remove("hidden");

  // Appliquer la classe .menu-item:focus au bouton button-desktop__tabletop-animation
  const tabletopAnimationButtonDesktop = document.getElementById("button-desktop__tabletop-animation");
  const tabletopAnimationButtonMobile = document.getElementById("button-mobile__tabletop-animation");

  function setButtonFocus(button) {
    button.classList.add("menu-item-focus");
  }

  tabletopAnimationButtonDesktop.addEventListener("click", function() {
    showContract("contract__tabletop-animation");
    setButtonFocus(tabletopAnimationButtonDesktop);
    setButtonFocus(tabletopAnimationButtonMobile);
  });

  tabletopAnimationButtonMobile.addEventListener("click", function() {
    showContract("contract__tabletop-animation");
    setButtonFocus(tabletopAnimationButtonDesktop);
    setButtonFocus(tabletopAnimationButtonMobile);
  });
  
  setButtonFocus(tabletopAnimationButtonDesktop);
  setButtonFocus(tabletopAnimationButtonMobile);
});

document.addEventListener("DOMContentLoaded", function() {
  const contractElements = document.querySelectorAll('[id^="contract__"]');
  const desktopButtons = document.querySelectorAll('[id^="button-desktop__"]');
  const mobileButtons = document.querySelectorAll('[id^="button-mobile__"]');


  // Fonction pour cacher tous les contrats sauf un
  function showContract(contractId) {
    contractElements.forEach(function(element) {
      if (element.id === contractId) {
        element.classList.add("visible");
        element.classList.remove("hidden");
      } else {
        element.classList.add("hidden");
        element.classList.remove("visible");
      }
    });
  }

  // Fonction pour mettre en surbrillance le bouton cliqué
  function highlightButton(buttonId) {
    desktopButtons.forEach(function(button) {
      if (button.id === buttonId) {
        button.classList.add("menu-item-focus");
      } else {
        button.classList.remove("menu-item-focus");
      }
    });

    mobileButtons.forEach(function(button) {
      if (button.id === buttonId) {
        button.classList.add("menu-item-focus");
      } else {
        button.classList.remove("menu-item-focus");
      }
    });
  }

  // Ajouter des gestionnaires d'événements aux boutons pour gérer les clics
  desktopButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      const contractId = button.id.replace("button-desktop__", "contract__");
      showContract(contractId);
      highlightButton(button.id);
    });
  });

  mobileButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      const contractId = button.id.replace("button-mobile__", "contract__");
      showContract(contractId);
      highlightButton(button.id);
    });
  });

});
