var address = "15 le Clos de Plaisance 57530 SILLY-SUR-NIED";
var encodedAddress = btoa(address);
document.getElementById("address").textContent = atob(encodedAddress);

var email = "yanklinnomme@gmail.com";
var encodedEmail = btoa(email);
document.getElementById("email").textContent = atob(encodedEmail);