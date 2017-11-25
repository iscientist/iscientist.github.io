// Initialise FlexSlider for Carousels
$(window).load(function() {
    $('.flexslider').flexslider({
    namespace: "flex-",
    animation: "slide",
    direction: "horizontal",
    controlNav: false,
    directionNav: true,
    prevText: "",
    nextText: "",
    slideshowSpeed: 5000,
    animationSpeed: 600,
    keyboard: true,
    touch: true,
    randomize: true
    });
});
