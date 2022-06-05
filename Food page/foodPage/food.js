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

 
 $(document).ready(function(){

   $('#sandwich').hide()
   $('#pizza').hide()
    $('#Spaghetti').hide()
  
  $('#sand').click(function(){
  
    $('#sandwich').show();
    $('#pizza').hide()
    $('#Spaghetti').hide()
  })
  $('#pizz').click(function(){
    $('#pizza').show()
    $('#sandwich').hide()
    $('#Spaghetti').hide()
  })
  $('#spag').click(function(){
    $('#Spaghetti').show()
    $('#pizza').hide()
    $('#sandwich').hide()
  })
  $('#all').click(function(){
    $('#Spaghetti').show()
    $('#pizza').show()
    $('#sandwich').show()
  })

});