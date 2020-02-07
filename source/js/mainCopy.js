$(function () {

    $("#aside").load("./source/aside.html");
    $("#footer").load("./source/footer.html");
    $("#nav").load("./source/navbar.html", function (responseTxt, statusTxt, xhr) {

        if (statusTxt == "success") {

            console.log("navbar載入完成！");
            menuFunction();
            scrollFunction();
        }
    });
});

function scrollFunction() {

    //初始狀態
    var timer = null;
    var timerChack = true;
    //物件宣告
    var btn = $("#top-btn");
    var navbar = $("#nav");
    var topbtn = $("#top-btn");
    var headerBG = $("#header-background");

    //檢測scroll位置
    if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550) {

        navbar.addClass("sticky");
        topbtn.addClass("show");
        headerBG.css("display", "block");

    } else {

        navbar.removeClass("sticky");
        topbtn.removeClass("show");
        headerBG.css("display", "none");
    }
    
    //檢測是不是首頁
    if(!$(".index")){
        
        navbar.addClass("sticky");
        
        console.log("不是首頁，所以navbar要flex在上面");
    }

    //監聽scroll
    window.onscroll = function () {

        myFunction(navbar, topbtn, headerBG)

//        var top = document.documentElement.scrollTop || document.body.scrollTop;

        if (!timerChack) {

            console.log("stop");
            clearInterval(timer);
        }
        timerChack = false;

        btn.click(function () {

            timer = setInterval(function () {

                var y = document.documentElement.scrollTop || document.body.scrollTop;
                var speed = Math.floor(-y / 6);

                document.documentElement.scrollTop = document.body.scrollTop = y + speed;

                timerChack = true;

                if (y == 0) {

                    console.log("clear");
                    clearInterval(timer);
                }
            }, 30);
        });
    };
}

function myFunction(navbar, topbtn, headerBG) {

    if ($(".index")) {

        console.log("這是首頁");

        if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550) {

            headerBG.css("display", "none");
            navbar.addClass("sticky");
            topbtn.addClass("show");

        } else {

            navbar.removeClass("sticky");
            topbtn.removeClass("show");
            headerBG.css("display", "block");

        }
    } else {
        
//        console.log("這不是首頁");
    }

}

function menuFunction() {

    var menu = $("#menu");
    var menuBox = $("#menu-box");
    var menuClose = $("#close-menu");
    var aside = $("#aside");

    menu.click(function () {

        menuBox.css("width", "100%");
        menu.css("display", "none");
        aside.css("zIndex", "0");
    });

    menuClose.click(function () {

        menuBox.css("width", "0%");
        menu.css("display", "inline-block");
        aside.css("zIndex", "4");
    });
}
