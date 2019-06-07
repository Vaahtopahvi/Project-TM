
function ToggleMenu(){
    var submenu = document.getElementById("submenu");
    if(submenu.classList.contains("hidden")){
        submenu.classList.add("visible");
        submenu.classList.remove("hidden");
    }else{
        submenu.classList.add("hidden");
        submenu.classList.remove("visible");
    }
}