/*jslint browser:true */
/*global console*/

// Get Slider Items | Array.from [ES6 Feature]
var sliderImages = Array.from(document.querySelectorAll('.slider-container img'));

// Get Numbers Of Slides
var slidesCount = sliderImages.length;

// Set Current Slider
var currentSlide = 1;

// Slide Number Element
var slideNumberElement = document.getElementById('slide-number');

// Previous & Next Buttons
var nextButton = document.getElementById('next');
var prevButton = document.getElementById('prev');

// Handel Click on Previous And Next Buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// Creat The Main Ul Element
var paginationElement = document.createElement('ul');

// Set Id On Created Ul Element
paginationElement.setAttribute('id', 'pagination-ul');

// Creat List Items Based On Slides Count
for (var i = 1; i <= slidesCount; i++) {

  // Creat Li
  var paginationItem = document.createElement('li');

  // Set Custom Attribute
  paginationItem.setAttribute('data-index', i);

  // Set Item Content
  paginationItem.appendChild(document.createTextNode(i));

  // Append Items To The Main Ul List
  paginationElement.appendChild(paginationItem);
}

// Add The Created Ul Element To The Page
document.getElementById('indicators').appendChild(paginationElement);

// Get The New Created Ul
var paginationCreatedUl = document.getElementById('pagination-ul');

// Trigger The Checker Function;
theChecker();

// Next Slide Function
function nextSlide() {
    'use strict';
    console.log('Next');
}

// Previous Slide Function
function prevSlide() {
    'use strict';
    console.log('Previous');
}

// Create The Checker function
function theChecker() {
    'use strict';

    // Set The Slide Number
    slideNumberElement.textContent = 'Slide #' + (currentSlide) + ' of ' + (slidesCount);

    // Set Active Class On Current Slide
    sliderImages[currentSlide - 1].classList.add('active');

    // Set Active Class On Current pagination Item
    paginationCreatedUl.children[currentSlide - 1].classList.add('active');
}



































////////////////////////////////////////////////////////Height
