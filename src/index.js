let resume = null;
let aboutMe = null;
let profilePic = null;
let xbutton = null;

function init(){
    resume = document.getElementById("resume-link");
    aboutMe = document.getElementById("about-me");
    profilePic = document.getElementById("profile-pic");
    xbutton = document.getElementById("xbutton");

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

    profilePic.addEventListener("mouseover", function(event){
        profilePic.style.borderRadius = "50%";
        profilePic.style.boxShadow = "0 0 2px 1px blue";
    });

    profilePic.addEventListener("mouseleave", function(event){
        profilePic.style.borderRadius = "8px";
        profilePic.style.boxShadow = "";
    });

    profilePic.addEventListener("click", function(event){
        window.open("https://my.indeed.com/p/yardleyg-3f1icdg");
    });

    xbutton.addEventListener("click", function(event){
        window.close();
    });

}

window.onload = init;