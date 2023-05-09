@extends('index')
@section('content')
<main data-barba="wrapper">
 <section data-barba="container">

     <div>
        <div style="background-color:#0B06F9;">
            @include('mobile/pages/homeSections/top')
        </div>

        <div style="background-color:white">
            @include('mobile/pages/homeSections.section1')
        </div>

        <div style="background-color: #f0f0f0">
            @include('mobile/pages/homeSections.section2')
        </div>

        <div style="background-color:black ">
            @include('mobile/pages/homeSections.section3')
        </div>

        <div style="background-color:#f0f0f0">
            @include('mobile/pages/homeSections.section4')
        </div>

        <div  style="background-color:black ">
            @include('mobile/pages/homeSections.footer')
        </div>
    </div>


 </section>
</main>



@endsection
