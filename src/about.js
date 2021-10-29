let xbutton = null;
let xbutton_sub = null;
let homeb = null;

function init(){
    xbutton = document.getElementById("xbutton");
    xbutton_sub = document.getElementById("xbutton_sub");
    homeb = document.getElementById("homeb");


    homeb.addEventListener("click", function(event){
        document.location.href = "/index.html";
    });

    xbutton.addEventListener("click", function(event) {
        self.close();
    });

    xbutton_sub.addEventListener("click", function(event) {
        self.close();
    });
}