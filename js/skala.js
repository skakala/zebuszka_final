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


//LOTTIE


lottie.loadAnimation({

  container: thankyou_message, // the dom element that will contain the animation
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'lottie/email.json' // the path to the animation json
});





//ScrollMagic

var controller = new ScrollMagic.Controller();

//pin
var pinIntroScene = new ScrollMagic.Scene({
  triggerElement: '#svg-logo',
  // offset: '180',
  duration:'25%',
  triggerHook: 0.7
})
//  .addIndicators({
//    collorTrigger: 'black',
//    startTrigger:'green'
//  })
.setPin('#intro', {pushFollowers: false})
 .addTo(controller)
// --------------
 var pinIntroScene2 = new ScrollMagic.Scene({
  triggerElement: '#about',
  duration: '35%',
  triggerHook: 0.4
})
// .addIndicators({
//   collorTrigger: 'black',
//   startTrigger:'green'
// })
.setPin('#intro', {pushFollowers: false})
 .addTo(controller)


var paralaxHeros = new ScrollMagic.Scene({
triggerElement: '#paralaxHero',
triggerHook:1,
duration: '150%'
})
.setTween('#paralaxHero',{
           backgroundPosition: "50% 10%",
           ease: Linear.easeNone
})
// .setPin('#paralaxHero', {pushFollowers: false})
// .addIndicators({
//      collorTrigger: 'black',
//      startTrigger:'green'
//    })
.addTo(controller);



// --------------------------
// --------------------------
      }   
    );

