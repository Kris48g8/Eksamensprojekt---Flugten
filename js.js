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
let s3 = document.getElementById('slide3');

setInterval(function conslide() {
        s1.style.display = "block";
        s2.style.display = "none";
        s3.style.display = "none";
    setTimeout(function() {
        s1.style.display = "none";
        s2.style.display = "block";
        s3.style.display = "none";
    }, 15000)
    setTimeout(function() {
        s1.style.display = "none";
        s2.style.display = "none";
        s3.style.display = "block";
    }, 30000)
}, 45000)
setTimeout(function() {
    s2.style.display = "block";
    s1.style.display = "none";
}, 15000)
setTimeout(function() {
        s1.style.display = "none";
        s2.style.display = "none";
        s3.style.display = "block";
}, 30000)
/* Process knapper */

window.onscroll = function() {forside(), video(), koncept(), appen(), kontakt()};

function forside() {
    if (document.body.scrollTop > -1 || document.documentElement.scrollTop > -1) {
        document.getElementById("dot1").className = "dotfarve1";
    } else { document.getElementById("dot1").className = "dot";
    }
}

function video() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("dot2").className = "dotfarve2";
    } else { document.getElementById("dot2").className = "dot";
    }
}

function koncept() {
    if (document.body.scrollTop > 1100 || document.documentElement.scrollTop > 1100) {
        document.getElementById("dot3").className = "dotfarve3";
    } else { document.getElementById("dot3").className = "dot";
    }
}

function appen() {
    if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
        document.getElementById("dot4").className = "dotfarve4";
    } else { document.getElementById("dot4").className = "dot";
    }
}

function kontakt() {
    if (document.body.scrollTop > 2200 || document.documentElement.scrollTop > 2200) {
        document.getElementById("dot5").className = "dotfarve5";
    } else { document.getElementById("dot5").className = "dot";
    }
}


let i=0, text;
text = "Projekt for Vardemuseerne"

setInterval(function typing() {
    if(i<text.length){
        document.getElementById("javatext").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing,200);
        
    }
},2000);
typing(); 

