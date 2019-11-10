//Get the button:
mybutton = document.getElementById("myBtn");

btnbottom = document.getElementById('btn_bottom');
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 788 || document.documentElement.scrollTop > 788) {
    mybutton.style.display = "block";
    btnbottom.style.display = "none";
  } else {
    mybutton.style.display = "none";
    btnbottom.style.display = "block";  
  }


}



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
  $('#myBtn').css('visibility','hidden');
  intervalId = setInterval(scrolltop, 1);
}

function bottomFunction() {
  $('#myBtn').css('visibility','hidden');
  intervalId = setInterval(checkdown, 1);
}



