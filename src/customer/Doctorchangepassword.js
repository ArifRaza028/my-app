import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../customer/Header';
import Footer from '../customer/Footer';


class Doctorchangepassword extends React.Component {
    render() {
        return (
            <div>
            <Header/>

                {/* <!-- Main Wrapper --> */}
                <div class="main-wrapper">

                    
                    <div class="asd breadcrumb-bar">
                        <div class="container-fluid">
                            <div class="row align-items-center">
                                <div class="col-md-12 col-12">
                                    <nav aria-label="breadcrumb" class="page-breadcrumb">
                                        <ol class="breadcrumb">
                                            <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                                            <li class="breadcrumb-item active" aria-current="page">Change Password</li>
                                        </ol>
                                    </nav>
                                    <h2 class="breadcrumb-title">Change Password</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  <!-- /Breadcrumb -->
			
			<!-- Page Content -- > */}
                    <div class="content">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">

                                    {/* <!-- Profile Sidebar --> */}
                                    <div class="profile-sidebar">
                                        <div class="widget-profile pro-widget-content">
                                            <div class="profile-info-widget">
                                                <Link to="#" class="booking-doc-img">
                                                    <img src="assets/img/doctors/doctor-thumb-02.jpg" alt="User Image" />
                                                </Link>
                                                <div class="profile-det-info">
                                                    <h3>Dr. Bipin</h3>

                                                    <div class="patient-details">
                                                        <h5 class="mb-0">BDS, MDS - Oral & Maxillofacial Surgery</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="dashboard-widget">
                                            <nav class="dashboard-menu">
                                                <ul>
                                                    <li>
                                                        <Link to="/Doctordashboard">
                                                            <i class="fas fa-columns"></i>
                                                            <span>Dashboard</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Appointments">
                                                            <i class="fas fa-calendar-check"></i>
                                                            <span>Appointments</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Mypatients">
                                                            <i class="fas fa-user-injured"></i>
                                                            <span>My Patients</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/ScheduleTimings">
                                                            <i class="fas fa-hourglass-start"></i>
                                                            <span>Schedule Timings</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Invoices">
                                                            <i class="fas fa-file-invoice"></i>
                                                            <span>Invoices</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Reviews">
                                                            <i class="fas fa-star"></i>
                                                            <span>Reviews</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Chatdoctor">
                                                            <i class="fas fa-comments"></i>
                                                            <span>Message</span>
                                                            <small class="unread-msg">3</small>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Doctorprofilesetting">
                                                            <i class="fas fa-user-cog"></i>
                                                            <span>Profile Settings</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Socialmedia">
                                                            <i class="fas fa-share-alt"></i>
                                                            <span>Social Media</span>
                                                        </Link>
                                                    </li>
                                                    <li class="active">
                                                        <Link to="/Doctorchangepassword">
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
                                    {/* <!-- /Profile Sidebar --> */}

                                </div>
                                <div class="col-md-7 col-lg-8 col-xl-9">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-md-12 col-lg-6">

                                                    {/* 	<!-- Change Password Form --> */}
                                                    <form>
                                                        <div class="form-group">
                                                            <label>Old Password</label>
                                                            <input type="password" class="form-control" />
                                                        </div>
                                                        <div class="form-group">
                                                            <label>New Password</label>
                                                            <input type="password" class="form-control" />
                                                        </div>
                                                        <div class="form-group">
                                                            <label>Confirm Password</label>
                                                            <input type="password" class="form-control" />
                                                        </div>
                                                        <div class="submit-section">
                                                            <button type="submit" class="btn btn-primary submit-btn">Save Changes</button>
                                                        </div>
                                                    </form>
                                                    {/* <!-- /Change Password Form --> */}

                                                </div>
                                            </div>
                                        </div>
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
export default Doctorchangepassword;