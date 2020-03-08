//完全載入後刪除loading畫面
$(window).on("load", function (e) {
    
    var load = $(".loading");

    load.css("opacity", 0);
    
    setTimeout(function(){
        
        load.remove();
        
    },1000);
});

//物件化
var btn = $("#top-btn");
var scroll = $(window).scrollTop();

//結構載入完後執行
$(function () {

    //註冊監聽事件
    menu();
    scrollPos();
});

//監聽scroll
$(window).scroll(function () {

    if ($(this).scrollTop() > 550) {

        btn.fadeIn(100);

    } else {

        btn.stop().fadeOut(0);
    }

});

function scrollPos() {

    //監聽scroll位置，如果超過550px則出現回到頂部按鈕
    if (scroll < 550) {

        btn.fadeOut(0);
    }

    btn.click(function () {

        $("html").animate({
            
            scrollTop: [0, "swing"]
            
        }, 1000);
    });
}

function menu() {

    $(".btn-box").on("click", function () {

        $(".menu-btn").toggleClass("-on");
        $(".ul-box").toggleClass("-on");
    });
}
