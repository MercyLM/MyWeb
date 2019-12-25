window.onload = function () {

    window.onscroll = function () {

        myFunction()
    };
};

function myFunction() {

    var navbar = document.getElementById("myNavbar");
    var drop = document.getElementsByClassName("dropdown-content");

    if (document.body.scrollTop > 435 || document.documentElement.scrollTop > 435) {

        navbar.className = "nav-title" + " nav-title-v1";
        
        for ( i = 0 ; i < drop.length ; i++){
            
            drop[i].className = "dropdown-content" + " dropdown-content-v1";
        }
    } else {
        
        navbar.className = navbar.className.replace(" nav-title-v1", "");
        
        for ( i = 0 ; i < drop.length ; i++){
            
            drop[i].className = drop[i].className.replace(" dropdown-content-v1", "");
        }
    }
}