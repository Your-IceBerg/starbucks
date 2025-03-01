const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.header__nav');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
})

document.querySelector(".custom-play-button").addEventListener("click", function () {
    this.style.display = "none"; // Скрываем кастомную кнопку
    let video = document.getElementById("youtube-video");
    video.src += "&autoplay=1"; // Добавляем параметр autoplay
    video.style.pointerEvents = "auto"; // Разрешаем взаимодействие с iframe
});

// new Swiper('.swiper');

new Swiper('.swiper', {
    slidesPerView: 2.5,      // количество слайдов, отображаемых на экране
    spaceBetween: 54,      // расстояние между слайдами
    navigation: {          // кнопки навигации
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    initialSlide: 3,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        767: {
            slidesPerView: 2,
        },
        1320: {
            slidesPerView: 3,
        }
    }
});



