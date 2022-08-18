const btns = document.querySelectorAll(".btns");
const menuItem = document.querySelectorAll(".menu-item");

for (i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function (e) {
    e.preventDefault();
    const filters = e.target.dataset.filter;
    menuItem.forEach((product) => {
      if (filters == "all") {
        product.style.display = "block";
      } else {
        if (product.classList.contains(filters)) {
          product.style.display = "block";
        } else {
          product.style.display = "none";
        }
      }
    });
  });
}

const btnSpecial = document.querySelectorAll(".btn-item");
const menuSpecial = document.querySelectorAll(".special");

for (i = 0; i < btnSpecial.length; i++) {
  btnSpecial[i].addEventListener("click", function (e) {
    e.preventDefault();
    const filters = e.target.dataset.filter;
    menuSpecial.forEach((product) => {
      if (filters == "all") {
        product.style.display = "block";
        product.style.transition = "all 2s";
      } else {
        if (product.classList.contains(filters)) {
          product.style.display = "block";
          product.style.transition = "all 2s";
        } else {
          product.style.display = "none";
        }
      }
    });
  });
}

let counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 3) {
    counter = 1;
  }
}, 3000);

var slideIndex = 0;
slideShows(slideIndex);

function currentSlide(n) {
  slideShows((slideIndex = n));
}

function slideShows(n) {
  let radBtns = document.getElementsByClassName("dot");
  let testSlides = document.getElementsByClassName("test-slide");

  let tempArray = [];

//   for (let index = 0; index < testSlides.length; index++) {
//     tempArray.push(testSlides[i]);
//     const element = testSlides[index];
//     element.innerHTML = tempArray;
//     // console.log(element)
//   }
  for (let i = n; i < testSlides.length; i++) {
    tempArray.push(testSlides[i]);
  }

  for (let i = 0; i < n; i++) {
    tempArray.push(testSlides[i]);
  }
  // console.log(testSlides);
  

  for(let i = 0;i<testSlides.length;i++){
    testSlides[i].innerHTML = tempArray[i].innerHTML;
  }
  // console.log(testSlides)
  console.log(testSlides);
  // if(n > testSlides.length){slideIndex = 1}
  // if(n<1){slideIndex = slides.length}

  // for(i=0; i<testSlides.length;i++){
  //     radBtns[i].className = radBtns[i].className.replace("active", "");
  // }
  // testSlides[i].className += "active"
}

// let testBtns = document.getElementsByClassName("test-manual-btn");

// for (var i = 0; i < testBtns.length; i++) {
//     testBtns[i].addEventListener("click", function() {
//       var current = document.getElementsByClassName("active");
//       current[i].className = current[i].className.replace(" active", "");
//       this.className += " active";
//     });
//   }

// let count = 1;
// setInterval(function(){
//     document.getElementById("rad" + count).checked = true;
//     count++
//     if(count > 5){
//         count = 1
//     }
// }, 3000)
