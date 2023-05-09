$("#familybtn").click(function (e) {
    anime({
        targets:'#intellectual,#land,#litigation',
        translateX:1000,
        easing:'easeInOutSine',
        opacity:0,
        duration:1000,
        complete:function(){
          $("#intellectual").hide();
          $("#land").hide();
          $("#litigation").hide();
          $('#minfamily').hide();
          $('#morefamily').show();
          $("#familybtn").hide();
          $("#familyminimize").show();
        }
    });
});
$("#familybtnmobile").click(function (e) {
    anime({
        targets:'#intellectualmobile,#landmobile,#litigationmobile',
        translateX:1000,
        easing:'easeInOutSine',
        opacity:0,
        duration:1000,
        complete:function(){
          $("#intellectualmobile").hide();
          $("#landmobile").hide();
          $("#litigationmobile").hide();
          $('#minfamilymobile').hide();
          $('#morefamilymobile').show();
          $("#familybtnmobile").hide();
          $("#familyminimizemobile").show();
        }
    });
});

$("#familyminimize").click(function (e) {
  anime({
        targets:'#intellectual,#land,#litigation',
        translateX:[1000,0],
        easing:'easeInOutSine',
        opacity:1,
        duration:1000,
        begin:function(){
          $("#intellectual").show();
          $("#land").show();
          $('#minfamily').show();
          $('#morefamily').hide();
          $("#litigation").show();
          $("#familybtn").show();
          $("#familyminimize").hide();
        }
    });
});

$("#familyminimizemobile").click(function (e) {
    anime({
          targets:'#intellectualmobile,#landmobile,#litigationmobile',
          translateX:[1000,0],
          easing:'easeInOutSine',
          opacity:1,
          duration:1000,
          begin:function(){
            $("#intellectualmobile").show();
            $("#landmobile").show();
            $('#minfamilymobile').show();
            $('#morefamilymobile').hide();
            $("#litigationmobile").show();
            $("#familybtnmobile").show();
            $("#familyminimizemobile").hide();
          }
      });
  });

$("#intellectualbtn").click(function (e) {
    anime({
        targets:'#family,#land,#litigation',
        translateX:1000,
        easing:'easeInOutSine',
        opacity:0,
        duration:1000,
        complete:function(){
          $("#land").hide();
          $("#litigation").hide();
          $("#family").hide();
          $('#minintellectual').hide();
          $('#moreintellectual').show();
          $("#intellectualbtn").hide();
          $("#intellectualminimize").show();
        }
    });
});
$("#intellectualbtnmobile").click(function (e) {
    anime({
        targets:'#familymobile,#landmobile,#litigationmobile',
        translateX:1000,
        easing:'easeInOutSine',
        opacity:0,
        duration:1000,
        complete:function(){
          $("#landmobile").hide();
          $("#litigationmobile").hide();
          $("#familymobile").hide();
          $('#minintellectualmobile').hide();
          $('#moreintellectualmobile').show();
          $("#intellectualbtnmobile").hide();
          $("#intellectualminimizemobile").show();
        }
    });
});
$("#intellectualminimize").click(function (e) {
  anime({
        targets:'#family,#land,#litigation',
        translateX:[1000,0],
        easing:'easeInOutSine',
        opacity:1,
        duration:1000,
        begin:function(){

          $("#land").show();
          $("#family").show();
          $('#minintellectual').show();
          $('#moreintellectual').hide();
          $("#litigation").show();
          $("#intellectualbtn").show();
          $("#intellectualminimize").hide();
        }
    });
});

$("#intellectualminimizemobile").click(function (e) {
    anime({
          targets:'#familymobile,#landmobile,#litigationmobile',
          translateX:[1000,0],
          easing:'easeInOutSine',
          opacity:1,
          duration:1000,
          begin:function(){

            $("#landmobile").show();
            $("#familymobile").show();
            $('#minintellectualmobile').show();
            $('#moreintellectualmobile').hide();
            $("#litigationmobile").show();
            $("#intellectualbtnmobile").show();
            $("#intellectualminimizemobile").hide();
          }
      });
  });
$("#landbtn").click(function (e) {
    anime({
        targets:'#family,#intellectual,#litigation',
        translateX:1000,
        easing:'easeInOutSine',
        opacity:0,
        duration:1000,
        complete:function(){
          $("#intellectual").hide();
          $("#litigation").hide();
          $("#family").hide();
          $('#minland').hide();
          $('#moreland').show();
          $("#landbtn").hide();
          $("#landminimize").show();
        }
    });
});
$("#landbtnmobile").click(function (e) {
    anime({
        targets:'#familymobile,#intellectualmobile,#litigationmobile',
        translateX:1000,
        easing:'easeInOutSine',
        opacity:0,
        duration:1000,
        complete:function(){
          $("#intellectualmobile").hide();
          $("#litigationmobile").hide();
          $("#familymobile").hide();
          $('#minlandmobile').hide();
          $('#morelandmobile').show();
          $("#landbtnmobile").hide();
          $("#landminimizemobile").show();
        }
    });
});
$("#landminimize").click(function (e) {
  anime({
        targets:'#family,#intellectual,#litigation',
        translateX:[1000,0],
        easing:'easeInOutSine',
        opacity:1,
        duration:1000,
        begin:function(){

          $("#intellectual").show();
          $("#family").show();
          $('#minland').show();
          $('#moreland').hide();
          $("#litigation").show();
          $("#landbtn").show();
          $("#landminimize").hide();
        }
    });
});

$("#landminimizemobile").click(function (e) {
    anime({
          targets:'#familymobile,#intellectualmobile,#litigationmobile',
          translateX:[1000,0],
          easing:'easeInOutSine',
          opacity:1,
          duration:1000,
          begin:function(){

            $("#intellectualmobile").show();
            $("#familymobile").show();
            $('#minlandmobile').show();
            $('#morelandmobile').hide();
            $("#litigationmobile").show();
            $("#landbtnmobile").show();
            $("#landminimizemobile").hide();
          }
      });
  });

$("#litigationbtn").click(function (e) {
    anime({
        targets:'#family,#intellectual,#land',
        translateX:1000,
        easing:'easeInOutSine',
        opacity:0,
        duration:1000,
        complete:function(){
          $("#intellectual").hide();
          $("#land").hide();
          $("#family").hide();
          $('#minlitigation').hide();
          $('#morelitigation').show();
          $("#litigationbtn").hide();
          $("#litigationminimize").show();
        }
    });
});
$("#litigationbtnmobile").click(function (e) {
    anime({
        targets:'#familymobile,#intellectualmobile,#landmobile',
        translateX:1000,
        easing:'easeInOutSine',
        opacity:0,
        duration:1000,
        complete:function(){
          $("#intellectualmobile").hide();
          $("#landmobile").hide();
          $("#familymobile").hide();
          $('#minlitigationmobile').hide();
          $('#morelitigationmobile').show();
          $("#litigationbtnmobile").hide();
          $("#litigationminimizemobile").show();
        }
    });
});
$("#litigationminimize").click(function (e) {
  anime({
        targets:'#family,#intellectual,#land',
        translateX:[1000,0],
        easing:'easeInOutSine',
        opacity:1,
        duration:1000,
        begin:function(){

          $("#intellectual").show();
          $("#family").show();
          $('#minlitigation').show();
          $('#morelitigation').hide();
          $("#land").show();
          $("#litigationbtn").show();
          $("#litigationminimize").hide();
        }
    });
});
$("#litigationminimizemobile").click(function (e) {
    anime({
          targets:'#familymobile,#intellectualmobile,#landmobile',
          translateX:[1000,0],
          easing:'easeInOutSine',
          opacity:1,
          duration:1000,
          begin:function(){

            $("#intellectualmobile").show();
            $("#familymobile").show();
            $('#minlitigationmobile').show();
            $('#morelitigationmobile').hide();
            $("#landmobile").show();
            $("#litigationbtnmobile").show();
            $("#litigationminimizemobile").hide();
          }
      });
  });


$("#residencebtn").click(function (e) {
    anime({
        targets:'#wills,#competition,#commercial',
        translateX:1000,
        easing:'easeInOutSine',
        opacity:0,
        duration:1000,
        complete:function(){
          $("#wills").hide();
          $("#competition").hide();
          $("#commercial").hide();
          $('#minresidence').hide();
          $('#moreresidence').show();
          $("#residencebtn").hide();
          $("#residenceminimize").show();
        }
    });
});

$("#residencebtnmobile").click(function (e) {
    anime({
        targets:'#willsmobile,#competitionmobile,#commercialmobile',
        translateX:1000,
        easing:'easeInOutSine',
        opacity:0,
        duration:1000,
        complete:function(){
          $("#willsmobile").hide();
          $("#competitionmobile").hide();
          $("#commercialmobile").hide();
          $('#minresidencemobile').hide();
          $('#moreresidencemobile').show();
          $("#residencebtnmobile").hide();
          $("#residenceminimizemobile").show();
        }
    });
});
$("#residenceminimize").click(function (e) {
  anime({
        targets:'#wills,#competition,#commercial',
        translateX:[1000,0],
        easing:'easeInOutSine',
        opacity:1,
        duration:1000,
        begin:function(){

          $("#wills").show();
          $("#commercial").show();
          $('#minresidence').show();
          $('#moreresidence').hide();
          $("#competition").show();
          $("#residencebtn").show();
          $("#residenceminimize").hide();
        }
    });
});

$("#residenceminimizemobile").click(function (e) {
    anime({
          targets:'#willsmobile,#competitionmobile,#commercialmobile',
          translateX:[1000,0],
          easing:'easeInOutSine',
          opacity:1,
          duration:1000,
          begin:function(){

            $("#willsmobile").show();
            $("#commercialmobile").show();
            $('#minresidencemobile').show();
            $('#moreresidencemobile').hide();
            $("#competitionmobile").show();
            $("#residencebtnmobile").show();
            $("#residenceminimizemobile").hide();
          }
      });
  });

$("#willsbtn").click(function (e) {
    anime({
        targets:'#residence,#competition,#commercial',
        translateX:1000,
        easing:'easeInOutSine',
        opacity:0,
        duration:1000,
        complete:function(){
          $("#residence").hide();
          $("#competition").hide();
          $("#commercial").hide();
          $('#minwills').hide();
          $('#morewills').show();
          $("#willsbtn").hide();
          $("#willsminimize").show();
        }
    });
});
$("#willsbtnmobile").click(function (e) {
    anime({
        targets:'#residencemobile,#competitionmobile,#commercialmobile',
        translateX:1000,
        easing:'easeInOutSine',
        opacity:0,
        duration:1000,
        complete:function(){
          $("#residencemobile").hide();
          $("#competitionmobile").hide();
          $("#commercialmobile").hide();
          $('#minwillsmobile').hide();
          $('#morewillsmobile').show();
          $("#willsbtnmobile").hide();
          $("#willsminimizemobile").show();
        }
    });
});



$("#willsminimize").click(function (e) {
  anime({
        targets:'#residence,#competition,#commercial',
        translateX:[1000,0],
        easing:'easeInOutSine',
        opacity:1,
        duration:1000,
        begin:function(){

          $("#residence").show();
          $("#commercial").show();
          $('#minwills').show();
          $('#morewills').hide();
          $("#competition").show();
          $("#willsbtn").show();
          $("#willsminimize").hide();
        }
    });
});
$("#willsminimizemobile").click(function (e) {
    anime({
          targets:'#residencemobile,#competitionmobile,#commercialmobile',
          translateX:[1000,0],
          easing:'easeInOutSine',
          opacity:1,
          duration:1000,
          begin:function(){

            $("#residencemobile").show();
            $("#commercialmobile").show();
            $('#minwillsmobile').show();
            $('#morewillsmobile').hide();
            $("#competitionmobile").show();
            $("#willsbtnmobile").show();
            $("#willsminimizemobile").hide();
          }
      });
  });

$("#competitionbtn").click(function (e) {
    anime({
        targets:'#residence,#wills,#commercial',
        translateX:1000,
        easing:'easeInOutSine',
        opacity:0,
        duration:1000,
        complete:function(){
          $("#residence").hide();
          $("#wills").hide();
          $("#commercial").hide();
          $('#mincompetition').hide();
          $('#morecompetition').show();
          $("#competitionbtn").hide();
          $("#competitionminimize").show();
        }
    });
});
$("#competitionbtnmobile").click(function (e) {
    anime({
        targets:'#residencemobile,#willsmobile,#commercialmobile',
        translateX:1000,
        easing:'easeInOutSine',
        opacity:0,
        duration:1000,
        complete:function(){
          $("#residencemobile").hide();
          $("#willsmobile").hide();
          $("#commercialmobile").hide();
          $('#mincompetitionmobile').hide();
          $('#morecompetitionmobile').show();
          $("#competitionbtnmobile").hide();
          $("#competitionminimizemobile").show();
        }
    });
});
$("#competitionminimize").click(function (e) {
  anime({
        targets:'#residence,#wills,#commercial',
        translateX:[1000,0],
        easing:'easeInOutSine',
        opacity:1,
        duration:1000,
        begin:function(){

          $("#residence").show();
          $("#commercial").show();
          $('#mincompetition').show();
          $('#morecompetition').hide();
          $("#wills").show();
          $("#competitionbtn").show();
          $("#competitionminimize").hide();
        }
    });
});
$("#competitionminimizemobile").click(function (e) {
    anime({
          targets:'#residencemobile,#willsmobile,#commercialmobile',
          translateX:[1000,0],
          easing:'easeInOutSine',
          opacity:1,
          duration:1000,
          begin:function(){

            $("#residencemobile").show();
            $("#commercialmobile").show();
            $('#mincompetitionmobile').show();
            $('#morecompetitionmobile').hide();
            $("#willsmobile").show();
            $("#competitionbtnmobile").show();
            $("#competitionminimizemobile").hide();
          }
      });
  });

$("#commercialbtn").click(function (e) {
    anime({
        targets:'#residence,#wills,#competition',
        translateX:1000,
        easing:'easeInOutSine',
        opacity:0,
        duration:1000,
        complete:function(){
          $("#residence").hide();
          $("#wills").hide();
          $("#competition").hide();
          $('#mincommercial').hide();
          $('#morecommercial').show();
          $("#commercialbtn").hide();
          $("#commercialminimize").show();
        }
    });
});
$("#commercialbtnmobile").click(function (e) {
    anime({
        targets:'#residencemobile,#willsmobile,#competitionmobile',
        translateX:1000,
        easing:'easeInOutSine',
        opacity:0,
        duration:1000,
        complete:function(){
          $("#residencemobile").hide();
          $("#willsmobile").hide();
          $("#competitionmobile").hide();
          $('#mincommercialmobile').hide();
          $('#morecommercialmobile').show();
          $("#commercialbtnmobile").hide();
          $("#commercialminimizemobile").show();
        }
    });
});
$("#commercialminimize").click(function (e) {
  anime({
        targets:'#residence,#wills,#competition',
        translateX:[1000,0],
        easing:'easeInOutSine',
        opacity:1,
        duration:1000,
        begin:function(){

          $("#residence").show();
          $("#competition").show();
          $('#mincommercial').show();
          $('#morecommercial').hide();
          $("#wills").show();
          $("#commercialbtn").show();
          $("#commercialminimize").hide();
        }
    });
});
$("#commercialminimizemobile").click(function (e) {
    anime({
          targets:'#residencemobile,#willsmobile,#competitionmobile',
          translateX:[1000,0],
          easing:'easeInOutSine',
          opacity:1,
          duration:1000,
          begin:function(){

            $("#residencemobile").show();
            $("#competitionmobile").show();
            $('#mincommercialmobile').show();
            $('#morecommercialmobile').hide();
            $("#willsmobile").show();
            $("#commercialbtnmobile").show();
            $("#commercialminimizemobile").hide();
          }
      });
  });


