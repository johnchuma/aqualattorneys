$(document).ready(function () {
    $("#card1").hover(function(){
           anime({
             targets:"#card2,#card3,#card4",
              scale:[1,0.7],
             duration:200,
             easing:'easeInOutExpo'

           });
    },function(){
        anime({
            targets:"#card2,#card3,#card4",
                 scale:[0.7,1],
            duration:200,
            easing:'easeInOutExpo'

          });
    });



    $("#card2").hover(function(){
        anime({
          targets:"#card1,#card3,#card4",
          scale:0.7,
          duration:200,
          easing:'easeInOutExpo'

        });
 },function(){
     anime({
         targets:"#card1,#card3,#card4",
         scale:1,
         duration:200,
         easing:'easeInOutExpo'

       });
 });



 $("#card3").hover(function(){
    anime({
      targets:"#card2,#card1,#card4",
       scale:0.7,
      duration:200,
      easing:'easeInOutExpo'

    });
},function(){
 anime({
     targets:"#card2,#card1,#card4",
          scale:1,
     duration:200,
     easing:'easeInOutExpo'

   });
});



$("#card4").hover(function(){
    anime({
      targets:"#card2,#card3,#card1",
       scale:0.7,
      duration:200,
      easing:'easeInOutExpo'

    });
},function(){
 anime({
     targets:"#card2,#card3,#card1",
     scale:1,
     duration:200,
     easing:'easeInOutExpo'

   });
});
});
