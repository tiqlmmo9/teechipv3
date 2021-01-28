var change_color_search = document.getElementById("change_color_search");

var search_list = document.getElementById("search_list");
var close_search_list = document.getElementById("close_search_list");
var zoom_placeholder = document.getElementById("zoom_placeholder");
var css_search = document.getElementById("css_search");
var css_search__icon = document.getElementById("css_search_icon");
var input_line_bottom = document.getElementById("input_line_bottom");
var btn_close_to_del = document.getElementById("btn_close_to_del");
var text_input = document.getElementById("text_input");
var shopper_login = document.getElementById("shopper_login");

// When the user clicks the button, open the modal
function toggle_visibility() {
  search_list.style.display = "flex";
  close_search_list.style.display = "flex";

  //Css placeholder
  zoom_placeholder.style.color = "#FC6514";
  zoom_placeholder.style.fontSize = "0.8rem";
  zoom_placeholder.style.transform = "translateY(.3rem)";

  //Css search
  css_search.style.border = "none";
  css_search.style.borderRadius = "2px";
  css_search.style.boxShadow =
    "0 0px 4px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.19)";
  css_search__icon.style.color = "#FC6514";
  change_color_search.style.color = "#FC6514";

  input_line_bottom.style.display = "block";
  // btn_close_to_del.style.display="flex";
  // var a=document.querySelector("input").value;
  // console.log(a);
}

function newFunction() {
  if (text_input.value != "") {
    btn_close_to_del.style.display = "flex";
  } else {
    btn_close_to_del.style.display = "none";
  }
}
// Click icon x (close) to delete text input
function close_to_del() {
  text_input.value = "";
  toggle_visibility(); //put mouse point input search
}
//Placeholder become normal
function originPlaceholder() {
  search_list.style.display = "none";
  close_search_list.style.display = "none";
  //Change color search style
  change_color_search.style.color = "#B2BEC3";
  //Change color placeholder text
  zoom_placeholder.style.color = "#B2BEC3";
  //Css search
  css_search.style.borderRadius = "5px";
  css_search.style.boxShadow = "none";
  css_search.style.border = "solid 1px #B2BEC3";
  css_search_icon.style.color = "#B2BEC3";
  input_line_bottom.style.display = "none";
}
//click login/signup to open form login
function click_to_login() {
  shopper_login.style.display = "flex";
  originPlaceholder();
  zoom_placeholder.style.transform = "translateY(+.75rem)";
  zoom_placeholder.style.fontSize = "1rem";
}

//click icon x (close) to close form shopper_login/signup
function click_to_close() {
  shopper_login.style.display = "none";
}



// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == close_search_list) {
    originPlaceholder();
    // Display none shopper login form
    shopper_login.style.display = "none";

    //Check value input to change search placeholder text
    if (text_input.value.trim().length != 0) {
      zoom_placeholder.style.fontSize = "0.8rem";
      btn_close_to_del.style.display = "flex";
    } else {
      zoom_placeholder.style.transform = "translateY(+.75rem)";
      zoom_placeholder.style.fontSize = "1rem";

      text_input.value = ""; //delete whitespace to mouse pointer returns to the first position
      btn_close_to_del.style.display = "none";
    }
  }
};


// LOGIN FACEBOOK
function statusChangeCallback(response) {
  // Called with the results from FB.getLoginStatus().
  console.log("statusChangeCallback");
  console.log(response); // The current login status of the person.
  if (response.status === "connected") {
    // Logged into your webpage and Facebook.
    testAPI();
  } else {
    // Not logged into your webpage or we are unable to tell.
    document.getElementById("status").innerHTML =
      "Please log " + "into this webpage.";
  }
}

function checkLoginState() {
  // Called when a person is finished with the Login Button.
  FB.getLoginStatus(function(response) {
    // See the onlogin handler
    statusChangeCallback(response);
  });
}

window.fbAsyncInit = function() {
  FB.init({
    appId: "348954673172738",
    cookie: true, // Enable cookies to allow the server to access the session.
    xfbml: true, // Parse social plugins on this webpage.
    version: "v3.2" // Use this Graph API version for this call.
  });

  FB.getLoginStatus(function(response) {
    // Called after the JS SDK has been initialized.
    statusChangeCallback(response); // Returns the login status.
  });
};

function testAPI() {
  // Testing Graph API after login.  See statusChangeCallback() for when this call is made.
  console.log("Welcome!  Fetching your information.... ");
  FB.api("/me", function(response) {
    console.log("Successful login for: " + response.name);
    document.getElementById("status").innerHTML =
      "Thanks for logging in, " + response.name + "!";
  });
}
function fb_login() {
  FB.login(
    function(response) {
      if (response.authResponse) {
        console.log("Welcome!  Fetching your information.... ");
        //console.log(response); // dump complete info
        access_token = response.authResponse.accessToken; //get access token
        user_id = response.authResponse.userID; //get FB UID

        FB.api("/me", function(response) {
          user_email = response.email; //get user email
          // you can store this data into your database
        });
      } else {
        //user hit cancel button
        console.log("User cancelled login or did not fully authorize.");
      }
    },
    {
      scope: "public_profile,email"
    }
  );
  document.getElementById("login").addEventListener(
    "click",
    function() {
      //do the login
      FB.login(statusChangeCallback, {
        scope: "email,public_profile",
        return_scopes: true
      });
    },
    false
  );
}

// slideshow
var slideIndex = 1;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
// end slideshow

// back to top
function topFunction() {
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
