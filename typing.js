
// Sentences array for random selection
const sentences = [
    "Undressing her was an act of recklessness, a kind of vandalism, like releasing a zoo full of animals, or blowing up a dam.",
    "A sudden warm rainstorm washes down in sweet hyphens.",
    "When she shouted, the gulls hidden by the dune buckshot the low clouds.",
    "Are beautiful sentences full of nice turns of phrase?",
    "The quick brown fox jumps over the lazy dog.",
    "Typing tests are a great way to improve your skills.",
    "Practice makes perfect in typing and coding.",
    "Frontend development requires a good typing speed.",
    "The circle of an empty day is brutal and at night it tightens around your neck like a noose."
];

// Selecting HTML elements
const sentenceDisplay = document.getElementById("sentence");
const inputBox = document.getElementById("input-box");
const startBtn = document.getElementById("start-btn");
const wpmDisplay = document.getElementById("wpm");
const accuracyDisplay = document.getElementById("accuracy");

let startTime, endTime;
let currentSentence = "";
let timerStarted = false;

// Function to start the typing test
function startTest() {
    if (timerStarted) {
        resetTest();
    }

    // Randomly select a sentence
    currentSentence = sentences[Math.floor(Math.random() * sentences.length)];
    sentenceDisplay.textContent = currentSentence;
    
    // Reset values
    inputBox.value = "";
    wpmDisplay.textContent = "0";
    accuracyDisplay.textContent = "0%";
    
    inputBox.disabled = false;
    inputBox.focus();
    
    timerStarted = true;
    startTime = new Date().getTime();
    
}

// Function to reset the typing test
function resetTest() {
    inputBox.value = "";
    sentenceDisplay.textContent = "Press 'Start' to begin a new test.";
    inputBox.disabled = true;
    timerStarted = false;
}

// Function to calculate results when typing is complete
function calculateResults() {
    endTime = new Date().getTime();
    const timeTaken = (endTime - startTime) / 1000; // in seconds
    

    
    // Calculate WPM
    const wordsTyped = inputBox.value.length / 5; // Average 5 characters per word
    const wpm = Math.round((wordsTyped / timeTaken) * 60); // Convert seconds to minutes
    wpmDisplay.textContent = wpm;

    // Calculate accuracy
    const typedText = inputBox.value;
    let correctChars = 0;
    for (let i = 0; i < typedText.length; i++) {
        if (typedText[i] === currentSentence[i]) {
            correctChars++;
        }
    }
    const accuracy = Math.round((correctChars / currentSentence.length) * 100);
    accuracyDisplay.textContent = accuracy + "%";

    inputBox.disabled = true;
    timerStarted = false;
    console.log(correctChars);
    console.log(currentSentence.length)
}

// Event listeners
startBtn.addEventListener("click", startTest);

// Detect when the user finishes typing
document.addEventListener("DOMContentLoaded", () => {
    //const inputBox = document.getElementById('input-box');
    inputBox.addEventListener("keydown", (event) => {
        if (event.key==="Enter"){           
            calculateResults();          
        }
        
    });
});