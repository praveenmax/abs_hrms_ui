<header id="pageTopbar">
    <div class="layout-width">
        <div class="navbar-header">
            <div class="d-flex container-fluid">
                <!-- LOGO -->
                <div class="navbar-brand-box horizontal-logo">
                    <a href="index" class="logo logo-dark">
                        <span class="logo-sm">
                            <img src="{{ URL::asset('assets/images/logo-sm.png') }}" alt="" height="22">
                        </span>
                        <span class="logo-lg">
                            <img src="{{ URL::asset('assets/images/logo-dark.png') }}" alt="" height="17">
                        </span>
                    </a>

                    <a href="index" class="logo logo-light">
                        <span class="logo-sm">
                            <img src="{{ URL::asset('assets/images/logo-sm.png') }}" alt="" height="22">
                        </span>
                        <span class="logo-lg">
                            <img src="{{ URL::asset('assets/images/logo-light.png') }}" alt="" height="17">
                        </span>
                    </a>
                </div>


                <!-- disable setting icon for employee -->
                @hasrole("Employee")

                @else

                <div class="d-flex justify-content-between align-items-center w-100">

                    <div class="search-content w-100 d-flex  ">
                        <i class=" ri-search-line "></i>
                        <input type="text" class="search-bar border-none rounded-pill outline-none"
                            placeholder="Search">
                    </div>

                    <div class="notify-content d-flex">
                        <button class="settings-icon border-0 bg-transparent">

                            <a href="vmt_topbar_settings">
                                <i class="ri-settings-3-line ">
                                </i>
                            </a>
                        </button>
                        <button class="settings-icon border-0 bg-transparent">

                            <a href="vmt_topbar_settings">
                                <i class=" ri-notification-3-line">
                                </i>
                            </a>
                        </button>

                        <button class="settings-icon border-0 bg-transparent">

                            <a href="vmt_topbar_settings">
                                <i class="ri-volume-up-line">
                                </i>
                            </a>
                        </button>


                        <div class="dropdown ms-sm-3 header-item topbar-user">
                            <button type="button" class="btn" id="page-header-user-dropdown" data-bs-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                <span class="d-flex align-items-center">
                                    <img class="rounded-circle header-profile-user"
                                        src="URL::asset('assets/images/users/avatar-1.jpg') }}"
                                        alt="Header Avatar">
                                    <span class="text-start ms-xl-2">
                                        <span
                                            class="d-none d-xl-inline-block ms-1 fw-medium user-name-text">Username</span>
                                        <span class="d-none d-xl-block ms-1 fs-12 text-muted user-name-sub-text"></span>
                                    </span>
                                </span>
                            </button>
                            <div class="dropdown-menu dropdown-menu-end">
                                <!-- item-->
                                <h6 class="dropdown-header">Welcome </h6>
                                <a class="dropdown-item" href="pages-profile"><i
                                        class="mdi mdi-account-circle text-muted fs-16 align-middle me-1"></i> <span
                                        class="align-middle">Profile</span></a>

                                @hasrole("Employee")

                                @else
                                <a class="dropdown-item" href="vmt_topbar_settings"><span
                                        class="badge bg-soft-success text-success mt-1 float-end">New</span><i
                                        class="mdi mdi-cog-outline text-muted fs-16 align-middle me-1"></i> <span
                                        class="align-middle">Settings</span></a>
                                @endhasrole

                                <!-- <div class="colors-content">
                            <button class="selectColor" id="colorOne" value="red">one</button>
                            
                        </div> -->


                                <a class="dropdown-item " href="javascript:void();"
                                    onclick="event.preventDefault(); document.getElementById('logout-form').submit();"><i
                                        class="bx bx-power-off font-size-16 align-middle me-1"></i> <span
                                        key="t-logout">@lang('translation.logout')</span></a>
                                <form id="logout-form" action="#" method="POST"
                                    style="display: none;">
                                    @csrf
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                @endhasrole




            </div>

            <div class="d-flex align-items-center">


            </div>
        </div>
    </div>
</header>




@section('script')
<!-- apexcharts -->
<!-- <script src="{{ URL::asset('/assets/libs/apexcharts/apexcharts.min.js') }}"></script>
<script src="{{ URL::asset('/assets/libs/jsvectormap/jsvectormap.min.js') }}"></script>
<script src="{{ URL::asset('assets/libs/swiper/swiper.min.js')}}"></script> -->



@endsection