const Prestations = [
  {
    index: "0",
    backgroundimage: "background: url(../images/prestations/evenementiel-background.avif);",
    image: "evenementiel.avif",
    title: "Événementiel",
    subtitle: "JdR à domicile",
    details: "Vous cherchez à pimenter votre prochaine fête d'anniversaire ou autre événement spécial ? Ne cherchez plus ! Offrez-vous une expérience unique de Jeux de Rôles à domicile. Laissez-moi vous emmener dans un monde fantastique où votre imagination est la seule limite. Réservez dès maintenant pour un moment inoubliable&nbsp;!",
    boxea: {
      one: {
        style: "font-size: 1.7em;",
        content: "7-99"
      },
      two: {
        style: "",
        content: "Âge"
      }
    },
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
        content: "10€*"
      },
      two: {
        style: "",
        content: "/h/<i class='fa-solid fa-users'></i>"
      }
    },
    morebuttondown: "<i class='fa-solid fa-arrow-down'></i>&ensp;Estimation rapide&ensp;<i class='fa-solid fa-arrow-down'></i>",
    morebuttonup: "<i class='fa-solid fa-arrow-up'></i>&ensp;Estimation rapide&ensp;<i class='fa-solid fa-arrow-up'></i>",
    row01:
      `<label><i class='fa-solid fa-user-clock'></i>&ensp;Âge des participant·e·s</label>
        <br>
      <input type='text' pattern='[0-9]*' min='10' max='99' inputmode='numeric' name='age' id='age0' required>`,
    row02:
      `<label><i class='fa-solid fa-users'></i>&ensp;Nombre de participant·e·s</label>
      <select name='number-participants' id='number-participants0' required>
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
      <select name='game-duration' id='game-duration0' required>
        <option value='' disabled selected>Choisir de 1 à 3 heures</option>
        <option value='1'>1h</option>
        <option value='2'>2h</option>
        <option value='3'>3h</option>
      </select>`,
    row04:
      `<h3 class="radio__h3"><i class='fa-solid fa-feather-pointed'></i>&ensp;Scénario personnalisé</h3>
      <div id="scenario0">
      <input type='radio' id='scenario__yes0' name='scenario' value='yes'>
        <label for='scenario__yes0'>Oui</label>
      &emsp;
      <input type='radio' id='scenario__no0' name='scenario'value='no'>
        <label for='scenario__no0'>Non</label>
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
      <h3 class='geolocation__h3'>ou saisir manuellement le lieu de la partie</h3>`,
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
    backgroundimage: "background: url(../images/prestations/initiation-background.avif);",
    image: "initiation.avif",
    title: "Initiation",
    subtitle: "JdR à domicile",
    details: "Vous avez toujours voulu essayer le Jeu de Rôles mais vous ne savez pas par où commencer ? Vous êtes au bon endroit ! Je vous propose une initiation au Jeu de Rôles à domicile. Je vous expliquerai les bases du JdR et je vous guiderai dans votre première aventure. Réservez dès maintenant&nbsp;!",
    boxea: {
      one: {
        style: "font-size: 1.7em;",
        content: "10-99"
      },
      two: {
        style: "",
        content: "Âge"
      }
    },
    boxeb: {
      one: {
        style: "font-size: 1.7em;",
        content: "1-6"
      },
      two: {
        style: "",
        content: "<i class='fa-solid fa-users'></i>"
      }
    },
    boxec: {
      one: {
        style: "font-size: 1.7em;",
        content: "50€*"
      },
      two: {
        style: "",
        content: "/h"
      }
    },
    morebuttondown: "<i class='fa-solid fa-arrow-down'></i>&ensp;Estimation rapide&ensp;<i class='fa-solid fa-arrow-down'></i>",
    morebuttonup: "<i class='fa-solid fa-arrow-up'></i>&ensp;Estimation rapide&ensp;<i class='fa-solid fa-arrow-up'></i>",
    row01:
      `<label><i class='fa-solid fa-user-clock'></i>&ensp;Âge des participant·e·s</label>
        <br>
      <input type='text' pattern='[0-9]*' min='10' max='99' inputmode='numeric' name='age' id='age1' required>`,
    row02:
      `<label><i class='fa-solid fa-users'></i>&ensp;Nombre de participant·e·s</label>
        <select name='number-participants' id='number-participants1' required>
          <option value='' disabled selected>Choisir de 1 à 6 personnes</option>
          <option value='1'>1 personne</option>
          <option value='2'>2 personnes</option>
          <option value='3'>3 personnes</option>
          <option value='4'>4 personnes</option>
          <option value='5'>5 personnes</option>
          <option value='6'>6 personnes</option>
        </select>`,
    row03:
      `<label><i class='fa-solid fa-clock'></i>&ensp;Durée de la partie</label>
        <br>
      <input type='text' pattern='[0-9]*' inputmode='numeric' name='game-duration' id='game-duration1' required>`,
    row04:
      `<h3 class="radio__h3"><i class='fa-solid fa-feather-pointed'></i>&ensp;Scénario personnalisé</h3>
      <div id="scenario1">
      <input type='radio' id='scenario__yes1' name='scenario' value='yes'>
        <label for='scenario__yes1'>Oui</label>
      &emsp;
      <input type='radio' id='scenario__no1' name='scenario'value='no'>
        <label for='scenario__no1'>Non</label>
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
      `<button class="geolocation__button" type="button" formnovalidate onclick="getGeolocation(1)"><i class="fa-solid fa-location-dot"></i>&ensp;Vous géolocaliser&nbsp;!</button>
      <h3 class="geolocation__h3">ou saisir manuellement le lieu de la partie</h3>`,
    row07: `<input type="hidden" name="gps-coordinates" id="gps-coordinates1" required></input>`,
    row08:
      `<label><i class="fa-solid fa-house"></i>&ensp;Adresse</label>
        <br>
      <input type="text" name="address" id="address1" required></input>`,
    row09:
      `<label><i class="fa-solid fa-house"></i>&ensp;Code postal</label>
        <br>
      <input type="text" name="postal-code" id="postal-code1" required></input>`,
    row10:
      `<label><i class="fa-solid fa-house"></i>&ensp;Ville</label>
        <br>
      <input type="text" name="city" id="city1" required></input>`,
    row11:
      `<button class="cost-estimate" type="button" onclick="calcEstimate1()">Estimer le coût</button>
      <table class="additional-form__table">
        <tr>
          <td class="additional-form__boxe-a"><i class="fa-solid fa-coins"></i>&ensp;Estimation globale</td>
          <td class="additional-form__boxe-b" id="additional-form__boxe-b1">-&nbsp;€</td>
        </tr>
      </table>
      <button class="card__contact-me"><i class='fa-solid fa-arrow-down'></i>&ensp;Pour me contacter&ensp;<i class='fa-solid fa-arrow-down'></i></button>`,
    row12: `<input type="hidden" name="overall-estimate" id="overall-estimate1" value="">`,
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
    row18: `<button class="card__send-button" id="card__send-button1" type="submit"><i class="fa-solid fa-paper-plane"></i>&ensp;Envoi</button>`,
  },
  {
    index: "2",
    backgroundimage: "background: url(../images/prestations/initiation-vtt-background.avif);",
    image: "initiation-vtt.avif",
    title: "Initiation",
    subtitle: "JdR à distance",
    details: "Vous êtes tenté·e par le Jeu de Rôles mais vous ne savez ni comment ni avec qui&nbsp;? Alors venez découvrir le JdR, dans le confort de votre fauteuil. Grâce à une session d'initiation à distance, apprenez les bases du Jeu de Rôles sans avoir à bouger de chez vous. Je vous guiderai à travers les règles essentielles et nos écrans partagés vous plongeront au cœur de l'action. Préparez clavier et souris pour votre première aventure en ligne&nbsp;!",
    boxea: {
      one: {
        style: "font-size: 1.7em;",
        content: "10-99"
      },
      two: {
        style: "",
        content: "Âge"
      }
    },
    boxeb: {
      one: {
        style: "font-size: 1.3em;",
        content: "<i class='fa-solid fa-clock'></i>"
      },
      two: {
        style: "font-size: 1.3em;",
        content: "3 ou 4h"
      }
    },
    boxec: {
      one: {
        style: "font-size: 1.7em;",
        content: "10€*"
      },
      two: {
        style: "",
        content: "/h/<i class='fa-solid fa-users'></i>"
      }
    },
    morebuttondown: "<i class='fa-solid fa-arrow-down'></i>&ensp;Estimation rapide&ensp;<i class='fa-solid fa-arrow-down'></i>",
    morebuttonup: "<i class='fa-solid fa-arrow-up'></i>&ensp;Estimation rapide&ensp;<i class='fa-solid fa-arrow-up'></i>",
    row01:
      `<label><i class='fa-solid fa-user-clock'></i>&ensp;Âge des participant·e·s</label>
        <br>
      <input type='text' pattern='[0-9]*' min='10' max='99' inputmode='numeric' name='age' id='age2' required>`,
    row02:
      `<label><i class='fa-solid fa-users'></i>&ensp;Nombre de participant·e·s</label>
        <select name='number-participants' id='number-participants2' required>
          <option value='' disabled selected>Choisir de 1 à 6 personnes</option>
          <option value='1'>1 personne</option>
          <option value='2'>2 personnes</option>
          <option value='3'>3 personnes</option>
          <option value='4'>4 personnes</option>
          <option value='5'>5 personnes</option>
          <option value='6'>6 personnes</option>
        </select>`,
    row03:
      `<h3 class="radio__h3"><i class='fa-solid fa-clock'></i>&ensp;Durée de la partie</h3>
      <div id="game-duration2">
      <input type='radio' id='game-duration__three2' name='game-duration' value='3'>
        <label for='game-duration__three2'>3h</label>
      &emsp;
      <input type='radio' id='game-duration__four2' name='game-duration'value='4'>
        <label for='game-duration__four2'>4h</label>
      </div>`,
    row04:
      `<h3 class="radio__h3"><i class='fa-solid fa-feather-pointed'></i>&ensp;Scénario personnalisé</h3>
      <div id="scenario2">
      <input type='radio' id='scenario__yes2' name='scenario' value='yes'>
        <label for='scenario__yes2'>Oui</label>
      &emsp;
      <input type='radio' id='scenario__no2' name='scenario'value='no'>
        <label for='scenario__no2'>Non</label>
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
      `<h3 class="radio__h3"><i class="fa-solid fa-video"></i>&ensp;Partie enregistrée</h3>
      <div id="recorded-game2">
      <input type='radio' id='recorded-game__yes2' name='recorded-game' value='yes'>
        <label for='recorded-game__yes2'>Oui</label>
      &emsp;
      <input type='radio' id='recorded-game__no2' name='recorded-game'value='no'>
        <label for='recorded-game__no2'>Non</label>
      </div>`,
    row07:
      `<h3 class="radio__h3"><i class="fa-solid fa-people-roof"></i>&ensp;Partie privée</h3>
      <div id="private-game2">
      <input type='radio' id='private-game__yes2' name='private-game' value='yes'>
        <label for='private-game__yes2'>Oui</label>
      &emsp;
      <input type='radio' id='private-game__no2' name='private-game'value='no'>
        <label for='private-game__no2'>Non</label>
      </div>`,
    row08:
      `<button class="cost-estimate" type="button" onclick="calcEstimate2()">Estimer le coût</button>
      <table class="additional-form__table">
        <tr>
          <td class="additional-form__boxe-a"><i class="fa-solid fa-coins"></i>&ensp;Estimation globale</td>
          <td class="additional-form__boxe-b" id="additional-form__boxe-b2">-&nbsp;€</td>
        </tr>
      </table>
      <button class="card__contact-me"><i class='fa-solid fa-arrow-down'></i>&ensp;Pour me contacter&ensp;<i class='fa-solid fa-arrow-down'></i></button>`,
    row09: `<input type="hidden" name="overall-estimate" id="overall-estimate2" value="">`,
    row10:
      `<label><i class="fa-solid fa-user"></i>&ensp;Prénom</label>
        <br>
      <input type="text" name="first-name" required></input>`,
    row11:
      `<label><i class="fa-solid fa-user"></i>&ensp;Nom</label>
        <br>
      <input type="text" name="name" required></input>`,
    row12:
      `<label><i class="fa-solid fa-envelope"></i>&ensp;Courriel</label>
        <br>
      <input type="email" name="email" required>`,
    row13:
      `<label><i class="fa-solid fa-phone"></i>&ensp;Téléphone</label>
        <br>
      <input type="tel" pattern="[0-9]*" name="phone" required>`,
    row14: ``,
    row15: ``,
    row16: ``,
    row17: ``,
    row18: `<button class="card__send-button" id="card__send-button2" type="submit"><i class="fa-solid fa-paper-plane"></i>&ensp;Envoi</button>`,
  },
  {
    index: "3",
    backgroundimage: "background: url(../images/prestations/one-shot-background.avif);",
    image: "one-shot.avif",
    title: "One-shot",
    subtitle: "JdR à domicile",
    details: "Prêt à vivre une aventure intense en une seule soirée&nbsp;? Le One-shot offre une expérience complète en une seule séance ou deux, où chaque choix compte et chaque moment est rempli de suspense. Prenez les rênes d'un personnage prêt à vivre une histoire palpitante, explorez des mondes fantastiques, résolvez des mystères énigmatiques et forgez des liens avec d'autres, le tout en quelques heures.",
    boxea: {
      one: {
        style: "font-size: 1.3em;",
        content: "<i class='fa-solid fa-clock'></i>"
      },
      two: {
        style: "font-size: 1.3em;",
        content: "4 à 10h"
      }
    },
    boxeb: {
      one: {
        style: "font-size: 1.7em;",
        content: "2-6"
      },
      two: {
        style: "",
        content: "<i class='fa-solid fa-users'></i>"
      }
    },
    boxec: {
      one: {
        style: "font-size: 1.7em;",
        content: "55€*"
      },
      two: {
        style: "",
        content: "/h"
      }
    },
    morebuttondown: "<i class='fa-solid fa-arrow-down'></i>&ensp;Estimation rapide&ensp;<i class='fa-solid fa-arrow-down'></i>",
    morebuttonup: "<i class='fa-solid fa-arrow-up'></i>&ensp;Estimation rapide&ensp;<i class='fa-solid fa-arrow-up'></i>",
    row01:
      `<label><i class='fa-solid fa-user-clock'></i>&ensp;Âge des participant·e·s</label>
        <br>
      <input type='text' pattern='[0-9]*' min='10' max='99' inputmode='numeric' name='age' id='age3' required>`,
    row02:
      `<label><i class='fa-solid fa-users'></i>&ensp;Nombre de participant·e·s</label>
      <select name='number-participants' id='number-participants3' required>
        <option value='' disabled selected>Choisir entre 2 à 6 personnes</option>
        <option value='2'>2 personnes</option>
        <option value='3'>3 personnes</option>
        <option value='4'>4 personnes</option>
        <option value='5'>5 personnes</option>
        <option value='6'>6 personnes</option>
      </select>`,
    row03:
      `<label><i class='fa-solid fa-clock'></i>&ensp;Durée de la partie</label>
      <select name='game-duration' id='game-duration3' required>
        <option value='' disabled selected>Choisir entre 4 à 10 heures</option>
        <option value='4'>4h</option>
        <option value='5'>5h</option>
        <option value='6'>6h</option>
        <option value='7'>7h</option>
        <option value='8'>8h</option>
        <option value='9'>9h</option>
        <option value='10'>10h</option>
      </select>`,
    row04:
      `<h3 class="radio__h3"><i class='fa-solid fa-feather-pointed'></i>&ensp;Scénario personnalisé</h3>
      <div id="scenario3">
      <input type='radio' id='scenario__yes3' name='scenario' value='yes'>
        <label for='scenario__yes3'>Oui</label>
      &emsp;
      <input type='radio' id='scenario__no3' name='scenario'value='no'>
        <label for='scenario__no3'>Non</label>
      </div>`,
    row05:
      `<h3 class="radio__h3"><i class='fa-solid fa-clock-rotate-left'></i>&ensp;Délai inférieur à 1 mois</h3>
      <div id="deadline3">
      <input type='radio' id='deadline__yes3' name='deadline' value='yes'>
        <label for='deadline__yes3'>Oui</label>
      &emsp;
      <input type='radio' id='deadline__no3' name='deadline'value='no'>
        <label for='deadline__no3'>Non</label>
      </div>`,
    row06:
      `<button class='geolocation__button' type='button' formnovalidate onclick='getGeolocation(3)'><i class='fa-solid fa-location-dot'></i>&ensp;Vous géolocaliser&nbsp;!</button>
      <h3 class='geolocation__h3'>ou saisir manuellement le lieu de la partie</h3>`,
    row07: `<input type='hidden' name='gps-coordinates' id='gps-coordinates3' required></input>`,
    row08:
      `<label><i class='fa-solid fa-house'></i>&ensp;Adresse</label>
        <br>
      <input type='text' name='address' id='address3' required></input>`,
    row09:
      `<label><i class='fa-solid fa-house'></i>&ensp;Code postal</label>
        <br>
      <input type='text' name='postal-code' id='postal-code3' required></input>`,
    row10:
      `<label><i class='fa-solid fa-house'></i>&ensp;Ville</label>
        <br>
      <input type='text' name='city' id='city3' required></input>`,
    row11:
      `<button class='cost-estimate' type='button' onclick='calcEstimate3()'>Estimer le coût</button>
      <table class="additional-form__table">
        <tr>
          <td class="additional-form__boxe-a"><i class="fa-solid fa-coins"></i>&ensp;Estimation globale</td>
          <td class="additional-form__boxe-b" id="additional-form__boxe-b3">-&nbsp;€</td>
        </tr>
      </table>
      <button class="card__contact-me"><i class='fa-solid fa-arrow-down'></i>&ensp;Pour me contacter&ensp;<i class='fa-solid fa-arrow-down'></i></button>`,
    row12: `<input type="hidden" name="overall-estimate" id="overall-estimate3" value="">`,
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
    row18: `<button class="card__send-button" id="card__send-button3" type="submit"><i class="fa-solid fa-paper-plane"></i>&ensp;Envoi</button>`,
  },
  {
    index: "4",
    backgroundimage: "background: url(../images/prestations/one-shot-vtt-background.avif);",
    image: "one-shot-vtt.avif",
    title: "One-shot",
    subtitle: "JdR à distance",
    details: "Préparez-vous à une aventure épique en ligne&nbsp;! En une seule séance ou deux, plongez dans un monde riche en mystères et décisions cruciales. Laissez-moi vous guider à travers une expérience immersive, où votre personnage unique vivra une histoire palpitante. Réservez maintenant pour une expérience de Jeu de Rôles unique&nbsp;!",
    boxea: {
      one: {
        style: "font-size: 1.3em;",
        content: "<i class='fa-solid fa-clock'></i>"
      },
      two: {
        style: "font-size: 1.3em;",
        content: "4 à 10h"
      }
    },
    boxeb: {
      one: {
        style: "font-size: 1.7em;",
        content: "2-6"
      },
      two: {
        style: "",
        content: "<i class='fa-solid fa-users'></i>"
      }
    },
    boxec: {
      one: {
        style: "font-size: 1.7em;",
        content: "7€*"
      },
      two: {
        style: "",
        content: "/h/<i class='fa-solid fa-users'></i>"
      }
    },
    morebuttondown: "<i class='fa-solid fa-arrow-down'></i>&ensp;Estimation rapide&ensp;<i class='fa-solid fa-arrow-down'></i>",
    morebuttonup: "<i class='fa-solid fa-arrow-up'></i>&ensp;Estimation rapide&ensp;<i class='fa-solid fa-arrow-up'></i>",
    row01:
      `<label><i class='fa-solid fa-user-clock'></i>&ensp;Âge des participant·e·s</label>
        <br>
      <input type='text' pattern='[0-9]*' min='10' max='99' inputmode='numeric' name='age' id='age4' required>`,
    row02:
      `<label><i class='fa-solid fa-users'></i>&ensp;Nombre de participant·e·s</label>
      <select name='number-participants' id='number-participants4' required>
        <option value='' disabled selected>Choisir entre 1 à 6 personnes</option>
        <option value='1'>1 personne</option>
        <option value='2'>2 personnes</option>
        <option value='3'>3 personnes</option>
        <option value='4'>4 personnes</option>
        <option value='5'>5 personnes</option>
        <option value='6'>6 personnes</option>
      </select>`,
    row03:
      `<label><i class='fa-solid fa-clock'></i>&ensp;Durée de la partie</label>
      <select name='game-duration' id='game-duration4' required>
        <option value='' disabled selected>Choisir entre 4 à 10 heures</option>
        <option value='4'>4h</option>
        <option value='5'>5h</option>
        <option value='6'>6h</option>
        <option value='7'>7h</option>
        <option value='8'>8h</option>
        <option value='9'>9h</option>
        <option value='10'>10h</option>
      </select>`,
      row04:
      `<h3 class="radio__h3"><i class='fa-solid fa-feather-pointed'></i>&ensp;Scénario personnalisé</h3>
      <div id="scenario4">
      <input type='radio' id='scenario__yes4' name='scenario' value='yes'>
        <label for='scenario__yes4'>Oui</label>
      &emsp;
      <input type='radio' id='scenario__no4' name='scenario'value='no'>
        <label for='scenario__no4'>Non</label>
      </div>`,
    row05:
      `<h3 class="radio__h3"><i class='fa-solid fa-clock-rotate-left'></i>&ensp;Délai inférieur à 1 mois</h3>
      <div id="deadline4">
      <input type='radio' id='deadline__yes4' name='deadline' value='yes'>
        <label for='deadline__yes4'>Oui</label>
      &emsp;
      <input type='radio' id='deadline__no4' name='deadline'value='no'>
        <label for='deadline__no4'>Non</label>
      </div>`,
    row06:
      `<h3 class="radio__h3"><i class="fa-solid fa-video"></i>&ensp;Partie enregistrée</h3>
      <div id="recorded-game4">
      <input type='radio' id='recorded-game__yes4' name='recorded-game' value='yes'>
        <label for='recorded-game__yes4'>Oui</label>
      &emsp;
      <input type='radio' id='recorded-game__no4' name='recorded-game'value='no'>
        <label for='recorded-game__no4'>Non</label>
      </div>`,
    row07:
      `<h3 class="radio__h3"><i class="fa-solid fa-people-roof"></i>&ensp;Partie privée</h3>
      <div id="private-game4">
      <input type='radio' id='private-game__yes4' name='private-game' value='yes'>
        <label for='private-game__yes4'>Oui</label>
      &emsp;
      <input type='radio' id='private-game__no4' name='private-game'value='no'>
        <label for='private-game__no4'>Non</label>
      </div>`,
    row08:
      `<button class="cost-estimate" type="button" onclick="calcEstimate4()">Estimer le coût</button>
      <table class="additional-form__table">
        <tr>
          <td class="additional-form__boxe-a"><i class="fa-solid fa-coins"></i>&ensp;Estimation globale</td>
          <td class="additional-form__boxe-b" id="additional-form__boxe-b4">-&nbsp;€</td>
        </tr>
      </table>
      <button class="card__contact-me"><i class='fa-solid fa-arrow-down'></i>&ensp;Pour me contacter&ensp;<i class='fa-solid fa-arrow-down'></i></button>`,
    row09: `<input type="hidden" name="overall-estimate" id="overall-estimate4" value="">`,
    row10:
      `<label><i class="fa-solid fa-user"></i>&ensp;Prénom</label>
        <br>
      <input type="text" name="first-name" required></input>`,
    row11:
      `<label><i class="fa-solid fa-user"></i>&ensp;Nom</label>
        <br>
      <input type="text" name="name" required></input>`,
    row12:
      `<label><i class="fa-solid fa-envelope"></i>&ensp;Courriel</label>
        <br>
      <input type="email" name="email" required>`,
    row13:
      `<label><i class="fa-solid fa-phone"></i>&ensp;Téléphone</label>
        <br>
      <input type="tel" pattern="[0-9]*" name="phone" required>`,
    row14: ``,
    row15: ``,
    row16: ``,
    row17: ``,
    row18: `<button class="card__send-button" id="card__send-button4" type="submit"><i class="fa-solid fa-paper-plane"></i>&ensp;Envoi</button>`,
  },
  {
    index: "5",
    backgroundimage: "background: url(../images/prestations/campagne-background.avif);",
    image: "campagne.avif",
    title: "Campagne",
    subtitle: "JdR à domicile",
    details: "Prêt·e pour une aventure épique qui s'étend sur plusieurs séances&nbsp;? Rejoignez-moi pour une immersion totale dans un univers riche en intrigues, en personnages fascinants et en défis épiques. Créez une histoire unique avec votre groupe de joueuses et joueurs. Réservez maintenant pour une aventure inoubliable&nbsp;!",
    boxea: {
      one: {
        style: "font-size: 1.7em;",
        content: "6+"
      },
      two: {
        style: "",
        content: "Sessions"
      }
    },
    boxeb: {
      one: {
        style: "font-size: 1.3em;",
        content: "<i class='fa-solid fa-clock'></i>"
      },
      two: {
        style: "font-size: 1.3em;",
        content: "3 à 6h"
      }
    },
    boxec: {
      one: {
        style: "font-size: 1.7em;",
        content: "60€*"
      },
      two: {
        style: "",
        content: "/h"
      }
    },
    morebuttondown: "<i class='fa-solid fa-arrow-down'></i>&ensp;Estimation rapide&ensp;<i class='fa-solid fa-arrow-down'></i>",
    morebuttonup: "<i class='fa-solid fa-arrow-up'></i>&ensp;Estimation rapide&ensp;<i class='fa-solid fa-arrow-up'></i>",
    row01:
      `<label><i class='fa-solid fa-user-clock'></i>&ensp;Âge des participant·e·s</label>
        <br>
      <input type='text' pattern='[0-9]*' min='10' max='99' inputmode='numeric' name='age' id='age5' required>`,
    row02:
      `<label><i class='fa-solid fa-users'></i>&ensp;Nombre de participant·e·s</label>
      <select name='number-participants' id='number-participants5' required>
        <option value='' disabled selected>Choisir de 2 à 6 personnes</option>
        <option value='2'>2 personnes</option>
        <option value='3'>3 personnes</option>
        <option value='4'>4 personnes</option>
        <option value='5'>5 personnes</option>
        <option value='6'>6 personnes</option>
      </select>`,
    row03:
      `<label><i class='fa-solid fa-clock'></i>&ensp;Durée de la session</label>
      <select name='game-duration' id='game-duration5' required>
        <option value='' disabled selected>Choisir de 3 à 6 heures</option>
        <option value='3'>3h</option>
        <option value='4'>4h</option>
        <option value='5'>5h</option>
        <option value='6'>6h</option>
      </select>`,
    row04:
      `<label><i class='fa-solid fa-clock'></i>&ensp;Nombre de sessions</label>
      <select name='number-sessions' id='number-sessions5' required>
        <option value='' disabled selected>Choisir de 6 à 12 sessions</option>
        <option value='6'>6 sessions</option>
        <option value='7'>7 sessions</option>
        <option value='8'>8 sessions</option>
        <option value='9'>9 sessions</option>
        <option value='10'>10 sessions</option>
        <option value='11'>11 sessions</option>
        <option value='12'>12 sessions</option>
      </select>`,
    row05:
      `<h3 class="radio__h3"><i class='fa-solid fa-feather-pointed'></i>&ensp;Scénario personnalisé</h3>
      <div id="scenario5">
      <input type='radio' id='scenario__yes5' name='scenario' value='yes'>
        <label for='scenario__yes5'>Oui</label>
      &emsp;
      <input type='radio' id='scenario__no5' name='scenario'value='no'>
        <label for='scenario__no5'>Non</label>
      </div>`,
    row06:
      `<h3 class="radio__h3"><i class='fa-solid fa-clock-rotate-left'></i>&ensp;Délai inférieur à 1 mois</h3>
      <div id="deadline5">
      <input type='radio' id='deadline__yes5' name='deadline' value='yes'>
        <label for='deadline__yes5'>Oui</label>
      &emsp;
      <input type='radio' id='deadline__no5' name='deadline'value='no'>
        <label for='deadline__no5'>Non</label>
      </div>`,
    row07:
      `<button class='geolocation__button' type='button' formnovalidate onclick='getGeolocation(5)'><i class='fa-solid fa-location-dot'></i>&ensp;Vous géolocaliser&nbsp;!</button>
      <h3 class='geolocation__h3'>ou saisir manuellement le lieu de la partie</h3>`,
    row08: `<input type='hidden' name='gps-coordinates' id='gps-coordinates5' required></input>`,
    row09:
      `<label><i class='fa-solid fa-house'></i>&ensp;Adresse</label>
        <br>
      <input type='text' name='address' id='address5' required></input>`,
    row10:
      `<label><i class='fa-solid fa-house'></i>&ensp;Code postal</label>
        <br>
      <input type='text' name='postal-code' id='postal-code5' required></input>`,
    row11:
      `<label><i class='fa-solid fa-house'></i>&ensp;Ville</label>
        <br>
      <input type='text' name='city' id='city5' required></input>`,
    row12:
      `<button class='cost-estimate' type='button' onclick='calcEstimate5()'>Estimer le coût</button>
      <table class="additional-form__table">
        <tr>
          <td class="additional-form__boxe-a"><i class="fa-solid fa-coins"></i>&ensp;Estimation globale</td>
          <td class="additional-form__boxe-b" id="additional-form__boxe-b5">-&nbsp;€</td>
        </tr>
      </table>
      <button class="card__contact-me"><i class='fa-solid fa-arrow-down'></i>&ensp;Pour me contacter&ensp;<i class='fa-solid fa-arrow-down'></i></button>`,
    row13: `<input type="hidden" name="overall-estimate" id="overall-estimate5" value="">`,
    row14:
      `<label><i class="fa-solid fa-user"></i>&ensp;Prénom</label>
        <br>
      <input type="text" name="first-name" required></input>`,
    row15:
      `<label><i class="fa-solid fa-user"></i>&ensp;Nom</label>
        <br>
      <input type="text" name="name" required></input>`,
    row16:
      `<label><i class="fa-solid fa-envelope"></i>&ensp;Courriel</label>
        <br>
      <input type="email" name="email" required>`,
    row17:
      `<label><i class="fa-solid fa-phone"></i>&ensp;Téléphone</label>
        <br>
      <input type="tel" pattern="[0-9]*" name="phone" required>`,
    row18: `<button class="card__send-button" id="card__send-button5" type="submit"><i class="fa-solid fa-paper-plane"></i>&ensp;Envoi</button>`,
  },
  {
    index: "6",
    backgroundimage: "background: url(../images/prestations/campagne-vtt-background.avif);",
    image: "campagne-vtt.avif",
    title: "Campagne",
    subtitle: "JdR à distance",
    details: "Préparez-vous à une aventure épique en ligne&nbsp;! En une seule séance ou deux, plongez dans un monde riche en mystères et décisions cruciales. Laissez-moi vous guider à travers une expérience immersive, où votre personnage unique vivra une histoire palpitante. Réservez maintenant pour une expérience de Jeu de Rôles unique&nbsp;!",
    boxea: {
      one: {
        style: "font-size: 1.7em;",
        content: "6+"
      },
      two: {
        style: "",
        content: "Sessions"
      }
    },
    boxeb: {
      one: {
        style: "font-size: 1.3em;",
        content: "<i class='fa-solid fa-clock'></i>"
      },
      two: {
        style: "font-size: 1.3em;",
        content: "3 à 5h"
      }
    },
    boxec: {
      one: {
        style: "font-size: 1.7em;",
        content: "7€*"
      },
      two: {
        style: "",
        content: "/h/<i class='fa-solid fa-users'></i>"
      }
    },
    morebuttondown: "<i class='fa-solid fa-arrow-down'></i>&ensp;Estimation rapide&ensp;<i class='fa-solid fa-arrow-down'></i>",
    morebuttonup: "<i class='fa-solid fa-arrow-up'></i>&ensp;Estimation rapide&ensp;<i class='fa-solid fa-arrow-up'></i>",
    row01:
      `<label><i class='fa-solid fa-user-clock'></i>&ensp;Âge des participant·e·s</label>
        <br>
      <input type='text' pattern='[0-9]*' min='10' max='99' inputmode='numeric' name='age' id='age6' required>`,
    row02:
      `<label><i class='fa-solid fa-users'></i>&ensp;Nombre de participant·e·s</label>
      <select name='number-participants' id='number-participants6' required>
        <option value='' disabled selected>Choisir entre 1 à 6 personnes</option>
        <option value='1'>1 personne</option>
        <option value='2'>2 personnes</option>
        <option value='3'>3 personnes</option>
        <option value='4'>4 personnes</option>
        <option value='5'>5 personnes</option>
        <option value='6'>6 personnes</option>
      </select>`,
    row03:
      `<label><i class='fa-solid fa-clock'></i>&ensp;Durée de la session</label>
      <select name='game-duration' id='game-duration6' required>
        <option value='' disabled selected>Choisir entre 3 à 5 heures</option>
        <option value='3'>3h</option>
        <option value='4'>4h</option>
        <option value='5'>5h</option>
      </select>`,
    row04:
      `<label><i class='fa-solid fa-clock'></i>&ensp;Nombre de sessions</label>
      <select name='number-sessions' id='number-sessions6' required>
        <option value='' disabled selected>Choisir de 6 à 12 sessions</option>
        <option value='6'>6 sessions</option>
        <option value='7'>7 sessions</option>
        <option value='8'>8 sessions</option>
        <option value='9'>9 sessions</option>
        <option value='10'>10 sessions</option>
        <option value='11'>11 sessions</option>
        <option value='12'>12 sessions</option>
      </select>`,
    row05:
      `<h3 class="radio__h3"><i class='fa-solid fa-feather-pointed'></i>&ensp;Scénario personnalisé</h3>
      <div id="scenario6">
      <input type='radio' id='scenario__yes6' name='scenario' value='yes'>
        <label for='scenario__yes6'>Oui</label>
      &emsp;
      <input type='radio' id='scenario__no6' name='scenario'value='no'>
        <label for='scenario__no6'>Non</label>
      </div>`,
    row06:
      `<h3 class="radio__h3"><i class='fa-solid fa-clock-rotate-left'></i>&ensp;Délai inférieur à 1 mois</h3>
      <div id="deadline6">
      <input type='radio' id='deadline__yes6' name='deadline' value='yes'>
        <label for='deadline__yes6'>Oui</label>
      &emsp;
      <input type='radio' id='deadline__no6' name='deadline'value='no'>
        <label for='deadline__no6'>Non</label>
      </div>`,
    row07:
      `<h3 class="radio__h3"><i class="fa-solid fa-video"></i>&ensp;Partie enregistrée</h3>
      <div id="recorded-game6">
      <input type='radio' id='recorded-game__yes6' name='recorded-game' value='yes'>
        <label for='recorded-game__yes6'>Oui</label>
      &emsp;
      <input type='radio' id='recorded-game__no6' name='recorded-game'value='no'>
        <label for='recorded-game__no6'>Non</label>
      </div>`,
    row08:
      `<h3 class="radio__h3"><i class="fa-solid fa-people-roof"></i>&ensp;Partie privée</h3>
      <div id="private-game6">
      <input type='radio' id='private-game__yes6' name='private-game' value='yes'>
        <label for='private-game__yes6'>Oui</label>
      &emsp;
      <input type='radio' id='private-game__no6' name='private-game'value='no'>
        <label for='private-game__no6'>Non</label>
      </div>`,
    row09:
      `<button class="cost-estimate" type="button" onclick="calcEstimate6()">Estimer le coût</button>
      <table class="additional-form__table">
        <tr>
          <td class="additional-form__boxe-a"><i class="fa-solid fa-coins"></i>&ensp;Estimation globale</td>
          <td class="additional-form__boxe-b" id="additional-form__boxe-b6">-&nbsp;€</td>
        </tr>
      </table>
      <button class="card__contact-me"><i class='fa-solid fa-arrow-down'></i>&ensp;Pour me contacter&ensp;<i class='fa-solid fa-arrow-down'></i></button>`,
    row10: `<input type="hidden" name="overall-estimate" id="overall-estimate6" value="">`,
    row11:
      `<label><i class="fa-solid fa-user"></i>&ensp;Prénom</label>
        <br>
      <input type="text" name="first-name" required></input>`,
    row12:
      `<label><i class="fa-solid fa-user"></i>&ensp;Nom</label>
        <br>
      <input type="text" name="name" required></input>`,
    row13:
      `<label><i class="fa-solid fa-envelope"></i>&ensp;Courriel</label>
        <br>
      <input type="email" name="email" required>`,
    row14:
      `<label><i class="fa-solid fa-phone"></i>&ensp;Téléphone</label>
        <br>
      <input type="tel" pattern="[0-9]*" name="phone" required>`,
    row15: ``,
    row16: ``,
    row17: ``,
    row18: `<button class="card__send-button" id="card__send-button6" type="submit"><i class="fa-solid fa-paper-plane"></i>&ensp;Envoi</button>`,
  },
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
      <form action="process-form__services-for-private-customers.php" method="post">
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
  var ageField = document.getElementById("age0");
  var participantsField = document.getElementById("number-participants0");
  var durationField = document.getElementById("game-duration0");
  var scenarioTitle = document.getElementById("scenario0");
  var scenarioYes = document.getElementById("scenario__yes0").checked;
  var scenarioNo = document.getElementById("scenario__no0").checked;
  var deadlineTitle = document.getElementById("deadline0");
  var deadlineYes = document.getElementById("deadline__yes0").checked;
  var deadlineNo = document.getElementById("deadline__no0").checked;
  var addressField = document.getElementById("address0");
  var postalCodeField = document.getElementById("postal-code0");
  var cityField = document.getElementById("city0");

  // Réinitialiser les classes CSS pour enlever la surbrillance des champs précédemment vides
  ageField.classList.remove("highlight-empty");
  participantsField.classList.remove("highlight-empty");
  durationField.classList.remove("highlight-empty");
  scenarioTitle.classList.remove("highlight-empty");
  deadlineTitle.classList.remove("highlight-empty");
  addressField.classList.remove("highlight-empty");
  postalCodeField.classList.remove("highlight-empty");
  cityField.classList.remove("highlight-empty");

  // Vérifier que les champs nécessaires sont remplis
  var isFormValid = true;

  if (ageField.value === "") {
    ageField.classList.add("highlight-empty");
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
  if (!scenarioYes && !scenarioNo) {
    scenarioTitle.classList.add("highlight-empty");
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

            const duration = parseInt(durationField.value);
            console.log('Duration: ' + duration);
            const participants = parseInt(participantsField.value);
            console.log('Participants: ' + participants);
            const isCustomScenario = scenarioYes;
            console.log('Custom Scenario: ' + isCustomScenario);
            const isDeadlineLessThanOneMonth = deadlineYes;
            console.log('Deadline: ' + isDeadlineLessThanOneMonth);

            let basePrice = 10; // 10€ par heure et par personne
            let referencePrice = basePrice * duration * participants;
            console.log('Reference Price: ' + referencePrice);
            let weightedPrice = referencePrice;
            if (isCustomScenario && isDeadlineLessThanOneMonth) {
              weightedPrice = referencePrice * 1.8;
            } else if (isCustomScenario) {
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

const ageInput = document.getElementById("age0");
const gameDurationSelect = document.getElementById("game-duration0");

function updateGameDuration() {
  const age = parseInt(ageInput.value, 10);
  const options = gameDurationSelect.options;

  options[1].textContent = "1h";
  options[2].textContent = "2h";
  options[3].textContent = "3h";

  if (age <= 9) {
    options[1].textContent += " (durée conseillée)";
  } else if (age >= 10 && age <= 16) {
    options[2].textContent += " (durée conseillée)";
  } else if (age >= 17) {
    options[3].textContent += " (durée conseillée)";
  }
}

ageInput.addEventListener("input", updateGameDuration);
updateGameDuration();

function calcEstimate1() {
  // Récupérer les valeurs des champs
  var ageField = document.getElementById("age1");
  var durationField = document.getElementById("game-duration1");
  var scenarioTitle = document.getElementById("scenario1");
  var scenarioYes = document.getElementById("scenario__yes1").checked;
  var scenarioNo = document.getElementById("scenario__no1").checked;
  var deadlineTitle = document.getElementById("deadline1");
  var deadlineYes = document.getElementById("deadline__yes1").checked;
  var deadlineNo = document.getElementById("deadline__no1").checked;
  var addressField = document.getElementById("address1");
  var postalCodeField = document.getElementById("postal-code1");
  var cityField = document.getElementById("city1");

  // Réinitialiser les classes CSS pour enlever la surbrillance des champs précédemment vides
  ageField.classList.remove("highlight-empty");
  durationField.classList.remove("highlight-empty");
  scenarioTitle.classList.remove("highlight-empty");
  deadlineTitle.classList.remove("highlight-empty");
  addressField.classList.remove("highlight-empty");
  postalCodeField.classList.remove("highlight-empty");
  cityField.classList.remove("highlight-empty");

  // Vérifier que les champs nécessaires sont remplis
  var isFormValid = true;

  if (ageField.value === "") {
    ageField.classList.add("highlight-empty");
    isFormValid = false;
  }
  if (durationField.value === "") {
    durationField.classList.add("highlight-empty");
    isFormValid = false;
  }
  if (!scenarioYes && !scenarioNo) {
    scenarioTitle.classList.add("highlight-empty");
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

            const duration = parseInt(durationField.value);
            console.log('Duration: ' + duration);
            const isCustomScenario = scenarioYes;
            console.log('Custom Scenario: ' + isCustomScenario);
            const isDeadlineLessThanOneMonth = deadlineYes;
            console.log('Deadline: ' + isDeadlineLessThanOneMonth);

            let basePrice = 50; // 50€ par heure
            let referencePrice = basePrice * duration;
            console.log('Reference Price: ' + referencePrice);
            let weightedPrice = referencePrice;
            if (isCustomScenario && isDeadlineLessThanOneMonth) {
              weightedPrice = referencePrice * 1.8;
            } else if (isCustomScenario) {
              weightedPrice = referencePrice * 1.5;
            } else if (isDeadlineLessThanOneMonth) {
              weightedPrice = referencePrice * 1.3;
            }
            console.log('Weighted Price: ' + weightedPrice);
            const totalCostValue = totalCost;
            console.log('Final Estimate = ' + weightedPrice + ' + 2 * ' + totalCost);
            const finalEstimation = weightedPrice + (2 * totalCostValue);
            console.log('Final Estimate: ' + finalEstimation);
            const estimateBox = document.getElementById("additional-form__boxe-b1");
            const estimateInput = document.getElementById("overall-estimate1");
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

function calcEstimate2() {
  // Récupérer les valeurs des champs
  var ageField = document.getElementById("age2");
  var participantsField = document.getElementById("number-participants2");
  var durationTitle = document.getElementById("game-duration2");
  var duration3 = document.getElementById("game-duration__three2").checked;
  var duration4 = document.getElementById("game-duration__four2").checked;
  var scenarioTitle = document.getElementById("scenario2");
  var scenarioYes = document.getElementById("scenario__yes2").checked;
  var scenarioNo = document.getElementById("scenario__no2").checked;
  var deadlineTitle = document.getElementById("deadline2");
  var deadlineYes = document.getElementById("deadline__yes2").checked;
  var deadlineNo = document.getElementById("deadline__no2").checked;
  var recordedGameTitle = document.getElementById("recorded-game2");
  var recordedGameYes = document.getElementById("recorded-game__yes2").checked;
  var recordedGameNo = document.getElementById("recorded-game__no2").checked;
  var privateGameTitle = document.getElementById("private-game2");
  var privateGameYes = document.getElementById("private-game__yes2").checked;
  var privateGameNo = document.getElementById("private-game__no2").checked;

  // Réinitialiser les classes CSS pour enlever la surbrillance des champs précédemment vides
  ageField.classList.remove("highlight-empty");
  participantsField.classList.remove("highlight-empty");
  durationTitle.classList.remove("highlight-empty");
  scenarioTitle.classList.remove("highlight-empty");
  deadlineTitle.classList.remove("highlight-empty");
  recordedGameTitle.classList.remove("highlight-empty");
  privateGameTitle.classList.remove("highlight-empty");

  // Vérifier que les champs nécessaires sont remplis
  var isFormValid = true;

  if (ageField.value === "") {
    ageField.classList.add("highlight-empty");
    isFormValid = false;
  }
  if (participantsField.value === "") {
    participantsField.classList.add("highlight-empty");
    isFormValid = false;
  }
  if (!duration3 && !duration4) {
    durationTitle.classList.add("highlight-empty");
    isFormValid = false;
  }
  if (!scenarioYes && !scenarioNo) {
    scenarioTitle.classList.add("highlight-empty");
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
  if (!privateGameYes && !privateGameNo) {
    privateGameTitle.classList.add("highlight-empty");
    isFormValid = false;
  }

  if (isFormValid) {
    var age = parseInt(ageField.value);
    console.log('Age: ' + age);
    var duration;
      if (duration3) {
        duration = 3;
      } else if (duration4) {
        duration = 4;
      }
    console.log('Duration: ' + duration);
    const participants = parseInt(participantsField.value);
    console.log('Participants: ' + participants);
    const isCustomScenario = scenarioYes;
    console.log('Custom Scenario: ' + isCustomScenario);
    const isDeadlineLessThanOneMonth = deadlineYes;
    console.log('Deadline: ' + isDeadlineLessThanOneMonth);
    const isRecordedGame = recordedGameYes;
    console.log('Recorded Game: ' + isRecordedGame);
    const isPrivateGame = privateGameYes;
    console.log('Private Game: ' + isPrivateGame);

    let basePrice = 10; // 10€ par heure et par personne
    let referencePrice = basePrice * duration * participants;
    console.log('Reference Price: ' + referencePrice);
    let weightedPrice = referencePrice;
    if (isCustomScenario && isDeadlineLessThanOneMonth && isRecordedGame && isPrivateGame) {
      weightedPrice = referencePrice * 1.8; // 50% + 30% - 10% + 10% = 80% 
    } else if (isCustomScenario && isDeadlineLessThanOneMonth && isRecordedGame) {
      weightedPrice = referencePrice * 1.7; // 50% + 30% - 10% = 70%
    } else if (isCustomScenario && isDeadlineLessThanOneMonth && isPrivateGame) {
      weightedPrice = referencePrice * 1.9; // 50% + 30% + 10% = 90%
    } else if (isCustomScenario && isDeadlineLessThanOneMonth) {
      weightedPrice = referencePrice * 1.8; // 50% + 30% = 80%
    } else if (isCustomScenario && isRecordedGame && isPrivateGame) {
      weightedPrice = referencePrice * 1.5; // 50% - 10% + 10% = 50%
    } else if (isCustomScenario && isRecordedGame) {
      weightedPrice = referencePrice * 1.4; // 50% - 10% = 40%
    } else if (isCustomScenario && isPrivateGame) {
      weightedPrice = referencePrice * 1.6; // 50% + 10% = 60%
    } else if (isCustomScenario) {
      weightedPrice = referencePrice * 1.5; // 50%
    } else if (isDeadlineLessThanOneMonth && isRecordedGame && isPrivateGame) {
      weightedPrice = referencePrice * 1.3; // 30% - 10% + 10% = 30%
    } else if (isDeadlineLessThanOneMonth && isRecordedGame) {
      weightedPrice = referencePrice * 1.2; // 30% - 10% = 20%
    } else if (isDeadlineLessThanOneMonth && isPrivateGame) {
      weightedPrice = referencePrice * 1.4; // 30% + 10% = 40%
    } else if (isDeadlineLessThanOneMonth) {
      weightedPrice = referencePrice * 1.3; // 30%
    } else if (isRecordedGame && isPrivateGame) {
      weightedPrice = referencePrice; // -10% + 10% = 0%
    } else if (isRecordedGame) {
      weightedPrice = referencePrice * 0.9; // -10%
    } else if (isPrivateGame) {
      weightedPrice = referencePrice * 1.1; // +10%
    }
    console.log('Weighted Price: ' + weightedPrice);
    if (age >= 10 && age <= 16) {
      weightedPrice = weightedPrice * 0.8; // Réduction de 20% pour les enfants de 10 à 16 ans inclus
    }
    console.log('Weighted Price (with discount for children aged 10 to 16 inclusive): ' + weightedPrice);
    const finalEstimation = weightedPrice;
    console.log('Final Estimate: ' + finalEstimation);
    const estimateBox = document.getElementById("additional-form__boxe-b2");
    const estimateInput = document.getElementById("overall-estimate2");
    estimateBox.textContent = Math.ceil(finalEstimation) + "€";
    estimateInput.value = finalEstimation.toFixed(2) + "€";
  } else {
    alert("Veuillez remplir tous les champs nécessaires.");
  }
}

function calcEstimate3() {
  // Récupérer les valeurs des champs
  var ageField = document.getElementById("age3");
  var participantsField = document.getElementById("number-participants3");
  var durationField = document.getElementById("game-duration3");
  var scenarioTitle = document.getElementById("scenario3");
  var scenarioYes = document.getElementById("scenario__yes3").checked;
  var scenarioNo = document.getElementById("scenario__no3").checked;
  var deadlineTitle = document.getElementById("deadline3");
  var deadlineYes = document.getElementById("deadline__yes3").checked;
  var deadlineNo = document.getElementById("deadline__no3").checked;
  var addressField = document.getElementById("address3");
  var postalCodeField = document.getElementById("postal-code3");
  var cityField = document.getElementById("city3");

  // Réinitialiser les classes CSS pour enlever la surbrillance des champs précédemment vides
  ageField.classList.remove("highlight-empty");
  participantsField.classList.remove("highlight-empty");
  durationField.classList.remove("highlight-empty");
  scenarioTitle.classList.remove("highlight-empty");
  deadlineTitle.classList.remove("highlight-empty");
  addressField.classList.remove("highlight-empty");
  postalCodeField.classList.remove("highlight-empty");
  cityField.classList.remove("highlight-empty");

  // Vérifier que les champs nécessaires sont remplis
  var isFormValid = true;

  if (ageField.value === "") {
    ageField.classList.add("highlight-empty");
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
  if (!scenarioYes && !scenarioNo) {
    scenarioTitle.classList.add("highlight-empty");
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

            const duration = parseInt(durationField.value);
            console.log('Duration: ' + duration);
            const isCustomScenario = scenarioYes;
            console.log('Custom Scenario: ' + isCustomScenario);
            const isDeadlineLessThanOneMonth = deadlineYes;
            console.log('Deadline: ' + isDeadlineLessThanOneMonth);

            let basePrice = 55; // 55€ par heure
            let referencePrice = basePrice * duration;
            console.log('Reference Price: ' + referencePrice);
            let weightedPrice = referencePrice;
            if (isCustomScenario && isDeadlineLessThanOneMonth) {
              weightedPrice = referencePrice * 1.8;
            } else if (isCustomScenario) {
              weightedPrice = referencePrice * 1.5;
            } else if (isDeadlineLessThanOneMonth) {
              weightedPrice = referencePrice * 1.3;
            }
            console.log('Weighted Price: ' + weightedPrice);
            const totalCostValue = totalCost;
            console.log('Final Estimate = ' + weightedPrice + ' + ' + (duration > 5 ? '4' : '2') + ' * ' + totalCost);
            const finalEstimation = duration > 5 ? weightedPrice + (4 * totalCostValue) : weightedPrice + (2 * totalCostValue);
            console.log('Final Estimate: ' + finalEstimation);
            const estimateBox = document.getElementById("additional-form__boxe-b3");
            const estimateInput = document.getElementById("overall-estimate3");
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

function calcEstimate4() {
  // Récupérer les valeurs des champs
  var ageField = document.getElementById("age4");
  var participantsField = document.getElementById("number-participants4");
  var durationField = document.getElementById("game-duration4");
  var scenarioTitle = document.getElementById("scenario4");
  var scenarioYes = document.getElementById("scenario__yes4").checked;
  var scenarioNo = document.getElementById("scenario__no4").checked;
  var deadlineTitle = document.getElementById("deadline4");
  var deadlineYes = document.getElementById("deadline__yes4").checked;
  var deadlineNo = document.getElementById("deadline__no4").checked;
  var recordedGameTitle = document.getElementById("recorded-game4");
  var recordedGameYes = document.getElementById("recorded-game__yes4").checked;
  var recordedGameNo = document.getElementById("recorded-game__no4").checked;
  var privateGameTitle = document.getElementById("private-game4");
  var privateGameYes = document.getElementById("private-game__yes4").checked;
  var privateGameNo = document.getElementById("private-game__no4").checked;

  // Réinitialiser les classes CSS pour enlever la surbrillance des champs précédemment vides
  ageField.classList.remove("highlight-empty");
  participantsField.classList.remove("highlight-empty");
  durationField.classList.remove("highlight-empty");
  scenarioTitle.classList.remove("highlight-empty");
  deadlineTitle.classList.remove("highlight-empty");
  recordedGameTitle.classList.remove("highlight-empty");
  privateGameTitle.classList.remove("highlight-empty");

  // Vérifier que les champs nécessaires sont remplis
  var isFormValid = true;

  if (ageField.value === "") {
    ageField.classList.add("highlight-empty");
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
  if (!scenarioYes && !scenarioNo) {
    scenarioTitle.classList.add("highlight-empty");
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
  if (!privateGameYes && !privateGameNo) {
    privateGameTitle.classList.add("highlight-empty");
    isFormValid = false;
  }

  if (isFormValid) {
    var duration = parseInt(durationField.value);
    console.log('Duration: ' + duration);
    var participants = parseInt(participantsField.value);
    console.log('Participants: ' + participants);
    const isCustomScenario = scenarioYes;
    console.log('Custom Scenario: ' + isCustomScenario);
    const isDeadlineLessThanOneMonth = deadlineYes;
    console.log('Deadline: ' + isDeadlineLessThanOneMonth);
    const isRecordedGame = recordedGameYes;
    console.log('Recorded Game: ' + isRecordedGame);
    const isPrivateGame = privateGameYes;
    console.log('Private Game: ' + isPrivateGame);

    let basePrice = 7; // 7€ par heure et par personne
    let referencePrice = basePrice * duration * participants;
    console.log('Reference Price: ' + referencePrice);
    let weightedPrice = referencePrice;
    if (isCustomScenario && isDeadlineLessThanOneMonth && isRecordedGame && isPrivateGame) {
      weightedPrice = referencePrice * 1.8; // 50% + 30% - 10% + 10% = 80% 
    } else if (isCustomScenario && isDeadlineLessThanOneMonth && isRecordedGame) {
      weightedPrice = referencePrice * 1.7; // 50% + 30% - 10% = 70%
    } else if (isCustomScenario && isDeadlineLessThanOneMonth && isPrivateGame) {
      weightedPrice = referencePrice * 1.9; // 50% + 30% + 10% = 90%
    } else if (isCustomScenario && isDeadlineLessThanOneMonth) {
      weightedPrice = referencePrice * 1.8; // 50% + 30% = 80%
    } else if (isCustomScenario && isRecordedGame && isPrivateGame) {
      weightedPrice = referencePrice * 1.5; // 50% - 10% + 10% = 50%
    } else if (isCustomScenario && isRecordedGame) {
      weightedPrice = referencePrice * 1.4; // 50% - 10% = 40%
    } else if (isCustomScenario && isPrivateGame) {
      weightedPrice = referencePrice * 1.6; // 50% + 10% = 60%
    } else if (isCustomScenario) {
      weightedPrice = referencePrice * 1.5; // 50%
    } else if (isDeadlineLessThanOneMonth && isRecordedGame && isPrivateGame) {
      weightedPrice = referencePrice * 1.3; // 30% - 10% + 10% = 30%
    } else if (isDeadlineLessThanOneMonth && isRecordedGame) {
      weightedPrice = referencePrice * 1.2; // 30% - 10% = 20%
    } else if (isDeadlineLessThanOneMonth && isPrivateGame) {
      weightedPrice = referencePrice * 1.4; // 30% + 10% = 40%
    } else if (isDeadlineLessThanOneMonth) {
      weightedPrice = referencePrice * 1.3; // 30%
    } else if (isRecordedGame && isPrivateGame) {
      weightedPrice = referencePrice; // -10% + 10% = 0%
    } else if (isRecordedGame) {
      weightedPrice = referencePrice * 0.9; // -10%
    } else if (isPrivateGame) {
      weightedPrice = referencePrice * 1.1; // +10%
    }
    console.log('Weighted Price: ' + weightedPrice);
    const finalEstimation = weightedPrice;
    console.log('Final Estimate: ' + finalEstimation);
    const estimateBox = document.getElementById("additional-form__boxe-b4");
    const estimateInput = document.getElementById("overall-estimate4");
    estimateBox.textContent = Math.ceil(finalEstimation) + "€";
    estimateInput.value = finalEstimation.toFixed(2) + "€";
  } else {
    alert("Veuillez remplir tous les champs nécessaires.");
  }     
}

function calcEstimate5() {
  // Récupérer les valeurs des champs
  var ageField = document.getElementById("age5");
  var participantsField = document.getElementById("number-participants5");
  var durationField = document.getElementById("game-duration5");
  var sessionsField = document.getElementById("number-sessions5");
  var scenarioTitle = document.getElementById("scenario5");
  var scenarioYes = document.getElementById("scenario__yes5").checked;
  var scenarioNo = document.getElementById("scenario__no5").checked;
  var deadlineTitle = document.getElementById("deadline5");
  var deadlineYes = document.getElementById("deadline__yes5").checked;
  var deadlineNo = document.getElementById("deadline__no5").checked;
  var addressField = document.getElementById("address5");
  var postalCodeField = document.getElementById("postal-code5");
  var cityField = document.getElementById("city5");

  // Réinitialiser les classes CSS pour enlever la surbrillance des champs précédemment vides
  ageField.classList.remove("highlight-empty");
  participantsField.classList.remove("highlight-empty");
  durationField.classList.remove("highlight-empty");
  sessionsField.classList.remove("highlight-empty");
  scenarioTitle.classList.remove("highlight-empty");
  deadlineTitle.classList.remove("highlight-empty");
  addressField.classList.remove("highlight-empty");
  postalCodeField.classList.remove("highlight-empty");
  cityField.classList.remove("highlight-empty");

  // Vérifier que les champs nécessaires sont remplis
  var isFormValid = true;

  if (ageField.value === "") {
    ageField.classList.add("highlight-empty");
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
  if (sessionsField.value === "") {
    sessionsField.classList.add("highlight-empty");
    isFormValid = false;
  }
  if (!scenarioYes && !scenarioNo) {
    scenarioTitle.classList.add("highlight-empty");
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
            
            const duration = parseInt(durationField.value);
            console.log('Duration: ' + duration);
            const sessions = parseInt(sessionsField.value);
            console.log('Sessions: ' + sessions);
            const isCustomScenario = scenarioYes;
            console.log('Custom Scenario: ' + isCustomScenario);
            const isDeadlineLessThanOneMonth = deadlineYes;
            console.log('Deadline: ' + isDeadlineLessThanOneMonth);
            
            function calculateY(x, sessions) {
              if (x >= 1 && x <= 6) {
                return 60;
              } else if (x > 6 && x <= 12) {
                // Progression linéaire de 60 à 50 entre x=6 et x=12
                return 60 - ((x - 6) / 6) * 10;
              } else {
                return 50;
              }
            }

            var values = [];

            for (var x = 1; x <= sessions; x++) {
              var y = calculateY(x, sessions);
              values.push({ x: x, y: y });
            }
            console.log('Table of values :', values);

            var basePrice = values.reduce(function (acc, currentValue) {
              return acc + currentValue.y;
            }, 0);
            var referencePrice = basePrice * duration;
            console.log('Reference Price: ' + referencePrice);
            let weightedPrice = referencePrice;
            if (isCustomScenario && isDeadlineLessThanOneMonth) {
              weightedPrice = referencePrice * 1.8;
            } else if (isCustomScenario) {
              weightedPrice = referencePrice * 1.5;
            } else if (isDeadlineLessThanOneMonth) {
              weightedPrice = referencePrice * 1.3;
            }
            console.log('Weighted Price: ' + weightedPrice);
            const totalCostValue = totalCost;
            console.log('Final Estimate = ' + weightedPrice + ' + 2 * ' + totalCost + ' * ' + sessions);
            const finalEstimation = weightedPrice + (2 * totalCostValue * sessions);
            console.log('Final Estimate: ' + finalEstimation);
            const estimateBox = document.getElementById("additional-form__boxe-b5");
            const estimateInput = document.getElementById("overall-estimate5");
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

function calcEstimate6() {
  var ageField = document.getElementById("age6");
  var participantsField = document.getElementById("number-participants6");
  var durationField = document.getElementById("game-duration6");
  var sessionsField = document.getElementById("number-sessions6");
  var scenarioTitle = document.getElementById("scenario6");
  var scenarioYes = document.getElementById("scenario__yes6").checked;
  var scenarioNo = document.getElementById("scenario__no6").checked;
  var deadlineTitle = document.getElementById("deadline6");
  var deadlineYes = document.getElementById("deadline__yes6").checked;
  var deadlineNo = document.getElementById("deadline__no6").checked;
  var recordedGameTitle = document.getElementById("recorded-game6");
  var recordedGameYes = document.getElementById("recorded-game__yes6").checked;
  var recordedGameNo = document.getElementById("recorded-game__no6").checked;
  var privateGameTitle = document.getElementById("private-game6");
  var privateGameYes = document.getElementById("private-game__yes6").checked;
  var privateGameNo = document.getElementById("private-game__no6").checked;

  function resetFieldHighlight(field) {
    field.classList.remove("highlight-empty");
  }

  function highlightField(field) {
    field.classList.add("highlight-empty");
  }

  resetFieldHighlight(ageField);
  resetFieldHighlight(participantsField);
  resetFieldHighlight(durationField);
  resetFieldHighlight(sessionsField);
  resetFieldHighlight(scenarioTitle);
  resetFieldHighlight(deadlineTitle);
  resetFieldHighlight(recordedGameTitle);
  resetFieldHighlight(privateGameTitle);

  var isFormValid = true;

  function isFieldEmpty(field) {
    return field.value === "";
  }

  if (isFieldEmpty(ageField)) {
    highlightField(ageField);
    isFormValid = false;
  }
  if (isFieldEmpty(participantsField)) {
    highlightField(participantsField);
    isFormValid = false;
  }
  if (isFieldEmpty(durationField)) {
    highlightField(durationField);
    isFormValid = false;
  }
  if (isFieldEmpty(sessionsField)) {
    highlightField(sessionsField);
    isFormValid = false;
  }
  if (!scenarioYes && !scenarioNo) {
    highlightField(scenarioTitle);
    isFormValid = false;
  }
  if (!deadlineYes && !deadlineNo) {
    highlightField(deadlineTitle);
    isFormValid = false;
  }
  if (!recordedGameYes && !recordedGameNo) {
    highlightField(recordedGameTitle);
    isFormValid = false;
  }
  if (!privateGameYes && !privateGameNo) {
    highlightField(privateGameTitle);
    isFormValid = false;
  }

  if (isFormValid) {
    const duration = parseInt(durationField.value);
    console.log('Duration: ' + duration);
    const sessions = parseInt(sessionsField.value);
    console.log('Sessions: ' + sessions);
    const participants = parseInt(participantsField.value);
    console.log('Participants: ' + participants);
    const isCustomScenario = scenarioYes;
    console.log('Custom Scenario: ' + isCustomScenario);
    const isDeadlineLessThanOneMonth = deadlineYes;
    console.log('Deadline: ' + isDeadlineLessThanOneMonth);
    const isRecordedGame = recordedGameYes;
    console.log('Recorded Game: ' + isRecordedGame);
    const isPrivateGame = privateGameYes;
    console.log('Private Game: ' + isPrivateGame);

    function calculateY(x, sessions) {
      if (x >= 1 && x <= 6) {
        return 7.0;
      } else if (x > 6 && x <= 12) {
        return 7 - ((x - 6) / 6) * 2;
      } else {
        return 5.0;
      }
    }

    var values = [];

    for (var x = 1; x <= sessions; x++) {
      var y = calculateY(x, sessions);
      values.push({ x: x, y: y });
    }
    console.log('Table of values :', values);

    var basePrice = values.reduce(function (acc, currentValue) {
      return acc + currentValue.y;
    }, 0);

    let referencePrice = basePrice * duration * participants;
    console.log('Reference Price: ' + referencePrice);
    let weightedPrice = referencePrice;
    if (isCustomScenario && isDeadlineLessThanOneMonth && isRecordedGame && isPrivateGame) {
      weightedPrice = referencePrice * 1.8; // 50% + 30% - 10% + 10% = 80% 
    } else if (isCustomScenario && isDeadlineLessThanOneMonth && isRecordedGame) {
      weightedPrice = referencePrice * 1.7; // 50% + 30% - 10% = 70%
    } else if (isCustomScenario && isDeadlineLessThanOneMonth && isPrivateGame) {
      weightedPrice = referencePrice * 1.9; // 50% + 30% + 10% = 90%
    } else if (isCustomScenario && isDeadlineLessThanOneMonth) {
      weightedPrice = referencePrice * 1.8; // 50% + 30% = 80%
    } else if (isCustomScenario && isRecordedGame && isPrivateGame) {
      weightedPrice = referencePrice * 1.5; // 50% - 10% + 10% = 50%
    } else if (isCustomScenario && isRecordedGame) {
      weightedPrice = referencePrice * 1.4; // 50% - 10% = 40%
    } else if (isCustomScenario && isPrivateGame) {
      weightedPrice = referencePrice * 1.6; // 50% + 10% = 60%
    } else if (isCustomScenario) {
      weightedPrice = referencePrice * 1.5; // 50%
    } else if (isDeadlineLessThanOneMonth && isRecordedGame && isPrivateGame) {
      weightedPrice = referencePrice * 1.3; // 30% - 10% + 10% = 30%
    } else if (isDeadlineLessThanOneMonth && isRecordedGame) {
      weightedPrice = referencePrice * 1.2; // 30% - 10% = 20%
    } else if (isDeadlineLessThanOneMonth && isPrivateGame) {
      weightedPrice = referencePrice * 1.4; // 30% + 10% = 40%
    } else if (isDeadlineLessThanOneMonth) {
      weightedPrice = referencePrice * 1.3; // 30%
    } else if (isRecordedGame && isPrivateGame) {
      weightedPrice = referencePrice; // -10% + 10% = 0%
    } else if (isRecordedGame) {
      weightedPrice = referencePrice * 0.9; // -10%
    } else if (isPrivateGame) {
      weightedPrice = referencePrice * 1.1; // +10%
    }
    console.log('Weighted Price: ' + weightedPrice);
    const finalEstimation = weightedPrice;
    console.log('Final Estimate: ' + finalEstimation);
    const estimateBox = document.getElementById("additional-form__boxe-b6");
    const estimateInput = document.getElementById("overall-estimate6");
    estimateBox.textContent = Math.ceil(finalEstimation) + "€";
    estimateInput.value = finalEstimation.toFixed(2) + "€";
  } else {
    alert("Please fill in all required fields.");
  }
}
