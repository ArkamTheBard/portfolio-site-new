let resume = null;
let aboutMe = null;

function init(){
    resume = document.getElementById("resume-link");

    originalLinkColor = resume.style.color;

    resume.addEventListener("mouseover", function(event){
        resume.style.color = "orange";
    });

    resume.addEventListener("mouseleave", function(event){
        resume.style.color = originalLinkColor;
    });

}

window.onload = init;