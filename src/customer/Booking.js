import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../customer/Header';
import Footer from '../customer/Footer';

class Booking extends React.Component {
    render() {
        return (
            <div>
                <Header />
                {/* <!-- Main Wrapper --> */}
                <div class="main-wrapper">


                    <div class="asd breadcrumb-bar">
                        <div class="container-fluid">
                            <div class="row align-items-center">
                                <div class="col-md-12 col-12">
                                    <nav aria-label="breadcrumb" class="page-breadcrumb">
                                        <ol class="breadcrumb">
                                            <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                                            <li class="breadcrumb-item active" aria-current="page">Booking</li>
                                        </ol>
                                    </nav>
                                    <h2 class="breadcrumb-title">Booking</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /Breadcrumb -->
			
			<!-- Page Content --> */}
                    <div class="content">
                        <div class="container">

                            <div class="row">
                                <div class="col-12">

                                    <div class="card">
                                        <div class="card-body">
                                            <div class="booking-doc-info">
                                                <Link to="/Doctorprofile" class="booking-doc-img">
                                                    <img src="assets/img/doctors/doctor-thumb-02.jpg" alt="User Image" />
                                                </Link>
                                                <div class="booking-info">
                                                    <h4><Link to="/Doctorprofile">Dr. Bipin</Link></h4>
                                                    <div class="rating">
                                                        <i class="fas fa-star filled"></i>
                                                        <i class="fas fa-star filled"></i>
                                                        <i class="fas fa-star filled"></i>
                                                        <i class="fas fa-star filled"></i>
                                                        <i class="fas fa-star"></i>
                                                        <span class="d-inline-block average-rating">5</span>
                                                    </div>
                                                    <p class="text-muted mb-0"><i class="fas fa-map-marker-alt"></i>Pune ,India</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-12 col-sm-4 col-md-6">
                                            <h4 class="mb-1">11 May 2021</h4>
                                            <p class="text-muted">Monday</p>
                                        </div>
                                        <div class="col-12 col-sm-8 col-md-6 text-sm-right">
                                            <div class="bookingrange btn btn-white btn-sm mb-3">
                                                <i class="far fa-calendar-alt mr-2"></i>
                                                <span></span>
                                                <i class="fas fa-chevron-down ml-2"></i>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Schedule Widget --> */}
                                    <div class="card booking-schedule schedule-widget">

                                        {/* <!-- Schedule Header --> */}
                                        <div class="schedule-header">
                                            <div class="row">
                                                <div class="col-md-12">

                                                    {/* <!-- Day Slot --> */}
                                                    <div class="day-slot">
                                                        <ul>
                                                            <li class="left-arrow">
                                                                <Link to="#">
                                                                    <i class="fa fa-chevron-left"></i>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <span>Mon</span>
                                                                <span class="slot-date">11 May <small class="slot-year">2021</small></span>
                                                            </li>
                                                            <li>
                                                                <span>Tue</span>
                                                                <span class="slot-date">12 May <small class="slot-year">2021</small></span>
                                                            </li>
                                                            <li>
                                                                <span>Wed</span>
                                                                <span class="slot-date">13 May <small class="slot-year">2021</small></span>
                                                            </li>
                                                            <li>
                                                                <span>Thu</span>
                                                                <span class="slot-date">14 May <small class="slot-year">2021</small></span>
                                                            </li>
                                                            <li>
                                                                <span>Fri</span>
                                                                <span class="slot-date">15 May <small class="slot-year">2021</small></span>
                                                            </li>
                                                            <li>
                                                                <span>Sat</span>
                                                                <span class="slot-date">16 May <small class="slot-year">2021</small></span>
                                                            </li>
                                                            <li>
                                                                <span>Sun</span>
                                                                <span class="slot-date">17 May <small class="slot-year">2021</small></span>
                                                            </li>
                                                            <li class="right-arrow">
                                                                <Link to="#">
                                                                    <i class="fa fa-chevron-right"></i>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    {/* <!-- /Day Slot --> */}

                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- /Schedule Header -->
								
								<!-- Schedule Content --> */}
                                        <div class="schedule-cont">
                                            <div class="row">
                                                <div class="col-md-12">

                                                    {/* <!-- Time Slot --> */}
                                                    <div class="time-slot">
                                                        <ul class="clearfix">
                                                            <li>
                                                                <a class="timing" href="#">
                                                                    <span>9:00</span> <span>AM</span>
                                                                </a>
                                                                <a class="timing" href="#">
                                                                    <span>10:00</span> <span>AM</span>
                                                                </a>
                                                                <a class="timing" href="#">
                                                                    <span>11:00</span> <span>AM</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a class="timing" href="#">
                                                                    <span>9:00</span> <span>AM</span>
                                                                </a>
                                                                <a class="timing" href="#">
                                                                    <span>10:00</span> <span>AM</span>
                                                                </a>
                                                                <a class="timing" href="#">
                                                                    <span>11:00</span> <span>AM</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a class="timing" href="#">
                                                                    <span>9:00</span> <span>AM</span>
                                                                </a>
                                                                <a class="timing" href="#">
                                                                    <span>10:00</span> <span>AM</span>
                                                                </a>
                                                                <a class="timing" href="#">
                                                                    <span>11:00</span> <span>AM</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a class="timing" href="#">
                                                                    <span>9:00</span> <span>AM</span>
                                                                </a>
                                                                <a class="timing" href="#">
                                                                    <span>10:00</span> <span>AM</span>
                                                                </a>
                                                                <a class="timing" href="#">
                                                                    <span>11:00</span> <span>AM</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a class="timing" href="#">
                                                                    <span>9:00</span> <span>AM</span>
                                                                </a>
                                                                <a class="timing" href="#">
                                                                    <span>10:00</span> <span>AM</span>
                                                                </a>
                                                                <a class="timing" href="#">
                                                                    <span>11:00</span> <span>AM</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a class="timing" href="#">
                                                                    <span>9:00</span> <span>AM</span>
                                                                </a>
                                                                <a class="timing" href="#">
                                                                    <span>10:00</span> <span>AM</span>
                                                                </a>
                                                                <a class="timing" href="#">
                                                                    <span>11:00</span> <span>AM</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a class="timing" href="#">
                                                                    <span>9:00</span> <span>AM</span>
                                                                </a>
                                                                <a class="timing" href="#">
                                                                    <span>10:00</span> <span>AM</span>
                                                                </a>
                                                                <a class="timing" href="#">
                                                                    <span>11:00</span> <span>AM</span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    {/* <!-- /Time Slot --> */}

                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- /Schedule Content -->
								 */}
                                    </div>
                                    {/* <!-- /Schedule Widget --> */}

                                    {/* <!-- Submit Section --> */}
                                    <div class="submit-section proceed-btn text-right">
                                        <Link to="/Checkout" class="btn btn-primary submit-btn">Proceed to Pay</Link>
                                    </div>
                                    {/* <!-- /Submit Section --> */}

                                </div>
                            </div>
                        </div>
                        <Footer /></div>

                </div>

            </div>
        )
    }
}
export default Booking;
