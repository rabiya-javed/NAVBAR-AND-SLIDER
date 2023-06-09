var slider = document.querySelector('.slider-container');
var slideWidth = document.querySelector('.slide').offsetWidth;
var slideIndex = 0;

function slideNext() {
  if (slideIndex < slider.children.length - 1) {
    slideIndex++;
    slider.style.transform = 'translateX(-' + (slideWidth * slideIndex) + 'px)';
  } else {
    slideIndex = 0;
    slider.style.transform = 'translateX(0)';
  }
}

setInterval(slideNext, 5000);
