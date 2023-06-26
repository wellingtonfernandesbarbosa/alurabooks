const swiper = new Swiper('.swiper', {
    spaceBetween: 20,
    slidesPerView: 3,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    autoplay: {
        delay: 3000,
    },
});
