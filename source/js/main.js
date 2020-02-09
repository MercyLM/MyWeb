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

    //初始化
    var timer = null;
    var timerChack = true;
    //物件預載
    var btn = document.getElementById("top-btn");
    var navbar = document.getElementById("nav");
    var topbtn = document.getElementById("top-btn");
    var headerBG = document.getElementsByClassName("header-background")[0];

    //檢測scroll位置
    if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550) {

        navbar.classList.add("sticky");
        topbtn.classList.add("show");
//        headerBG.style.display = "none";

    } else {

        navbar.classList.remove("sticky");
        topbtn.classList.remove("show");
//        headerBG.style.display = "block";
    }
    
    //檢測是不是首頁
    if(!document.getElementById("index")){
        
        navbar.classList.add("sticky");
        
        console.log("不是首頁，所以navbar要flex在上面");
    }

    //監聽滾動
    window.onscroll = function () {

        myFunction(navbar, topbtn, headerBG)

        var top = document.documentElement.scrollTop || document.body.scrollTop;

        if (!timerChack) {

            console.log("stop");
            clearInterval(timer);
        }
        timerChack = false;

        btn.onclick = function () {

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
        }
    };
}

function myFunction(navbar, topbtn, headerBG) {

    if (document.getElementById("index")) {

        console.log("這是首頁");

        if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550) {

//            headerBG.style.display = "none";
            navbar.classList.add("sticky");
            topbtn.classList.add("show");

        } else {

            navbar.classList.remove("sticky");
            topbtn.classList.remove("show");
//            headerBG.style.display = "block";

        }
    } else {
        
//        console.log("這不是首頁");
    }

}

function menuFunction() {

    var menu = document.getElementById("menu");
    var menuBox = document.getElementById("menu-box");
    var menuClose = document.getElementById("close-menu");
    var aside = document.getElementById("aside");

    menu.onclick = function () {

        menuBox.style.width = "100%";
        menu.style.display = "none";
        aside.style.zIndex = 0;
    }

    menuClose.onclick = function () {

        menuBox.style.width = "0%";
        menu.style.display = "inline-block";
        aside.style.zIndex = 4;
    }
}