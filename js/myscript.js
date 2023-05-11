const userName = prompt('Inserisci il tuo nome');
let userAge = parseInt(prompt ('inserisci la tua età'));
const favColor = prompt('inserisci il tuo colore preferito');
let password = userName + userAge + favColor + 21;
document.getElementById("nome").innerHTML=userName;
document.getElementById("età").innerHTML=userAge;
document.getElementById("colore").innerHTML=favColor;
document.getElementById("password").innerHTML=password; 

