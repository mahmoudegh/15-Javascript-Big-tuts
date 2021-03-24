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

// Add Order Property To Game Block
blocks.forEach((block, index) => {
  
  block.style.order = orderRange[index];
});