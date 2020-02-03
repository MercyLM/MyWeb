//$(function(){
//    
//    $("#nav").load("../source/navbar.html");
//    $("#footer").load("../source/footer.html");
//});

window.onload = function () {

//    //初始化
//    var timer = null;
//    var timerChack = true;
//    //物件預載
//    var btn = document.getElementById("top-btn");
////    var menu = document.getElementById("menu");
////    var menuBox = document.getElementById("menu-box");
////    var menuClose = document.getElementById("close-menu");
//
//    window.onscroll = function () {
//
//        myFunction()
//
//        var top = document.documentElement.scrollTop || document.body.scrollTop;
//
//        if (!timerChack) {
//
//            console.log("stop");
//            clearInterval(timer);
//        }
//        timerChack = false;
//
//        btn.onclick = function () {
//
//            timer = setInterval(function () {
//
//                var top = document.documentElement.scrollTop || document.body.scrollTop;
//                var speed = Math.floor(-top / 6);
//
//                document.documentElement.scrollTop = document.body.scrollTop = top + speed;
//
//                timerChack = true;
//
//                if (top == 0) {
//
//                    console.log("clear");
//                    clearInterval(timer);
//                }
//            }, 30);
//        }
//    };
    
//    menuFunction(menu, menuBox, menuClose)
};

//function myFunction() {
//
//    var navbar = document.getElementById("nav");
//    var topbtn = document.getElementById("top-btn");
//
//    if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550) {
//
//        navbar.classList.add("sticky");
//        topbtn.classList.add("show");
//
//    } else {
//
//        navbar.classList.remove("sticky");
//        topbtn.classList.remove("show");
//
//    }
//}
//
//function menuFunction() {
//    
//    var menu = document.getElementById("menu");
//    var menuBox = document.getElementById("menu-box");
//    var menuClose = document.getElementById("close-menu");
//    var aside = document.getElementById("aside");
//
//    menu.onclick = function () {
//
//        menuBox.style.width = "100%";
//        menu.style.display = "none";
//        aside.style.zIndex = 0;
//    }
//
//    menuClose.onclick = function () {
//
//        menuBox.style.width = "0%";
//        menu.style.display = "inline-block";
//        aside.style.zIndex = 4;
//    }
//}
