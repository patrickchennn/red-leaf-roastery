const productDescBtns = document.querySelectorAll("button.product-desc-btn");
const topNav = document.querySelectorAll("nav.top-nav ul li");
const content2 = document.querySelector("div.content2-wrap");
const section3 = document.querySelector("div.content2-wrap section.section3-wrap");
const brewingTools = document.querySelector("div.brewing-tools");


productDescBtns.forEach(productDescBtn => {
  productDescBtn.addEventListener("click", function(){
    const p = this.nextElementSibling;
    p.classList.toggle("transparent-color")
  });
});


// references: 
// https://stackoverflow.com/questions/49820013/javascript-scrollintoview-smooth-scroll-and-offset
// https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
// https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY see *a below for example
topNav.forEach((li,idx) => {
  // indices description:
  // 0 is for "About Our Beans"
  // 1 is for "Brewing Tools"
  // 2 is for "Products"
  li.addEventListener("click",function(e){
    // use this to prevent the default behaviour of tag <a> which will refresh the page whenever we click it
    e.preventDefault();
    if(idx===0){
      const position = content2.getBoundingClientRect();
      const offsetPosition = position.top + window.scrollY;
      window.scrollTo({top:offsetPosition,behavior:"smooth"})
    }
    else if(idx===1){
      const position = brewingTools.getBoundingClientRect();
      const offsetPosition = position.top + window.scrollY;
      window.scrollTo({top:offsetPosition,behavior:"smooth"})
    }
    else{
      const position = section3.getBoundingClientRect();
      // 1rem = 16px <=> 7rem = 112px
      // 112 is the padding of the title(3rem) and the size of the text(4rem)
      const offsetPosition = position.top + window.scrollY -150;
      window.scrollTo({top:offsetPosition,behavior:"smooth"})
    };
  });
});


const hamburgerMenu = document.querySelector(".btn1");
const topNavContainer = document.querySelector("nav.top-nav");
hamburgerMenu.addEventListener("click", function(){
  this.classList.toggle("open");
  topNavContainer.classList.toggle("show");
})





// // *a 
// window.onscroll = () => console.log(window.scrollY); // uncomment this to demonstrate the scrollY behaviour
