$(document).ready(function () {
    $('.reviews__textbox').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: false,
        mobileFirst: true,
        responsive: [{
            breakpoint: 700,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }],

    });
})

// $(document).ready(function(){
//     $('.reviews__textbox').slick({
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 2000,
//       });
//   });

