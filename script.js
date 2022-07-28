const content2 = document.querySelector("div.content2-wrap");
const section3 = document.querySelector("div.content2-wrap section.section3-wrap");
const brewingTools = document.querySelector("div.brewing-tools");


const productDescBtns = document.querySelectorAll("button.product-desc-btn");
// there are two things we want to do:
// 1. toggle the description product (<p> tag)
// 2. toggle the caret symbol (<svg> tag)
productDescBtns.forEach(productDescBtn => {
  productDescBtn.addEventListener("click", function(){
    // this === event.target or
    // this ===  <button class="product-desc-btn"> ... </button>
    // as https://www.w3schools.com/js/js_this.asp said:
    // "In an event, this refers to the element that received the event."

    const caret = this.querySelector(".caret-container");

    this.nextElementSibling.classList.toggle("transparent-color");
    caret.children[0].classList.toggle("hidden");
    caret.children[1].classList.toggle("show");
  });
});

const topNav = document.querySelectorAll("nav.top-nav ul li");

// references: 
// https://stackoverflow.com/questions/49820013/javascript-scrollintoview-smooth-scroll-and-offset
// https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
// https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY see *a below for example
// this feautre is all only about navigation
topNav.forEach((li,idx) => {
  // indices description:
  // 0 is for "Garden"
  // 1 is for "Coffee & Tea Tools"
  // 2 is for "Products"
  li.addEventListener("click",function(e){
    // use this to prevent the default behaviour of tag <a> which will refresh the page whenever we click it
    e.preventDefault();
    if(idx===0){
      const position = content2.getBoundingClientRect();
      const offsetPosition = position.top + window.scrollY;
      window.scrollTo({top:offsetPosition,behavior:"smooth"})
    }else if(idx===2){
      const position = section3.getBoundingClientRect();
      // 1rem = 16px <=> 7rem = 112px
      // 112 is the padding of the title(3rem) and the size of the text(4rem)
      const offsetPosition = position.top + window.scrollY -150;
      window.scrollTo({top:offsetPosition,behavior:"smooth"})
    };
  });
});


// hamburger menu
const hamburgerMenu = document.querySelector(".btn1");
const topNavContainer = document.querySelector("nav.top-nav");
hamburgerMenu.addEventListener("click", function(){
  this.classList.toggle("open");
  topNavContainer.classList.toggle("show");
})


// self information
const infoContainer = document.querySelector(".info-container");
infoContainer.addEventListener("click", function(){
  this.nextElementSibling.classList.toggle("show-flex");
});


















// reference:
// https://github.com/patrickchennn/my-sort-visualizer
const algoMenuLine = document.querySelector(".algo-menu-line");
const topNavContainerUl = document.querySelector("nav.top-nav ul");

let leftDef=0, widthDef=0;
let calcPosition, calcWidth;

// *if the user have not click anything in the algo picker
let isFirstTime = true;

// minus 1 to exclude the last element which line animation it self
for(let i=0; i<topNavContainerUl.childElementCount-1; i++){
  /* references:
    https://stackoverflow.com/questions/442404/retrieve-the-position-x-y-of-an-html-element
    https://stackoverflow.com/questions/11634770/get-position-offset-of-element-relative-to-a-parent-container
  */

  // if the li element is hovered
  topNavContainerUl.children[i].addEventListener("mouseover", (e) => {
    let menu = e.target;
    console.log(menu);
    console.log(menu.offsetLeft);

    // show the line
    algoMenuLine.style.display = "block";
    
    // adjust the width
    calcWidth = menu.offsetWidth;
    algoMenuLine.style.width = calcWidth + "px";
    
    // adjust the coordinate
    calcPosition = menu.offsetLeft;
    algoMenuLine.style.left = calcPosition + "px";
  });
  
  // if the li element is clicked
  topNavContainerUl.children[i].addEventListener("click", () => {
    console.log("clicked");
    
    // make the menu line fixed place according where it gets clicked
    algoMenuLine.style.width = calcWidth + "px";
    algoMenuLine.style.left = calcPosition + "px";

    widthDef = calcWidth;
    leftDef = calcPosition;
    isFirstTime=false;
  });
}

topNavContainerUl.addEventListener("mouseleave", () => {
  // *if the user have not click anything in the algo picker, remove the line animation.
  if(isFirstTime===true) algoMenuLine.style.display = "none"
  
  // but we will maintain where is the last hovered element
  algoMenuLine.style.width = widthDef + "px";
  algoMenuLine.style.left = leftDef + "px";
});




// reference: https://blog.logrocket.com/build-image-carousel-from-scratch-vanilla-javascript/
let currSlide = 0;
const slides = document.querySelectorAll(".slide");
const nextSlide = document.querySelector(".btn-next");

// initial
slides.forEach((slide,idx) => {
  slide.style.transform = `translateX(${100 * (idx-currSlide)}%)`;
});


nextSlide.addEventListener("click",function(){
  // if the current slide is the last, set currSlide=0 which we will go back to the first slide
  // else we just increment the currSlide which it means "take me to the next slide"
  currSlide===slides.length-1 ? 
    currSlide=0 : currSlide++
  ;

  // -200% previous previous slide
  // -100% previous slide
  // 0% current slide
  // 100% next slide
  // 200% next next slide

  // this means for each slide we will adjust the position according to the values above
  slides.forEach((slide,idx) => {
    slide.style.transform = `translateX(${100 * (idx-currSlide)}%)`;
  });
});

const prevSlide = document.querySelector(".btn-prev");
prevSlide.addEventListener("click",function(){
  currSlide===0 ? 
    currSlide=slides.length-1 : currSlide--
  ;

  slides.forEach((slide,idx) => {
    slide.style.transform = `translateX(${100 * (idx-currSlide)}%)`;
  });
});














// // *a 
// window.onscroll = () => console.log(window.scrollY); // uncomment this to demonstrate the scrollY behaviour
