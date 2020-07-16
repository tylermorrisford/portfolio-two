   
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
        $('.carousel').carousel(
          {
            dist: 0,
            padding: 0,
            fullWidth: true,
            indicators: true,
            duration: 200,
          }
          );
          $('.carousel-slider').slider({full_width: true});
          setInterval(function() {
            $('.carousel').carousel('next');
          }, 5500);

          var btn = $('#backToTop');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });
        
  // let today = new Date();
  // let year = today.getFullYear();
  // $('#year').html = year;
    });

  
  

  // Firebase configuration
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
    var person = $("#name").val("");
    $("#formTitle").html("<h4>Thanks  " + name + ",  I'll be in touch!</h4>").addClass("thanks");
    // feedback for the user on submitting the form
    setTimeout (function(){ 
      $("#formTitle").html("<h4>Contact Me</h4>").addClass("monoton"); 
      $("#name").val("");
      $("#email").val("");
      $("#icon_prefix2").val("");
        }, 5000);

    });