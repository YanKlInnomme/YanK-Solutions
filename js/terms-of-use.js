var identity = "Kévin BOIME";
var encodedIdentity = btoa(identity);
document.getElementById("identity").textContent = atob(encodedIdentity);

var address = "15 le Clos de Plaisance 57530 SILLY-SUR-NIED";
var encodedAddress = btoa(address);
document.getElementById("address1").textContent = atob(encodedAddress);
document.getElementById("address2").textContent = atob(encodedAddress);


var phone = "06.72.40.10.26";
var encodedPhone = btoa(phone);
document.getElementById("phone").textContent = atob(encodedPhone);

var email = "yanklinnomme@gmail.com";
var encodedEmail = btoa(email);
document.getElementById("email1").textContent = atob(encodedEmail);
document.getElementById("email2").textContent = atob(encodedEmail);

var siret = "97794344800018";
var encodedSiret = btoa(siret);
document.getElementById("siret").textContent = atob(encodedSiret);