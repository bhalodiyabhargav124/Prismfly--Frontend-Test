function sliderInit() {
    if ($(window).width() < 990) {
        $('.img-info-box').slick({
            dots: true,
            infinite: true,
            speed: 500,
            fade: true,
            arrows: false,
            // autoplay: true,
            // autoplaySpeed: 3000,
            adaptiveHeight: true
        });
    } else {
        // destroy slick
        if ($('.img-info-box').hasClass('slick-initialized')) {
            $('.img-info-box').slick('unslick');
        }

    }
}



$(document).ready(function () {
    sliderInit();
    $(window).resize(function () {
        sliderInit();
    });
});