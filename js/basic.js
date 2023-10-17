let burger = document.getElementById("burger");
let overlay = document.querySelector("section");
let showMenu = false;

overlay.style.display = "none";

burger.addEventListener("click", (e) => {
  showMenu = !showMenu;
  if (showMenu) {
    window.scrollTo(0, 0);
    burger.classList.add("active");
    overlay.style.display = "block";
    gsap.to(overlay, 1, {
      clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
      ease: "expo.in"
    });
  } else {
    burger.classList.remove("active");
    gsap.to(overlay, 1, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      ease: "expo.out",
      onComplete: () => (overlay.style.display = "none")
    });
  }
});

document.querySelectorAll('.level-a a').forEach(function (link) {
  link.addEventListener('mouseover', function () {
    const previousElement = link.previousElementSibling;
    if (previousElement && previousElement.tagName === 'I') {
      previousElement.style.transform = 'scale(1.5)';
      previousElement.style.transition = 'transform 0.3s ease';    }
  });

  link.addEventListener('mouseout', function () {
    const previousElement = link.previousElementSibling;
    if (previousElement && previousElement.tagName === 'I') {
      previousElement.style.color = 'var(--color2)';
      previousElement.style.transform = 'scale(1)';
    }
  });
});

let level3Items = document.querySelectorAll(".level-3 li");
level3Items.forEach(function (item) {
  item.addEventListener("click", function () {
    let link = item.querySelector("a");
    if (link) {
      window.location.href = link.href;
    }
  });
});
