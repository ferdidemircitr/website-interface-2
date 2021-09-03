var i = 0;
var asagi=document.getElementsByClassName("down");

window.addEventListener("scroll",function(){
    const mesafe = window.scrollY;
    if(mesafe > 20){
        asagi[0].classList.add("show");
    }else{
        asagi[0].classList.remove("show");
    }
});