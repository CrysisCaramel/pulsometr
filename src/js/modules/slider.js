"use strict";

function slider() {
    let slideIndex = 1,
    slides = document.querySelectorAll(".slider__item"),
    prev = document.querySelector(".prev"),
    next = document.querySelector(".next"),
    dotswrap = document.querySelector(".slider-dots"),
    dot = document.querySelectorAll(".dot");


ShowSlides(slideIndex);
function ShowSlides(n) {
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    slides.forEach((item) => item.style.display = "none");
    dot.forEach((item) => item.classList.remove("dot-active"));
    slides[slideIndex - 1].style.display = "block";
    dot[slideIndex - 1].classList.add("dot-active");
}
function plus(n) {
    ShowSlides(slideIndex += n);
}
function SlidesBtn(n) {
    ShowSlides(slideIndex = n);
}
prev.addEventListener("click", () => {
    plus(-1);
});
next.addEventListener("click", () => {
    plus(1);
});
dotswrap.addEventListener("click", function(event) {
    for(let i = 0; i < dot.length + 1; i++) {
        if(event.target.classList.contains("dot") && event.target == dot[i-1]) {
            SlidesBtn(i);
        }
    }
});
}
slider();