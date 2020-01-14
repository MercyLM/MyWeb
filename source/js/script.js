window.onload = function () {

    window.onscroll = function () {

        myFunction()
    };
};

function myFunction() {

    var navbar = document.getElementById("NavBar");
    var drop = document.getElementsByClassName("dropdown-content");

    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {

        navbar.classList.add("sticky");
        
//        for ( i = 0 ; i < drop.length ; i++){
//            
//            drop[i].className = "dropdown-content" + " dropdown-content-v1";
//        }
    } else {
        
        navbar.classList.remove("sticky");
        
//        for ( i = 0 ; i < drop.length ; i++){
//            
//            drop[i].className = drop[i].className.replace(" dropdown-content-v1", "");
//        }
    }
}