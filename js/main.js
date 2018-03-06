/****  Carausel custom   ***/
$(function(){
//     $slideContainer.animate({'margin-left': '100%'},2000,function(){
//        curentSlide++;
//       if(curentSlide == $slides.length){
//         curentSlide=1;
//         $slideContainercss.css('left', '0');
//       }
//     });

var slideContainer = $('.slides');
var slides=$('.slide');
var curentSlide=1;

    //Previev button
    $('#prev').on('click', function() {

      slideContainer.animate({left: '0%'}, 1000, function(){

        slideContainer.css('left', '-100%');

        $('.slide').first().before($('.slide').last());

      });

    });

    //Next button
    $('#next').on('click', function() {

      slideContainer.animate({left: '-200%'}, 1000, function(){

        slideContainer.css('left', '-100%');

        $('.slide').last().after($('.slide').first());

      });
    });

 });
/****  Carausel custom   ***/


/***  Toggle navigation  ***/
$(function(){ 
  var browser = $(window).width();
  // Returns width of HTML document
  var document = $(document).width();

  if ( $(window).width() <= 767) {
    $('#nav-icon').click(function (e) {
       $('.main-list').addClass('mobile').slideToggle('slow');
      e.preventDefault();
      console.log("click");
    });
  };
    //Adding open class for nav-icon animation
    $('#nav-icon').click(function(){
      $(this).toggleClass('open');
    });
});
/***  Toggle navigation  ***/
      

/**** CUSTOM  Menu accordion mobile   ***/ 
$(function(e){ 
  $('.item-drop').on('click',function(e){
    $('.drop-down').addClass('active').slideToggle('slow');
    e.preventDefault();
  }); 
});         


$(function(e){ 
  $('.main-link').on('click',function(e){
    $(this).children().addClass('active').slideToggle('slow');
    e.preventDefault();
  });
});  

/****  Menu accordion mobile   ***/ 