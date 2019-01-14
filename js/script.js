var scrolled;
window.onscroll = function() {
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if(scrolled > 100){
        $(".menu-wrapper").css({"background": "black","box-shadow": "0 0 12px 0 #2d2d2d"});
    }
    if(100 > scrolled){
        $(".menu-wrapper").css({"background": "transparent","box-shadow": "none"})
    }

}


