$(window).on("load", function () {

    $(".loading").toggleClass("-hide");
});

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

        $(".btn-box").on("click", function (e) {

            $(".menu-btn").toggleClass("-on");
            $(".ul-box").toggleClass("-on");
        });
    }
});
