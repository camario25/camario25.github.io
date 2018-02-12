
$(document).ready(function(){
  // console.log('hell0');
  //width of the screen
  // make i tag load off left of screen
  // 




  // function cloudGenerator(){
  //   var left=`${Math.floor(Math.random()*100)}vw`;
  //   var top=`${Math.floor(Math.random()*100)+15}vh`;
  //   var div=$('<div></div>');
  //   div.addClass('cloud');
  //   var el=$('<i></i>');
  //   el.addClass('fas fa-cloud');
  //   div.append(el);
  //   div.css({'left':left,'top':top});
  //   header.append(div);
  //   console.log(div.position());
  //   div.animate({left: '-=200'}, 50000,"linear", cloudGenerator());
  // }

  function cloudGenerator(){
    // var el=$('<i></i>');
    // el.addClass('fas fa-cloud');
    // 
    // var div=$('<div></div>');
    // div.addClass('cloud');
    var cloud = $("<div class='cloud'><i class='fas fa-cloud'></i></div>");
    var left= document.body.offsetWidth + cloud.width();
    var top=`${Math.floor(Math.random()*100)+15}vh`;

    // div.append(el);
    cloud.css({'left':left,'top':top});
    header.append(cloud);
    console.log(cloud.position());
    cloud.animate({left: -( cloud.width() ) }, 50000,"linear",function(){
      cloud.remove();
    });
  }

  var header= $("header");

//   for(var i=0;i<number;i++){
// 
// };
  setInterval(cloudGenerator,1000);

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

$('.nav-links a, .logo a').on('click', function(e) {
  // prevent the standard link operation on click
  e.preventDefault();
  // use the href of the link to identify what
  // section to scroll to
  var thisTarget = $(this).attr('href');
  // get that section's top offset
  var targetOffset = $(thisTarget).offset().top;
  // use jQuery.animate() to animate the body's
  // scrollTop to the targetOffest
  $('body').animate({
    scrollTop: targetOffset
  }, 600);
});

$(window).on('scroll', function(){
 if($(window).scrollTop()>780){
  var $bar = $('.bar');
    $bar.eq(0).animate({width:'65%'}, {duration: 2500});
    $bar.eq(1).animate({width:'50%'}, {duration: 2000});
    $bar.eq(2).animate({width:'40%'}, {duration: 1800});
    $bar.eq(3).animate({width:'10%'}, {duration: 700});
    $bar.eq(4).animate({width:'10%'}, {duration: 2000});
    $bar.eq(5).animate({width:'10%'}, {duration: 2000});
    $bar.eq(6).animate({width:'10%'}, {duration: 2000});
    $bar.eq(7).animate({width:'65%'}, {duration: 2000});
  }
});
$('.hamburger').on('click', function (e) {
  e.preventDefault();
  console.log('hamtest');
  $('body').prepend("<section><a href='#proj'>PROJECTS</a><a href='#biography'>ABOUT</a><a href='#sklz'>SKILLS</a><a href='#contact'>CONNECT</a></section>");
  $('section:first').addClass('navSmall');

});
// var toggle = function () {
//   if ($('section:first').attr() === "navSmall") {
//     $('section:first').hide();
//   }
// }
// $('.hamburger').toggle(function () {
//   console.log('hamtest');
//   $('body').prepend("<section><a href='#proj'>PROJECTS</a><a href='#biography'>ABOUT</a><a href='#sklz'>SKILLS</a><a href='#contact'>CONNECT</a></section>");
//   $('section:first').addClass('navSmall');
// }, function () {
//   $('section:first').hide();
// });

function Favorite (name, image, trigger) {
  console.log('constructed');
  this.name = name;
  this.image = image;
  this.trigger = trigger;
}

Favorite.prototype = {
  appear: function () {
    console.log('appear');
    
  }
};
var music = new Favorite("DJing and Producing Music!", '../assets/MarioDJing.jpg', "$('#fav1')");
var food = new Favorite("Anything Curry!", '..assets/curry1.jpg', "$('#fav2')");
var travel = new Favorite("Flying the Globe!", '../assets/travel.jpeg', "$('#fav3')");
var movie = new Favorite("Nacho Libre!", '../assets/luchador.jpg', "$('#fav4')");
var sport = new Favorite("Soccer World Cup!", '../assets/world_cup.jpeg', "$('#fav5')");
var drink = new Favorite("All Tea!", '../assets/tea1.png', "$('#fav6')");

var favoritesArray = [music, food, travel, movie, sport, drink];

// $(favoritesArray).each(function {
// 
// })

$('#fav1').on('click mouseover', function () {
  console.log(music.appear);
  $('.circlePhoto').append("<img src='../assets/MarioDJing.jpg>");
  console.log('fav111');
  $('#favtext').append(music.name);
  $('#fav1').off('click mouseover');

} );

