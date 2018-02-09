// 
// $(document).ready(function(){
//   //width of the screen
//   // make i tag load off left of screen
//   // 
// 
// 
// 
// 
//   // function cloudGenerator(){
//   //   var left=`${Math.floor(Math.random()*100)}vw`;
//   //   var top=`${Math.floor(Math.random()*100)+15}vh`;
//   //   var div=$('<div></div>');
//   //   div.addClass('cloud');
//   //   var el=$('<i></i>');
//   //   el.addClass('fas fa-cloud');
//   //   div.append(el);
//   //   div.css({'left':left,'top':top});
//   //   header.append(div);
//   //   console.log(div.position());
//   //   div.animate({left: '-=200'}, 50000,"linear", cloudGenerator());
//   // }
// 
//   function cloudGenerator(){
//     // var el=$('<i></i>');
//     // el.addClass('fas fa-cloud');
//     // 
//     // var div=$('<div></div>');
//     // div.addClass('cloud');
//     var cloud = $("<div class='cloud'><i class='fas fa-cloud'></i></div>");
//     var left= document.body.offsetWidth + cloud.width();
//     var top=`${Math.floor(Math.random()*100)+15}vh`;
// 
//     // div.append(el);
//     cloud.css({'left':left,'top':top});
//     header.append(cloud);
//     console.log(cloud.position());
//     cloud.animate({left: -( cloud.width() ) }, 50000,"linear",function(){
//       cloud.remove();
//     });
//   }
// 
//   var header= $("header");
// 
// //   for(var i=0;i<number;i++){
// // 
// // };
//   setInterval(cloudGenerator,1000);
// 
// });
// 

$(window).on('scroll', function(){
 if($(window).scrollTop()>894){
  console.log("scroll function working")
};
});