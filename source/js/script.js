window.onload = function () {

    window.onscroll = function () {

        myFunction()
    };
};

function myFunction() {

    var navbar = document.getElementById("NavBar");
    var topbtn = document.getElementById("top-btn");
    var drop = document.getElementsByClassName("dropdown-content");

    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {

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