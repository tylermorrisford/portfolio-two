   $(document).ready(function(){
    $('.sidenav').sidenav();
  });


//   smooth scroll to div id jquery
//   $('a[href^="#"]').on('click', function(event) {

//     var target = $(this.getAttribute('href'));

//     if( target.length ) {
//         event.preventDefault();
//         $('html, body').stop().animate({
//             scrollTop: target.offset().top
//         }, 1000);
//     }

// });
  
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