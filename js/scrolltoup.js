var myBtn = document.querySelector("#myBtn");
var rootElement = document.documentElement;

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        myBtn.style.display = "block";
    } else {
        myBtn.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
      // Scroll to top logic
      rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
    myBtn.addEventListener("click", scrollToTop);