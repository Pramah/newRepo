$(document).ready(function(){
    $('#slides').superslides({
        animation: 'slide',
        animation: 'fade',
        play : 10000,
    });

    var typed = new Typed(".typed", {
        strings: ["Salesforce Engineer"],
        typeSpeed: 90,
        loop: false,
        startDelay: 1000,
        showCursor: false
    });

    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 3,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            768:{
                items:3
            },
            938:{
                items:4
            }
        }
    });

    $('.chart').easyPieChart({
        easing: 'easeInOut',
        barColor: '#fff',
        trackColor: false,
        scaleColor: false,
        lineWidth: 4,
        size: 142,
        onStep: function(from, to, percent){
            $(this.el).find('.percent').text(Math.round(percent));
        }

    });

});