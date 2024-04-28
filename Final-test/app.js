var navList = 0;

var  navBar = document.querySelector('#navBar');

window.addEventListener('scroll', function(){
    var scrollTop = document.documentElement.scrollTop;

    if(scrollTop > navList){
        navBar.style.top = '-80px';
    }else{
        navBar.style.top = '0'
    }
    navList = scrollTop;
})

// swiper

