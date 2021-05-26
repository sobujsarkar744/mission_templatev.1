$(document).ready(function(){


        //Sticky Top Menu
    $(window).scroll(function(){

    var scrolling = $(this).scrollTop();
    var stickyMenu = $('.navbar-light');
    
    if (scrolling >=100) {

        stickyMenu.addClass('nav-bg');

    } else {
        stickyMenu.removeClass('nav-bg'); 
    }
    });
 
    //AOS Plugin
    AOS.init({
        duration: 2000,
    });

    //Counter Up Plugin
    $('.count-item').counterUp({
        time: 1000,
    });






});