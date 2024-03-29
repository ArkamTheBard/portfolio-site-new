let resume = null;
let aboutMe = null;
let profilePic = null;
let xbutton = null;
let projects = null;

function init(){
    resume = document.getElementById("resume-link");
    aboutMe = document.getElementById("about-me");
    profilePic = document.getElementById("profile-pic");
    xbutton = document.getElementById("xbutton");
    projects = document.getElementById("my-projects");

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

    projects.addEventListener("click", function(event){
        location.href = "https://github.com/ArkamtheBard";
    });

    projects.addEventListener("click", function(event){
        location.href = "https://github.com/ArkamTheBard";
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
        window.open("https://www.linkedin.com/in/yardley-gutierrez-43810616b/");
    });

    xbutton.addEventListener("click", function(event){
        self.close();
    });

}

window.onload = init;