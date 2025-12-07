// Common alert function
const showAlert = () => alert(
  "Oops! These features aren't available right now. We're working on updates—please check back soon!"
);

// Add alert to all <a> and <button> elements
document.querySelectorAll('a, button').forEach(el =>
  el.addEventListener('click', showAlert)
);

// Game routing (className : filePath)
const gameRoutes = {
  ttt: "Tic-Tac-Toe/TicTacToe.html",
  typer: "Typing-Speed/TypeRacerPro.html",
  catcher: "Neon-Catcher/CatchingObjects.html",
  clicking: "Clicking/ClickingTarget.html",
  snakes: "Snakes/snakes.html",
  shoot: "ShootOut/ShootOut.html",
  memory: "Memory/memory.html"
};

// Add click listener to each game
Object.entries(gameRoutes).forEach(([cls, url]) => {
  document.querySelectorAll(`.${cls}`).forEach(el =>
    el.addEventListener('click', () => window.location.href = url)
  );
});
