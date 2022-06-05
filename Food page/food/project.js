// seeing comments slowly by click
$(document).ready(function(){
  $(".authentif").hide() ;
  
  $("#signin").click(function(){
    $(".accueil").hide() ; 
    $(".authentif").show() ;

    var div = $(".authentif");
    div.animate({height: '800px', opacity: '0.4'}, "slow");
    div.animate({width: '400px', opacity: '0.4'}, "slow");
    div.animate({height: '300px', opacity: '0.9'}, "slow");
    div.animate({width: '600px', opacity: '0.9',}, "slow");
  });
});
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
 
var slider = document.querySelector('#slider')
 slider.style.marginTop = '20px';




 function myfn1(){
  var em=document.getElementById('email').value
   var psw=document.getElementById('pass').value
   
   if (em === '') {
     alert('enter your email please')   
   }
   if (psw === '') {
     alert('enter your password please')    
   }
   else{ 
     alert('🌭 🍔  welcome  🍟 🍕')
     window.location = './project1.html'
   }
 }