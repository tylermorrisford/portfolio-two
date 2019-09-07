   
   $(document).ready(function(){
    M.AutoInit();
    $("a[href^='#']").click(function(e) {
           e.preventDefault();
           
           var position = $($(this).attr("href")).offset().top;
           
           $("body, html").animate({
               scrollTop: position
            }, 1000 );
        });
        $('.sidenav').sidenav();
    });

//   hide nav on scroll down show on scroll up

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    $("#custnav").style.top = "0";
  } else {
    $("#custnav").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}







  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAgnMMG6ZDe1v51JvNintTXyBMaEfKmxK8",
    authDomain: "portfolio-form-b6f42.firebaseapp.com",
    databaseURL: "https://portfolio-form-b6f42.firebaseio.com",
    projectId: "portfolio-form-b6f42",
    storageBucket: "",
    messagingSenderId: "610074159776",
    appId: "1:610074159776:web:ca802171f8dca63c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();

  $("#submit").on("click", function (event) {
    event.preventDefault();
    // if user submits form with a blank input
    if ( $("#name").val() === "" || $("#email").val() === "" || $("#icon_prefix2").val() === "" ) {
        alert("Please send me a message using alphanumerics instead of E.S.P.");
        $("#name").val("");
        $("#email").val("");
        $("#icon_prefix2").val("");
    } else {
        var name = $("#name").val().trim();
        var email = $("#email").val().trim();
        var message = $("#icon_prefix2").val().trim();

        
        database.ref().push({
            name: name,
            email: email,
            message: message,
            dateAdded: firebase.database.ServerValue.TIMESTAMP
        })
    }
        $("#name").val("");
        $("#email").val("");
        $("#icon_prefix2").val("");
        $("#formTitle").html("<h4>Thanks, I'll be in touch!</h4>").addClass("thanks");

        setTimeout (function(){ 
            $("#formTitle").html("<h4>Contact Me</h4>").removeClass("thanks"); 
        }, 5000);

    });