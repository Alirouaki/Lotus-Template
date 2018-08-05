// Scrolling Top Navbar
$(window).on("scroll", function() {
	if($(window).scrollTop()) {
		$(".navbar").addClass("black");
	}
	else{
		$(".navbar").removeClass("black");
	}
})

// Hero rotating texts
  $(".background .rotating").Morphext({
    animation: "flipInX",
    separator: ",",
    speed: 3000
  });

// Add Active Class, Remove Active Class From Navlinks
var btns = document.querySelectorAll(".nav-link");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// Lightbox Changes
lightbox.option({
  alwaysShowNavOnTouchDevices: true,
  fadeDuration: 200
})

//Smooth Scrolling, Setup a variable to capture your <a> tags
let scrollableLinks = document.querySelectorAll('.nav-link, .btn-get-started, .scrollup');

//For each of these links add an event listener to run our scrolling function on click
scrollableLinks.forEach(link => {
    link.addEventListener('click', smoothScrollToLink);
});
function smoothScrollToLink(e) {
    //if the the href of the link does not equal a string, simply return
    if (typeof (this.href) !== 'string') {
        return;
    }

    //Get the index of the hash within the links href value // "Length to start to get from"
    let hashPos = this.href.indexOf('#');

    //If no hash character exists in the string, simply return
    if (hashPos === -1) {
        return;
    }

    //Get the #something value from the links href value
    let hash = this.href.substr(hashPos);

    //Find the element on the page using the #something value above // start from the "#" indeox of to return something like "#about" which is the id
    let el = document.querySelector(hash);

    //If no element contains and id with this hash, simply return
    if (!el) {
        return;
    }

    //Prevent default link behaviour
    e.preventDefault();

    //Call scrollIntoView on the element
    el.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Back to top button
$(window).scroll(function(){
    if ($(this).scrollTop() > 750) {
      $('.scrollup').fadeIn();
      } else {
        $('.scrollup').fadeOut();
      }
    });
    $('.scrollup').click(function(){
      $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
    });

