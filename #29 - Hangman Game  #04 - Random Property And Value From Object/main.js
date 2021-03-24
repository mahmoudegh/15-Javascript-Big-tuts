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

// Objects of words & categories
const words = {
  programming: ["php", "javascript", "go", "scala", "fortran", "r", "mysql", "python"],
  movies: ["Prestige", "Inception", "Parasite", "Interstellar", "Whiplash", "Memento", "Coco", "Up"],
  people: ["Albert Einstein", "Hitchcock", "Alexander", "Cleopatra", "Mahatma Ghandi"],
  countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"]
}

// Get random property
let allKeys = Object.keys(words);

// Random number depend on keys length
let randomPropNumber = Math.floor(Math.random() * allKeys.length);

// Category
let randomPropName = allKeys[randomPropNumber];

// Ctegory words
let randomPropValue = words[randomPropName];

// Random number depend on words
let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);

// The chosen word
let randomValueValue = randomPropValue[randomValueNumber];

// Set category info
document.querySelector('.game-info .category span').innerHTML = randomPropName;