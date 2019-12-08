$(document).ready(function () {

    // burger
    $('.burger-opener').on('click', function () {
        $('.descktop-menu').toggleClass('show');
        $('.burger-opener').toggleClass('show');
    });

    $('.call-btn').on('click', function () {
        $('#openModal').fadeIn();
    });

    $('.close-modal').on('click', function () {
        $('#openModal').fadeOut();
        $('#openmod').fadeOut();
    });

    $('.btn-modal').on('click', function () {
        $('#openModal').fadeOut();
        $('#openmod').fadeIn();
    });
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() != 0) {
                $('#toTop').fadeIn();
            } else {
                $('#toTop').fadeOut();
            }
        });
        $('#toTop').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
        });
    });

    $(function () {

        var newSelection = "";

        $("#flavor-nav a").click(function () {

            $("#all-flavors").fadeTo(3000);

            $("#flavor-nav a").removeClass("active");
            $(this).addClass("active");

            newSelection = $(this).attr("rel");

            $(".flavor").not("." + newSelection).slideUp();
            $("." + newSelection).slideDown();

            $("#all-flavors").fadeTo(3000);

        });

    });
});
// const toTop = document.querySelector('#toTop');
// if (toTop) {
//     toTop.addEventListener('click', function (e) {
//         goUp();
//     })
// }
// let timeOut;

// function goUp() {
//     let top = Math.max(document.body.scrollTop, document.documentElement.scrollTop)
//     if (top > 0) {
//         window.scrollBy(0, -100);
//         timeOut = setTimeout('goUp()', 20)
//     } else {
//         clearTimeout(timeOut)
//     }
// }
const block = document.querySelectorAll('.quantity-block');
const product = document.querySelectorAll('.product__total-wrap');

block.forEach(function (div) {

    const num = div.querySelector('.quantity-num');
    const plus = div.querySelector('.quantity-arrow-plus');
    const min = div.querySelector('.quantity-arrow-minus');

    num.value = 1;

    plus.onclick = function (liv) {

        num.value++;


    };

    min.onclick = function () {

        if (num.value > 0) {
            num.value--;
        } else {
            return;
        }
    };
});