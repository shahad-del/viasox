const carouselContainer = document.querySelector('.card_container');
const carouselSlide = document.querySelectorAll(".card_content");
// button
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector('#nextBtn');
let counter = 1;
const size = (carouselSlide[0].clientWidth);
carouselContainer.style.transform = 'translateX(' + (-size * counter) + 'px)';

// button listeners
nextBtn.addEventListener('click',() =>{
    
    carouselContainer.style.transition = "transform 0.4s ease-in-out";
    counter++
    carouselContainer.style.transform = 'translateX(' + (-size * counter) + 'px)';
})
prevBtn.addEventListener('click',() =>{
    carouselContainer.style.transition = "transform 0.4s ease-in-out";
    counter--
    carouselContainer.style.transform = 'translateX(' + (-size * counter) + 'px)';
})
carouselContainer.addEventListener('transitionend',() =>{
    console.log(carouselSlide[counter]);
    if (carouselSlide[counter].id =="last_clone"){
        carouselContainer.style.transition ="none";
        counter = carouselSlide.length -2;
        carouselContainer.style.transform = 'translateX(' + (-size * counter) + 'px)';

    };
    if (carouselSlide[counter].id =="first_clone"){
        carouselContainer.style.transition ="none";
        counter = carouselSlide.length -counter;
        carouselContainer.style.transform = 'translateX(' + (-size * counter) + 'px)';
    };
})
function carousel(carousel_name,carousel__item) {
  let carouselSlider = document.querySelector(carousel_name);
  let list = document.querySelector(carousel__item);
  // let item = document.querySelectorAll(".carousel__item");
  let list2;

  const speed = 0.8;

  const width = list.offsetWidth;
  let x = 0;
  let x2 = width;

  function clone() {
    list2 = list.cloneNode(true);
    carouselSlider.appendChild(list2);
    list2.style.left = `${width}px`;
  }

  function moveFirst() {
    x -= speed;

    if (width >= Math.abs(x)) {
      list.style.left = `${x}px`;
    } else {
      x = width;
    }
  }

  function moveSecond() {
    x2 -= speed;

    if (list2.offsetWidth >= Math.abs(x2)) {
      list2.style.left = `${x2}px`;
    } else {
      x2 = width;
    }
  }
  clone();
  let a = setInterval(moveFirst, 10);
  let b = setInterval(moveSecond, 10);
 // function hover() {
  //   clearInterval(a);
  //   clearInterval(b);
  // }

  // function unhover() {
  //   a = setInterval(moveFirst, 10);
  //   b = setInterval(moveSecond, 10);
  // }
  // carouselSlider.addEventListener("mouseenter", hover);
  // carouselSlider.addEventListener("mouseleave", unhover);
}
carousel(".carousel__slider",".carousel__list");
carousel(".carousel__slider_spread_love",".carousel__list_spread_love")
carousel(".carousel__slider_spread_love1",".carousel__list_spread_love1")

function hideAway(element) {
  const content = element.nextElementSibling;
  content.style.transition = 'all 1.5s';
  content.style.fontSize = '1.3rem';
  content.style.margin = '0.5rem 0';


  content.style.display = (content.style.display === 'none') ? 'block' : 'none';
  if (content.style.display === 'none') {
    element.style.backgroundImage = 'url(https://cdn.shopify.com/s/files/1/0253/3641/4261/files/plus-icon.png?v=1652251348)';
  } else {
    element.style.backgroundImage = 'url(https://cdn.shopify.com/s/files/1/0253/3641/4261/files/minus-icon.png?v=1652251348)';
  }
}
