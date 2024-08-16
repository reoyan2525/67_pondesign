const swiper = new Swiper(".swiper", {
    loop: true, // ループ有効
    //swiperを等速でループさせる処理
    autoplay: {
        delay: 2000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
    },
    speed: 1000,
    effect: "fade",
    // slidesPerView: 3,

    // ページネーションが必要なら追加
    pagination: {
        el: ".swiper-pagination"
    },
    // ナビボタンが必要なら追加
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }

});