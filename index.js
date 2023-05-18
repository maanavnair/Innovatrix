// Define an array of words for the typewriter animation
const words = ['AFFORDABLE', 'RELIABLE', 'VALUABLE'];

// Get the typewriter element
const typewriterElement = document.querySelector('.typewriter');

// Function to animate the words
function animateWords() {
  // Retrieve the current word index from the data attribute
  let wordIndex = parseInt(typewriterElement.getAttribute('data-word-index'));

  // If the word index is invalid or exceeds the array length, reset it to 0
  if (isNaN(wordIndex) || wordIndex >= words.length) {
    wordIndex = 0;
  }

  // Get the current word from the array
  const currentWord = words[wordIndex];

  // Clear the existing content
  typewriterElement.innerHTML = '';

  // Animate the word
  let charIndex = 0;
  let typingInterval = setInterval(() => {
    if (charIndex < currentWord.length) {
      const char = currentWord[charIndex];
      const charElement = document.createElement('span');
      charElement.textContent = char;
      typewriterElement.appendChild(charElement);
      charIndex++;
    } else {
      clearInterval(typingInterval);
      typewriterElement.classList.remove('typing');

      // Increment the word index and store it in the data attribute
      wordIndex++;
      typewriterElement.setAttribute('data-word-index', wordIndex);
    }
  }, 100);

  // Trigger the typewriter animation by adding the 'typing' class
  typewriterElement.classList.add('typing');
}

// Animate the words immediately and then at intervals
animateWords();
setInterval(animateWords, 6000); // Adjust the interval duration (in milliseconds)
