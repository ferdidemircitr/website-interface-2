var yukari=document.getElementsByClassName("up");

window.addEventListener("scroll",function(){
    const mesafe = window.scrollY;
    if(mesafe > 900){
        yukari[0].classList.add("show");
    }else{
        yukari[0].classList.remove("show");
    }
});

