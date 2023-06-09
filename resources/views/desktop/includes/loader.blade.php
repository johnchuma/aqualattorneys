<div class="d-flex align-items-center justify-content-center fixed-center"
 style="width:100%;height:100vh;background-color:#e2e2e2">

 <h1 class="ml5">
    <span class="text-wrapper text-white">
      <span class="line line1"></span>
      <span class="letters letters-left" style="color:black">Aqual</span>

      <span class="letters letters-right" style="color:black" >Attorneys</span>
      <span class="line line2"></span>
    </span>
  </h1>

    </div>
<style>
    .ml5 {
  position: relative;
  font-weight: 300;
  font-size: 4.5em;
  color: black;
}

.ml5 .text-wrapper {
  position: relative;
  display: inline-block;
  padding-top: 0.1em;
  padding-right: 0.05em;
  padding-bottom: 0.15em;
  line-height: 1em;
}

.ml5 .line {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  height: 3px;
  width: 100%;
  background-color: black;
  transform-origin: 0.5 0;
}

.ml5 .ampersand {
  font-family: Baskerville, serif;
  font-style: italic;
  font-weight: 400;
  width: 1em;
  margin-right: -0.1em;
  margin-left: -0.1em;
}

.ml5 .letters {
  display: inline-block;
  opacity: 0;
}
</style>
<script>
    anime.timeline({})
  .add({
    targets: '.ml5 .line',
    opacity: [0.5,1],
    scaleX: [0, 1],
    easing: "easeInOutExpo",
    duration: 700
  }).add({
    targets: '.ml5 .line',
    duration: 600,
    easing: "easeOutExpo",
    translateY: (el, i) => (-0.625 + 0.625*2*i) + "em"
  }).add({
    targets: '.ml5 .ampersand',
    opacity: [0,1],
    scaleY: [0.5, 1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  }).add({
    targets: '.ml5 .letters-left',
    opacity: [0,1],
    translateX: ["0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=300'
  }).add({
    targets: '.ml5 .letters-right',
    opacity: [0,1],
    translateX: ["-0.5em", 0],
    easing: "easeOutExpo",
    duration: 1000,
    offset: '-=600',
    complete:function(){
        setTimeout(function(){
            $('#loader').hide();
        $('#main').show();
        },1000)

    }
  }).add({
      targets:'#loader',
      opacity:[1,0],
      easing: "easeOutExpo",
      duration: 20000,
      offset: '-=300',
  });
</script>
