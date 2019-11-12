//Get the button:
mybutton = document.getElementById("myBtn");


btnbottom = document.getElementById('btn_bottom');
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    $(mybutton).fadeIn('slow')
  } else {
    $(mybutton).fadeOut('slow') 
  }
}

/*$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
      //$('#header').addClass('header-fixed');
    } else {
      $('.back-to-top').fadeOut('slow');
      //$('#header').removeClass('header-fixed');
    }
  });*/

/*$('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });*/


var intervalId = null;



 function scrolltop(){
  let position = window.scrollY - 10;
    if(position > 0){
        window.scrollTo(0, position);
          /* your code goes here */
     } else {
          clearInterval(intervalId);
          console.log('stop')
          $('#myBtn').css('visibility','visible');
/*           document.body.scrollTop = 0; // For Safari
          document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera */
     }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  //$('#myBtn').css('visibility','hidden');
  intervalId = setInterval(scrolltop, 1);

}




