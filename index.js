const mensaje = document.querySelector(".mensaje");
const score = document.getElementById("score");
const reset = document.getElementById("btn-reset");
const jugador = document.getElementById("puntos-jugador");
const computadora = document.getElementById("puntos-computadora");
const playerElection = document.getElementById("player_election");
const computerElection = document.getElementById("computer_election");
let player = 0;
let pc = 0;
const juego = ["piedra", "papel", "tijera"];
let armas = document.querySelectorAll(".btn_armas");

armas.forEach((boton) => {
  boton.addEventListener("click", playRound);
});

reset.addEventListener("click", reiniciarJuego);

function playRound(e) {
  e.preventDefault();

  let playerSelection = e.target.id;

  let computerSelection = juego[Math.floor(Math.random() * juego.length)];

  playerElection.textContent = e.target.id;
  computerElection.textContent = computerSelection;

  if (playerSelection == computerSelection) {
    score.textContent = "Empate";
    return;
  }
  if (
    (playerSelection === "piedra" && computerSelection === "tijera") ||
    (playerSelection === "tijera" && computerSelection === "papel") ||
    (playerSelection === "papel" && computerSelection === "piedra")
  ) {
    player++;
    jugador.textContent = player;
    score.textContent = "Felicitaciones Ganaste un punto 👍";
  }
  if (
    (computerSelection === "piedra" && playerSelection === "tijera") ||
    (computerSelection === "tijera" && playerSelection === "papel") ||
    (computerSelection === "papel" && playerSelection === "piedra")
  ) {
    pc++;
    computadora.textContent = pc;
    score.textContent = "La Maquina obtuvo un punto 👊";
  }

  if (player === 5 || pc === 5) {
    if (player === 5) {
      mensaje.textContent = "Tu Ganastes 💪 !!!";
    } else if (pc === 5) {
      mensaje.textContent = "Gano la Maquina 👎!!";
    }
  }
}

function reiniciarJuego(e) {
  e.preventDefault();

  playerElection.textContent = "";
  computerElection.textContent = "";

  player = 0;
  pc = 0;

  jugador.textContent = player;
  computadora.textContent = pc;
  score.textContent = "";
  mensaje.textContent = "";
}
