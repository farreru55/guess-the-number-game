// Game State
let targetNumber;
let chances = 3;
const maxChances = 3;
let isGameOver = false;

// DOM Elements
const guessInput = document.getElementById('guessInput');
const guessBtn = document.getElementById('guessBtn');
const livesContainer = document.getElementById('lives-container');
const gameArea = document.getElementById('game-area');
const feedbackArea = document.getElementById('feedback');
const feedbackText = document.getElementById('feedbackText');
const feedbackSub = document.getElementById('feedbackSub');
const feedbackIcon = document.getElementById('feedbackIcon');
const restartBtn = document.getElementById('restartBtn');

// Initialize Game
function initGame() {
    targetNumber = Math.floor(Math.random() * 10) + 1;
    chances = maxChances;
    isGameOver = false;

    // Reset UI
    guessInput.value = '';
    guessInput.disabled = false;
    guessInput.parentElement.classList.remove('opacity-50');
    
    guessBtn.disabled = false;
    guessBtn.classList.remove('opacity-0', 'pointer-events-none');
    
    // Show Game Area, Hide Feedback
    gameArea.classList.remove('hidden');
    feedbackArea.classList.add('hidden');
    
    renderLives();
    guessInput.focus();
    
    console.log("Debug: Target is " + targetNumber);
}

function renderLives() {
    livesContainer.innerHTML = '';
    for (let i = 0; i < maxChances; i++) {
        const heart = document.createElement('i');
        // 'ph-heart-fill' for active, 'ph-heart' for lost
        if (i < chances) {
            heart.className = 'ph-fill ph-heart text-ctp-red text-lg drop-shadow-[0_0_8px_rgba(243,139,168,0.5)] transition-all duration-300';
        } else {
            heart.className = 'ph ph-heart text-ctp-surface1 text-lg';
        }
        livesContainer.appendChild(heart);
    }
}

// Handle Guess Logic
function handleGuess() {
    if (isGameOver) return;

    const userGuess = parseInt(guessInput.value);

    // Validation
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
        shakeInput();
        return;
    }

    if (userGuess === targetNumber) {
        endGame(true);
    } else {
        chances--;
        renderLives();
        
        if (chances === 0) {
            endGame(false);
        } else {
            shakeInput();
            // Optional: Tooltip or small text could go here, 
            // but for elegance we might just rely on the shake + lives logic
            // or we can repurpose the input placeholder temporarily
            const originalPlaceholder = guessInput.placeholder;
            guessInput.value = '';
            guessInput.placeholder = userGuess < targetNumber ? "Higher ▲" : "Lower ▼";
            setTimeout(() => {
                 if(!guessInput.value) guessInput.placeholder = "?";
            }, 1500);
            guessInput.focus();
        }
    }
}

function shakeInput() {
    const container = guessInput.parentElement;
    container.classList.remove('animate-shake');
    void container.offsetWidth; // trigger reflow
    container.classList.add('animate-shake');
    // Also clear input if it was a valid but wrong guess for better UX? 
    // Let's keep the number so they see what they guessed, unless logic clears it.
}

function endGame(win) {
    isGameOver = true;
    
    // Smooth transition: Fade out game controls slightly
    gameArea.classList.add('hidden');
    feedbackArea.classList.remove('hidden');
    
    if (win) {
        feedbackIcon.textContent = '🎉';
        feedbackText.textContent = "Spectacular!";
        feedbackText.className = "text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-ctp-mauve to-ctp-blue mb-2";
        feedbackSub.textContent = `You found number ${targetNumber} with ${chances} ${chances === 1 ? 'life' : 'lives'} remaining.`;
    } else {
        feedbackIcon.textContent = '💔';
        feedbackText.textContent = "Out of Lives";
        feedbackText.className = "text-2xl font-bold text-ctp-subtext0 mb-2";
        feedbackSub.textContent = `The mystic number was ${targetNumber}.`;
    }
}

// Event Listeners
guessBtn.addEventListener('click', handleGuess);

guessInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleGuess();
});

restartBtn.addEventListener('click', initGame);

// Start
initGame();
