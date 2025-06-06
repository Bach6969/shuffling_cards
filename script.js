const cardPile = document.getElementById('cardPile');
const shuffleButton = document.getElementById('shuffleButton');
const chooseButton = document.getElementById('chooseButton');
const resultDiv = document.getElementById('result');

// Create 22 cards dynamically
for (let i = 1; i <= 22; i++) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.textContent = i; // Optional: Display card number
  card.style.top = `${i * 0.5}px`; // slight stacking effect
  card.style.zIndex = 22 - i;
  cardPile.appendChild(card);
}

// Select all cards
const cards = document.querySelectorAll('.card');

// Shuffle animation
function shuffleCards() {
  cards.forEach(card => {
    const randomX = Math.random() * 40 - 20; // move -20px to 20px
    const randomY = Math.random() * 40 - 20;
    const randomRotate = Math.random() * 20 - 10;
    card.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotate}deg)`;
  });

  // Reset to stack after a short delay
  setTimeout(() => {
    cards.forEach(card => {
      card.style.transform = 'translate(0, 0) rotate(0)';
    });
  }, 500);
}

// Choose a random card
function chooseCard() {
  const chosenIndex = Math.floor(Math.random() * cards.length);
  resultDiv.textContent = `You chose Card ${chosenIndex + 1}! 🎉`;

  // Highlight the chosen card
  cards.forEach((card, index) => {
    if (index === chosenIndex) {
      card.style.border = '4px solid gold';
    } else {
      card.style.border = '2px solid #333';
    }
  });
}

// Event listeners
shuffleButton.addEventListener('click', shuffleCards);
chooseButton.addEventListener('click', chooseCard);
