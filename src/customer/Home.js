import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../customer/Header';
import Footer from '../customer/Footer';

class Home extends React.Component {
    render() {
        return (
            <div>
                <Header />
                {/*  <!-- Main Wrapper --> */}
                <div class="main-wrapper">
                    {/*  <!-- Home Banner --> */}
                    <section class="section section-search">
                        <div class="container">
                            <div class="banner-wrapper">
                                <div class="banner-header">
                                    <h6>We work to take care of your smile</h6>
                                    <h1>Great Smile For Healthy Lifestyle!</h1>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</p>
                                    <Link to="#" class="btn-yellow">Make an Appointment</Link>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!-- /Home Banner -->

    <!-- Service --> */}
                    <section class="top-service-col">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-12 col-md-6 col-lg-4 text-center">
                                    <div class="service-box">
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="service-icon">
                                                    <img src="assets/img/service1.jpg" alt="" />
                                                </div>
                                                <h3>Cosmetic Dentistry</h3>
                                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore ue laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.</p>
                                                <div class="service-btn">
                                                    <a href="#"><i class="fas fa-chevron-right"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4 text-center">
                                    <div class="service-box">
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="service-icon">
                                                    <img src="assets/img/service2.jpg" alt="" />
                                                </div>
                                                <h3>Quick Examination</h3>
                                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium mque laudantium, totam rem aperiam, eaque ipsa error sit voluptatem.</p>
                                                <div class="service-btn">
                                                    <a href="#"><i class="fas fa-chevron-right"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4 text-center">
                                    <div class="service-box">
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="service-icon">
                                                    <img src="assets/img/service3.jpg" alt="" />
                                                </div>
                                                <h3>Best Care</h3>
                                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium lauda ntium, totam rem aperiam, eaque ipsa quae ab illo iste natus.</p>
                                                <div class="service-btn">
                                                    <a href="#"><i class="fas fa-chevron-right"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*  <!-- /Service -->
  
    <!-- Feature --> */}
                    <section class="feature-section">
                        <div class="container">
                            <div class="row">
                                <div class="col-12 col-md-6">
                                    <div class="left">
                                        <h6>Connecting with us</h6>
                                        <h2>We Are Providing A Very Good Care and Safety!</h2>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <div class="right">
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo, sed ut perspiciatis unde omnis iste natus error.</p>
                                        <a href="#" class="btn-yellow">Make an Appointment</a>
                                    </div>
                                </div>
                            </div>
                            <div class="row feature-column">
                                <div class="feature-box">
                                    <div class="inner-feature-box text-center">
                                        <div class="feature-icon">
                                            <img src="assets/img/feature1.png" alt="" />
                                        </div>
                                        <h4>Review Your <br />Medical Records</h4>
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem error.</p>
                                        <div class="feature-btn">
                                            <a href="#"><i class="fas fa-chevron-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="feature-box">
                                    <div class="inner-feature-box text-center">
                                        <div class="feature-icon">
                                            <img src="assets/img/feature2.png" alt="" />
                                        </div>
                                        <h4>Monthly Checkups <br />Available</h4>
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem error.</p>
                                        <div class="feature-btn">
                                            <a href="#"><i class="fas fa-chevron-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="feature-box">
                                    <div class="inner-feature-box text-center">
                                        <div class="feature-icon">
                                            <img src="assets/img/feature3.png" alt="" />
                                        </div>
                                        <h4>Check Blood<br />Pressures</h4>
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem error.</p>
                                        <div class="feature-btn">
                                            <a href="#"><i class="fas fa-chevron-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="feature-box">
                                    <div class="inner-feature-box text-center">
                                        <div class="feature-icon">
                                            <img src="assets/img/feature4.png" alt="" />
                                        </div>
                                        <h4>Well Qualified<br />Doctors</h4>
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem error.</p>
                                        <div class="feature-btn">
                                            <a href="#"><i class="fas fa-chevron-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="feature-box">
                                    <div class="inner-feature-box text-center">
                                        <div class="feature-icon">
                                            <img src="assets/img/feature5.png" alt="" />
                                        </div>
                                        <h4>24/7 Emergency<br />Helps</h4>
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem error.</p>
                                        <div class="feature-btn">
                                            <a href="#"><i class="fas fa-chevron-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!-- /Feature -->

    <!-- Find Location --> */}
                    <section class="location-col">
                        <div class="container">
                            <div class="row">
                                <div class="col-12 col-md-6">
                                    <div class="left">
                                        <div class="location-box text-center">
                                            <h4>Our Health Care Programs</h4>
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem a santium doloremque laudantium, totam rem aperiam.</p>
                                            <div class="location-btn">
                                                <a href="#"><i class="fas fa-chevron-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <div class="right">
                                        <div class="location-box text-center">
                                            <h4>Find Our Location</h4>
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem a santium doloremque laudantium, totam rem aperiam.</p>
                                            <div class="location-btn">
                                                <a href="#"><i class="fas fa-chevron-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!-- /Find Location -->

    <!-- About Section --> */}
                    <section class="aboutus-col">
                        <div class="container">
                            <div class="row">
                                <div class="col-12 col-lg-6">
                                    <div class="about-left">
                                        <img src="assets/img/about-left.png" alt="" />
                                    </div>
                                </div>
                                <div class="col-12 col-lg-6">
                                    <div class="about-right">
                                        <h6>Caring for your teeth</h6>
                                        <h2>Your Teeth Plays An Important Role In Our Daily Routine</h2>
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo, sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>
                                        <p>Ddoloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo remque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                        <p class="mb-0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo, sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo remque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo Sed ut perspi ciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!-- /About Section -->

    <!-- Testimonial --> */}
                    <section class="testimonial">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-12">
                                    {/*   <!-- Slider --> */}
                                    <div class="testimonial-slider slider">

                                        {/*  <!-- Slider Item --> */}
                                        <div class="testimonial-item">
                                            <div class="row">
                                                <div class="col-12 col-lg-9">
                                                    <div class="left">
                                                        <h6>Our Patient???s Stories</h6>
                                                        <h2>Testimonials</h2>
                                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo, sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>
                                                        <p>Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo remque la udantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt e xplicabo.</p>
                                                    </div>
                                                </div>
                                                <div class="col-12 col-lg-3">
                                                    <div class="testimonial-profile text-center">
                                                        <div>
                                                            <div class="profile-icon">
                                                                <img src="assets/img/profile1.jpg" alt="" />
                                                            </div>
                                                            <h4>Smith</h4>
                                                            <span>Business Organiser</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- /Slider Item -->
                        
                        <!-- Slider Item --> */}
                                        <div class="testimonial-item">
                                            <div class="row">
                                                <div class="col-12 col-lg-9">
                                                    <div class="left">
                                                        <h6>Our Patient???s Stories</h6>
                                                        <h2>Testimonials</h2>
                                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo, sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>
                                                        <p>Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo remque la udantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt e xplicabo.</p>
                                                    </div>
                                                </div>
                                                <div class="col-12 col-lg-3">
                                                    <div class="testimonial-profile text-center">
                                                        <div>
                                                            <div class="profile-icon">
                                                                <img src="assets/img/profile1.jpg" alt="" />
                                                            </div>
                                                            <h4>Smith</h4>
                                                            <span>Business Organiser</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*  <!-- /Slider Item -->
                        
                        <!-- Slider Item --> */}
                                        <div class="testimonial-item">
                                            <div class="row">
                                                <div class="col-12 col-lg-9">
                                                    <div class="left">
                                                        <h6>Our Patient???s Stories</h6>
                                                        <h2>Testimonials</h2>
                                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo, sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>
                                                        <p>Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo remque la udantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt e xplicabo.</p>
                                                    </div>
                                                </div>
                                                <div class="col-12 col-lg-3">
                                                    <div class="testimonial-profile text-center">
                                                        <div>
                                                            <div class="profile-icon">
                                                                <img src="assets/img/profile1.jpg" alt="" />
                                                            </div>
                                                            <h4>Smith</h4>
                                                            <span>Business Organiser</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- /Slider Item --> */}

                                    </div>
                                    {/*  <!-- /Slider --> */}

                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!-- /Testimonial -->

    <!-- Counts --> */}
                    <section class="count-section">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-12 col-lg-12">
                                    <div class="row">
                                        <div class="col-12 col-md-3">
                                            <div class="count-box text-center">
                                                <h3>12,345</h3>
                                                <p class="mb-0">Doloremque audant tium totam</p>
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-3">
                                            <div class="count-box text-center">
                                                <h3>22,678</h3>
                                                <p class="mb-0">Doloremque audant tium totam</p>
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-3">
                                            <div class="count-box text-center">
                                                <h3>1,345</h3>
                                                <p class="mb-0">Doloremque audant tium totam</p>
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-3">
                                            <div class="count-box text-center">
                                                <h3>17,467</h3>
                                                <p class="mb-0">Doloremque audant tium totam</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!-- /Counts -->

    <!-- Doctors Section --> */}
                    <section class="doctors-col">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="doctors-title text-center">
                                    <h6>MEET OUR DOCTORS</h6>
                                    <h2>Our Doctors</h2>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="doctor-slider slider">

                                        {/* <!-- Doctor Widget --> */}
                                        {/*  <div class="profile-widget">
                                            <div class="doc-img">
                                                <Link to="/Doctorprofile">
                                                    <img class="img-fluid" alt="User Image" src="assets/img/doctors/doctor-05.jpg" />
                                                </Link>
                                            </div>
                                            <div class="pro-content">
                                                <h3 class="title">
                                                    <Link to="/Doctorprofile">Arif</Link>
                                                </h3>
                                                <p class="speciality">MBBS, MD-Ophthalmology</p>
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
                                                        <i class="fas fa-map-marker-alt"></i> Pune
                                                    </li>
                                                    <li>
                                                        <i class="fas fa-calendar-check"></i> Available on Fri, 20 Mar
                                                    </li>
                                                    <li>
                                                        <i class="fas fa-wallet"></i> 50 - 700
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="pro-footer">
                                                <ul class="policy-menu text-center">
                                                    <li><Link to="#">View Profile</Link></li>
                                                    <li><Link to="#"> Book Now</Link></li>
                                                </ul>
                                            </div>
                                        </div> */}
                                        {/*  <!-- /Doctor Widget -->
                    
                        <!-- Doctor Widget --> */}
                                        {/* <div class="profile-widget">
                                            <div class="doc-img">
                                                <Link to="/Doctorprofile">
                                                    <img class="img-fluid" alt="User Image" src="assets/img/doctors/doctor-01.jpg" />
                                                </Link>
                                            </div>
                                            <div class="pro-content">
                                                <h3 class="title">
                                                    <Link to="/Doctorprofile">Akshay</Link>
                                                </h3>
                                                <p class="speciality">BDS - Dental Cosmetology</p>
                                                <div class="rating">
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="far fa-star"></i>
                                                    <span class="d-inline-block average-rating">(23)</span>
                                                </div>
                                                <ul class="available-info">
                                                    <li>
                                                        <i class="fas fa-map-marker-alt"></i> Delhi
                                                    </li>
                                                    <li>
                                                        <i class="fas fa-calendar-check"></i> Available on Mon, 22 Sep
                                                    </li>
                                                    <li>
                                                        <i class="fas fa-wallet"></i> 150 - 220
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="pro-footer">
                                                <ul class="policy-menu text-center">
                                                    <li><Link to="#">View Profile</Link></li>
                                                    <li><Link to="#"> Book Now</Link></li>
                                                </ul>
                                            </div>
                                        </div> */}
                                        {/*   <!-- /Doctor Widget -->
                
                        <!-- Doctor Widget --> */}
                                        {/*   <div class="profile-widget">
                                            <div class="doc-img">
                                                <Link to="/Doctorprofile">
                                                    <img class="img-fluid" alt="User Image" src="assets/img/doctors/doctor-02.jpg" />
                                                </Link>
                                            </div>
                                            <div class="pro-content">
                                                <h3 class="title">
                                                    <Link to="/Doctorprofile">Arif</Link>
                                                </h3>
                                                <p class="speciality">MDS - Dental Cosmetology</p>
                                                <div class="rating">
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="far fa-star"></i>
                                                    <span class="d-inline-block average-rating">(35)</span>
                                                </div>
                                                <ul class="available-info">
                                                    <li>
                                                        <i class="fas fa-map-marker-alt"></i> Mumbai
                                                    </li>
                                                    <li>
                                                        <i class="fas fa-calendar-check"></i> Available on Fri, 22 Mar
                                                    </li>
                                                    <li>
                                                        <i class="fas fa-wallet"></i> 150 - 300
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="pro-footer">
                                                <ul class="policy-menu text-center">
                                                    <li><Link to="#">View Profile</Link></li>
                                                    <li><Link to="#"> Book Now</Link></li>
                                                </ul>
                                            </div>
                                        </div> */}
                                        {/*  <!-- /Doctor Widget -->
                
                        <!-- Doctor Widget --> */}
                                        {/* <div class="profile-widget">
                                            <div class="doc-img">
                                                <Link to="/Doctorprofile">
                                                    <img class="img-fluid" alt="User Image" src="assets/img/doctors/doctor-03.jpg" />
                                                </Link>
                                            </div>
                                            <div class="pro-content">
                                                <h3 class="title">
                                                    <Link to="/Doctorprofile">Amrunta</Link>
                                                </h3>
                                                <p class="speciality">MBBS, DNB - Cardiology</p>
                                                <div class="rating">
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="far fa-star"></i>
                                                    <span class="d-inline-block average-rating">(27)</span>
                                                </div>
                                                <ul class="available-info">
                                                    <li>
                                                        <i class="fas fa-map-marker-alt"></i> Pune
                                                    </li>
                                                    <li>
                                                        <i class="fas fa-calendar-check"></i> Available on Fri, 22 Mar
                                                    </li>
                                                    <li>
                                                        <i class="fas fa-wallet"></i> 100 - 400
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="pro-footer">
                                                <ul class="policy-menu text-center">
                                                    <li><Link to="#">View Profile</Link></li>
                                                    <li><Link to="#"> Book Now</Link></li>
                                                </ul>
                                            </div>
                                        </div> */}
                                        {/* <!-- /Doctor Widget -->
                
                        <!-- Doctor Widget --> */}
                                        {/*  <div class="profile-widget">
                                            <div class="doc-img">
                                                <Link to="/Doctorprofile">
                                                    <img class="img-fluid" alt="User Image" src="assets/img/doctors/doctor-04.jpg" />
                                                </Link>
                                            </div>
                                            <div class="pro-content">
                                                <h3 class="title">
                                                    <Link to="/Doctorprofile"> Deepti</Link>
                                                </h3>
                                                <p class="speciality">MBBS, MS - General Surgery</p>
                                                <div class="rating">
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="far fa-star"></i>
                                                    <span class="d-inline-block average-rating">(4)</span>
                                                </div>
                                                <ul class="available-info">
                                                    <li>
                                                        <i class="fas fa-calendar-check"></i> Banglore
                                                    </li>
                                                    <li>
                                                        <i class="fas fa-wallet"></i> Available on Fri, 22 Mar
                                                    </li>
                                                    <li>
                                                        <i class="far fa-money-bill-alt"></i> 150 - 250
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="pro-footer">
                                                <ul class="policy-menu text-center">
                                                    <li><Link to="#">View Profile</Link></li>
                                                    <li><Link to="#"> Book Now</Link></li>
                                                </ul>
                                            </div>
                                        </div> */}
                                        {/*  <!-- /Doctor Widget -->
                        
                        <!-- Doctor Widget --> */}
                                        {/* <div class="profile-widget">
                                            <div class="doc-img">
                                                <Link to="/Doctorprofile">
                                                    <img class="img-fluid" alt="User Image" src="assets/img/doctors/doctor-06.jpg" />
                                                </Link>
                                            </div>
                                            <div class="pro-content">
                                                <h3 class="title">
                                                    <Link to="/Doctorprofile">Urwarsi</Link>
                                                </h3>
                                                <p class="speciality">MS - Orthopaedics</p>
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
                                                        <i class="fas fa-map-marker-alt"></i> Goa
                                                    </li>
                                                    <li>
                                                        <i class="fas fa-calendar-check"></i> Available on Fri, 22 Mar
                                                    </li>
                                                    <li>
                                                        <i class="fas fa-wallet"></i> 100 - 500
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="pro-footer">
                                                <ul class="policy-menu text-center">
                                                    <li><Link to="#">View Profile</Link></li>
                                                    <li><Link to="#"> Book Now</Link></li>
                                                </ul>
                                            </div>
                                        </div> */}
                                        {/*   <!-- /Doctor Widget -->
                        
                        <!-- Doctor Widget --> */}
                                        {/* <div class="profile-widget">
                                            <div class="doc-img">
                                                <Link to="/Doctorprofile">
                                                    <img class="img-fluid" alt="User Image" src="assets/img/doctors/doctor-07.jpg" />
                                                </Link>
                                            </div>
                                            <div class="pro-content">
                                                <h3 class="title">
                                                    <Link to="/Doctorprofile">Rohini</Link>
                                                </h3>
                                                <p class="speciality">MBBS, MD - General Medicine</p>
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
                                                        <i class="fas fa-map-marker-alt"></i> Delhi
                                                    </li>
                                                    <li>
                                                        <i class="fas fa-calendar-check"></i> Available on Fri, 22 Mar
                                                    </li>
                                                    <li>
                                                        <i class="fas fa-wallet"></i> 100 - 1000
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="pro-footer">
                                                <ul class="policy-menu text-center">
                                                    <li><Link to="#">View Profile</Link></li>
                                                    <li><Link to="#"> Book Now</Link></li>
                                                </ul>
                                            </div>
                                        </div> */}
                                        {/*   <!-- /Doctor Widget -->
                        
                        <!-- Doctor Widget --> */}
                                        {/* <div class="profile-widget">
                                            <div class="doc-img">
                                                <Link to="/Doctorprofile">
                                                    <img class="img-fluid" alt="User Image" src="assets/img/doctors/doctor-08.jpg" />
                                                </Link>
                                            </div>
                                            <div class="pro-content">
                                                <h3 class="title">
                                                    <Link to="/Doctorprofile"> Sumit</Link>
                                                </h3>
                                                <p class="speciality">MBBS, MD - Dermatology</p>
                                                <div class="rating">
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="far fa-star"></i>
                                                    <i class="far fa-star"></i>
                                                    <span class="d-inline-block average-rating">(20)</span>
                                                </div>
                                                <ul class="available-info">
                                                    <li>
                                                        <i class="fas fa-map-marker-alt"></i> Mumbai
                                                    </li>
                                                    <li>
                                                        <i class="fas fa-calendar-check"></i> Available on Fri, 22 Mar
                                                    </li>
                                                    <li>
                                                        <i class="fas fa-wallet"></i> 100 - 400
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="pro-footer">
                                                <ul class="policy-menu text-center">
                                                    <li><Link to="#">View Profile</Link></li>
                                                    <li><Link to="#"> Book Now</Link></li>
                                                </ul>
                                            </div>

                                        </div> */}
                                        {/*  <!-- Doctor Widget --> */}

                                    </div>
                                    <div class="col-12 col-md-12 text-center pt-4">
                                        {/* <Link to="#" class="view-all">View All</Link> */}
                                    </div>




                                    <div class="row">
                                        <div class="col-sm-3">
                                            <div class="doctor-slider slider">

                                                <div class="profile-widget">
                                                    <div class="doc-img">
                                                        <Link to="/Doctorprofile">
                                                            <img class="img-fluid" alt="User Image" src="assets/img/doctors/doctor-05.jpg" />
                                                        </Link>
                                                    </div>
                                                    <div class="pro-content">
                                                        <h3 class="title">
                                                            <Link to="/Doctorprofile">Deepak</Link>
                                                        </h3>
                                                        <p class="speciality">MBBS, MD - Ophthalmology</p>
                                                        <div class="rating">
                                                            <i class="fas fa-star filled"></i>
                                                            <i class="fas fa-star filled"></i>
                                                            <i class="fas fa-star filled"></i>
                                                            <i class="fas fa-star filled"></i>
                                                            <i class="fas fa-star"></i>
                                                            <span class="d-inline-block average-rating">(16)</span>
                                                        </div>
                                                        <ul class="available-info">
                                                            <li>
                                                                <i class="fas fa-map-marker-alt"></i> Pune, India
                                                            </li>
                                                            <li>
                                                                <i class="fas fa-calendar-check"></i> Available on Fri, 20 Jul
                                                            </li>
                                                            <li>
                                                                <i class="fas fa-wallet"></i> 50 - 700
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="pro-footer">
                                                        <ul class="policy-menu text-center">
                                                            <li><Link to="#">View Profile</Link></li>
                                                            <li><Link to="#"> Book Now</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>


                                            </div>
                                        </div>

                                        <div class="col-sm-3">
                                            <div class="doctor-slider slider">
                                                <div class="profile-widget">
                                                    <div class="doc-img">
                                                        <Link to="/Doctorprofile">
                                                            <img class="img-fluid" alt="User Image" src="assets/img/doctors/doctor-01.jpg" />
                                                        </Link>
                                                    </div>
                                                    <div class="pro-content">
                                                        <h3 class="title">
                                                            <Link to="/Doctorprofile">Deepti</Link>
                                                        </h3>
                                                        <p class="speciality">BDS - Dental Cosmetology</p>
                                                        <div class="rating">
                                                            <i class="fas fa-star filled"></i>
                                                            <i class="fas fa-star filled"></i>
                                                            <i class="fas fa-star filled"></i>
                                                            <i class="fas fa-star filled"></i>
                                                            <i class="far fa-star"></i>
                                                            <span class="d-inline-block average-rating">(23)</span>
                                                        </div>
                                                        <ul class="available-info">
                                                            <li>
                                                                <i class="fas fa-map-marker-alt"></i> Mumbai,India
                                                            </li>
                                                            <li>
                                                                <i class="fas fa-calendar-check"></i> Available on Mon, 22 Sep
                                                            </li>
                                                            <li>
                                                                <i class="fas fa-wallet"></i> 150 - 220
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="pro-footer">
                                                        <ul class="policy-menu text-center">
                                                            <li><Link to="#">View Profile</Link></li>
                                                            <li><Link to="#"> Book Now</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        <div class="col-sm-3">
                                            <div class="doctor-slider slider">
                                                {/* <!-- Doctor Widget --> */}
                                                <div class="profile-widget">
                                                    <div class="doc-img">
                                                        <Link to="/Doctorprofile">
                                                            <img class="img-fluid" alt="User Image" src="assets/img/doctors/doctor-02.jpg" />
                                                        </Link>
                                                    </div>
                                                    <div class="pro-content">
                                                        <h3 class="title">
                                                            <Link to="/Doctorprofile">Ganesh</Link>
                                                        </h3>
                                                        <p class="speciality">MDS - Dental Cosmetology</p>
                                                        <div class="rating">
                                                            <i class="fas fa-star filled"></i>
                                                            <i class="fas fa-star filled"></i>
                                                            <i class="fas fa-star filled"></i>
                                                            <i class="fas fa-star filled"></i>
                                                            <i class="far fa-star"></i>
                                                            <span class="d-inline-block average-rating">(35)</span>
                                                        </div>
                                                        <ul class="available-info">
                                                            <li>
                                                                <i class="fas fa-map-marker-alt"></i> Delhi,India
                                                            </li>
                                                            <li>
                                                                <i class="fas fa-calendar-check"></i> Available on Fri, 22 Mar
                                                            </li>
                                                            <li>
                                                                <i class="fas fa-wallet"></i> 50 - 300
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="pro-footer">
                                                        <ul class="policy-menu text-center">
                                                            <li><Link to="#">View Profile</Link></li>
                                                            <li><Link to="#"> Book Now</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>



                                        <div class="col-sm-3">
                                            <div class="doctor-slider slider">

                                                <div class="profile-widget">
                                                    <div class="doc-img">
                                                        <Link to="/Doctorprofile">
                                                            <img class="img-fluid" alt="User Image" src="assets/img/doctors/doctor-03.jpg" />
                                                        </Link>
                                                    </div>
                                                    <div class="pro-content">
                                                        <h3 class="title">
                                                            <Link to="/Doctorprofile">Jiya </Link>
                                                        </h3>
                                                        <p class="speciality">MBBS, DNB - Cardiology</p>
                                                        <div class="rating">
                                                            <i class="fas fa-star filled"></i>
                                                            <i class="fas fa-star filled"></i>
                                                            <i class="fas fa-star filled"></i>
                                                            <i class="fas fa-star filled"></i>
                                                            <i class="far fa-star"></i>
                                                            <span class="d-inline-block average-rating">(27)</span>
                                                        </div>
                                                        <ul class="available-info">
                                                            <li>
                                                                <i class="fas fa-map-marker-alt"></i> Patna, India
                                                            </li>
                                                            <li>
                                                                <i class="fas fa-calendar-check"></i> Available on Fri, 22 Mar
                                                            </li>
                                                            <li>
                                                                <i class="fas fa-wallet"></i> 100 - 400
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="pro-footer">
                                                        <ul class="policy-menu text-center">
                                                            <li><Link to="#">View Profile</Link></li>
                                                            <li><Link to="#"> Book Now</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div class="col-sm-3">
                                            <div class="doctor-slider slider">

                                                <div class="profile-widget">
                                                    <div class="doc-img">
                                                        <Link to="/Doctorprofile">
                                                            <img class="img-fluid" alt="User Image" src="assets/img/doctors/doctor-04.jpg" />
                                                        </Link>
                                                    </div>
                                                    <div class="pro-content">
                                                        <h3 class="title">
                                                            <Link to="/Doctorprofile">Rohini</Link>
                                                        </h3>
                                                        <p class="speciality">MBBS, MS - General Surgery</p>
                                                        <div class="rating">
                                                            <i class="fas fa-star filled"></i>
                                                            <i class="fas fa-star filled"></i>
                                                            <i class="fas fa-star filled"></i>
                                                            <i class="fas fa-star filled"></i>
                                                            <i class="far fa-star"></i>
                                                            <span class="d-inline-block average-rating">(4)</span>
                                                        </div>
                                                        <ul class="available-info">
                                                            <li>
                                                                <i class="fas fa-calendar-check"></i> Banglore,India
                                                            </li>
                                                            <li>
                                                                <i class="fas fa-wallet"></i> Available on Fri, 22 Aug
                                                            </li>
                                                            <li>
                                                                <i class="far fa-money-bill-alt"></i> 150 - 250
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="pro-footer">
                                                        <ul class="policy-menu text-center">
                                                            <li><Link to="#">View Profile</Link></li>
                                                            <li><Link to="#"> Book Now</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div class="col-sm-3">
                                            <div class="doctor-slider slider">

                                                <div class="profile-widget">
                                                    <div class="doc-img">
                                                        <Link to="/Doctorprofile">
                                                            <img class="img-fluid" alt="User Image" src="assets/img/doctors/doctor-06.jpg" />
                                                        </Link>
                                                    </div>
                                                    <div class="pro-content">
                                                        <h3 class="title">
                                                            <Link to="/Doctorprofile">Anjali</Link>
                                                        </h3>
                                                        <p class="speciality">MS - Orthopaedics</p>
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
                                                                <i class="fas fa-map-marker-alt"></i> Delhi, India
                                                            </li>
                                                            <li>
                                                                <i class="fas fa-calendar-check"></i> Available on Fri, 22 Sep
                                                            </li>
                                                            <li>
                                                                <i class="fas fa-wallet"></i> 100 - 500
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="pro-footer">
                                                        <ul class="policy-menu text-center">
                                                            <li><Link to="#">View Profile</Link></li>
                                                            <li><Link to="#"> Book Now</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>


                                        <div class="col-12 col-md-12 text-center pt-4">
                                            <a href="#" class="view-all">View All</a>
                                        </div>
                                    </div> </div>





                            </div>

                        </div>
                    </section>
                    {/*  <!-- /Doctors Section -->

    <!-- Appoinment --> */}
                    <section class="appoinment-section">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-12 col-lg-12">
                                    <div class="section-header text-center">
                                        <h6>Appointment</h6>
                                        <h2 class="text-white">Book An Appointment</h2>
                                        <p class="text-white">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo, sed ut perspiciatis unde omnis iste natus error sit voluptatem  accusantium.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!-- /Appoinment -->

    <!-- Appoinment Form --> */}
                    <div class="appmt-form location-col">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-12 col-lg-12">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-12 col-md-6 col-lg-4">
                                                    <div class="form-group">
                                                        <label>Name</label>
                                                        <input type="text" class="form-control" />
                                                    </div>
                                                </div>
                                                <div class="col-12 col-md-6 col-lg-4">
                                                    <div class="form-group">
                                                        <label>Email</label>
                                                        <input type="text" class="form-control" />
                                                    </div>
                                                </div>
                                                <div class="col-12 col-md-6 col-lg-4">
                                                    <div class="form-group">
                                                        <label>Mobile Number</label>
                                                        <input type="text" class="form-control" />
                                                    </div>
                                                </div>

                                                <div class="col-12 col-md-6 col-lg-4">
                                                    <div class="form-group">
                                                        <label>Doctor Name</label>
                                                        <input type="text" class="form-control" />
                                                    </div>
                                                </div>
                                                <div class="col-12 col-md-6 col-lg-4">
                                                    <div class="form-group mb-0">
                                                        <label>Date</label>
                                                        <input type="text" class="form-control" />
                                                    </div>
                                                </div>
                                                <div class="col-12 col-md-6 col-lg-4">
                                                    <div class="form-group">
                                                        <label>Time</label>
                                                        <input type="text" class="form-control" />
                                                    </div>
                                                </div>
                                                <div class="col-12 col-md-12 text-center">
                                                    <a href="#" class="btn-yellow">Make an Appointment</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  <!-- /Appoinment Form -->

    <!-- Blog --> */}
                    <section class="blog-section">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="section-header text-center mb-4">
                                    <h6>Blog</h6>
                                    <h2>Our Blogs</h2>
                                </div>
                            </div>
                            <div class="row justify-content-center">
                                <div class="col-12 col-md-6 col-lg-3">
                                    <div class="blog-box">
                                        <div class="blog-img">
                                            <img src="assets/img/blog/blog-img1.jpg" alt="" />
                                        </div>
                                        <div class="blog-content">
                                            <span><i>Jan 26 | Admin</i></span>
                                            <h2>Lorem Ipsum has been the industry's</h2>
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
                                        </div>
                                        <div class="blog-btn">
                                            <a href="#"><i class="fas fa-chevron-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-3">
                                    <div class="blog-box">
                                        <div class="blog-img">
                                            <img src="assets/img/blog/blog-img2.jpg" alt="" />
                                        </div>
                                        <div class="blog-content">
                                            <span><i>Jan 26 | Admin</i></span>
                                            <h2>Lorem Ipsum has been the industry's</h2>
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
                                        </div>
                                        <div class="blog-btn">
                                            <a href="#"><i class="fas fa-chevron-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-3">
                                    <div class="blog-box">
                                        <div class="blog-img">
                                            <img src="assets/img/blog/blog-img3.jpg" alt="" />
                                        </div>
                                        <div class="blog-content">
                                            <span><i>Jan 26 | Admin</i></span>
                                            <h2>Lorem Ipsum has been the industry's</h2>
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
                                        </div>
                                        <div class="blog-btn">
                                            <a href="#"><i class="fas fa-chevron-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-3">
                                    <div class="blog-box">
                                        <div class="blog-img">
                                            <img src="assets/img/blog/blog-img4.jpg" alt="" />
                                        </div>
                                        <div class="blog-content">
                                            <span><i>Jan 26 | Admin</i></span>
                                            <h2>Lorem Ipsum has been the industry's</h2>
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
                                        </div>
                                        <div class="blog-btn">
                                            <a href="#"><i class="fas fa-chevron-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-12 blog-bottom text-center pt-5">
                                    <Link to="#" class="view-all">View All</Link>
                                </div>
                            </div>
                        </div>
                    </section>
                    <Footer />
                </div>

            </div>
        )
    }
}
export default Home;