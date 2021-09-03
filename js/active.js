var deger = document.querySelectorAll("body > div.header > div.nav > a");


window.addEventListener("scroll",function(){
    const h = window.scrollY;
    
    if (h <= 900) {
        deger[0].classList.add("active");
        deger[1].classList.remove("active");
        deger[2].classList.remove("active");
        deger[3].classList.remove("active");

    }else if(h <= 2750){
        deger[1].classList.add("active");
        deger[0].classList.remove("active");
        deger[2].classList.remove("active");
        deger[3].classList.remove("active");
    }else if(h <= 4400){
        deger[2].classList.add("active");
        deger[0].classList.remove("active");
        deger[1].classList.remove("active");
        deger[3].classList.remove("active");
        
    }else{
        deger[3].classList.add("active");
        deger[0].classList.remove("active");
        deger[1].classList.remove("active");
        deger[2].classList.remove("active");
        
    }
    
});
