// Now 12 emojis → 24 cards total (full 4 rows)
const emojis = ["🍕","🎮","🐱","⚽","🎲","🚀","🌙","🍩","🐼","🌟","🔥","🍫"];
let cardsArray = [...emojis, ...emojis]; // Duplicate to make pairs
let score = 0;
let flippedCard = null;
let lock = false;

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}
shuffle(cardsArray);

const container = document.querySelector(".game-container");

// Generate Cards
cardsArray.forEach(emoji => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
        <div class="card-inner">
            <div class="card-front">${emoji}</div>
            <div class="card-back"></div>
        </div>`;
    container.appendChild(card);

    card.addEventListener("click", () => flipCard(card, emoji));
});

// Flip Logic
function flipCard(card, emoji) {
    if (lock) return;
    if (card === flippedCard) return;

    card.classList.add("flip");

    if (!flippedCard) {
        flippedCard = card;
        return;
    }

    if (card.innerText === flippedCard.innerText) {
        score++;
        document.getElementById("score").innerText = score;
        flippedCard = null;
    } else {
        lock = true;
        setTimeout(() => {
            card.classList.remove("flip");
            flippedCard.classList.remove("flip");
            flippedCard = null;
            lock = false;
        }, 700);
    }
}

// Restart Button
document.getElementById("restart").addEventListener("click", () => {
    location.reload();
});