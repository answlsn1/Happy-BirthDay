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

    $( window ).scroll( function() {
        if ( $( this ).scrollTop() > 200 ) {
            $( '.top' ).fadeIn();
        } else {
            $( '.top' ).fadeOut();
        }
    } );
    $( '.start' ).click( function() {
        $( 'html, body' ).animate( { scrollTop : 5000 }, 800 );
        return false;
    } );

    
    let modal = $('.modal');
    let modal_cont = $('.modal-cont');
    let modal_close = $('.modal-close');

    $('.i1').click(function(){
        $('.m1').fadeIn();
    });
    $('.i2').click(function(){
        $('.m2').fadeIn();
    });
    $('.i3').click(function(){
        $('.m3').fadeIn();
    });
    $('.i4').click(function(){
        $('.m4').fadeIn();
    });
    $('.i5').click(function(){
        $('.m5').fadeIn();
    });
    $('.i6').click(function(){
        $('.m6').fadeIn();
    });

    modal_close.click(function () {
        modal.fadeOut();
    });

    modal.click(function () {
        modal.fadeOut();
    });
});
