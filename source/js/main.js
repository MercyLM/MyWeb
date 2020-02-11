$(function () {

    menuFunction();
    scrollFunction();

    function scrollFunction() {

        //初始化
        var timer = null;
        var timerChack = true;
        //物件預載
        var btn = document.getElementById("top-btn");
        var topbtn = document.getElementById("top-btn");
        var headerBG = document.getElementsByClassName("header-background")[0];

        //檢測scroll位置
        if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550) {

            topbtn.classList.add("show");

        } else {

            topbtn.classList.remove("show");
        }

        //監聽滾動
        window.onscroll = function () {

            myFunction(topbtn, headerBG);

            var top = document.documentElement.scrollTop || document.body.scrollTop;

            if (!timerChack) {

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

                        console.log("stop");
                        clearInterval(timer);
                    }
                }, 30);
            }
        };
    }

    function myFunction(topbtn, headerBG) {

        if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550) {

            topbtn.classList.add("show");

        } else {

            topbtn.classList.remove("show");
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
});
