var scroll = new ScrollMagic.Controller();
var scroll2 = new ScrollMagic.Controller();
var scroll3 = new ScrollMagic.Controller();
var scroll4 = new ScrollMagic.Controller();
var scroll5 = new ScrollMagic.Controller();



var tween  = TweenMax.fromTo('#content1center',1,{
    opacity:0,
    y:30,
    scale:0.5,
    duration:1000,
},{
    opacity:1,
    y:0,
    scale:1,
    duration:1000,

});
var scene = new  ScrollMagic.Scene({
 triggerElement:"#content1"
}).setTween(tween).addTo(scroll);





var tween2  = TweenMax.fromTo('#services',1,{
    opacity:0,
    y:30,
    scale:0.5,
    duration:1000,
},{
    opacity:1,
    y:0,
    scale:1,
    duration:1000,

});
var scene2 = new  ScrollMagic.Scene({
 triggerElement:"#content1center"
}).setTween(tween2).addTo(scroll2);







var tween3  = TweenMax.fromTo('#why',1,{
    opacity:0,
    y:30,
    scale:0.5,
    duration:1000,
},{
    opacity:1,
    y:0,
    scale:1,
    duration:1000,

});
var scene3 = new  ScrollMagic.Scene({
 triggerElement:"#whytrigger"
}).setTween(tween3).addTo(scroll3);


var tween4  = TweenMax.fromTo('.card',1,{
    opacity:0,
    scale:0,

    stagger:0.5
},{
    opacity:1,
    scale:1,
    stagger:0.5



});
var scene4 = new  ScrollMagic.Scene({
 triggerElement:"#lawyerstrigger"
}).setTween(tween4).addTo(scroll4);


var tween5  = TweenMax.fromTo('#footerdetails',1,{
    opacity:0,
    scale:0.5,
    duration:1000,

},{
    opacity:1,
    scale:1,
    duration:1000,



});
var scene5 = new  ScrollMagic.Scene({
 triggerElement:"#footer"
}).setTween(tween5).addTo(scroll5);
