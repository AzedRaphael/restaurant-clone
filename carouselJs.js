

let slidePosition = 0;

const slides = document.querySelectorAll(".carousel-item");
const totalSlides = slides.length;

document.getElementById("link1").addEventListener("click", function(){
  moveToNextSlide()
})
document.getElementById("link2").addEventListener("click", function(){
  moveToNextSlide()
})
document.getElementById("link3").addEventListener("click", function(){
  moveToNextSlide()
})
document.getElementById("link4").addEventListener("click", function(){
  moveToFirstSlide()
})

function updateSlidePosition(){
  for(let slide of slides){
    slide.classList.remove('carousel-item--visible');
    slide.classList.add('carousel-item--hidden');
  }
  slide[slidePosition].classList.add('carousel-item--visible')
}
function moveToNextSlide(){
  
  if(slidePosition == totalSlides){
    slidePosition = 0
  }else{
    slidePosition++
  }
  updateSlidePosition()
}

function moveToFirstSlide(){
  
  if(slidePosition == 0){
    slidePosition = 0
  }else{
    slidePosition --
  }
  updateSlidePosition()
}








