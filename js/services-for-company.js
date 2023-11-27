const Prestations = [
    {
      index: "0",
      backgroundimage: "background: url(../images/prestations/team-building-background.avif);",
      image: "team-building.avif",
      title: "Team Building",
      subtitle: "JdR à l'entreprise",
      details: "Transformez vos sessions de team building en expériences uniques&nbsp;! Offrez à votre équipe une journée exceptionnelle de Jeu de Rôles directement dans vos locaux. Plongez ensemble dans des univers où la collaboration, la communication et la résolution de problèmes sont les clés du succès. Réservez maintenant pour un team building original qui renforcera les liens au sein de votre entreprise&nbsp;!",
      boxea: {
        one: {
          style: "font-size: 1.3em;",
          content: "<i class='fa-solid fa-clock'></i>"
        },
        two: {
          style: "font-size: 1.3em;",
          content: "4 à 8h"
        }
      },
      boxeb: {
        one: {
          style: "font-size: 1.7em;",
          content: "3-8"
        },
        two: {
          style: "",
          content: "<i class='fa-solid fa-users'></i>"
        }
      },
      boxec: {
        one: {
          style: "font-size: 1.7em;",
          content: "100€*"
        },
        two: {
          style: "",
          content: "/h"
        }
      },
      morebuttondown: "<i class='fa-solid fa-arrow-down'></i>&ensp;Estimation rapide&ensp;<i class='fa-solid fa-arrow-down'></i>",
      morebuttonup: "<i class='fa-solid fa-arrow-up'></i>&ensp;Estimation rapide&ensp;<i class='fa-solid fa-arrow-up'></i>",
      row01:
        `<label><i class="fa-solid fa-building"></i>&ensp;Entreprise</label>
          <br>
        <input type='text' name='company' id='company0' required>`,
      row02:
        `<label><i class='fa-solid fa-users'></i>&ensp;Nombre de participant·e·s</label>
          <select name='number-participants' id='number-participants0' required>
            <option value='' disabled selected>Choisir de 3 à 8 personnes</option>
            <option value='3'>3 personnes</option>
            <option value='4'>4 personnes</option>
            <option value='5'>5 personnes</option>
            <option value='6'>6 personnes</option>
            <option value='7'>7 personnes</option>
            <option value='8'>8 personnes</option>
          </select>`,
      row03:
        `<label><i class='fa-solid fa-clock'></i>&ensp;Durée de la partie</label>
        <select name='game-duration' id='game-duration0' required>
          <option value='' disabled selected>Choisir entre 4 à 8 heures</option>
          <option value='4'>4h</option>
          <option value='5'>5h</option>
          <option value='6'>6h</option>
          <option value='7'>7h</option>
          <option value='8'>8h</option>
        </select>`,
      row04:
        `<h3 class="radio__h3"><i class='fa-solid fa-feather-pointed'></i>&ensp;Atelier personnalisé</h3>
        <div id="workshop0">
        <input type='radio' id='workshop__yes0' name='workshop' value='yes'>
          <label for='workshop__yes0'>Oui</label>
        &emsp;
        <input type='radio' id='workshop__no0' name='workshop'value='no'>
          <label for='workshop__no0'>Non</label>
        </div>`,
      row05:
        `<h3 class="radio__h3"><i class='fa-solid fa-clock-rotate-left'></i>&ensp;Délai inférieur à 1 mois</h3>
        <div id="deadline0">
        <input type='radio' id='deadline__yes0' name='deadline' value='yes'>
          <label for='deadline__yes0'>Oui</label>
        &emsp;
        <input type='radio' id='deadline__no0' name='deadline'value='no'>
          <label for='deadline__no0'>Non</label>
        </div>`,
      row06:
        `<button class='geolocation__button' type='button' formnovalidate onclick='getGeolocation(0)'><i class='fa-solid fa-location-dot'></i>&ensp;Vous géolocaliser&nbsp;!</button>
        <h3 class='geolocation__h3'>ou saisir manuellement le lieu de l'atelier</h3>`,
      row07: `<input type='hidden' name='gps-coordinates' id='gps-coordinates0' required></input>`,
      row08:
        `<label><i class='fa-solid fa-house'></i>&ensp;Adresse</label>
          <br>
        <input type='text' name='address' id='address0' required></input>`,
      row09:
        `<label><i class='fa-solid fa-house'></i>&ensp;Code postal</label>
          <br>
        <input type='text' name='postal-code' id='postal-code0' required></input>`,
      row10:
        `<label><i class='fa-solid fa-house'></i>&ensp;Ville</label>
          <br>
        <input type='text' name='city' id='city0' required></input>`,
      row11:
        `<button class='cost-estimate' type='button' onclick='calcEstimate0()'>Estimer le coût</button>
        <table class="additional-form__table">
          <tr>
            <td class="additional-form__boxe-a"><i class="fa-solid fa-coins"></i>&ensp;Estimation globale</td>
            <td class="additional-form__boxe-b" id="additional-form__boxe-b0">-&nbsp;€</td>
          </tr>
        </table>
        <button class="card__contact-me"><i class='fa-solid fa-arrow-down'></i>&ensp;Pour me contacter&ensp;<i class='fa-solid fa-arrow-down'></i></button>`,
      row12: `<input type="hidden" name="overall-estimate" id="overall-estimate0" value="">`,
      row13:
        `<label><i class="fa-solid fa-user"></i>&ensp;Prénom</label>
          <br>
        <input type="text" name="first-name" required></input>`,
      row14:
        `<label><i class="fa-solid fa-user"></i>&ensp;Nom</label>
          <br>
        <input type="text" name="name" required></input>`,
      row15:
        `<label><i class="fa-solid fa-envelope"></i>&ensp;Courriel</label>
          <br>
        <input type="email" name="email" required>`,
      row16:
        `<label><i class="fa-solid fa-phone"></i>&ensp;Téléphone</label>
          <br>
        <input type="tel" pattern="[0-9]*" name="phone" required>`,
      row17: ``,
      row18: `<button class="card__send-button" id="card__send-button0" type="submit"><i class="fa-solid fa-paper-plane"></i>&ensp;Envoi</button>`,
    },
    {
      index: "1",
      backgroundimage: "background: url(../images/prestations/team-building-background-vtt.avif);",
      image: "team-building-vtt.avif",
      title: "Team Building",
      subtitle: "JdR à distance",
      details: "Pour une expérience de team building accessible à tous, optez pour une session de Jeu de Rôles à distance. À travers des outils de communication virtuels, votre équipe pourra partager une aventure immersive sans avoir à quitter leur bureau. Je guiderai les participants à travers des scénarios stimulants, favorisant ainsi la cohésion d'équipe. Préparez-vous pour un team building virtuel inoubliable&nbsp;!",
      boxea: {
        one: {
          style: "font-size: 1.7em;",
          content: "2-6"
        },
        two: {
          style: "",
          content: "<i class='fa-solid fa-users'></i>"
        }
      },
      boxeb: {
        one: {
          style: "font-size: 1.3em;",
          content: "<i class='fa-solid fa-clock'></i>"
        },
        two: {
          style: "font-size: 1.3em;",
          content: "4 à 8h"
        }
      },
      boxec: {
        one: {
          style: "font-size: 1.7em;",
          content: "12€*"
        },
        two: {
          style: "",
          content: "/h/<i class='fa-solid fa-users'></i>"
        }
      },
      morebuttondown: "<i class='fa-solid fa-arrow-down'></i>&ensp;Estimation rapide&ensp;<i class='fa-solid fa-arrow-down'></i>",
      morebuttonup: "<i class='fa-solid fa-arrow-up'></i>&ensp;Estimation rapide&ensp;<i class='fa-solid fa-arrow-up'></i>",
      row01:
        `<label><i class="fa-solid fa-building"></i>&ensp;Entreprise</label>
          <br>
        <input type='text' name='company' id='company1' required>`,
      row02:
        `<label><i class='fa-solid fa-users'></i>&ensp;Nombre de participant·e·s</label>
          <select name='number-participants' id='number-participants1' required>
            <option value='' disabled selected>Choisir de 2 à 6 personnes</option>
            <option value='2'>2 personnes</option>
            <option value='3'>3 personnes</option>
            <option value='4'>4 personnes</option>
            <option value='5'>5 personnes</option>
            <option value='6'>6 personnes</option>
          </select>`,
      row03:
        `<label><i class='fa-solid fa-clock'></i>&ensp;Durée de la partie</label>
        <select name='game-duration' id='game-duration1' required>
          <option value='' disabled selected>Choisir entre 4 à 8 heures</option>
          <option value='4'>4h</option>
          <option value='5'>5h</option>
          <option value='6'>6h</option>
          <option value='7'>7h</option>
          <option value='8'>8h</option>
        </select>`,
      row04:
          `<h3 class="radio__h3"><i class='fa-solid fa-feather-pointed'></i>&ensp;Atelier personnalisé</h3>
          <div id="workshop1">
          <input type='radio' id='workshop__yes1' name='workshop' value='yes'>
            <label for='workshop__yes1'>Oui</label>
          &emsp;
          <input type='radio' id='workshop__no1' name='workshop'value='no'>
            <label for='workshop__no1'>Non</label>
          </div>`,
      row05:
        `<h3 class="radio__h3"><i class='fa-solid fa-clock-rotate-left'></i>&ensp;Délai inférieur à 1 mois</h3>
        <div id="deadline1">
        <input type='radio' id='deadline__yes1' name='deadline' value='yes'>
          <label for='deadline__yes1'>Oui</label>
        &emsp;
        <input type='radio' id='deadline__no1' name='deadline'value='no'>
          <label for='deadline__no1'>Non</label>
        </div>`,
      row06:
        `<h3 class="radio__h3"><i class="fa-solid fa-video"></i>&ensp;Partie enregistrée</h3>
        <div id="recorded-game1">
        <input type='radio' id='recorded-game__yes1' name='recorded-game' value='yes'>
          <label for='recorded-game__yes1'>Oui</label>
        &emsp;
        <input type='radio' id='recorded-game__no1' name='recorded-game'value='no'>
          <label for='recorded-game__no1'>Non</label>
        </div>`,
      row07:
        `<button class="cost-estimate" type="button" onclick="calcEstimate1()">Estimer le coût</button>
        <table class="additional-form__table">
          <tr>
            <td class="additional-form__boxe-a"><i class="fa-solid fa-coins"></i>&ensp;Estimation globale</td>
            <td class="additional-form__boxe-b" id="additional-form__boxe-b1">-&nbsp;€</td>
          </tr>
        </table>
        <button class="card__contact-me"><i class='fa-solid fa-arrow-down'></i>&ensp;Pour me contacter&ensp;<i class='fa-solid fa-arrow-down'></i></button>`,
      row08: `<input type="hidden" name="overall-estimate" id="overall-estimate1" value="">`,
      row09:
        `<label><i class="fa-solid fa-user"></i>&ensp;Prénom</label>
          <br>
        <input type="text" name="first-name" required></input>`,
      row10:
        `<label><i class="fa-solid fa-user"></i>&ensp;Nom</label>
          <br>
        <input type="text" name="name" required></input>`,
      row11:
        `<label><i class="fa-solid fa-envelope"></i>&ensp;Courriel</label>
          <br>
        <input type="email" name="email" required>`,
      row12:
        `<label><i class="fa-solid fa-phone"></i>&ensp;Téléphone</label>
          <br>
        <input type="tel" pattern="[0-9]*" name="phone" required>`,
      row13: ``,
      row14: ``,
      row15: ``,
      row16: ``,
      row17: ``,
      row18: `<button class="card__send-button" id="card__send-button1" type="submit"><i class="fa-solid fa-paper-plane"></i>&ensp;Envoi</button>`,
    },
    {
      index: "2",
      backgroundimage: "background: url(../images/prestations/company-evenementiel-background.avif);",
      image: "company-evenementiel.avif",
      title: "Événementiel",
      subtitle: "JdR à l'entreprise",
      details: "Transformez vos célébrations d'entreprise en expériences uniques avec une animation de Jeu de Rôles. Que ce soit pour marquer la fin d'une année réussie, pour souhaiter les vœux en début d'année, pour marquer l'arrivée d'un·e collaborateur·rice ou saluer le départ d'un·e autre, le Jeu de Rôles apportera une dimension ludique et mémorable à ces temps forts.",
      boxea: {
        one: {
          style: "font-size: 1.3em;",
          content: "<i class='fa-solid fa-clock'></i>"
        },
        two: {
          style: "font-size: 1.3em;",
          content: "4 à 8h"
        }      },
      boxeb: {
        one: {
          style: "font-size: 1.7em;",
          content: "3-10"
        },
        two: {
          style: "",
          content: "<i class='fa-solid fa-users'></i>"
        }
      },
      boxec: {
        one: {
          style: "font-size: 1.7em;",
          content: "90€*"
        },
        two: {
          style: "",
          content: "/h"
        }
      },
      morebuttondown: "<i class='fa-solid fa-arrow-down'></i>&ensp;Estimation rapide&ensp;<i class='fa-solid fa-arrow-down'></i>",
      morebuttonup: "<i class='fa-solid fa-arrow-up'></i>&ensp;Estimation rapide&ensp;<i class='fa-solid fa-arrow-up'></i>",
      row01:
        `<label><i class="fa-solid fa-building"></i>&ensp;Entreprise</label>
          <br>
        <input type='text' name='company' id='company2' required>`,
      row02:
        `<label><i class='fa-solid fa-users'></i>&ensp;Nombre de participant·e·s</label>
          <select name='number-participants' id='number-participants2' required>
            <option value='' disabled selected>Choisir de 3 à 10 personnes</option>
            <option value='3'>3 personnes</option>
            <option value='4'>4 personnes</option>
            <option value='5'>5 personnes</option>
            <option value='6'>6 personnes</option>
            <option value='7'>7 personnes</option>
            <option value='8'>8 personnes</option>
            <option value='9'>9 personnes</option>
            <option value='10'>10 personnes</option>
          </select>`,
      row03:
        `<label><i class='fa-solid fa-clock'></i>&ensp;Durée de la partie</label>
        <select name='game-duration' id='game-duration2' required>
          <option value='' disabled selected>Choisir entre 4 à 8 heures</option>
          <option value='4'>4h</option>
          <option value='5'>5h</option>
          <option value='6'>6h</option>
          <option value='7'>7h</option>
          <option value='8'>8h</option>
        </select>`,
      row04:
        `<h3 class="radio__h3"><i class='fa-solid fa-feather-pointed'></i>&ensp;Atelier personnalisé</h3>
        <div id="workshop2">
        <input type='radio' id='workshop__yes2' name='workshop' value='yes'>
          <label for='workshop__yes2'>Oui</label>
        &emsp;
        <input type='radio' id='workshop__no2' name='workshop'value='no'>
          <label for='workshop__no2'>Non</label>
        </div>`,
      row05:
        `<h3 class="radio__h3"><i class='fa-solid fa-clock-rotate-left'></i>&ensp;Délai inférieur à 1 mois</h3>
        <div id="deadline2">
        <input type='radio' id='deadline__yes2' name='deadline' value='yes'>
          <label for='deadline__yes2'>Oui</label>
        &emsp;
        <input type='radio' id='deadline__no2' name='deadline'value='no'>
          <label for='deadline__no2'>Non</label>
        </div>`,
      row06:
        `<button class='geolocation__button' type='button' formnovalidate onclick='getGeolocation(2)'><i class='fa-solid fa-location-dot'></i>&ensp;Vous géolocaliser&nbsp;!</button>
        <h3 class='geolocation__h3'>ou saisir manuellement le lieu de l'atelier</h3>`,
      row07: `<input type='hidden' name='gps-coordinates' id='gps-coordinates2' required></input>`,
      row08:
        `<label><i class='fa-solid fa-house'></i>&ensp;Adresse</label>
          <br>
        <input type='text' name='address' id='address2' required></input>`,
      row09:
        `<label><i class='fa-solid fa-house'></i>&ensp;Code postal</label>
          <br>
        <input type='text' name='postal-code' id='postal-code2' required></input>`,
      row10:
        `<label><i class='fa-solid fa-house'></i>&ensp;Ville</label>
          <br>
        <input type='text' name='city' id='city2' required></input>`,
      row11:
        `<button class="cost-estimate" type="button" onclick="calcEstimate2()">Estimer le coût</button>
        <table class="additional-form__table">
          <tr>
            <td class="additional-form__boxe-a"><i class="fa-solid fa-coins"></i>&ensp;Estimation globale</td>
            <td class="additional-form__boxe-b" id="additional-form__boxe-b2">-&nbsp;€</td>
          </tr>
        </table>
        <button class="card__contact-me"><i class='fa-solid fa-arrow-down'></i>&ensp;Pour me contacter&ensp;<i class='fa-solid fa-arrow-down'></i></button>`,
      row12: `<input type="hidden" name="overall-estimate" id="overall-estimate2" value="">`,
      row13:
        `<label><i class="fa-solid fa-user"></i>&ensp;Prénom</label>
          <br>
        <input type="text" name="first-name" required></input>`,
      row14:
        `<label><i class="fa-solid fa-user"></i>&ensp;Nom</label>
          <br>
        <input type="text" name="name" required></input>`,
      row15:
        `<label><i class="fa-solid fa-envelope"></i>&ensp;Courriel</label>
          <br>
        <input type="email" name="email" required>`,
      row16:
        `<label><i class="fa-solid fa-phone"></i>&ensp;Téléphone</label>
          <br>
        <input type="tel" pattern="[0-9]*" name="phone" required>`,
      row17: ``,
      row18: `<button class="card__send-button" id="card__send-button2" type="submit"><i class="fa-solid fa-paper-plane"></i>&ensp;Envoi</button>`,
    }
  ]
  
  const cardsContainer = document.getElementById('cards-container');
  Prestations.forEach((prestation) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <div class="card__image" style="${prestation.backgroundimage} background-size: cover;">
        <img src="../images/prestations/${prestation.image}" alt="${prestation.title}"/>
      </div>
      <div class="card__subtitle">${prestation.subtitle}</div>
      <div class="card__title">${prestation.title}</div>
      <div class="card__details">${prestation.details}</div>
      <div class="card__boxes">
        <div class="card__boxe-a">
          <div class="card__boxe-a1" style="${prestation.boxea.one.style}">${prestation.boxea.one.content}</div>
          <div class="card__boxe-a2" style="${prestation.boxea.two.style}">${prestation.boxea.two.content}</div>
        </div>
        <div class="card__boxe-b">
        <div class="card__boxe-b1" style="${prestation.boxeb.one.style}">${prestation.boxeb.one.content}</div>
        <div class="card__boxe-b2" style="${prestation.boxeb.two.style}">${prestation.boxeb.two.content}</div>
        </div>
        <div class="card__boxe-c">
        <div class="card__boxe-c1" style="${prestation.boxec.one.style}">${prestation.boxec.one.content}</div>
        <div class="card__boxe-c2" style="${prestation.boxec.two.style}">${prestation.boxec.two.content}</div>
        </div>
      </div>
      <div><button class="card__more-button" id="card__more-button${prestation.index}" onclick="toggleAdditionalForm(${prestation.index})">${prestation.morebuttondown}</button></div>
      <div class="additional-form" id="additional-form${prestation.index}">
        <form action="process-form__services-for-company.php" method="post">
          <div class="group">
            <input type="hidden" name="service" value="${prestation.title} · ${prestation.subtitle}">
          </div>
          <div class="group">
            ${prestation.row01}
          </div>
          <div class="group">
            ${prestation.row02}
          </div>
          <div class="group">
            ${prestation.row03}
          </div>
          <div class="group">
            ${prestation.row04}
          </div>
          <div class="group">
            ${prestation.row05}
          </div>
          <div class="group">
            ${prestation.row06}
          </div>
          <div class="group">
            ${prestation.row07}
          </div>
          <div class="group">
            ${prestation.row08}
          </div>
          <div class="group">
            ${prestation.row09}
          </div>
          <div class="group">
            ${prestation.row10}
          </div>
          <div class="group">
            ${prestation.row11}
          </div>
          <div class="group">
            ${prestation.row12}
          </div>
          <div class="group">
            ${prestation.row13}
          </div>
          <div class="group">
            ${prestation.row14}
          </div>
          <div class="group">
            ${prestation.row15}
          </div>
          <div class="group">
            ${prestation.row16}
          </div>
          <div class="group">
            ${prestation.row17}
          </div>
          <div class="group">
            ${prestation.row18}
          </div>
        </form>
      </div>
    `;
    cardsContainer.appendChild(card);
  });
  
  function getGeolocation(index) {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const elementId = `gps-coordinates${index}`;
        const accuracy = position.coords.accuracy;
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}, Accuracy: ${accuracy}m`);
  
        // Insère les coordonnées dans l'élément avec le nom approprié
        document.getElementById(elementId).value = `${latitude}, ${longitude}`;
  
        // Effectue une requête de géocodage inverse à OpenStreetMap
        fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&zoom=20&format=json`)
          .then(response => response.json())
          .then(data => {
            // Récupère les informations d'adresse à partir de la réponse JSON
            const fulladdress = data.display_name;
            console.log(fulladdress);
            const address = data.address.road;
            const postalCode = data.address.postcode;
            const city = data.address.village;
  
            // Remplit les champs d'adresse, postal-code et city correspondants
            document.getElementById(`address${index}`).value = address;
            document.getElementById(`postal-code${index}`).value = postalCode;
            document.getElementById(`city${index}`).value = city;          
          })
          .catch(error => {
            console.error("Erreur de géocodage inverse : ", error);
          });
      }, function(error) {
        console.error("Erreur de géolocalisation : ", error);
      });
    } else {
      alert("La géolocalisation n'est pas prise en charge par votre navigateur.");
    }
  }
  
  function toggleAdditionalForm(index) {
    var additionalForm = document.getElementById("additional-form" + index);
    var moreButton = document.getElementById("card__more-button" + index);
  
    if (additionalForm.style.display === "block") {
      additionalForm.style.display = "none";
      moreButton.innerHTML = Prestations[index].morebuttondown;
    } else {
      additionalForm.style.display = "block";
      moreButton.innerHTML = Prestations[index].morebuttonup;
    }
  }
  
  const cards = document.querySelectorAll('.card');
  const numCards = cards.length;
  let currentIndex = 0;
  let startX;
  
  document.getElementById('button__left-btn').addEventListener('click', () => {
    goToCard(currentIndex - 1);
    console.log("left click");
  });
  
  document.getElementById('button__right-btn').addEventListener('click', () => {
    goToCard(currentIndex + 1);
    console.log("right click");
  });
  
  document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowLeft') {
      goToCard(currentIndex - 1);
    } else if (event.key === 'ArrowRight') {
      goToCard(currentIndex + 1);
    }
  });
  
  document.addEventListener('touchstart', (event) => {
    startX = event.touches[0].clientX;
  });
  
  document.addEventListener('touchmove', (event) => {
    const currentX = event.touches[0].clientX;
    const deltaX = startX - currentX;
  
    if (deltaX > 50) { // Glissement vers la gauche
      goToCard(currentIndex + 1);
    } else if (deltaX < -50) { // Glissement vers la droite
      goToCard(currentIndex - 1);
    }
  });
  
  document.addEventListener('touchend', () => {
    startX = null;
  });
  
  let firstLoad = true;
  
  function goToCard(index) {
    // Assurez-vous que l'index reste dans les limites
    if (index < 0) {
      index = numCards - 1;
    } else if (index >= numCards) {
      index = 0;
    }
  
    // Si c'est la première utilisation, masquez immédiatement toutes les cartes sauf la carte cible
    if (firstLoad) {
      cards.forEach((card, i) => {
        if (i !== index) {
          card.style.display = 'none';
        } else {
          card.style.display = 'block';
        }
      });
      currentIndex = index;
      firstLoad = false; // Marquez que la première utilisation est terminée
    } else {
      // Masquez la carte actuelle avec une animation
      gsap.fromTo(cards[currentIndex], { opacity: 1 }, { opacity: 0, duration: 0.75, onComplete: () => {
        cards[currentIndex].style.display = 'none';
        currentIndex = index;
        cards[currentIndex].style.display = 'block';
        gsap.fromTo(cards[currentIndex], { opacity: 0 }, { opacity: 1, duration: 0.75 });
      }});
    }
  }
  
  goToCard(0);
  
  function calcEstimate0() {
    // Récupérer les valeurs des champs
    var companyField = document.getElementById("company0");
    var participantsField = document.getElementById("number-participants0");
    var durationField = document.getElementById("game-duration0");
    var workshopField = document.getElementById("workshop0");
    var workshoopYes = document.getElementById("workshop__yes0").checked;
    var workshoopNo = document.getElementById("workshop__no0").checked;
    var deadlineTitle = document.getElementById("deadline0");
    var deadlineYes = document.getElementById("deadline__yes0").checked;
    var deadlineNo = document.getElementById("deadline__no0").checked;
    var addressField = document.getElementById("address0");
    var postalCodeField = document.getElementById("postal-code0");
    var cityField = document.getElementById("city0");
  
    // Réinitialiser les classes CSS pour enlever la surbrillance des champs précédemment vides
    companyField.classList.remove("highlight-empty");
    participantsField.classList.remove("highlight-empty");
    durationField.classList.remove("highlight-empty");
    workshopField.classList.remove("highlight-empty");
    deadlineTitle.classList.remove("highlight-empty");
    addressField.classList.remove("highlight-empty");
    postalCodeField.classList.remove("highlight-empty");
    cityField.classList.remove("highlight-empty");
  
    // Vérifier que les champs nécessaires sont remplis
    var isFormValid = true;

    if (companyField.value === "") {
      companyField.classList.add("highlight-empty");
      isFormValid = false;
    }
    if (participantsField.value === "") {
      participantsField.classList.add("highlight-empty");
      isFormValid = false;
    }
    if (durationField.value === "") {
      durationField.classList.add("highlight-empty");
      isFormValid = false;
    }
    if (!workshoopYes && !workshoopNo) {
      workshopField.classList.add("highlight-empty");
      isFormValid = false;
    }
    if (!deadlineYes && !deadlineNo) {
      deadlineTitle.classList.add("highlight-empty");
      isFormValid = false;
    }
    if (addressField.value === "") {
      addressField.classList.add("highlight-empty");
      isFormValid = false;
    }
    if (postalCodeField.value === "") {
      postalCodeField.classList.add("highlight-empty");
      isFormValid = false;
    }
    if (cityField.value === "") {
      cityField.classList.add("highlight-empty");
      isFormValid = false;
    }
  
    if (isFormValid) {
      const address = addressField.value;
      const postalCode = postalCodeField.value;
      const city = cityField.value;
  
      const fullAddress = `${address}, ${postalCode}, ${city}`;
      console.log(fullAddress);
  
      fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${fullAddress}`)
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          const { lat, lon } = data[0];
          console.log('Latitude: ' + lat + ', Longitude: ' + lon);
          
          const start = "6.3600843,49.1175071";
          const end = `${lon},${lat}`;
          console.log(end);
  
          const osrmApiUrl = `https://router.project-osrm.org/route/v1/driving/${start};${end}`;
          console.log('OSRM API URL: ' + osrmApiUrl);
  
          fetch(osrmApiUrl)
            .then(response => response.json())
            .then(data => {
              const distance = data.routes[0].distance / 1000;
              const costPerKm = 0.55;
              totalCost = distance * costPerKm;
  
              console.log('Distance: ' + distance.toFixed(2) + 'km');
              console.log('One-way Kilometer Cost: ' + totalCost.toFixed(2) + '€');
              console.log('Total Cost: ' + (2 * totalCost).toFixed(2) + '€');
  
              const isWorkshop = workshoopYes;
              console.log('Workshop: ' + isWorkshop);
              const isDeadlineLessThanOneMonth = deadlineYes;
              console.log('Deadline: ' + isDeadlineLessThanOneMonth);
  
              let basePrice = 100; // 100€ par heure
              let referencePrice = basePrice * durationField.value;
              console.log('Reference Price: ' + referencePrice);
              let weightedPrice = referencePrice;
              if (isWorkshop && isDeadlineLessThanOneMonth) {
                weightedPrice = referencePrice * 1.8;
              } else if (isWorkshop) {
                weightedPrice = referencePrice * 1.5;
              } else if (isDeadlineLessThanOneMonth) {
                weightedPrice = referencePrice * 1.3;
              }
              console.log('Weighted Price: ' + weightedPrice);
              const totalCostValue = totalCost;
              console.log('Final Estimate = ' + weightedPrice + ' + 2 * ' + totalCost);
              const finalEstimation = weightedPrice + (2 * totalCostValue);
              console.log('Final Estimate: ' + finalEstimation);
              const estimateBox = document.getElementById("additional-form__boxe-b0");
              const estimateInput = document.getElementById("overall-estimate0");
              estimateBox.textContent = Math.ceil(finalEstimation) + "€";
              estimateInput.value = finalEstimation.toFixed(2) + "€";
  
            })
            .catch(error => {
              alert('Remplissez tous les champs et/ou vérifier l\'adresse.');
            });
  
        } else {
          console.log('Address not found');
        }
      })
      .catch(error => {
        console.error('Request error:', error);
        console.log('An error occurred.');
      });
      
    } else {
      alert("Veuillez remplir tous les champs nécessaires.");
    }
  }
   
  function calcEstimate1() {
    // Récupérer les valeurs des champs
    var companyField = document.getElementById("company1");
    var participantsField = document.getElementById("number-participants1");
    var durationField = document.getElementById("game-duration1");
    var workshopField = document.getElementById("workshop1");
    var workshoopYes = document.getElementById("workshop__yes1").checked;
    var workshoopNo = document.getElementById("workshop__no1").checked;
    var deadlineTitle = document.getElementById("deadline1");
    var deadlineYes = document.getElementById("deadline__yes1").checked;
    var deadlineNo = document.getElementById("deadline__no1").checked;
    var recordedGameTitle = document.getElementById("recorded-game1");
    var recordedGameYes = document.getElementById("recorded-game__yes1").checked;
    var recordedGameNo = document.getElementById("recorded-game__no1").checked;
      
    // Réinitialiser les classes CSS pour enlever la surbrillance des champs précédemment vides
    companyField.classList.remove("highlight-empty");
    participantsField.classList.remove("highlight-empty");
    durationField.classList.remove("highlight-empty");
    workshopField.classList.remove("highlight-empty");
    deadlineTitle.classList.remove("highlight-empty");
    recordedGameTitle.classList.remove("highlight-empty");
  
    // Vérifier que les champs nécessaires sont remplis
    var isFormValid = true;
  
    if (companyField.value === "") {
      companyField.classList.add("highlight-empty");
      isFormValid = false;
    }
    if (participantsField.value === "") {
      participantsField.classList.add("highlight-empty");
      isFormValid = false;
    }
    if (durationField.value === "") {
      durationField.classList.add("highlight-empty");
      isFormValid = false;
    }
    if (!workshoopYes && !workshoopNo) {
      workshopField.classList.add("highlight-empty");
      isFormValid = false;
    }
    if (!deadlineYes && !deadlineNo) {
      deadlineTitle.classList.add("highlight-empty");
      isFormValid = false;
    }
    if (!recordedGameYes && !recordedGameNo) {
      recordedGameTitle.classList.add("highlight-empty");
      isFormValid = false;
    }
  
    if (isFormValid) {
      const participants = parseInt(participantsField.value);
      console.log('Participants: ' + participants);
      const duration = parseInt(durationField.value);
      console.log('Duration: ' + duration);
      const isWorkshop = workshoopYes;
      console.log('Workshop: ' + isWorkshop);
      const isDeadlineLessThanOneMonth = deadlineYes;
      console.log('Deadline: ' + isDeadlineLessThanOneMonth);
      const isRecordedGame = recordedGameYes;
      console.log('Recorded Game: ' + isRecordedGame);

      let basePrice = 12; // 12€ par heure et par personne
      let referencePrice = basePrice * duration * participants;
      console.log('Reference Price: ' + referencePrice);
      let weightedPrice = referencePrice;
      if (isWorkshop && isDeadlineLessThanOneMonth && isRecordedGame) {
        weightedPrice = referencePrice * 1.7; // 50% + 30% - 10% = 70% 
      } else if (isWorkshop && isDeadlineLessThanOneMonth) {
        weightedPrice = referencePrice * 1.8; // 50% + 30% = 80%
      } else if (isWorkshop && isRecordedGame) {
        weightedPrice = referencePrice * 1.4; // 50% - 10% = 40%
      } else if (isWorkshop) {
        weightedPrice = referencePrice * 1.5; // 50%
      } else if (isDeadlineLessThanOneMonth && isRecordedGame) {
        weightedPrice = referencePrice * 1.2; // 30% - 10% = 20%
      } else if (isDeadlineLessThanOneMonth) {
        weightedPrice = referencePrice * 1.3; // 30%
      } else if (isRecordedGame) {
        weightedPrice = referencePrice * 0.9; // -10%
      } 
      console.log('Weighted Price: ' + weightedPrice);
      const finalEstimation = weightedPrice;
      console.log('Final Estimate: ' + finalEstimation);
      const estimateBox = document.getElementById("additional-form__boxe-b1");
      const estimateInput = document.getElementById("overall-estimate1");
      estimateBox.textContent = Math.ceil(finalEstimation) + "€";
      estimateInput.value = finalEstimation.toFixed(2) + "€";
    } else {
      alert("Veuillez remplir tous les champs nécessaires.");
    }
  }

  function calcEstimate2() {
    // Récupérer les valeurs des champs
    var companyField = document.getElementById("company2");
    var participantsField = document.getElementById("number-participants2");
    var durationField = document.getElementById("game-duration2");
    var workshopField = document.getElementById("workshop2");
    var workshoopYes = document.getElementById("workshop__yes2").checked;
    var workshoopNo = document.getElementById("workshop__no2").checked;
    var deadlineTitle = document.getElementById("deadline2");
    var deadlineYes = document.getElementById("deadline__yes2").checked;
    var deadlineNo = document.getElementById("deadline__no2").checked;
    var addressField = document.getElementById("address2");
    var postalCodeField = document.getElementById("postal-code2");
    var cityField = document.getElementById("city2");
  
    // Réinitialiser les classes CSS pour enlever la surbrillance des champs précédemment vides
    companyField.classList.remove("highlight-empty");
    participantsField.classList.remove("highlight-empty");
    durationField.classList.remove("highlight-empty");
    workshopField.classList.remove("highlight-empty");
    deadlineTitle.classList.remove("highlight-empty");
    addressField.classList.remove("highlight-empty");
    postalCodeField.classList.remove("highlight-empty");
    cityField.classList.remove("highlight-empty");
  
    // Vérifier que les champs nécessaires sont remplis
    var isFormValid = true;

    if (companyField.value === "") {
      companyField.classList.add("highlight-empty");
      isFormValid = false;
    }
    if (participantsField.value === "") {
      participantsField.classList.add("highlight-empty");
      isFormValid = false;
    }
    if (durationField.value === "") {
      durationField.classList.add("highlight-empty");
      isFormValid = false;
    }
    if (!workshoopYes && !workshoopNo) {
      workshopField.classList.add("highlight-empty");
      isFormValid = false;
    }
    if (!deadlineYes && !deadlineNo) {
      deadlineTitle.classList.add("highlight-empty");
      isFormValid = false;
    }
    if (addressField.value === "") {
      addressField.classList.add("highlight-empty");
      isFormValid = false;
    }
    if (postalCodeField.value === "") {
      postalCodeField.classList.add("highlight-empty");
      isFormValid = false;
    }
    if (cityField.value === "") {
      cityField.classList.add("highlight-empty");
      isFormValid = false;
    }
  
    if (isFormValid) {
      const address = addressField.value;
      const postalCode = postalCodeField.value;
      const city = cityField.value;
  
      const fullAddress = `${address}, ${postalCode}, ${city}`;
      console.log(fullAddress);
  
      fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${fullAddress}`)
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          const { lat, lon } = data[0];
          console.log('Latitude: ' + lat + ', Longitude: ' + lon);
          
          const start = "6.3600843,49.1175071";
          const end = `${lon},${lat}`;
          console.log(end);
  
          const osrmApiUrl = `https://router.project-osrm.org/route/v1/driving/${start};${end}`;
          console.log('OSRM API URL: ' + osrmApiUrl);
  
          fetch(osrmApiUrl)
            .then(response => response.json())
            .then(data => {
              const distance = data.routes[0].distance / 1000;
              const costPerKm = 0.55;
              totalCost = distance * costPerKm;
  
              console.log('Distance: ' + distance.toFixed(2) + 'km');
              console.log('One-way Kilometer Cost: ' + totalCost.toFixed(2) + '€');
              console.log('Total Cost: ' + (2 * totalCost).toFixed(2) + '€');
  
              const isWorkshop = workshoopYes;
              console.log('Workshop: ' + isWorkshop);
              const isDeadlineLessThanOneMonth = deadlineYes;
              console.log('Deadline: ' + isDeadlineLessThanOneMonth);
  
              let basePrice = 90; // 90€ par heure
              let referencePrice = basePrice * durationField.value;
              console.log('Reference Price: ' + referencePrice);
              let weightedPrice = referencePrice;
              if (isWorkshop && isDeadlineLessThanOneMonth) {
                weightedPrice = referencePrice * 1.8;
              } else if (isWorkshop) {
                weightedPrice = referencePrice * 1.5;
              } else if (isDeadlineLessThanOneMonth) {
                weightedPrice = referencePrice * 1.3;
              }
              console.log('Weighted Price: ' + weightedPrice);
              const totalCostValue = totalCost;
              console.log('Final Estimate = ' + weightedPrice + ' + 2 * ' + totalCost);
              const finalEstimation = weightedPrice + (2 * totalCostValue);
              console.log('Final Estimate: ' + finalEstimation);
              const estimateBox = document.getElementById("additional-form__boxe-b2");
              const estimateInput = document.getElementById("overall-estimate2");
              estimateBox.textContent = Math.ceil(finalEstimation) + "€";
              estimateInput.value = finalEstimation.toFixed(2) + "€";
  
            })
            .catch(error => {
              alert('Remplissez tous les champs et/ou vérifier l\'adresse.');
            });
  
        } else {
          console.log('Address not found');
        }
      })
      .catch(error => {
        console.error('Request error:', error);
        console.log('An error occurred.');
      });
      
    } else {
      alert("Veuillez remplir tous les champs nécessaires.");
    }
  }