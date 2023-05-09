
$(document).ready(function () {

   var animation =  anime.timeline({

   });
   animation.add({
    targets:'#main',
    opacity:[0,1],
    easing:'easeInOutSine',
    duration:500
   }).add({
    targets:'#mainimage',
    scale:1.28,
    translateY:0,
    duration:500,
    easing:'easeInOutSine',
    offset:'-=500',    
   }).add({
     targets:'#aqual',
     translateX:-40,
     easing:'easeInOutSine'
 });

   anime({
    targets:'#workerimage2',
    translateY:[-150,-80],
    duration:2000,
    easing:'easeInOutSine',
    direction:'alternate',
    loop:true
   });


  anime({
      targets:'#count',
      value:[0,100],
      easing:'easeInOutSine',
      duration:3000
  })



});
