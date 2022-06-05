

$(document).ready(function(){

  $('.fa-heart').hide();
  $('.dropbtn').click(function(){
  $('.fa-heart').show();
  })
})

let like = document.querySelectorAll('.fa-heart');

for (let i = 0; i < like.length; i++) {
  
  like[i].addEventListener('click', function () {
    var likes= 0
    if (like[i].style.color === 'black') {
      like[i].style.color = 'red';
      likes +=1;
      like[i].innerHTML = likes
    } else {
      like[i].style.color = 'black';
      like[i].innerHTML = likes

    }
  });
}

$(document).ready(function(){

    $('#chineese').hide();
    $('#tunisian').hide();
    $('#italian').hide();
$('#china').click(function(){
    $('#chineese').show();
    $('#tunisian').hide();
    $('#italian').hide();
});
$('#tunisia').click(function(){
    $('#tunisian').show();
    $('#italian').hide();
    $('#chineese').hide();
});
$('#italy').click(function(){
    $('#italian').show();
    $('#chineese').hide();
    $('#tunisian').hide();
});
$('#all').click(function(){
  $('#chineese').slideToggle(4000);
  $('#tunisian').slideToggle(5000);
  $('#italian').slideToggle(5000);
});
})
$(document).ready(function(){

  $('#formulaire').hide();
  $('#formu').click(function(){
  $('#formulaire').show();
  })
})

$(document).ready(function(){
   $('#paragraph').hide()
    $("#signin").click(function(){
    $('#paragraph').show()
    var msg=document.querySelector('#message').value;
    var n=document.querySelector('#nom').value
    const d = new Date()
    $("#paragraph").append(`${n} </br> ${msg} </br> ${d} </br>`);
  });
});

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// seeing comments slowly by click
$(document).ready(function(){
  $("#signi").click(function(){
  $("#paragraph").slideToggle(4000)
  });
});