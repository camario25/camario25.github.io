
$(document).ready(function(){
  console.log('hell0');
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
    var top=`${Math.floor(Math.random()*100)+14}vh`;

    // div.append(el);
    cloud.css({'left':left,'top':top});
    header.append(cloud);
    // console.log(cloud.position());
    cloud.animate({left: -( cloud.width() ) }, 70000,"linear",function(){
      cloud.remove();
    });
  }

  var header= $("header");

//   for(var i=0;i<number;i++){
// 
// };
function setIntervalX(callback, delay, repetitions) {
    var x = 0;
    var intervalID = window.setInterval(function () {

       callback();

       if (++x === repetitions) {
           window.clearInterval(intervalID);
       }
    }, delay);
}
  setIntervalX(cloudGenerator,4000, 22);

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

$(".nav1").on('click', function(e) {
  e.preventDefault();
  var thisTarget = $(this).attr('href');
  var targetOffset = $(thisTarget).offset().top;
  $('html, body').animate({scrollTop: targetOffset}, 1000);
});

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

// $('.hamburger').on('click', function (e) {
//   e.preventDefault();
//   console.log('hamtest');
//   $('body').prepend("<section><a href='#proj'>PROJECTS</a><a href='#biography'>ABOUT</a><a href='#sklz'>SKILLS</a><a href='#contact'>CONNECT</a></section>");
//   $('section:first').addClass('navSmall');
// });

$('.hamburger').on('click', function (e) {
  e.preventDefault();
  console.log('hamtest');
  $('.navSmall').toggle(500);  
});



// $('.hamburger').on('click', function (e) {
//   e.preventDefault();
//   console.log('hamtest');
//   $('body').remove("<section><a href='#proj'>PROJECTS</a><a href='#biography'>ABOUT</a><a href='#sklz'>SKILLS</a><a href='#contact'>CONNECT</a></section>");
// });

// $('.hamburger').toggle( function () {
//   $('body').prepend("<section><a href='#proj'>PROJECTS</a><a href='#biography'>ABOUT</a><a href='#sklz'>SKILLS</a><a href='#contact'>CONNECT</a></section>");
//   $('section:first').addClass('navSmall');
// },
//   function () {
//   $('section:first').detach();
// });


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

// function Favorite (name, image, trigger) {
//   console.log('constructed');
//   this.name = name;
//   this.image = image;
//   this.trigger = trigger;
// }
// 
// Favorite.prototype = {
//   appear: function () {
//       console.log(this.appear);
//       $('.circlePhoto').append(this.image);
//       console.log('fav111');
//       $('#favtext').append(this.name);
//       $(this.name).off('click mouseover');
//   }
// };
// var music = new Favorite("DJing and Producing Music!", '../assets/MarioDJing.jpg', "$('#fav1')");
// var food = new Favorite("Anything Curry!", '..assets/curry1.jpg', "$('#fav2')");
// var travel = new Favorite("Flying the Globe!", '../assets/travel.jpeg', "$('#fav3')");
// var movie = new Favorite("Nacho Libre!", '../assets/luchador.jpg', "$('#fav4')");
// var sport = new Favorite("Soccer World Cup!", '../assets/world_cup.jpeg', "$('#fav5')");
// var drink = new Favorite("All Tea!", '../assets/tea1.png', "$('#fav6')");
// 
// var favoritesArray = [music, food, travel, movie, sport, drink];



// $(favoritesArray).each(function (i, favorite) {
//   console.log(favorite);
//   $('.favList a').on('click mouseover', function () {
//     favorite.appear();
//     console.log(favorite.appear());
//   });
// });
// 
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

// TODO: Experimental! Be careful!
// // TODO: Make a list objects that contains
// var favoriteThings =
// [
//   {selector: "#fav1", imageURL: "./tea1.png", message: "All Tea!"},
//   {selector: "#fav1", imageURL: "./tea1.png", message: "All Tea!"},
//   {selector: "#fav1", imageURL: "./tea1.png", message: "All Tea!"},
//   {selector: "#fav1", imageURL: "./tea1.png", message: "All Tea!"}
// ]
// 
// favoriteThings.forEach(function(faveThing){
//   revealImage(faveThing);
// })
// 
// 
// function revealImage(imageObject){
//   $selector = imageObject.selector;
//   imageURL = imagObject.imageURL;
//   message = imageObject.message
//   $($selector).on('click mouseover', function () {
//     $('#favtext').empty();
//     $('.circlePhoto').css('background-image', "url(./assets/"+imageURL+")");
//     $('#favtext').append(message);
//   }
// }
