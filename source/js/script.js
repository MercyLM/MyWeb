window.onload = function () {

    //初始化
    var timer = null;
    var timerChack = true;
    //物件預載
    var btn = document.getElementById("top-btn");

    window.onscroll = function () {

        myFunction()

        var top = document.documentElement.scrollTop || document.body.scrollTop;

        if (!timerChack) {

            console.log("stop");
            clearInterval(timer);
        }
        timerChack = false;

        btn.onclick = function () {

            timer = setInterval(function () {

                var top = document.documentElement.scrollTop || document.body.scrollTop;
                var speed = Math.floor(-top / 15);

                document.documentElement.scrollTop = document.body.scrollTop = top + speed;

                timerChack = true;

                if (top == 0) {

                    console.log("clear");
                    clearInterval(timer);
                }
            }, 30);
        }
    };
};

function myFunction() {

    var navbar = document.getElementById("NavBar");
    var topbtn = document.getElementById("top-btn");
    //    var drop = document.getElementsByClassName("dropdown-content");

    if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550) {

        navbar.classList.add("sticky");
        topbtn.classList.add("show");

        //        for ( i = 0 ; i < drop.length ; i++){
        //            
        //            drop[i].className = "dropdown-content" + " dropdown-content-v1";
        //        }
    } else {

        navbar.classList.remove("sticky");
        topbtn.classList.remove("show");

        //        for ( i = 0 ; i < drop.length ; i++){
        //            
        //            drop[i].className = drop[i].className.replace(" dropdown-content-v1", "");
        //        }
    }
}
