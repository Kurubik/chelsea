/**
 * Created by serg on 15/01/16.
 */
document.addEventListener('DOMContentLoaded', function() {

    topAnimation();

    $('[data-show-block]').click(function(e) {
        e.preventDefault();
        var block = $(this).attr('data-show-block');
        $('[data-popup]').addClass('show');
        setTimeout( function() {$('[data-block="'+ block + '"]').addClass('show');}, 100);
    });

    $('[data-close-block]').click(function(e) {
        e.preventDefault();
        $('[data-popup]').removeClass('show');
        $('[data-block]').removeClass('show');
    });

    $('[data-open-menu]').click(function(e) {
        e.preventDefault();
        $('[data-main-menu="menu"]').addClass('open');
        $('[data-menu]').addClass('open');
    });

    $('[data-main-menu="menu"]').click(function(e) {
        e.preventDefault();
        var offset = $(this).offset().top;
        var menu = offset + 110;
        offset = e.pageY - offset;
        console.log(offset);
        console.log(menu);
        if(offset > menu) {
            $('[data-main-menu="menu"]').removeClass('open');
            $('[data-menu]').removeClass('open');
        }
    });


    $('[data-request]').click(function(e) {
        e.preventDefault();
        var block = $(this).attr('data-request');
        var title = $('[data-requet-title="' + block + '"]').text();
        $('[data-request-type]').val(title);
    });

    var animationAbout = $('[data-start-anim="about"]').offset();
    var animAboutStart = false;

    var animationChelsea = $('[data-start-anim="chelsea"]').offset();
    var animChelseaStart = false;

    window.onscroll = function() {
        var pos = $('[data-view]').offset();
        if(animationAbout.top < pos.top && !animAboutStart){
            aboutAnimation();
        }
        if(animationChelsea.top < pos.top && !animChelseaStart){
            chelseaAnimation();
        }
    };


    function topAnimation() {
        setTimeout(function() {
            $('[data-anim-top="0"]').removeClass('hide');
            $('[data-anim-top="1"]').removeClass('hide');
            $('[data-anim-top="2"]').removeClass('hide');
            $('[data-anim-top="3"]').removeClass('hide');
            $('[data-anim-top="4"]').removeClass('hide');
        }, 1000);
    }

    function aboutAnimation() {
        $('[data-anim-about="0"]').removeClass('hide');
        $('[data-anim-about="1"]').removeClass('hide');
        $('[data-anim-about="2"]').removeClass('hide');
        $('[data-anim-about="3"]').removeClass('hide');
        $('[data-anim-about="4"]').removeClass('hide');
    }

    function chelseaAnimation() {
        $('[data-anim-chel="0"]').removeClass('hide');
        $('[data-anim-chel="1"]').removeClass('hide');
        $('[data-anim-chel="2"]').removeClass('hide');
        $('[data-anim-chel="3"]').removeClass('hide');
        $('[data-anim-chel="4"]').removeClass('hide');
    }

});