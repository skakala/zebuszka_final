$(document).ready(function() {
     
  $('.navbar-item').each(function(e) {
    $(this).click(function(){
      if($('#navbar-burger-id').hasClass('is-active')){
        $('#navbar-burger-id').removeClass('is-active');
        $('#navbar-menu-id').removeClass('is-active');
      }
    });
  });

  // --------------------------
  $('#navbar-burger-id').click(function () {
    if($('#navbar-burger-id').hasClass('is-active')){
      $('#navbar-burger-id').removeClass('is-active');
      $('#navbar-menu-id').removeClass('is-active');
    }else {
      $('#navbar-burger-id').addClass('is-active');
      $('#navbar-menu-id').addClass('is-active');
    }
  });
// --------------------------

  $('a[href^="#"]').click(function(e) {
    e.preventDefault();
    var target = this.hash;
    $('html, body').animate({
    scrollTop: $(target).offset().top
    }, 500);
    return false;
})


// lottie.loadAnimation({
//   container: testowe, // the dom element that will contain the animation
//   renderer: 'svg',
//   loop: true,
//   autoplay: true,
//   path: 'lottie/stopwatch.json' // the path to the animation json
// });

// --------------------------
// --------------------------
      }   
    );

