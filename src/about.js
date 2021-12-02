let xbutton = null;
let xbutton_sub = null;
let homeb = null;
let projects = null;

function init(){
    xbutton = document.getElementById("xbutton");
    xbutton_sub = document.getElementById("xbutton-sub");
    homeb = document.getElementById("homeb");
    projects = document.getElementById("my-projects");


    homeb.addEventListener("click", function(event){
        document.location.href = "/portfolio-site-new/index.html";
    });

    projects.addEventListener("click", function(event){
        document.location.href = "https://github.com/ArkamtheBard";
    });

    xbutton.addEventListener("click", function(event) {
        self.close();
    });

    xbutton_sub.addEventListener("click", function(event) {
        self.close();
    });
}

window.onload = init;