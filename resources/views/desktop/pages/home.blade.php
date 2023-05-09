

@extends('index')
@section('content')
<main data-barba="wrapper">
 <section data-barba="container">
     <script>
         $(document).ready(function () {
             $("#menu").click(function (e) {
                 $("#beforemenu").hide();
                 $("#aftermenu").show();



             });
             $("#close").click(function (e) {
                 $("#aftermenu").hide();
                 $("#beforemenu").show();



             });
             $(".tab").click(function (e) {
                 $("#aftermenu").hide();
                 $("#beforemenu").show();



             });

         });
     </script>
    <div class="d-md-none">
        <div id="aftermenu" style="background-color:black;color:white;height:100vh;width:100;display:none">
            <div class="container py-5">
                <div class="d-flex flex-row justify-content-between">
                    <div>
                        <h1 class="display-2" style="font-weight: 700">Menu</h1>
                    </div>
                    <div id="close" class="mt-1">
                      <img class="img-fluid" src="/icons/arrow.png" alt="">
                    </div>

                </div>
                <br><br>
                <div class="row">
                    <div class="col-12 text center">
                        <a class="tab" class="text-white text-decoration-none" style="color:white;text-decoration:none; font-weight:bolder;font-size:16px; padding-bottom:10px"  href="#content3mobile">THE TEAM</a><br>
                        <a class="tab" class="text-white text-decoration-none" style="color:white;text-decoration:none; font-weight:bolder;font-size:16px; padding-bottom:10px"  href="#content2mobile">WHY US</a><br>

                        <a class="tab" class="text-white text-decoration-none" style="color:white;text-decoration:none; font-weight:bolder;font-size:16px; padding-bottom:10px" href="#topbottom">ABOUT US</a><br>
                        <a class="tab" class="text-white text-decoration-none" style="color:white;text-decoration:none; font-weight:bolder;font-size:16px; padding-bottom:10px" href="#footermobile">CONTACT</a><br>
                        <a class="tab" class="text-white text-decoration-none" href="#services" style="color:white;text-decoration:none; font-weight:bolder;font-size:16px; padding-bottom:10px" >VIEW ALL SERVICES</a>

                    </div>
                </div>
            </div>

        </div>
        <div id="beforemenu">
            <div id="topmobile" style="background-color:#0B06F9;">
                @include('mobile/pages/homeSections/top')
            </div>

            <div  id="content1mobile" style="background-color:white">
                @include('mobile/pages/homeSections.section1')
            </div>

            <div id="content2mobile" style="background-color: #f0f0f0">
                @include('mobile/pages/homeSections.section2')
            </div>

            <div id="content3mobile" style="background-color:black ">
                @include('mobile/pages/homeSections.section3')
            </div>

            <div id="content4mobile" style="background-color:#f0f0f0">
                @include('mobile/pages/homeSections.section4')
            </div>

            <div id="footermobile"  style="background-color:black ">
                @include('mobile/pages/homeSections.footer')
            </div>
        </div>
    </div>

    <div class="d-none d-sm-block">
        <div id="loader">
                @include('desktop/includes/loader')
        </div>
        <div style="display: none;" id="main" >
            <div id="top"  style="background-image:url('/images/court.jpg');background-size:cover;">
            <div style="background-color:rgba(0, 0, 0, 0.283)">
            @include('desktop/pages/homeSections/top')
            </div>
            </div>
            <div id="content1" style="background-color:white">
                @include('desktop/pages/homeSections.section1')
            </div>
            <div id="content2" style="background-color: #e2e2e2">
                @include('desktop/pages/homeSections.section2')
            </div>

            <div id="content3" style="background-color:black ">
                @include('desktop/pages/homeSections.section3')
            </div>
            <div id="content4" style="background-color:#e2e2e2">
                @include('desktop/pages/homeSections.section4')
            </div>
            <div id="footer" style="background-color:black ">
                @include('desktop/pages/homeSections.footer')
            </div>
        </div>
    </div>






 </section>
</main>



@endsection
