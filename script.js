window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var mybutton = document.getElementById("myBtn");
var sticky = navbar.offsetTop;


function myFunction() {
if (window.pageYOffset >= sticky) {
  navbar.classList.add("sticky")
  } else {
  navbar.classList.remove("sticky");
  }


  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
