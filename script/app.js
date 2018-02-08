const number=100;
$(document).ready(function(){
    var header=$("header");
  for(var i=0;i<number;i++){
    var left=`${Math.floor(Math.random()*100)}vw`;
    var top=`${Math.floor(Math.random()*100)+15}vh`;
  var div=$('<div></div>');
  div.addClass('cloud');
  var el=$('<i></i>');
  el.addClass('fas fa-cloud');
  div.append(el);
  div.css({'left':left,'top':top});
  header.append(div);
  console.log(div.position());
}
$(document).ready(function(){
  function moveClouds() {
    $(".fa-cloud").animate({left: -=100}, 5000);
    };
  };
});

