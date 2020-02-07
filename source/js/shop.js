$(document).ready(function () {

    console.log("load slider");

    $(".hot-item").slick({

        centerMode: false,
        centerPadding: '80px',
        slidesToShow: 3,
//        autoplay: true,
//        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    arrows: false,
                    centerMode: false,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    arrows: false,
                    centerMode: false,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
});