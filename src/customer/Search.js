import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Search extends React.Component {
    render() {
        return (
            <div>
                {/* <!-- Main Wrapper --> */}
                <div class="main-wrapper">

                    {/* 	<!-- Header --> */}
                    <header class="header">
                        <div class="top-header">
                            <div class="container-fluid">
                                <div class="row justify-content-between align-items-center">
                                    <div class="col-12 col-md-6">
                                        <div class="left">
                                            <ul>
                                                <li><span><i class="fas fa-phone-alt"></i> Contact Number : +91 1234567890</span></li>
                                                <li><span><i class="fas fa-map-marker-alt"></i> Pune India</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <div class="right">
                                            <ul>
                                                <li><span><i class="fas fa-calendar-check"></i> Mon - Fri : 09.00 AM to 05.00 PM</span></li>
                                                {/*  <li class="dropdown language-select">
                                                    <span class="dropdown-toggle" id="language-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-globe-africa"></i> English</span>
                                                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="language-dropdown">
                                                        <a class="dropdown-item" href="#">Spanish</a>
                                                        <a class="dropdown-item" href="#">Portuguese </a>
                                                        <a class="dropdown-item" href="#">Russian</a>
                                                    </div>
                                                </li> */}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <nav class="navbar navbar-expand-lg header-nav">
                            <div class="navbar-header">
                                <Link id="mobile_btn" to="javascript:void(0);">
                                    <span class="bar-icon">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </span>
                                </Link>
                                <Link to="/" class="navbar-brand boda">
                                    <img src="assets/img/boda.png" class="img-fluid" alt="Logo" />
                                </Link>
                            </div>
                            <div class="main-menu-wrapper">
                                <div class="menu-header">
                                    <Link to="/" class="menu-logo">
                                        <img src="assets/img/boda.png" class="img-fluid" alt="Logo" />
                                    </Link>
                                    <Link id="menu_close" class="menu-close" to="javascript:void(0);">
                                        <i class="fas fa-times"></i>
                                    </Link>
                                </div>
                                <ul class="main-nav">
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li class="has-submenu">
                                        {/* <Link to="#">Doctors <i class="fas fa-chevron-down"></i></Link> */}
                                        <ul class="submenu">
                                            <li class="active"><Link to="/Doctordashboard">Doctor Dashboard</Link></li>
                                            <li><Link to="/Appointments">Appointments</Link></li>
                                            <li><Link to="/ScheduleTiming">Schedule Timing</Link></li>
                                            <li><Link to="/Mypatients">Patients List</Link></li>
                                            <li><Link to="/Patientsprofile">Patients Profile</Link></li>
                                            <li><Link to="/Chatdoctor">Chat</Link></li>
                                            <li><Link to="/Invoices">Invoices</Link></li>
                                            <li><Link to="/Doctorprofilesetting">Profile Settings</Link></li>
                                            <li><Link to="/Reviews">Reviews</Link></li>
                                            <li><Link to="/Doctorregister">Doctor Register</Link></li>
                                        </ul>
                                    </li>
                                    <li class="has-submenu active">
                                        <Link to="#">Patients <i class="fas fa-chevron-down"></i></Link>
                                        <ul class="submenu">
                                           {/*  <li class="has-submenu">
                                                <Link to="#">Doctors</Link>
                                                <ul class="submenu">
                                                    <li><Link to="/Mapgrid">Map Grid</Link></li>
                                                    <li><Link to="/Maplist">Map List</Link></li>
                                                </ul>
                                            </li> */}
                                            <li class="active"><Link to="/Search">Search Doctor</Link></li>
                                            <li><Link to="/Doctorprofile">Doctor Profile</Link></li>
                                            <li><Link to="/Booking">Booking</Link></li>
                                            <li><Link to="/Checkout">Checkout</Link></li>
                                            <li><Link to="/Bookingsuccess">Booking Success</Link></li>
                                            <li><Link to="/Patientdashboard">Patient Dashboard</Link></li>
                                            <li><Link to="/Favourites">Favourites</Link></li>
                                            <li><Link to="/Chat">Chat</Link></li>
                                            <li><Link to="/Profilesettings">Profile Settings</Link></li>
                                            <li><Link to="/Changepassword">Change Password</Link></li>
                                        </ul>
                                    </li>
                                    <li class="has-submenu">
                                       {/*  <Link to="#">Pages <i class="fas fa-chevron-down"></i></Link> */}
                                        <ul class="submenu">
                                            <li><Link to="/Voicecall">Voice Call</Link></li>
                                            <li><Link to="/Videocall">Video Call</Link></li>
                                            <li><Link to="/Search">Search Doctors</Link></li>
                                            <li><Link to="/Calendar">Calendar</Link></li>
                                           
                                            <li class="has-submenu">
                                                <Link to="/Invoices">Invoices</Link>
                                                <ul class="submenu">
                                                    <li><Link to="/Invoices">Invoices</Link></li>
                                                    <li><Link to="/Invoiceview">Invoice View</Link></li>
                                                </ul>
                                            </li>
                                            {/* <li><Link to="/Blankpage">Starter Page</Link></li> */}
                                            <li><Link to="/Login">Login</Link></li>
                                            <li><Link to="/Register">Register</Link></li>
                                            <li><Link to="/Forgotpassword">Forgot Password</Link></li>
                                        </ul>
                                    </li>
                                  { /*  <li class="has-submenu">
                                        <Link to="#">Blog <i class="fas fa-chevron-down"></i></Link>
                                        <ul class="submenu">
                                            <li><Link to="/Bloglist">Blog List</Link></li>
                                            <li><Link to="/Bloggrid">Blog Grid</Link></li>
                                            <li><Link to="/Blogdetails">Blog Details</Link></li>
                                        </ul>
                                            </li> */}
                                    {/* <li>
                                        <Link to="admin/Home1" target="_blank">Admin</Link>
                                    </li> */}
                                </ul>
                            </div>
                            <ul class="nav header-navbar-rht">
                                {/* <!-- User Menu --> */}
                                <li class="nav-item dropdown has-arrow logged-item">
                                    <Link to="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
                                        <span class="user-img">
                                            <img class="rounded-circle" src="assets/img/doctors/doctor-thumb-02.jpg" width="31" alt="Gennaro Weiner" />
                                        </span>
                                    </Link>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <div class="user-header">
                                            <div class="avatar avatar-sm">
                                                <img src="assets/img/doctors/doctor-thumb-02.jpg" alt="User Image" class="avatar-img rounded-circle" />
                                            </div>
                                            <div class="user-text">
                                                <h6>Ganesh</h6>
                                                <p class="text-muted mb-0">Patient</p>
                                            </div>
                                        </div>
                                        <Link class="dropdown-item" to="/Patientdashboard">Dashboard</Link>
                                        <Link class="dropdown-item" to="/Profilesettings">Profile Settings</Link>
                                        <Link class="dropdown-item" to="/Login">Logout</Link>
                                    </div>
                                </li>
                                {/* <!-- /User Menu --> */}
                            </ul>
                        </nav>
                    </header>
                    {/* <!-- /Header -->
			
			<!-- Breadcrumb --> */}
                    <div class="asd breadcrumb-bar">
                        <div class="container-fluid">
                            <div class="row align-items-center">
                                <div class="col-md-8 col-12">
                                    <nav aria-label="breadcrumb" class="page-breadcrumb">
                                        <ol class="breadcrumb">
                                            <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                                            <li class="breadcrumb-item active" aria-current="page">Search</li>
                                        </ol>
                                    </nav>
                                    <h2 class="breadcrumb-title">2245 matches found for : Dentist In Pune</h2>
                                </div>
                                <div class="col-md-4 col-12 d-md-block d-none">
                                    <div class="sort-by">
                                        <span class="sort-title">Sort by</span>
                                        <span class="sortby-fliter">
                                            <select class="select">
                                                <option>Select</option>
                                                <option class="sorting">Rating</option>
                                                <option class="sorting">Popular</option>
                                                <option class="sorting">Latest</option>
                                                <option class="sorting">Free</option>
                                            </select>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /Breadcrumb -->
			
			<!-- Page Content --> */}
                    <div class="content">
                        <div class="container-fluid">

                            <div class="row">
                                <div class="col-md-12 col-lg-4 col-xl-3 theiaStickySidebar">

                                    {/* <!-- Search Filter --> */}
                                    <div class="card search-filter">
                                        <div class="card-header">
                                            <h4 class="card-title mb-0">Search Filter</h4>
                                        </div>
                                        <div class="card-body">
                                            <div class="filter-widget">
                                                {/* <div class="cal-icon">
                                                    <input type="date" class="form-control datetimepicker" placeholder="Select Date" />
                                                </div> */}
                                            </div>
                                            <div class="filter-widget">
                                                <h4>Gender</h4>
                                                <div>
                                                    <label class="custom_check">
                                                        <input type="checkbox" name="gender_type" checked />
                                                        <span class="checkmark"></span> Male Doctor
										</label>
                                                </div>
                                                <div>
                                                    <label class="custom_check">
                                                        <input type="checkbox" name="gender_type" />
                                                        <span class="checkmark"></span> Female Doctor
										</label>
                                                </div>
                                            </div>
                                            <div class="filter-widget">
                                                <h4>Select Specialist</h4>
                                                <div>
                                                    <label class="custom_check">
                                                        <input type="checkbox" name="select_specialist" checked />
                                                        <span class="checkmark"></span> Urology
										</label>
                                                </div>
                                                <div>
                                                    <label class="custom_check">
                                                        <input type="checkbox" name="select_specialist" checked />
                                                        <span class="checkmark"></span> Neurology
										</label>
                                                </div>
                                                <div>
                                                    <label class="custom_check">
                                                        <input type="checkbox" name="select_specialist" />
                                                        <span class="checkmark"></span> Dentist
										</label>
                                                </div>
                                                <div>
                                                    <label class="custom_check">
                                                        <input type="checkbox" name="select_specialist" />
                                                        <span class="checkmark"></span> Orthopedic
										</label>
                                                </div>
                                                <div>
                                                    <label class="custom_check">
                                                        <input type="checkbox" name="select_specialist" />
                                                        <span class="checkmark"></span> Cardiologist
										</label>
                                                </div>
                                                <div>
                                                    <label class="custom_check">
                                                        <input type="checkbox" name="select_specialist" />
                                                        <span class="checkmark"></span> Cardiologist
										</label>
                                                </div>
                                            </div>
                                            <div class="btn-search">
                                                <button type="button" class="btn btn-block">Search</button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- /Search Filter --> */}

                                </div>

                                <div class="col-md-12 col-lg-8 col-xl-9">

                                    {/* <!-- Doctor Widget --> */}
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="doctor-widget">
                                                <div class="doc-info-left">
                                                    <div class="doctor-img">
                                                        <Link to="/Doctorprofile">
                                                            <img src="assets/img/doctors/doctor-thumb-01.jpg" class="img-fluid" alt="User Image" />
                                                        </Link>
                                                    </div>
                                                    <div class="doc-info-cont">
                                                        <h4 class="doc-name"><Link to="/Doctorprofile">Dr. Rohini</Link></h4>
                                                        <p class="doc-speciality">BDS - Dental Surgeon</p>
                                                        <h5 class="doc-department"><img src="assets/img/specialities/specialities-05.png" class="img-fluid" alt="Speciality" />Dentist</h5>
                                                        <div class="rating">
                                                            <i class="fas fa-star filled"></i>
                                                            <i class="fas fa-star filled"></i>
                                                            <i class="fas fa-star filled"></i>
                                                            <i class="fas fa-star filled"></i>
                                                            <i class="fas fa-star"></i>
                                                            <span class="d-inline-block average-rating">(17)</span>
                                                        </div>
                                                        <div class="clinic-details">
                                                            <p class="doc-location"><i class="fas fa-map-marker-alt"></i> Mumbai ,India</p>
                                                            <ul class="clinic-gallery">
                                                                <li>
                                                                    <Link to="assets/img/features/feature-01.jpg" data-fancybox="gallery">
                                                                        <img src="assets/img/features/feature-01.jpg" alt="Feature" />
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link to="assets/img/features/feature-02.jpg" data-fancybox="gallery">
                                                                        <img src="assets/img/features/feature-02.jpg" alt="Feature" />
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link to="assets/img/features/feature-03.jpg" data-fancybox="gallery">
                                                                        <img src="assets/img/features/feature-03.jpg" alt="Feature" />
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link to="assets/img/features/feature-04.jpg" data-fancybox="gallery">
                                                                        <img src="assets/img/features/feature-04.jpg" alt="Feature" />
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div class="clinic-services">
                                                            <span>Dental Fillings</span>
                                                            <span> Whitneing</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="doc-info-right">
                                                    <div class="clini-infos">
                                                        <ul>
                                                            <li><i class="far fa-thumbs-up"></i> 98%</li>
                                                            <li><i class="far fa-comment"></i> 17 Feedback</li>
                                                            <li><i class="fas fa-map-marker-alt"></i> Mumbai ,India</li>
                                                            <li><i class="far fa-money-bill-alt"></i> 300 - 1000 <i class="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i> </li>
                                                        </ul>
                                                    </div>
                                                    <div class="clinic-booking">
                                                        <Link class="view-pro-btn" to="/Doctorprofile">View Profile</Link>
                                                        <Link class="apt-btn" to="/Booking">Book Appointment</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* !-- /Doctor Widget -->

							<!-- Doctor Widget --> */}
                                    {/*  <div class="card">
                                        <div class="card-body">
                                            <div class="doctor-widget">
                                                <div class="doc-info-left">
                                                    <div class="doctor-img">
                                                        <a href="doctor-profile.html">
                                                            <img src="assets/img/doctors/doctor-thumb-02.jpg" class="img-fluid" alt="User Image" />
                                                        </a>
                                                    </div>
                                                    <div class="doc-info-cont">
                                                        <h4 class="doc-name"><a href="doctor-profile.html">Dr. Loren Bivens</a></h4>
                                                        <p class="doc-speciality">BDS - Dentist</p>
                                                        <h5 class="doc-department"><img src="assets/img/specialities/specialities-05.png" class="img-fluid" alt="Speciality" />Dentist</h5>
                                                        <div class="rating">
                                                            <i class="fas fa-star filled"></i>
                                                            <i class="fas fa-star filled"></i>
                                                            <i class="fas fa-star filled"></i>
                                                            <i class="fas fa-star filled"></i>
                                                            <i class="fas fa-star"></i>
                                                            <span class="d-inline-block average-rating">(35)</span>
                                                        </div>
                                                        <div class="clinic-details">
                                                            <p class="doc-location"><i class="fas fa-map-marker-alt"></i> Newyork, USA</p>
                                                            <ul class="clinic-gallery">
                                                                <li>
                                                                    <a href="assets/img/features/feature-01.jpg" data-fancybox="gallery">
                                                                        <img src="assets/img/features/feature-01.jpg" alt="Feature" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="assets/img/features/feature-02.jpg" data-fancybox="gallery">
                                                                        <img src="assets/img/features/feature-02.jpg" alt="Feature" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="assets/img/features/feature-03.jpg" data-fancybox="gallery">
                                                                        <img src="assets/img/features/feature-03.jpg" alt="Feature" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="assets/img/features/feature-04.jpg" data-fancybox="gallery">
                                                                        <img src="assets/img/features/feature-04.jpg" alt="Feature" />
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div class="clinic-services">
                                                            <span>Dental Fillings</span>
                                                            <span> Whitneing</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="doc-info-right">
                                                    <div class="clini-infos">
                                                        <ul>
                                                            <li><i class="far fa-thumbs-up"></i> 100%</li>
                                                            <li><i class="far fa-comment"></i> 35 Feedback</li>
                                                            <li><i class="fas fa-map-marker-alt"></i> Newyork, USA</li>
                                                            <li><i class="far fa-money-bill-alt"></i> $50 - $300 <i class="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i></li>
                                                        </ul>
                                                    </div>
                                                    <div class="clinic-booking">
                                                        <a class="view-pro-btn" href="doctor-profile.html">View Profile</a>
                                                        <a class="apt-btn" href="booking.html">Book Appointment</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                    {/* <!-- /Doctor Widget -->

							<!-- Doctor Widget --> */}
                                    {/*   <div class="card">
                                        <div class="card-body">
                                            <div class="doctor-widget">
                                                <div class="doc-info-left">
                                                    <div class="doctor-img">
                                                        <a href="doctor-profile.html">
                                                            <img src="assets/img/doctors/doctor-thumb-03.jpg" class="img-fluid" alt="User Image" />
                                                        </a>
                                                    </div>
                                                    <div class="doc-info-cont">
                                                        <h4 class="doc-name"><a href="doctor-profile.html">Dr. Jerelyn Pino</a></h4>
                                                        <p class="doc-speciality">BDS - Dental Surgeon</p>
                                                        <p class="doc-department"><img src="assets/img/specialities/specialities-04.png" class="img-fluid" alt="Speciality" />Cardiology</p>
                                                        <div class="rating">
                                                            <i class="fas fa-star filled"></i>
                                                            <i class="fas fa-star filled"></i>
                                                            <i class="fas fa-star filled"></i>
                                                            <i class="fas fa-star filled"></i>
                                                            <i class="fas fa-star"></i>
                                                            <span class="d-inline-block average-rating">(27)</span>
                                                        </div>
                                                        <div class="clinic-details">
                                                            <p class="doc-location"><i class="fas fa-map-marker-alt"></i> Georgia, USA</p>
                                                            <ul class="clinic-gallery">
                                                                <li>
                                                                    <a href="assets/img/features/feature-01.jpg" data-fancybox="gallery">
                                                                        <img src="assets/img/features/feature-01.jpg" alt="Feature" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="assets/img/features/feature-02.jpg" data-fancybox="gallery">
                                                                        <img src="assets/img/features/feature-02.jpg" alt="Feature" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="assets/img/features/feature-03.jpg" data-fancybox="gallery">
                                                                        <img src="assets/img/features/feature-03.jpg" alt="Feature" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="assets/img/features/feature-04.jpg" data-fancybox="gallery">
                                                                        <img src="assets/img/features/feature-04.jpg" alt="Feature" />
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div class="clinic-services">
                                                            <span>Dental Fillings</span>
                                                            <span> Whitneing</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="doc-info-right">
                                                    <div class="clini-infos">
                                                        <ul>
                                                            <li><i class="far fa-thumbs-up"></i> 99%</li>
                                                            <li><i class="far fa-comment"></i> 35 Feedback</li>
                                                            <li><i class="fas fa-map-marker-alt"></i> Newyork, USA</li>
                                                            <li><i class="far fa-money-bill-alt"></i> $100 - $400 <i class="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i></li>
                                                        </ul>
                                                    </div>
                                                    <div class="clinic-booking">
                                                        <a class="view-pro-btn" href="doctor-profile.html">View Profile</a>
                                                        <a class="apt-btn" href="booking.html">Book Appointment</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                    {/* <!-- /Doctor Widget -->

							<!-- Doctor Widget --> */}
                                    {/*   <div class="card">
                                        <div class="card-body">
                                            <div class="doctor-widget">
                                                <div class="doc-info-left">
                                                    <div class="doctor-img">
                                                        <a href="doctor-profile.html">
                                                            <img src="assets/img/doctors/doctor-thumb-04.jpg" class="img-fluid" alt="User Image" />
                                                        </a>
                                                    </div>
                                                    <div class="doc-info-cont">
                                                        <h4 class="doc-name"><a href="doctor-profile.html">Dr. Rieko Thrash</a></h4>
                                                        <p class="doc-speciality">BDS - Dentist</p>
                                                        <p class="doc-department"><img src="assets/img/specialities/specialities-01.png" class="img-fluid" alt="Speciality" />Urology</p>
                                                        <div class="rating">
                                                            <i class="fas fa-star filled"></i>
                                                            <i class="fas fa-star filled"></i>
                                                            <i class="fas fa-star filled"></i>
                                                            <i class="fas fa-star filled"></i>
                                                            <i class="fas fa-star"></i>
                                                            <span class="d-inline-block average-rating">(4)</span>
                                                        </div>
                                                        <div class="clinic-details">
                                                            <p class="doc-location"><i class="fas fa-map-marker-alt"></i> Louisiana, USA</p>
                                                            <ul class="clinic-gallery">
                                                                <li>
                                                                    <a href="assets/img/features/feature-01.jpg" data-fancybox="gallery">
                                                                        <img src="assets/img/features/feature-01.jpg" alt="Feature" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="assets/img/features/feature-02.jpg" data-fancybox="gallery">
                                                                        <img src="assets/img/features/feature-02.jpg" alt="Feature" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="assets/img/features/feature-03.jpg" data-fancybox="gallery">
                                                                        <img src="assets/img/features/feature-03.jpg" alt="Feature" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="assets/img/features/feature-04.jpg" data-fancybox="gallery">
                                                                        <img src="assets/img/features/feature-04.jpg" alt="Feature" />
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div class="clinic-services">
                                                            <span>Dental Fillings</span>
                                                            <span> Whitneing</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="doc-info-right">
                                                    <div class="clini-infos">
                                                        <ul>
                                                            <li><i class="far fa-thumbs-up"></i> 97%</li>
                                                            <li><i class="far fa-comment"></i> 4 Feedback</li>
                                                            <li><i class="fas fa-map-marker-alt"></i> Newyork, USA</li>
                                                            <li><i class="far fa-money-bill-alt"></i> $150 - $250 <i class="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i></li>
                                                        </ul>
                                                    </div>
                                                    <div class="clinic-booking">
                                                        <a class="view-pro-btn" href="doctor-profile.html">View Profile</a>
                                                        <a class="apt-btn" href="booking.html">Book Appointment</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                    {/* <!-- /Doctor Widget -->

							<!-- Doctor Widget --> */}
                                    {/* <div class="card">
                                        <div class="card-body">
                                            <div class="doctor-widget">
                                                <div class="doc-info-left">
                                                    <div class="doctor-img">
                                                        <a href="doctor-profile.html">
                                                            <img src="assets/img/doctors/doctor-thumb-06.jpg" class="img-fluid" alt="User Image" />
                                                        </a>
                                                    </div>
                                                    <div class="doc-info-cont">
                                                        <h4 class="doc-name"><a href="doctor-profile.html">Dr. Ultima Douglas</a></h4>
                                                        <p class="doc-speciality">BDS - Dental Surgeon</p>
                                                        <p class="doc-department"><img src="assets/img/specialities/specialities-03.png" class="img-fluid" alt="Speciality" />Orthopaedics</p>
                                                        <div class="rating">
                                                            <i class="fas fa-star filled"></i>
                                                            <i class="fas fa-star filled"></i>
                                                            <i class="fas fa-star filled"></i>
                                                            <i class="fas fa-star filled"></i>
                                                            <i class="fas fa-star"></i>
                                                            <span class="d-inline-block average-rating">(52)</span>
                                                        </div>
                                                        <div class="clinic-details">
                                                            <p class="doc-location"><i class="fas fa-map-marker-alt"></i> Texas, USA</p>
                                                            <ul class="clinic-gallery">
                                                                <li>
                                                                    <a href="assets/img/features/feature-01.jpg" data-fancybox="gallery">
                                                                        <img src="assets/img/features/feature-01.jpg" alt="Feature" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="assets/img/features/feature-02.jpg" data-fancybox="gallery">
                                                                        <img src="assets/img/features/feature-02.jpg" alt="Feature" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="assets/img/features/feature-03.jpg" data-fancybox="gallery">
                                                                        <img src="assets/img/features/feature-03.jpg" alt="Feature" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="assets/img/features/feature-04.jpg" data-fancybox="gallery">
                                                                        <img src="assets/img/features/feature-04.jpg" alt="Feature" />
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div class="clinic-services">
                                                            <span>Dental Fillings</span>
                                                            <span> Whitneing</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="doc-info-right">
                                                    <div class="clini-infos">
                                                        <ul>
                                                            <li><i class="far fa-thumbs-up"></i> 100%</li>
                                                            <li><i class="far fa-comment"></i> 52 Feedback</li>
                                                            <li><i class="fas fa-map-marker-alt"></i> Texas, USA</li>
                                                            <li><i class="far fa-money-bill-alt"></i> $100 - $500 <i class="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i></li>
                                                        </ul>
                                                    </div>
                                                    <div class="clinic-booking">
                                                        <a class="view-pro-btn" href="doctor-profile.html">View Profile</a>
                                                        <a class="apt-btn" href="booking.html">Book Appointment</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                    {/* <!-- /Doctor Widget --> */}

                                    <div class="load-more text-center">
                                        <a class="btn btn-primary btn-sm" href="javascript:void(0);">Load More</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                        

                    </div>
                    {/* <!-- /Page Content -->
   
			<!-- Footer --> */}
                    <footer class="footer">

                        {/* <!-- Footer Top --> */}
                        <div class="footer-top">
                            <div class="container">
                                <div class="row justify-content-center">
                                    <div class="col-12 text-center">
                                        <Link to="/" class="footer-logo boda">
                                            <img src="assets/img/boda.png" class="img-fluid" alt="Logo" />
                                        </Link>
                                    </div>
                                    <div class="social-icon media-btn mt-3 mb-2">
                                        <ul>
                                            <li>
                                                <Link to="#" target="_blank"><i class="fab fa-facebook-f"></i> </Link>
                                            </li>
                                            <li>
                                                <Link to="#" target="_blank"><i class="fab fa-google-plus-g"></i></Link>
                                            </li>
                                            <li>
                                                <Link to="#" target="_blank"><i class="fab fa-instagram"></i></Link>
                                            </li>
                                            <li>
                                                <Link to="#" target="_blank"><i class="fab fa-twitter"></i> </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-12 justify-content-center d-flex mt-4 mb-2">
                                        <div class="search-holder">
                                            <input type="text" name="search" placeholder="Your Email" />
                                            <button class=" btn-yellow">Subscribe</button>
                                        </div>
                                    </div>
                                    <div class="col-12 mt-4 text-center">
                                        <ul class="policy-menu text-center">
                                            <li><Link to="#">About Us</Link></li>
                                            <li><Link to="/Doctordashboard">Doctors</Link></li>
                                            <li><Link to="/Bloglist">Blogs</Link></li>
                                            <li><Link to="#">Our Clinic</Link></li>
                                            <li><Link to="#">FAQ</Link></li>
                                            <li><Link to="#">Contact Us</Link></li>
                                            <li><Link to="/Termcondition">Terms and Conditions</Link></li>
                                            <li><Link to="/Privacpolicy">Policy</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- /Footer Top -->
				
				<!-- Footer Bottom --> */}
                        <div class="footer-bottom">
                            <div class="container-fluid">

                                {/* <!-- Copyright --> */}
                                <div class="copyright">
                                    <div class="row">
                                        <div class="col-md-12 col-lg-12 text-center">
                                            <div class="copyright-text">
                                                <p class="mb-0">&copy; 2021 <Link to="#" class="text-yellow"> Boda</Link> All Rights Reserved.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- /Copyright --> */}

                            </div>
                        </div>
                        {/* <!-- /Footer Bottom -->
				 */}
                    </footer>
                    {/* <!-- /Footer --> */}

                </div>
                {/* <!-- /Main Wrapper --> */}

                {/* <!-- jQuery --> */}
                <script src="assets/js/jquery.min.js"></script>

                {/* 	<!-- Bootstrap Core JS --> */}
                <script src="assets/js/popper.min.js"></script>
                <script src="assets/js/bootstrap.min.js"></script>

                {/* <!-- Sticky Sidebar JS --> */}
                <script src="assets/plugins/theia-sticky-sidebar/ResizeSensor.js"></script>
                <script src="assets/plugins/theia-sticky-sidebar/theia-sticky-sidebar.js"></script>

                {/* <!-- Select2 JS --> */}
                <script src="assets/plugins/select2/js/select2.min.js"></script>

                {/* <!-- Datetimepicker JS --> */}
                <script src="assets/js/moment.min.js"></script>
                <script src="assets/js/bootstrap-datetimepicker.min.js"></script>

                {/* <!-- Fancybox JS --> */}
                <script src="assets/plugins/fancybox/jquery.fancybox.min.js"></script>

                {/* <!-- Custom JS --> */}
                <script src="assets/js/script.js"></script>

            </div>
        )
    }
}
export default Search;
