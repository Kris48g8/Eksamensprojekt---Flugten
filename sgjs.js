window.onscroll = function() {forside(), farver(), logo(), typografi(), navigation(), sprog(), ikoner(), monster()};

function forside() {
    if (document.body.scrollTop > -1 ||
       document.documentElement.scrollTop > -1) {
        document.getElementById("dot1").className = "dotfarve1";
    }
    else { document.getElementById("dot1").className = "dot" }
}

function farver() {
    if (document.body.scrollTop > 500 ||
       document.documentElement.scrollTop > 500) {
        document.getElementById("dot2").className = "dotfarve2";
    }
    else { document.getElementById("dot2").className = "dot" }
}

function logo() {
    if (document.body.scrollTop > 1100 ||
       document.documentElement.scrollTop > 1100) {
        document.getElementById("dot3").className = "dotfarve3";
    }
    else { document.getElementById("dot3").className = "dot" }
}

function typografi() {
    if (document.body.scrollTop > 1800 ||
       document.documentElement.scrollTop > 1800) {
        document.getElementById("dot4").className = "dotfarve4";
    }
    else { document.getElementById("dot4").className = "dot" }
}

function navigation() {
    if (document.body.scrollTop > 2400 ||
       document.documentElement.scrollTop > 2400) {
        document.getElementById("dot5").className = "dotfarve5";
    }
    else { document.getElementById("dot5").className = "dot" }
}


function sprog() {
    if (document.body.scrollTop > 3000 ||
       document.documentElement.scrollTop > 3000) {
        document.getElementById("dot6").className = "dotfarve6";
    }
    else { document.getElementById("dot6").className = "dot" }
}

function ikoner() {
    if (document.body.scrollTop > 3600 ||
       document.documentElement.scrollTop > 3600) {
        document.getElementById("dot7").className = "dotfarve7";
    }
    else { document.getElementById("dot7").className = "dot" }
}

function monster() {
    if (document.body.scrollTop > 4200 ||
       document.documentElement.scrollTop > 4200) {
        document.getElementById("dot8").className = "dotfarve8";
    }
    else { document.getElementById("dot8").className = "dot" }
}




