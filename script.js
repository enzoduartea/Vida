// Inicialização de objeto para armazenar as escolhas do usuário.
let choices = {};

function startGame() {
  // Capturando e armazenando o nome do usuário no início do jogo.
  choices.name = document.getElementById("name").value;
  goToScreen(1);
}

function selectChoice(key, value) {
  // Armazenando a escolha do usuário.
  choices[key] = value;
  // Determinando qual é a tela atual e movendo para a próxima.
  const currentScreenNumber = parseInt(
    document.querySelector(".screen.active").id.replace("screen", "")
  );
  goToScreen(currentScreenNumber + 1);
}

function setChildNames() {
  // Armazenando os nomes dos filhos do usuário.
  choices.sonName = document.getElementById("sonName").value;
  choices.daughterName = document.getElementById("daughterName").value;
  goToScreen(8); // Movendo para a próxima tela.
}

function goToScreen(screenNumber) {
  // Exibindo a tela especificada pelo screenNumber.
  if (screenNumber === 9) {
    // Se estamos indo para a tela final, preenchemos com as escolhas do usuário.
    fillFinalScreen();
  }
  document.querySelector(".screen.active").classList.remove("active");
  document.getElementById(`screen${screenNumber}`).classList.add("active");
}

function fillFinalScreen() {
  // Preenchendo a tela final com as escolhas do usuário.
  document.getElementById("choice-name").textContent =
    choices.name || "__________";
  document.getElementById("choice-gender").textContent =
    choices.gender || "__________";
  document.getElementById("choice-school-feeling").textContent =
    choices["school-feeling"] || "__________";
  document.getElementById("choice-friendship").textContent =
    choices.friendship || "__________";
  document.getElementById("choice-sport").textContent =
    choices.sport || "__________";
  document.getElementById("choice-love").textContent =
    choices.love || "__________";
  document.getElementById("choice-college").textContent =
    choices.college || "__________";
  document.getElementById("choice-son-name").textContent =
    choices.sonName || "__________";
  document.getElementById("choice-daughter-name").textContent =
    choices.daughterName || "__________";
  document.getElementById("choice-job").textContent =
    choices.job || "__________";
}

function restartGame() {
  // Limpando o objeto choices e reiniciando o jogo.
  choices = {};
  goToScreen(0);
}

// Inicialização: Configurando o evento de clique para o botão de início.
document.querySelector(".next-btn").addEventListener("click", startGame);
