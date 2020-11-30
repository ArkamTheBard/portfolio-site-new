let resume = null;
let aboutMe = null;

function init(){
    resume = document.getElementById("resume-link");
    aboutMe = document.getElementById("about-me");

    originalLinkColor = resume.style.color;

    resume.addEventListener("mouseover", function(event){
        resume.style.color = "orange";
    });

    resume.addEventListener("mouseleave", function(event){
        resume.style.color = originalLinkColor;
    });

    aboutMe.addEventListener("click", function(event){
        location.href = "src/about.html";
    });

}

window.onload = init;