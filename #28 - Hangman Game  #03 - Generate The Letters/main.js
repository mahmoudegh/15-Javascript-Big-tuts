// Letters
const letters = 'abcdefghijklmnopqrstuvwxyz';

// Get array from letters
let lettersArray = Array.from(letters);

// Select letters container
let lettersContainer = document.querySelector('.letters');

// Generate letters
lettersArray.forEach(letter => {

  // Create span
  let span = document.createElement('span');

  // Create letter text
  let theLetter = document.createTextNode(letter);

  // Append the letter to span
  span.appendChild(theLetter);

  // Add class name to span
  span.className = 'letter-box';

  // Append the span to letters container
  lettersContainer.appendChild(span);
});