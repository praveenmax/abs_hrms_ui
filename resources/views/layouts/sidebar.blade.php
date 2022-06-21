<!-- ========== App Menu ========== -->
<?php

        $logoSrc = 'assets/images/vasa.jpg';
    //dd($logoSrc);
?>
<div class="app-menu navbar-menu">
    <!-- LOGO -->
    <div class="navbar-brand-box">
        <!-- Dark Logo-->
        <a href="index" class="logo logo-dark">
            <span class="logo-sm">
                <img src="{{ URL::asset($logoSrc) }}" alt="" height="22">
            </span>
            <span class="logo-lg">
                <img src="{{ URL::asset($logoSrc) }}" alt="" height="80">
            </span>
        </a>
        <!-- Light Logo-->
        <a href="index" class="logo logo-light">
            <span class="logo-sm">
                <img src="{{ URL::asset($logoSrc) }}" alt="" height="22">
            </span>
            <span class="logo-lg">
                <img src="{{ URL::asset($logoSrc) }}" alt="" height="80">
            </span>
        </a>
        <button type="button" class="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover"
            id="vertical-hover">
            <i class="ri-record-circle-line"></i>
        </button>
    </div>

    <div id="scrollbar">
        <div class="container-fluid">

            <div id="two-column-menu">
            </div>
            <ul class="navbar-nav" id="navbar-nav">
                <li class="menu-title"><span>@lang('translation.menu')</span></li>
                <li class="nav-item">
                    <a class="nav-link menu-link d-flex" href="{{url('index')}}">


                        <div class="d-flex flex-column align-items-center justify-content-center">
                            <i class="ri-dashboard-2-line"></i> <span data-key="t-landing">Dashboard</span>
                        </div>
                        <div class="left-line">
                            <hr class="">
                        </div>





                    </a>
                </li>





            








            </ul>
        </div>
        <!-- Sidebar -->

    </div>


</div>

<!-- Left Sidebar End -->
<!-- Vertical Overlay-->
<div class="vertical-overlay"></div>




@section('script')
<!-- apexcharts -->
<script>

</script>
@endsection