// slide
const popularSwiper = new Swiper(".popular-items-swiper", {
    loop: true,
    slidesPerView: 2.1,
    spaceBetween: 10,
    autoplay: {
        delay: 3500,
        disableOnInteraction: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        650: {
            slidesPerView: 4.1,
            spaceBetween: 10,
        }
    }
});
const themeSwiper = new Swiper(".theme-swiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 3500,
        disableOnInteraction: true,
    },
    navigation: {
        nextEl: ".theme-swiper-button-next",
        prevEl: ".theme-swiper-button-prev",
    },
    pagination: {
        el: ".theme-swiper-pagination",
        clickable: true,
    },
})
const tipsSwiper = new Swiper(".tips-swiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 3500,
        disableOnInteraction: true,
    },
    navigation: {
        nextEl: ".tips-swiper-button-next",
        prevEl: ".tips-swiper-button-prev",
    },
    pagination: {
        el: ".tips-swiper-pagination",
        clickable: true,
    },
})
$('#slick1').slick({
    rows: 2,
    dots: false,
    arrows: true,
    infinite: false,
    draggable:false,
    swipe:false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow: $('#aro1_prev'),
    nextArrow: $('#aro1_next'),
    responsive: [ {
        breakpoint: 550,
        draggable:false,
        settings: {
            slidesToShow: 1,
        }
       
    }
]

});

// rolling
jQuery(document).ready(function ($) {
    $('.my-news-ticker').AcmeTicker({
        type: 'horizontal',
        direction: 'right',
        controls: {
            prev: $('.acme-news-ticker-prev'),
            toggle: $('.acme-news-ticker-pause'),
            next: $('.acme-news-ticker-next')
        }
    });
})