document.querySelector('.control-buttons span').onclick = function () {

  let yourName = prompt('Whats Your Name?');
  
  if (yourName == null || yourName == '') {

    document.querySelector('.name span').innerHTML = 'Unknown';

  } else {

    document.querySelector('.name span').innerHTML = yourName;
  }

  document.querySelector('.control-buttons').remove();
}