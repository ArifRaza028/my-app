import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../customer/Header';
import Footer from '../customer/Footer';

class Favourites extends React.Component {
    render() {
        return (
            <div>
            <Header/>
                {/*  <!-- Main Wrapper --> */}
                <div class="main-wrapper">

                    
                    <div class="asd breadcrumb-bar">
                        <div class="container-fluid">
                            <div class="row align-items-center">
                                <div class="col-md-12 col-12">
                                    <nav aria-label="breadcrumb" class="page-breadcrumb">
                                        <ol class="breadcrumb">
                                            <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                                            <li class="breadcrumb-item active" aria-current="page">Favourites</li>
                                        </ol>
                                    </nav>
                                    <h2 class="breadcrumb-title">Favourites</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /Breadcrumb --> */}

                    {/* <!-- Page Content --> */}
                    <div class="content">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                                    <div class="profile-sidebar">
                                        <div class="widget-profile pro-widget-content">
                                            <div class="profile-info-widget">
                                                <Link to="#" class="booking-doc-img">
                                                    <img src="assets/img/patients/patient.jpg" alt="User Image" />
                                                </Link>
                                                <div class="profile-det-info">
                                                    <h3>Ganesh</h3>
                                                    <div class="patient-details">
                                                        <h5><i class="fas fa-birthday-cake"></i> 24 Jul 1983, 38 years</h5>
                                                        <h5 class="mb-0"><i class="fas fa-map-marker-alt"></i>Mumbai ,India</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="dashboard-widget">
                                            <nav class="dashboard-menu">
                                                <ul>
                                                    <li>
                                                        <Link to="/Patientdashboard">
                                                            <i class="fas fa-columns"></i>
                                                            <span>Dashboard</span>
                                                        </Link>
                                                    </li>
                                                    <li class="active">
                                                        <Link to="/Favourites">
                                                            <i class="fas fa-bookmark"></i>
                                                            <span>Favourites</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Chat">
                                                            <i class="fas fa-comments"></i>
                                                            <span>Message</span>
                                                            <small class="unread-msg">2</small>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Profilesettings">
                                                            <i class="fas fa-user-cog"></i>
                                                            <span>Profile Settings</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Changepassword">
                                                            <i class="fas fa-lock"></i>
                                                            <span>Change Password</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/">
                                                            <i class="fas fa-sign-out-alt"></i>
                                                            <span>Logout</span>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>

                                    </div>
                                </div>
                                <div class="col-md-7 col-lg-8 col-xl-9">
                                    <div class="row row-grid">
                                        <div class="col-md-6 col-lg-4 col-xl-3">
                                            <div class="profile-widget">
                                                <div class="doc-img">
                                                    <Link to="/Doctorprofile">
                                                        <img class="img-fluid" alt="User Image" src="assets/img/doctors/doctor-01.jpg" />
                                                    </Link>
                                                    <Link to="javascript:void(0)" class="fav-btn">
                                                        <i class="far fa-bookmark"></i>
                                                    </Link>
                                                </div>
                                                <div class="pro-content">
                                                    <h3 class="title">
                                                        <Link to="/Doctorprofile">Dr. Fahim </Link>
                                                        <i class="fas fa-check-circle verified"></i>
                                                    </h3>
                                                    <p class="speciality">BDS - Dental Surgeon</p>
                                                    <div class="rating">
                                                        <i class="fas fa-star filled"></i>
                                                        <i class="fas fa-star filled"></i>
                                                        <i class="fas fa-star filled"></i>
                                                        <i class="fas fa-star filled"></i>
                                                        <i class="fas fa-star filled"></i>
                                                        <span class="d-inline-block average-rating">(17)</span>
                                                    </div>
                                                    <ul class="available-info">
                                                        <li>
                                                            <i class="fas fa-map-marker-alt"></i>Pune,India
                                                        </li>
                                                        <li>
                                                            <i class="far fa-clock"></i> Available on Fri, 22 May
                                                        </li>
                                                        <li>
                                                            <i class="far fa-money-bill-alt"></i> 300 - 1000 <i class="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
                                                        </li>
                                                    </ul>
                                                    <div class="row row-sm">
                                                        <div class="col-6">
                                                            <Link to="/Doctorprofile" class="btn view-btn">View Profile</Link>
                                                        </div>
                                                        <div class="col-6">
                                                            <Link to="/Booking" class="btn book-btn">Book Now</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-md-6 col-lg-4 col-xl-3">
                                            <div class="profile-widget">
                                                <div class="doc-img">
                                                    <Link to="/Doctorprofile">
                                                        <img class="img-fluid" alt="User Image" src="assets/img/doctors/doctor-02.jpg" />
                                                    </Link>
                                                    <Link to="javascript:void(0)" class="fav-btn">
                                                        <i class="far fa-bookmark"></i>
                                                    </Link>
                                                </div>
                                                <div class="pro-content">
                                                    <h3 class="title">
                                                        <a href="doctor-profile.html">Dr. Bipin</a>
                                                        <i class="fas fa-check-circle verified"></i>
                                                    </h3>
                                                    <p class="speciality">BDS - Dental Surgeon</p>
                                                    <div class="rating">
                                                        <i class="fas fa-star filled"></i>
                                                        <i class="fas fa-star filled"></i>
                                                        <i class="fas fa-star filled"></i>
                                                        <i class="fas fa-star filled"></i>
                                                        <i class="fas fa-star"></i>
                                                        <span class="d-inline-block average-rating">(35)</span>
                                                    </div>
                                                    <ul class="available-info">
                                                        <li>
                                                            <i class="fas fa-map-marker-alt"></i> Pune,India
                                                        </li>
                                                        <li>
                                                            <i class="far fa-clock"></i> Available on Fri, 22 May
                                                        </li>
                                                        <li>
                                                            <i class="far fa-money-bill-alt"></i> 150 - 300 <i class="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
                                                        </li>
                                                    </ul>
                                                    <div class="row row-sm">
                                                        <div class="col-6">
                                                            <Link to="/Doctorprofile" class="btn view-btn">View Profile</Link>
                                                        </div>
                                                        <div class="col-6">
                                                            <Link to="/Booking" class="btn book-btn">Book Now</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/*     <div class="col-md-6 col-lg-4 col-xl-3">
                                            <div class="profile-widget">
                                                <div class="doc-img">
                                                    <a href="doctor-profile.html">
                                                        <img class="img-fluid" alt="User Image" src="assets/img/doctors/doctor-03.jpg" />
                                                    </a>
                                                    <a href="javascript:void(0)" class="fav-btn">
                                                        <i class="far fa-bookmark"></i>
                                                    </a>
                                                </div>
                                                <div class="pro-content">
                                                    <h3 class="title">
                                                        <a href="doctor-profile.html">Dr. Jerelyn Pino</a>
                                                        <i class="fas fa-check-circle verified"></i>
                                                    </h3>
                                                    <p class="speciality">BDS - Dentist</p>
                                                    <div class="rating">
                                                        <i class="fas fa-star filled"></i>
                                                        <i class="fas fa-star filled"></i>
                                                        <i class="fas fa-star filled"></i>
                                                        <i class="fas fa-star filled"></i>
                                                        <i class="fas fa-star"></i>
                                                        <span class="d-inline-block average-rating">(27)</span>
                                                    </div>
                                                    <ul class="available-info">
                                                        <li>
                                                            <i class="fas fa-map-marker-alt"></i> Georgia, USA
												</li>
                                                        <li>
                                                            <i class="far fa-clock"></i> Available on Fri, 22 Mar
												</li>
                                                        <li>
                                                            <i class="far fa-money-bill-alt"></i> $100 - $400 <i class="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
                                                        </li>
                                                    </ul>
                                                    <div class="row row-sm">
                                                        <div class="col-6">
                                                            <a href="doctor-profile.html" class="btn view-btn">View Profile</a>
                                                        </div>
                                                        <div class="col-6">
                                                            <a href="booking.html" class="btn book-btn">Book Now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}

                                        {/*  <div class="col-md-6 col-lg-4 col-xl-3">
                                            <div class="profile-widget">
                                                <div class="doc-img">
                                                    <a href="doctor-profile.html">
                                                        <img class="img-fluid" alt="User Image" src="assets/img/doctors/doctor-04.jpg" />
                                                    </a>
                                                    <a href="javascript:void(0)" class="fav-btn">
                                                        <i class="far fa-bookmark"></i>
                                                    </a>
                                                </div>
                                                <div class="pro-content">
                                                    <h3 class="title">
                                                        <a href="doctor-profile.html">Dr. Rieko Thrash</a>
                                                        <i class="fas fa-check-circle verified"></i>
                                                    </h3>
                                                    <p class="speciality">BDS - Dental Surgeon</p>
                                                    <div class="rating">
                                                        <i class="fas fa-star filled"></i>
                                                        <i class="fas fa-star filled"></i>
                                                        <i class="fas fa-star filled"></i>
                                                        <i class="fas fa-star filled"></i>
                                                        <i class="fas fa-star"></i>
                                                        <span class="d-inline-block average-rating">(4)</span>
                                                    </div>
                                                    <ul class="available-info">
                                                        <li>
                                                            <i class="fas fa-map-marker-alt"></i> Louisiana, USA
												</li>
                                                        <li>
                                                            <i class="far fa-clock"></i> Available on Fri, 22 Mar
												</li>
                                                        <li>
                                                            <i class="far fa-money-bill-alt"></i> $150 - $250 <i class="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
                                                        </li>
                                                    </ul>
                                                    <div class="row row-sm">
                                                        <div class="col-6">
                                                            <a href="doctor-profile.html" class="btn view-btn">View Profile</a>
                                                        </div>
                                                        <div class="col-6">
                                                            <a href="booking.html" class="btn book-btn">Book Now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                        {/* 
                                        <div class="col-md-6 col-lg-4 col-xl-3">
                                            <div class="profile-widget">
                                                <div class="doc-img">
                                                    <a href="doctor-profile.html">
                                                        <img class="img-fluid" alt="User Image" src="assets/img/doctors/doctor-05.jpg" />
                                                    </a>
                                                    <a href="javascript:void(0)" class="fav-btn">
                                                        <i class="far fa-bookmark"></i>
                                                    </a>
                                                </div>
                                                <div class="pro-content">
                                                    <h3 class="title">
                                                        <a href="doctor-profile.html">Dr. Molefi Snow</a>
                                                        <i class="fas fa-check-circle verified"></i>
                                                    </h3>
                                                    <p class="speciality">BDS - Dentist</p>
                                                    <div class="rating">
                                                        <i class="fas fa-star filled"></i>
                                                        <i class="fas fa-star filled"></i>
                                                        <i class="fas fa-star filled"></i>
                                                        <i class="fas fa-star filled"></i>
                                                        <i class="fas fa-star"></i>
                                                        <span class="d-inline-block average-rating">(66)</span>
                                                    </div>
                                                    <ul class="available-info">
                                                        <li>
                                                            <i class="fas fa-map-marker-alt"></i> Michigan, USA
												</li>
                                                        <li>
                                                            <i class="far fa-clock"></i> Available on Fri, 22 Mar
												</li>
                                                        <li>
                                                            <i class="far fa-money-bill-alt"></i> $50 - $700
													<i class="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
                                                        </li>
                                                    </ul>
                                                    <div class="row row-sm">
                                                        <div class="col-6">
                                                            <a href="doctor-profile.html" class="btn view-btn">View Profile</a>
                                                        </div>
                                                        <div class="col-6">
                                                            <a href="booking.html" class="btn book-btn">Book Now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}

                                        {/*  <div class="col-md-6 col-lg-4 col-xl-3">
                                            <div class="profile-widget">
                                                <div class="doc-img">
                                                    <a href="doctor-profile.html">
                                                        <img class="img-fluid" alt="User Image" src="assets/img/doctors/doctor-06.jpg" />
                                                    </a>
                                                    <a href="javascript:void(0)" class="fav-btn">
                                                        <i class="far fa-bookmark"></i>
                                                    </a>
                                                </div>
                                                <div class="pro-content">
                                                    <h3 class="title">
                                                        <a href="doctor-profile.html">Dr. Ultima Douglas</a>
                                                        <i class="fas fa-check-circle verified"></i>
                                                    </h3>
                                                    <p class="speciality">BDS - Dental Surgeon</p>
                                                    <div class="rating">
                                                        <i class="fas fa-star filled"></i>
                                                        <i class="fas fa-star filled"></i>
                                                        <i class="fas fa-star filled"></i>
                                                        <i class="fas fa-star filled"></i>
                                                        <i class="fas fa-star"></i>
                                                        <span class="d-inline-block average-rating">(52)</span>
                                                    </div>
                                                    <ul class="available-info">
                                                        <li>
                                                            <i class="fas fa-map-marker-alt"></i> Texas, USA
												</li>
                                                        <li>
                                                            <i class="far fa-clock"></i> Available on Fri, 22 Mar
												</li>
                                                        <li>
                                                            <i class="far fa-money-bill-alt"></i> $100 - $500
													<i class="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
                                                        </li>
                                                    </ul>
                                                    <div class="row row-sm">
                                                        <div class="col-6">
                                                            <a href="doctor-profile.html" class="btn view-btn">View Profile</a>
                                                        </div>
                                                        <div class="col-6">
                                                            <a href="booking.html" class="btn book-btn">Book Now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}

                                        {/* <div class="col-md-6 col-lg-4 col-xl-3">
                                            <div class="profile-widget">
                                                <div class="doc-img">
                                                    <a href="doctor-profile.html">
                                                        <img class="img-fluid" alt="User Image" src="assets/img/doctors/doctor-07.jpg" />
                                                    </a>
                                                    <a href="javascript:void(0)" class="fav-btn">
                                                        <i class="far fa-bookmark"></i>
                                                    </a>
                                                </div>
                                                <div class="pro-content">
                                                    <h3 class="title">
                                                        <a href="doctor-profile.html">Dr. Neomah Oliveira</a>
                                                        <i class="fas fa-check-circle verified"></i>
                                                    </h3>
                                                    <p class="speciality">BDS - Dentist</p>
                                                    <div class="rating">
                                                        <i class="fas fa-star filled"></i>
                                                        <i class="fas fa-star filled"></i>
                                                        <i class="fas fa-star filled"></i>
                                                        <i class="fas fa-star filled"></i>
                                                        <i class="fas fa-star"></i>
                                                        <span class="d-inline-block average-rating">(43)</span>
                                                    </div>
                                                    <ul class="available-info">
                                                        <li>
                                                            <i class="fas fa-map-marker-alt"></i> Kansas, USA
												</li>
                                                        <li>
                                                            <i class="far fa-clock"></i> Available on Fri, 22 Mar
												</li>
                                                        <li>
                                                            <i class="far fa-money-bill-alt"></i> $100 - $1000
													<i class="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
                                                        </li>
                                                    </ul>
                                                    <div class="row row-sm">
                                                        <div class="col-6">
                                                            <a href="doctor-profile.html" class="btn view-btn">View Profile</a>
                                                        </div>
                                                        <div class="col-6">
                                                            <a href="booking.html" class="btn book-btn">Book Now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}

                                        {/*   <div class="col-md-6 col-lg-4 col-xl-3">
                                            <div class="profile-widget">
                                                <div class="doc-img">
                                                    <a href="doctor-profile.html">
                                                        <img class="img-fluid" alt="User Image" src="assets/img/doctors/doctor-08.jpg" />
                                                    </a>
                                                    <a href="javascript:void(0)" class="fav-btn">
                                                        <i class="far fa-bookmark"></i>
                                                    </a>
                                                </div>
                                                <div class="pro-content">
                                                    <h3 class="title">
                                                        <a href="doctor-profile.html">Dr. Jillisa Tremblay</a>
                                                        <i class="fas fa-check-circle verified"></i>
                                                    </h3>
                                                    <p class="speciality">BDS - Dental Surgeon</p>
                                                    <div class="rating">
                                                        <i class="fas fa-star filled"></i>
                                                        <i class="fas fa-star filled"></i>
                                                        <i class="fas fa-star filled"></i>
                                                        <i class="fas fa-star filled"></i>
                                                        <i class="fas fa-star"></i>
                                                        <span class="d-inline-block average-rating">(49)</span>
                                                    </div>
                                                    <ul class="available-info">
                                                        <li>
                                                            <i class="fas fa-map-marker-alt"></i> California, USA
												</li>
                                                        <li>
                                                            <i class="far fa-clock"></i> Available on Fri, 22 Mar
												</li>
                                                        <li>
                                                            <i class="far fa-money-bill-alt"></i> $100 - $400
													<i class="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
                                                        </li>
                                                    </ul>
                                                    <div class="row row-sm">
                                                        <div class="col-6">
                                                            <a href="doctor-profile.html" class="btn view-btn">View Profile</a>
                                                        </div>
                                                        <div class="col-6">
                                                            <a href="booking.html" class="btn book-btn">Book Now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
 */}
                                        {/*   <div class="col-md-6 col-lg-4 col-xl-3">
                                            <div class="profile-widget">
                                                <div class="doc-img">
                                                    <a href="doctor-profile.html">
                                                        <img class="img-fluid" alt="User Image" src="assets/img/doctors/doctor-09.jpg" />
                                                    </a>
                                                    <a href="javascript:void(0)" class="fav-btn">
                                                        <i class="far fa-bookmark"></i>
                                                    </a>
                                                </div>
                                                <div class="pro-content">
                                                    <h3 class="title">
                                                        <a href="doctor-profile.html">Dr. Gennaro Weiner</a>
                                                        <i class="fas fa-check-circle verified"></i>
                                                    </h3>
                                                    <p class="speciality">BDS - Dentist</p>
                                                    <div class="rating">
                                                        <i class="fas fa-star filled"></i>
                                                        <i class="fas fa-star filled"></i>
                                                        <i class="fas fa-star filled"></i>
                                                        <i class="fas fa-star filled"></i>
                                                        <i class="fas fa-star"></i>
                                                        <span class="d-inline-block average-rating">(112)</span>
                                                    </div>
                                                    <ul class="available-info">
                                                        <li>
                                                            <i class="fas fa-map-marker-alt"></i> Oklahoma, USA
												</li>
                                                        <li>
                                                            <i class="far fa-clock"></i> Available on Fri, 22 Mar
												</li>
                                                        <li>
                                                            <i class="far fa-money-bill-alt"></i> $500 - $2500
													<i class="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
                                                        </li>
                                                    </ul>
                                                    <div class="row row-sm">
                                                        <div class="col-6">
                                                            <a href="doctor-profile.html" class="btn view-btn">View Profile</a>
                                                        </div>
                                                        <div class="col-6">
                                                            <a href="booking.html" class="btn book-btn">Book Now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}

                                        {/*  <div class="col-md-6 col-lg-4 col-xl-3">
                                            <div class="profile-widget">
                                                <div class="doc-img">
                                                    <a href="doctor-profile.html">
                                                        <img class="img-fluid" alt="User Image" src="assets/img/doctors/doctor-10.jpg" />
                                                    </a>
                                                    <a href="javascript:void(0)" class="fav-btn">
                                                        <i class="far fa-bookmark"></i>
                                                    </a>
                                                </div>
                                                <div class="pro-content">
                                                    <h3 class="title">
                                                        <a href="doctor-profile.html">Dr. Corynna Elmore</a>
                                                        <i class="fas fa-check-circle verified"></i>
                                                    </h3>
                                                    <p class="speciality">BDS - Dental Surgeon</p>
                                                    <div class="rating">
                                                        <i class="fas fa-star filled"></i>
                                                        <i class="fas fa-star filled"></i>
                                                        <i class="fas fa-star filled"></i>
                                                        <i class="fas fa-star filled"></i>
                                                        <i class="fas fa-star"></i>
                                                        <span class="d-inline-block average-rating">(65)</span>
                                                    </div>
                                                    <ul class="available-info">
                                                        <li>
                                                            <i class="fas fa-map-marker-alt"></i> Montana, USA
												</li>
                                                        <li>
                                                            <i class="far fa-clock"></i> Available on Fri, 22 Mar
												</li>
                                                        <li>
                                                            <i class="far fa-money-bill-alt"></i> $75 - $250
													<i class="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
                                                        </li>
                                                    </ul>
                                                    <div class="row row-sm">
                                                        <div class="col-6">
                                                            <a href="doctor-profile.html" class="btn view-btn">View Profile</a>
                                                        </div>
                                                        <div class="col-6">
                                                            <a href="booking.html" class="btn book-btn">Book Now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                        {/* 
                                        <div class="col-md-6 col-lg-4 col-xl-3">
                                            <div class="profile-widget">
                                                <div class="doc-img">
                                                    <a href="doctor-profile.html">
                                                        <img class="img-fluid" alt="User Image" src="assets/img/doctors/doctor-11.jpg" />
                                                    </a>
                                                    <a href="javascript:void(0)" class="fav-btn">
                                                        <i class="far fa-bookmark"></i>
                                                    </a>
                                                </div>
                                                <div class="pro-content">
                                                    <h3 class="title">
                                                        <a href="doctor-profile.html">Dr. Charu Phelan</a>
                                                        <i class="fas fa-check-circle verified"></i>
                                                    </h3>
                                                    <p class="speciality">BDS - Dentist</p>
                                                    <div class="rating">
                                                        <i class="fas fa-star filled"></i>
                                                        <i class="fas fa-star filled"></i>
                                                        <i class="fas fa-star filled"></i>
                                                        <i class="fas fa-star filled"></i>
                                                        <i class="fas fa-star"></i>
                                                        <span class="d-inline-block average-rating">(5)</span>
                                                    </div>
                                                    <ul class="available-info">
                                                        <li>
                                                            <i class="fas fa-map-marker-alt"></i> Oklahoma, USA
												</li>
                                                        <li>
                                                            <i class="far fa-clock"></i> Available on Fri, 22 Mar
												</li>
                                                        <li>
                                                            <i class="far fa-money-bill-alt"></i> $275 - $450
													<i class="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
                                                        </li>
                                                    </ul>
                                                    <div class="row row-sm">
                                                        <div class="col-6">
                                                            <a href="doctor-profile.html" class="btn view-btn">View Profile</a>
                                                        </div>
                                                        <div class="col-6">
                                                            <a href="booking.html" class="btn book-btn">Book Now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
 */}
                                        {/*                                         <div class="col-md-6 col-lg-4 col-xl-3">
                                            <div class="profile-widget">
                                                <div class="doc-img">
                                                    <a href="doctor-profile.html">
                                                        <img class="img-fluid" alt="User Image" src="assets/img/doctors/doctor-12.jpg" />
                                                    </a>
                                                    <a href="javascript:void(0)" class="fav-btn">
                                                        <i class="far fa-bookmark"></i>
                                                    </a>
                                                </div>
                                                <div class="pro-content">
                                                    <h3 class="title">
                                                        <a href="doctor-profile.html">Dr. Kevinn Gavin</a>
                                                        <i class="fas fa-check-circle verified"></i>
                                                    </h3>
                                                    <p class="speciality">BDS - Dentist</p>
                                                    <div class="rating">
                                                        <i class="fas fa-star filled"></i>
                                                        <i class="fas fa-star filled"></i>
                                                        <i class="fas fa-star filled"></i>
                                                        <i class="fas fa-star filled"></i>
                                                        <i class="fas fa-star"></i>
                                                        <span class="d-inline-block average-rating">(5)</span>
                                                    </div>
                                                    <ul class="available-info">
                                                        <li>
                                                            <i class="fas fa-map-marker-alt"></i> Indiana, USA
												</li>
                                                        <li>
                                                            <i class="far fa-clock"></i> Available on Fri, 22 Mar
												</li>
                                                        <li>
                                                            <i class="far fa-money-bill-alt"></i> $150 - $350
													<i class="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
                                                        </li>
                                                    </ul>
                                                    <div class="row row-sm">
                                                        <div class="col-6">
                                                            <a href="doctor-profile.html" class="btn view-btn">View Profile</a>
                                                        </div>
                                                        <div class="col-6">
                                                            <a href="booking.html" class="btn book-btn">Book Now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}


                                    </div>
                                </div>
                            </div>
                        </div>
                        <Footer/></div>

                    </div>
                   
            </div>
        )
    }
}
export default Favourites;