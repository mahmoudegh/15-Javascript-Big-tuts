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



































////////////////////////////////////////////////////////Height
