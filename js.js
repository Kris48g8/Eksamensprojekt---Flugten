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


/* Process knapper */

window.onscroll = function() {forside(), koncept(), appen(), kontakt()};

function forside() {
    if (document.body.scrollTop > -1 || document.documentElement.scrollTop > -1) {
        document.getElementById("dot1").className = "dotfarve1";
    } else { document.getElementById("dot1").className = "dot";
    }
}

function koncept() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("dot2").className = "dotfarve2";
    } else { document.getElementById("dot2").className = "dot";
    }
}

function appen() {
    if (document.body.scrollTop > 1050 || document.documentElement.scrollTop > 1050) {
        document.getElementById("dot3").className = "dotfarve3";
    } else { document.getElementById("dot3").className = "dot";
    }
}

function kontakt() {
    if (document.body.scrollTop > 1300 || document.documentElement.scrollTop > 1300) {
        document.getElementById("dot4").className = "dotfarve4";
    } else { document.getElementById("dot4").className = "dot";
    }
}