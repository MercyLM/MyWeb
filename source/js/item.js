$(document).ready(function () {

    console.log("load slider");

    $(".slider-box").slick({

        centerMode: false,
        centerPadding: '80px',
        slidesToShow: 4,
//        autoplay: true,
//        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: true,
                    centerMode: false,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
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
    
    //當指標移入商品小圖
    $(".img-slider>img").mouseenter(function(){
        
        //切換大圖變成當前小圖的圖片
        $(".img-box>img").attr("src", this.src);
    });    
    
    //當指標離開整個商品圖範圍
    $(".img-box").mouseleave(function(){
        
        //重置為第一張圖
        var img = $(".img-slider>img:first");

        $(".img-box>img").attr("src", img.attr("src"));
    });
});