$(document).ready(function(){

    new Swiper('.sw_letter1', {

        effect : 'fade',

        fadeEffect: { 
        crossFade: true 
        },


        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
        autoplay: {
            delay: 2000,
            disableOnInteraction: true,
        },
    });
});


$(".start1").on("click", function() {
    // 기본 설정으로 autoplay 시작
    console.log("autoplay start");
    swiper.autoplay.start();
});

$(".stop1").on("click", function() {
    console.log("autoplay stop");
    swiper.autoplay.stop();
});
