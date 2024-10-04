/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  generarCarta();
  setInterval(generarCarta, 5000);
};

function generarCarta() {
  let palo = ["♦", "♥", "♠", "♣"];
  let paloRandom = palo[Math.floor(Math.random() * palo.length)];
  let numero = [2, 3, 4, 5, 6, 7, 8, 9, "A", "J", "Q", "K"];
  let numeroRandom = numero[Math.floor(Math.random() * numero.length)];
  console.log(paloRandom, numeroRandom);
  document.getElementById("palo").innerHTML = paloRandom;
  document.getElementById("numero").innerHTML = numeroRandom;
  document.getElementById("palo-abajo").innerHTML = paloRandom;
  if (paloRandom == "♥" || paloRandom == "♦") {
    document.getElementById("palo").style.color = "red";
    document.getElementById("palo-abajo").style.color = "red";
  } else {
    document.getElementById("palo").style.color = "black";
    document.getElementById("palo-abajo").style.color = "black";
  }
}
