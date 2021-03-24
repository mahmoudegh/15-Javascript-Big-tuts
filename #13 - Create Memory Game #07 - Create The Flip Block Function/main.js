// Select The Start Game Button
document.querySelector('.control-buttons span').onclick = function () {

  // Prompt Window To Ask For Name
  let yourName = prompt('Whats Your Name?');
  
  // If Name Is Empty
  if (yourName == null || yourName == '') {
    
    // Set Name To Unknown
    document.querySelector('.name span').innerHTML = 'Unknown';
  
  // Name Is Not Empty
  } else {

    // Set Name To Your Name
    document.querySelector('.name span').innerHTML = yourName;
  }

  // Remove Splash Screen
  document.querySelector('.control-buttons').remove();
}

// Effect Duration
let duration = 1000;

// Select Blocks Container
let blocksContainer = document.querySelector('.memory-game-blocks');

// Creat Array From Game Blocks
let blocks = Array.from(blocksContainer.children);

// Creat Range Of Keys (By Two Ways)
// let orderRange = [...Array(blocks.length).keys()];
let orderRange = Array.from(Array(blocks.length).keys());

// console.log(orderRange);
shuffle(orderRange);
// console.log(orderRange);

// Add Order Property To Game Block
blocks.forEach((block, index) => {
  
  block.style.order = orderRange[index];

  // Add Click Event
  block.addEventListener('click', function () {
    
    // Trigger The Flip Block Function
    flipBlock(block);
  });
});

// Flip Block Function
function flipBlock(selectedBlock) {
  
  // Add Class Is Flipped
  selectedBlock.classList.add('is-flipped');

  // Collect All Flipped Cards
  let allFlippedBlocks = blocks.filter(flippedBlock => flippedBlock.classList.contains('is-flipped'));

  // If There Is Two Selected Blocks
  if (allFlippedBlocks.length === 2) {

    // console.log('Two Flipped Blocks Is Selected');

    // Stop Clicking Function

    // Check Matched Block Function
  }
}

// Shuffle Function
function shuffle(array) {
  
  // Settings Vars
  let current = array.length,
      temp,
      random;

  while (current > 0) {
    
    // Get Random Number
    random = Math.floor(Math.random() * current);

    // Decrease Length By One
    current--;

    // [1] Save Current Element In Stash
    temp = array[current];

    // [2] Current Element = Random Element
    array[current] = array[random];

    // [3] Random Element = Get Element From Stash
    array[random] = temp;
  }

  return array;
}