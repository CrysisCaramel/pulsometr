"use strict";
function slider() {
    let slideIndex = 1,
    slides = document.querySelectorAll(".slider__item"),
    prev = document.querySelector(".prev"),
    next = document.querySelector(".next"),
    dotswrap = document.querySelector(".slider-dots"),
    dot = document.querySelectorAll(".dot");


ShowSlides(slideIndex)
function ShowSlides(n) {
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    slides.forEach((item) => item.style.display = "none");
    dot.forEach((item) => item.classList.remove("dot-active"))
    slides[slideIndex - 1].style.display = "block";
    dot[slideIndex - 1].classList.add("dot-active");
}
function plus(n) {
    ShowSlides(slideIndex += n);
};
function SlidesBtn(n) {
    ShowSlides(slideIndex = n);
};
prev.addEventListener("click", function(){
    plus(-1);
});
next.addEventListener("click", function(){
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

//tabs 
let link = document.querySelectorAll(".catalog-item__link"),
    content = document.querySelectorAll(".catalog-item__content"),
    list = document.querySelectorAll(".catalog-item__list"),
    tabs = document.querySelectorAll(".catalog-item"),
    catalog = document.querySelector(".catalog__tabs"),
    selector = document.querySelectorAll(".feed"),
    wrap = document.querySelectorAll(".catalog__tab"),
    catalogContent = document.querySelector(".catalog__content");

function linkWrap(d) {
    for(let i = d; i < link.length; i++) {
        link[i].addEventListener("click", function() {
            list[i].classList.add("catalog-item__list_active");
            content[i].classList.remove("catalog-item__content_active");
        })
    }
}

catalogContent.addEventListener("click", function(event) {
    if (event.target && event.target.classList.contains("catalog-item__link")) {
        for(let i = 0; i < link.length; i++) {
            if(event.target == link[i]) {
                linkWrap(i);
            }
        }
    }
})
    
function ShowTabContents(a) {
    for (let i = a; i < selector.length; i++) {
        wrap[i].classList.remove("catalog__tab_active");
    }
}
ShowTabContents(1); 

function hideTabs(b) {
    if (!wrap[b].classList.contains("catalog__tab_active")) {
        wrap[b].classList.add("catalog__tab_active");
    }
}

function run() {
    tabs.forEach(function(tabs) {
        tabs.classList.remove("catalog__content_active");
    })
}

catalog.addEventListener("click", function(event) {
    if (event.target && event.target.classList.contains("feed")) {
        for (let i = 0; i < selector.length; i++) {
            if (event.target == selector[i]) {
                ShowTabContents(0);
                hideTabs(i);
                if (event.target == selector[0]) {
                    run(); 
                }
                if (event.target == selector[1]) {
                    tabs[3].classList.add("catalog__content_active");
                    tabs[4].classList.add("catalog__content_active");
                }
                if (event.target == selector[2]) {
                    tabs[0].classList.add("catalog__content_active");
                    tabs[1].classList.add("catalog__content_active");
                }
                break;
            }
        }
    }
})

