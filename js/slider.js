var i = 0;
var images = ['images/1.jpg','images/2.jpg'];

var duration = 5000;

function sliderImg() {
    document.intro.src = images[i];

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout("sliderImg()", duration);
}
window.onload = sliderImg;