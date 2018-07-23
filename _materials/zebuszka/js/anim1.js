
$( document ).ready(function() {

    //-------------------Z anim

// var leftEye = $("#zEyeLeft");
// var rightEye = $("#zEyeRight");
// var  Zall = $('#zLetter');
// var rotZ= $('#rot');
// var zTimeLine = new TimelineMax();

//   var zRotation = TweenMax.fromTo(rotZ,1,
//         {rotation: 1,
//        //  sTweenMaxcaleY: 1
//           },
//         {
//       rotation: -1,
//       delay: 1,
//       repeat: -1,
//       repeatDelay: 1,
//       yoyo: true,
//       transformOrigin: "50% 50%"
//         }
//     );    
function zLetterAnim (){
    var zTimeLine = new TimelineMax({repeat: -1});
    var zBouncing = new TimelineMax();

    zBouncing.add("startBounce")
    .to("#zLetterBounce",.7,
{
    scaleY: 1.01,
    ease: Bounce.easeIn,
    repeat: -1,
    yoyo: true,
    transformOrigin:"50% 0%"
});

    return zTimeLine;
}
//-------------------E anim
function eLetterAnim (){
    var eTimeLine = new TimelineMax({repeat: -1});
    var eBouncing = new TimelineMax();

    eBouncing.add("startBounce")
    .to("#eLetterBounce",.7,
{
    scaleY: 1.01,
    ease: Bounce.easeIn,
    repeat: -1,
    yoyo: true,
    transformOrigin:"50% 0%"
},"eBegin");


    eTimeLine.add("eBegin")
  .to("#eLegLeft", 0.3,
{
    rotation: 15,
    // scale: 0.9,
    repeat: 3,
    yoyo: true,
    //delay: 4,
    ease: Back.easeOut.config(1.7),
    transformOrigin: "100% 100%"
},"+=4")
.to("#eLegRight",0.1,
{
    rotation: -15,
    // scale: 0.99,
    repeat: 3,
   // delay: 2,
    yoyo: true,
    ease: Back.easeOut.config(1.7),
    transformOrigin: "0% 100%",
},"+=4");


;

    return eTimeLine;
}

// TweenMax.staggerTo("#eEyeLeft, #eEyeRight",0.1,
// {
//     scaleY: 0.1,
//     repeat: 3,
//     yoyo: true,
//     transformOrigin: "50% 50%"
// })

//-------------------B anim

function bLetterAnim (){
    var bTimeLine = new TimelineMax({repeat: -1});
    var bBouncing = new TimelineMax();

    bBouncing.add("startBounce")
    .to("#bLetterBounce",.7,
{
    scaleY: 1.01,
    ease: Bounce.easeIn,
    repeat: -1,
    yoyo: true,
    transformOrigin:"50% 100%"
});

    return bTimeLine;
}


//-------------------U anim
function uLetterAnim (){
    var uTimeLine = new TimelineMax({repeat: -1});
    var uBouncing = new TimelineMax();

    uBouncing.add("startBounce")
    .to("#uLetterBounce",.7,
{
    scaleY: 1.01,
    ease: Bounce.easeIn,
    repeat: -1,
    yoyo: true,
    transformOrigin:"50% 100%"
});
return uTimeLine;
}
//-------------------S anim
function sLetterAnim (){
    var sTimeLine = new TimelineMax({repeat: -1});
    var sBouncing = new TimelineMax();

    sBouncing.add("startBounce")
    .to("#sLetterBounce",.7,
{
    scaleY: 1.01,
    ease: Bounce.easeIn,
    repeat: -1,
    yoyo: true,
    transformOrigin:"50% 100%"
});

    return sTimeLine;
}
//-------------------Z2 anim
function z2LetterAnim (){
    var z2TimeLine = new TimelineMax({repeat: -1});
    var zBouncing = new TimelineMax();

    zBouncing.add("startBounce")
    .to("#z2LetterBounce",.7,
{
    scaleY: 1.01,
    ease: Bounce.easeIn,
    repeat: -1,
    yoyo: true,
    transformOrigin:"50% 0%"
});

    return z2TimeLine;
}
//-------------------K anim
function kLetterAnim (){
    var kTimeLine = new TimelineMax({repeat: -1});
    var kBouncing = new TimelineMax();

    kBouncing.add("startBounce")
    .to("#kLetterBounce",.7,
{
    scaleY: 1.01,
    ease: Bounce.easeIn,
    repeat: -1,
    yoyo: true,
    transformOrigin:"50% 0%"
});

    return kTimeLine;
}
//-------------------A anim
function aLetterAnim (){
    var aTimeLine = new TimelineMax({repeat: -1});
    var aBouncing = new TimelineMax();scaleY: 1.02

    aBouncing.add("startBounce")
    .to("#aLetterBounce",.7,
{
    scaleY: 1.01,
    ease: Bounce.easeIn,
    repeat: -1,
    yoyo: true,
    transformOrigin:"50% 100%"
});

    return aTimeLine;
}
//-------------------master TL
var masterTL = new TimelineMax();
// masterTL.add(zLetterAnim(), "zAnimation");
// masterTL.add(eLetterAnim(), "eAnimation");
// masterTL.add(bLetterAnim(),"bAnimation");
// masterTL.add(uLetterAnim(),"uAnimation");
// masterTL.add(sLetterAnim(),"sAnimation");
// masterTL.add(z2LetterAnim(),"z2Animation");
// masterTL.add(kLetterAnim(), "kAnimation");
// masterTL.add(aLetterAnim(),"aAnimation");

masterTL.add([zLetterAnim,eLetterAnim,bLetterAnim,uLetterAnim,sLetterAnim,z2LetterAnim,kLetterAnim,aLetterAnim],"+=0.7","sequence",0.3)

//----------------------------------------------------
//----------------------------------------------------
//--Letter jump function -  

    var animating;
        function jump (jumpLetter){
        
          if(!TweenMax.isTweening(jumpLetter))
            {
             animating = true;
           TweenMax.to(
                jumpLetter,
               0.5,
               {y:  10, repeat:1, 
                yoyo:true,
               ease:Power3.easeOut,
               onComplete:function()
              {
                TweenMax.to(
                    jumpLetter,
                   0.5,
                   {y: 25, repeat:1, 
                    yoyo:true,
                   ease:Power1.easeOut})
              } })
            }}  ;

var elasticJump = function(jumpLetter){
    if(!TweenMax.isTweening(jumpLetter)){
    var tl = new TimelineMax({
        // repeat: -1
    });
    var duration =1.4;
    CustomBounce.create("letterBounce", {strength: 0.5,endAtStart: true ,squash:3});
    //#bLettertoken
    tl.to(jumpLetter,duration,{y:10, ease:"letterBounce"})
      .to(jumpLetter,duration,{scaleY:0.7,scaleX: 1.1,ease:"letterBounce-squash", transformOrigin:"bottom"},0)
}
}            

//----------------------------
//--Blink function

var eyeBlink = function(){
var  eyesArr = [
    "#zEyeLeft, #zEyeRight",
    "#eEyeLeft, #eEyeRight",
    "#bEyeLeft, #bEyeRight",
    "#uEyeLeft, #uEyeRight",
    "#sEyeLeft, #sEyeRight",
    "#z2EyeLeft, #z2EyeRight",
    "#kEyeLeft, #kEyeRight",
    "#aEyeLeft, #aEyeRight"
];

 (function randBlink (){

var selectedEyes = Math.floor((Math.random() * eyesArr.length ));

TweenMax.to(eyesArr[selectedEyes],0.1,
{
    delay: 1,
    scaleY: 0.1,
    repeat: 3,
    yoyo: true,
    transformOrigin: "50% 50%",
    onComplete: function(){
      randBlink();
    }

})
})();
}

eyeBlink();
//----------------------------
//----------------------------
//----------------------------


//--Below mouse and touch events

var element = $('#zLetter,#bLetter, #eLetter, #uLetter, #sLetter, #z2Letter, #kLetter, #aLetter')
 .on('click mouseover',
    function(){
        var jumpLetter = $(this);
        //jump(jumpLetter);
        elasticJump(jumpLetter);
        }    );
    
//--for mobile -- jump on touch
$(document).on("touchmove touchstart", function(event){
    var x = event.originalEvent.touches[0].pageX;
    var y = event.originalEvent.touches[0].pageY;
    var e = document.elementFromPoint(x, y);
  
    if($(e).is("#zBody" )){e = "#zLetter"; elasticJump(e);}
    if($(e).is("#eBody" )){e = "#eLetter"; elasticJump(e);}
    if($(e).is("#bBody" )){e = "#bLetter"; elasticJump(e);}
    if($(e).is("#uBody" )){e = "#uLetter"; elasticJump(e);}
    if($(e).is("#sBody" )){e = "#sLetter"; elasticJump(e);}
    if($(e).is("#z2Body" )){e ="#z2Letter";elasticJump(e);}
    if($(e).is("#kBody" )){e = "#kLetter"; elasticJump(e);}
    if($(e).is("#aBody" )){e = "#aLetter"; elasticJump(e);}    
});
});

