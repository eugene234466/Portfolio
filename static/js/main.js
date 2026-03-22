// Array of phrases to type out
const phrases = [
    "CE Student",
    "Python Developer",
    "Builder of things that actually do something 😂"
];

// Keep track of state
let currentPhraseIndex = 0;
let currentCharIndex = 0;
let isTyping = true;

// Get the tagline element from the DOM
const taglineElement = document.querySelector('.tagline');

function type() {
    if (!taglineElement) return;
    
    const currentPhrase = phrases[currentPhraseIndex];
    
    if (isTyping) {
        // ADD next character to the display
        currentCharIndex++;
        taglineElement.textContent = currentPhrase.substring(0, currentCharIndex);
        
        // IF word is complete
        if (currentCharIndex === currentPhrase.length) {
            isTyping = false;
            // PAUSE then start deleting (2000ms pause)
            setTimeout(type, 2000);
            return;
        }
    } else {
        // REMOVE last character from display
        currentCharIndex--;
        taglineElement.textContent = currentPhrase.substring(0, currentCharIndex);
        
        // IF word is empty
        if (currentCharIndex === 0) {
            // MOVE to next phrase
            currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
            // START typing again
            isTyping = true;
        }
    }
    
    // Set delays: fast when typing (100ms), slow when deleting (50ms)
    const delay = isTyping ? 100 : 50;
    setTimeout(type, delay);
}

// WHEN page loads, start the animation
document.addEventListener('DOMContentLoaded', () => {
    // Initialize with empty text
    if (taglineElement) {
        taglineElement.textContent = '';
    }
    type();
});