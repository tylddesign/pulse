// $(document).ready(function () {
//     $('.carousel__inner').slick({
//         speed: 1200,
//         // adptiveHeight: true,
//         prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png"></button>'
//     });
// });


const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false
    // prevButton: '<button type="button" class="slick-prev"><img src="icons/left.png"></button>'
});

// document.querySelector('.slick-prev').onclick = function () {
//     slider.goTo('prev');
// };


document.querySelector('.slick-prev').addEventListener('click', function () {
    slider.goTo('prev');
});

document.querySelector('.slick-next').addEventListener('click', function () {
    slider.goTo('next');
});