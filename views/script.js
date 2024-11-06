const dynamicText = document.getElementById("dynamic-text");
const phrases = ["a Student", "an Athlete"];
let currentPhraseIndex = 0;
let currentCharIndex = 0;

function typePhrase() {
    if (currentCharIndex < phrases[currentPhraseIndex].length) {
        dynamicText.textContent += phrases[currentPhraseIndex].charAt(currentCharIndex);
        currentCharIndex++;
        setTimeout(typePhrase, 100); // Adjust typing speed here
    } else {
        setTimeout(erasePhrase, 2000); // Wait before erasing
    }
}

function erasePhrase() {
    if (currentCharIndex > 0) {
        dynamicText.textContent = phrases[currentPhraseIndex].substring(0, currentCharIndex - 1);
        currentCharIndex--;
        setTimeout(erasePhrase, 50); // Adjust erasing speed here
    } else {
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length; // Move to the next phrase
        setTimeout(typePhrase, 1000); // Wait before typing the next phrase
    }
}

// Start the typing effect
typePhrase();