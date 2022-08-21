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

$(document).ready(function () {

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active'); // closest - ближайший элемент (контейнер), внутри него find - найти активный контент, removeClass - удалить класс активности, eq - получает тот номер элемента на который мы кликнули, addClass - добавляет класс.
    });

    function toggleSlide(item) { // функция "переключатель"
        $(item).each(function (i) { //каждый элемент (item) который попал в функцию будет делать что-то
            $(this).on('click', function (e) { //this - текущий выбранный элемент по клику будет делать следующую функцию
                e.preventDefault(); //убираем стандартное поведение браузера у ссылки
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active'); // при клике на эту кнопку будет переключаться(toggle) класс. Eq - позволяет получать элемент по индексу
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active'); // при клике на эту кнопку будет переключаться(toggle) класс. Eq - позволяет получать элемент по индексу
            })
        });
    };

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');
});