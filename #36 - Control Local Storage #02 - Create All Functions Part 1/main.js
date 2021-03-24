// Select elements
let allSpans = document.querySelectorAll('.buttons span');
let results = document.querySelector('.results > span');
let theInput = document.getElementById('the-input');

allSpans.forEach(span => {

  span.addEventListener('click', (e) => {

    if (e.target.classList.contains('check-item')) {
      
      checkItem();
    }

    if (e.target.classList.contains('add-item')) {
      
      addItem();
    }

    if (e.target.classList.contains('delete-item')) {
      
      deleteItem();
    }

    if (e.target.classList.contains('show-items')) {
      
      showItems();
    }
  });
});

function checkInput() {

  if (theInput.value === '') {
    
    results.innerHTML = 'Input cant be empty';
  }
}

function checkItem() {
  
  if (theInput.value !== '') {
    
    if (localStorage.getItem(theInput.value)) {
      
      results.innerHTML = `Found local storage item called <span>${theInput.value}</span>`;

    } else {

      results.innerHTML = `No local storage item called <span>${theInput.value}</span> is found`;
    }

  } else {
    
    checkInput();
  }
}

function addItem() {
  
  console.log('Add');
}

function deleteItem() {
  
  console.log('Delete');
}

function showItems() {
  
  console.log('Show');
}