$(function () {
    var banner = new Swiper(".banner .swiper-container", {
        speed: 800,
        effect: "fade",
        pagination: {
            el: ".banner .swiper-pagination",
            clickable: true
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        }
    })
    var thumbsSwiper = new Swiper('#thumbs', {
        speed: 800,
        spaceBetween: 3,
        slidesPerView: 5,
        watchSlidesVisibility: true,
        touchRatio: 0,
        direction: 'vertical',
    })
    var gallerySwiper = new Swiper('#gallery', {
        spaceBetween: 10,
        speed: 700,
        direction: 'vertical',
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        thumbs: {
            swiper: thumbsSwiper,
        },
        on: {
            init: function (swiper) {
                slide = this.slides.eq(0);
                slide.addClass('ani-slide');
            },
            transitionStart: function () {
                for (i = 0; i < this.slides.length; i++) {
                    slide = this.slides.eq(i);
                    slide.removeClass('ani-slide');
                }
            },
            transitionEnd: function () {
                slide = this.slides.eq(this.activeIndex);
                slide.addClass('ani-slide');

            },
        }
    })
})