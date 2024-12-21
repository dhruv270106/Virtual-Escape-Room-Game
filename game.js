// Game state
let currentPuzzle = 0;
const puzzles = [
    {
        question: "What has keys but can't open locks?",
        answer: "keyboard"
    },
    {
        question: "I speak without a mouth and hear without ears. What am I?",
        answer: "echo"
    },
    {
        question: "The more of me you take, the more you leave behind. What am I?",
        answer: "footsteps"
    }
];

// DOM elements
const puzzleElement = document.getElementById('puzzle');
const messageElement = document.getElementById('message');
const answerInput = document.getElementById('answer');
const submitButton = document.getElementById('submit-button');

// Load the current puzzle
function loadPuzzle() {
    puzzleElement.textContent = puzzles[currentPuzzle].question;
    messageElement.textContent = "";
    answerInput.value = "";
}

// Check the user's answer
function checkAnswer() {
    const userAnswer = answerInput.value.trim().toLowerCase();
    if (userAnswer === puzzles[currentPuzzle].answer) {
        currentPuzzle++;
        if (currentPuzzle < puzzles.length) {
            messageElement.textContent = "Correct! Here's the next puzzle.";
            loadPuzzle();
        } else {
            messageElement.textContent = "Congratulations! You've escaped!";
            puzzleElement.textContent = "You solved all the puzzles!";
            answerInput.style.display = 'none';
            submitButton.style.display = 'none';
        }
    } else {
        messageElement.textContent = "Incorrect! Try again.";
    }
}

// Event listener
submitButton.addEventListener('click', checkAnswer);

// Initialize game
loadPuzzle();


