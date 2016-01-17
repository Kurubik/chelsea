/**
 * Created by serg on 15/01/16.
 */
document.addEventListener('DOMContentLoaded', function() {
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
        $('[data-menu]').addClass('open');
    });

    $('[data-request]').click(function(e) {
        e.preventDefault();
        var block = $(this).attr('data-request');
        var title = $('[data-requet-title="' + block + '"]').text();
        $('[data-request-type]').val(title);
    });
});