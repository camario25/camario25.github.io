
$(document).ready(function(){

  var header= $("header");

//generates the clouds just to the right of the screen(cloud width), picks a random vertical location,
  function cloudGenerator(){
    var cloud = $("<div class='cloud'><i class='fas fa-cloud'></i></div>"); //actual cloud image
    var left= document.body.offsetWidth + cloud.width();//allows cloud to appear just to the right of screen
    var top=`${Math.floor(Math.random()*100)+14}vh`;//random vertical location
    cloud.css({'left':left,'top':top});
    header.append(cloud);//cloud is appended just header not whole page
    cloud.animate({left: -( cloud.width() ) }, 70000,"linear",function(){
      cloud.remove();
    });//function that moves cloud in a straight line to the left then erases once it leaves the screen, speed of cloud can be adjusted
  }

//allows to adjust the quantity of clouds and how often a cloud is generated
  function setIntervalX(callback, delay, repetitions) {
      var x = 0;//counter to compare to total(repetitions)
      var intervalID = window.setInterval(function () {
         callback();
         if (++x === repetitions) { //repetitions is amount of clouds
             window.clearInterval(intervalID);//stops creating clouds
         }
      }, delay);
  }

//actually calls the cloud generator functions
  setIntervalX(cloudGenerator,4000, 20);//a cloud every 4 seconds, 20 clouds total

  //testimonial section is on timer looping through the quotes, scalable to as many quotes as wanted
    var quoteCounter = 0;
    var $testimonials = '#skillsTestimonials p';
    var quoteLength = $($testimonials).length;

    setInterval(function () {
      $($testimonials).eq(quoteCounter).fadeOut(800, function () {
        if (quoteCounter === quoteLength - 1) {
          quoteCounter = 0;
        } else {
          quoteCounter += 1;
        }
        $($testimonials).eq(quoteCounter).fadeIn();
      });
    }, 6500);

  });
//end of on document ready section


//navigation bar: click goes to target on page
$(".nav1").on('click', function(e) {
  e.preventDefault();
  var thisTarget = $(this).attr('href');
  var targetOffset = $(thisTarget).offset().top;
  $('html, body').animate({scrollTop: targetOffset}, 1000);
});

//Animates and expands the bars to the right to show my skills, triggered by the scrolling action to the top of the section
$(window).on('scroll', function(){
 if($(window).scrollTop()>780){
  var $bar = $('.bar');
    $bar.eq(0).animate({width:'70%'}, {duration: 2500});
    $bar.eq(1).animate({width:'70%'}, {duration: 2500});
    $bar.eq(2).animate({width:'70%'}, {duration: 2500});
    $bar.eq(3).animate({width:'70%'}, {duration: 2500});
    $bar.eq(4).animate({width:'70%'}, {duration: 2500});
    $bar.eq(5).animate({width:'70%'}, {duration: 2500});
    $bar.eq(6).animate({width:'70%'}, {duration: 2500});
    $bar.eq(7).animate({width:'70%'}, {duration: 2500});
  }
});

//togles between hamburger and navagation links at top of page
//can be first seen when screen width is at phone size
$('.hamburger').on('click', function (e) {
  e.preventDefault();
  $('.navSmall').toggle(500);
});

//this section replaces the image and message on my personal interests section
$('#fav1').on('click mouseover', function () {
  $('#favtext').empty();
  $('.circlePhoto').css('background-image', "url(./assets/MarioDJing.jpg)");
  $('#favtext').append("DJing and Producing Music!");
});

$('#fav2').on('click mouseover', function () {
  $('#favtext').empty();
  $('.circlePhoto').css('background-image', "url(./assets/curry1.jpg)");
  $('#favtext').append("Anything Curry!");
});

$('#fav3').on('click mouseover', function () {
  $('#favtext').empty();
  $('.circlePhoto').css('background-image', "url(./assets/travel.jpeg)");
  $('#favtext').append("Flying the Globe!");
});

$('#fav4').on('click mouseover', function () {
  $('#favtext').empty();
  $('.circlePhoto').css('background-image', "url(./assets/luchador.jpg)");
  $('#favtext').append("Nacho Libre!");
});

$('#fav5').on('click mouseover', function () {
  $('#favtext').empty();
  $('.circlePhoto').css('background-image', "url(./assets/world_cup.jpeg)");
  $('#favtext').append("Soccer World Cup!");
});

$('#fav6').on('click mouseover', function () {
  $('#favtext').empty();
  $('.circlePhoto').css('background-image', "url(./assets/tea1.png)");
  $('#favtext').append("All Tea!");
});
