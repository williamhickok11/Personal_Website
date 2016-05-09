$("#composer").on("click",function(){
  $("#Intro").toggle();
  $("#Composer_Site").toggle();
  $("body").css('background-image','url("css/images/cool-music-wallpapers-for-android.jpg")');
})

$("#sft_dev").on("click",function(){
  $("#Intro").toggleClass('hidden');
  $("#Sft_Site").toggleClass('hidden');
  $("body").css('background-image','url("css/images/Software.jpg")');
})

var velocity = 0.2;

function update(){
var pos = $(window).scrollTop();
console.log("pos", pos);
$('body').each(function() {
      var $element = $(this);
      // subtract some from the height b/c of the padding
      var height = $element.height();
      console.log("height", height);
      $(this).css('backgroundPosition', '50% ' + (-(Math.round((pos) * velocity)) - 100) +  'px');
    });
  };

 $(window).bind('scroll', update);

// var winheight = $(window).height()
// console.log(winheight);
// function() {
//   console.log(winheight);
// }, 100);