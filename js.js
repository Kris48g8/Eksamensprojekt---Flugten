let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlides(n) {
    showSlides(slideIndex);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slideJs");
    if (n > slides.length) {slideIndex = 1};
    if (n < 1) {slideIndex = slides.length};
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slides[slideIndex-1].style.display = "block";
    
    
}

let s1 = document.getElementById('slide1');
let s2 = document.getElementById('slide2');

setInterval(setTimeout, function() {
    
    var showSlide1 = s1.style.display === 'none';
    s1.style.display = showSlide1 ? 'block' : 'none';
    s2.style.display = showSlide1 ? 'none' : 'block';
}, 15000)