$(window).scroll(function() {
    if ($(document).scrollTop() > 30) {
        $('.site-header').addClass('navshrink');
        $('.site-nav').addClass('navshrink');
        $('.site-title').addClass('navshrink');
        $('.site-title-the').addClass('navshrink');
        $('.site-title-i').addClass('navshrink');
    } else {
        $('.site-header').removeClass('navshrink');
        $('.site-nav').removeClass('navshrink');
        $('.site-title').removeClass('navshrink');
        $('.site-title-the').removeClass('navshrink');
        $('.site-title-i').removeClass('navshrink');
    }
})
