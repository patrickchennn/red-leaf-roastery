const productDescBtns = document.querySelectorAll(".product-desc-btn");

// const caretUp = document.
// const caretDown = document.


const currCaret = "up";
productDescBtns.forEach(productDescBtn => {
  productDescBtn.addEventListener("click", function(){
    const p = this.nextElementSibling;
    p.classList.toggle("transparent-color")
  });
});

