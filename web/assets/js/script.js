window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});

function toggle(){
    const toggle = document.querySelector(".toggle");
    const navigation = document.querySelector(".navigation");
    toggle.classList.toggle('active');
    navigation.classList.toggle('active');
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide1");
    if (n > slides.length){
        slideIndex = 1;
    }
    if (n < 1){
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

var slide2Index = 1;
showSlides2(slide2Index);

function plusSlides2(n) {
    showSlides2(slide2Index += n);
}

function showSlides2(n) {
    var i;
    var slides = document.getElementsByClassName("slide2");
    if (n > slides.length){
        slide2Index = 1;
    }
    if (n < 1){
        slide2Index = slides.length
    }
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[slide2Index-1].style.display = "block";
}

var slide3Index = 1;
showSlides3(slide3Index);

function plusSlides3(n) {
    showSlides3(slide3Index += n);
}

function showSlides3(n) {
    var i;
    var slides = document.getElementsByClassName("slide3");
    if (n > slides.length){
        slide3Index = 1;
    }
    if (n < 1){
        slide3Index = slides.length
    }
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[slide3Index-1].style.display = "block";
}

var slide4Index = 1;
showSlides4(slide4Index);

function plusSlides4(n) {
    showSlides4(slide4Index += n);
}

function showSlides4(n) {
    var i;
    var slides = document.getElementsByClassName("slide4");
    if (n > slides.length){
        slide4Index = 1;
    }
    if (n < 1){
        slide4Index = slides.length
    }
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[slide4Index-1].style.display = "block";
}