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

let duration = 1000;

let blocksContainer = document.querySelector('.memory-game-blocks');

let blocks = Array.from(blocksContainer.children);

let orderRange = [...Array(blocks.length).keys()];

console.log(orderRange);