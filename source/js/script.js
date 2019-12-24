window.onload = function () {

    window.onscroll = function () {

        myFunction()
    };
};

function myFunction() {

    var navbar = document.getElementById("myNavbar");
    var drop1 = document.getElementById("myDrop1");
    var drop2 = document.getElementById("myDrop2");
    var drop3 = document.getElementById("myDrop3");
    var drop4 = document.getElementById("myDrop4");

    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {

        navbar.className = "nav-title" + " nav-title-v1";
        drop1.className = "dropdown-content" + " dropdown-content-v1";
        drop2.className = "dropdown-content" + " dropdown-content-v1";
        drop3.className = "dropdown-content" + " dropdown-content-v1";
        drop4.className = "dropdown-content" + " dropdown-content-v1";

    } else {

        navbar.className = navbar.className.replace(" nav-title-v1", "");
        drop1.className = drop1.className.replace(" dropdown-content-v1", "");
        drop2.className = drop2.className.replace(" dropdown-content-v1", "");
        drop3.className = drop3.className.replace(" dropdown-content-v1", "");
        drop4.className = drop4.className.replace(" dropdown-content-v1", "");
    }
}
