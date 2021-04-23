let ubicacionPrincipal = window.pageYOffset;
AOS.init();

//menu
let enlacesHeader= document.querySelectorAll(".enlaces-menu")[0];
let vista = true;

document.querySelectorAll(".icon-menu")[0].addEventListener("click", function(){
    if(vista){
        document.querySelectorAll(".icon-menu")[0].style.color="#fff";
        semaforo=false;
    }
    else{
        document.querySelectorAll(".icon-menu")[0].style.color="orange";
        vistao=true;
    }
    enlacesHeader.classList.toggle("menu-nuevo")
})
