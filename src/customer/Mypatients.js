import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './../customer/Header';
import Footer from './../customer/Footer';

class Mypatients extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                {/* <!-- Main Wrapper --> */}
                <div class="main-wrapper">

                    
			
			{/* <!-- Breadcrumb --> */} 
                    <div class=" asd breadcrumb-bar">
                        <div class="container-fluid">
                            <div class="row align-items-center">
                                <div class="col-md-12 col-12">
                                    <nav aria-label="breadcrumb" class="page-breadcrumb">
                                        <ol class="breadcrumb">
                                            <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                                            <li class="breadcrumb-item active" aria-current="page">My Patients</li>
                                        </ol>
                                    </nav>
                                    <h2 class="breadcrumb-title">My Patients</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /Breadcrumb -->
			
			<!-- Page Content --> */}
                    <div class="content">
                        <div class="container-fluid">

                            <div class="row">
                                <div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">

                                    {/* 	<!-- Profile Sidebar --> */}
                                    <div class="profile-sidebar">
                                        <div class="widget-profile pro-widget-content">
                                            <div class="profile-info-widget">
                                                <Link to="#" class="booking-doc-img">
                                                    <img src="assets/img/doctors/doctor-thumb-02.jpg" alt="User Image" />
                                                </Link>
                                                <div class="profile-det-info">
                                                    <h3>Dr. Arif</h3>

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
                                                    <li class="active">
                                                        <Link to="/Mypatients">
                                                            <i class="fas fa-user-injured"></i>
                                                            <span>My Patients</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/ScheduleTiming">
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
                                                            <small class="unread-msg">2</small>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Doctorprofilesettings">
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
                                                    <li>
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

                                    <div class="row row-grid">
                                        <div class="col-md-6 col-lg-4 col-xl-3">
                                            <div class="card widget-profile pat-widget-profile">
                                                <div class="card-body">
                                                    <div class="pro-widget-content">
                                                        <div class="profile-info-widget">
                                                            <Link to="/Patientsprofile" class="booking-doc-img">
                                                                <img src="assets/img/patients/patient.jpg" alt="User Image" />
                                                            </Link>
                                                            <div class="profile-det-info">
                                                                <h3><Link to="/Patientsprofile">Ganesh</Link></h3>

                                                                <div class="patient-details">
                                                                    <h5><b>Patient ID :</b> P0016</h5>
                                                                    <h5 class="mb-0"><i class="fas fa-map-marker-alt"></i> Pune</h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="patient-info">
                                                        <ul>
                                                            <li>Phone <span>+91 1234567890</span></li>
                                                            <li>Age <span>38 Years, Male</span></li>
                                                            <li>Blood Group <span>AB+</span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-md-6 col-lg-4 col-xl-3">
                                            <div class="card widget-profile pat-widget-profile">
                                                <div class="card-body">
                                                    <div class="pro-widget-content">
                                                        <div class="profile-info-widget">
                                                            <Link to="/Patientsprofile" class="booking-doc-img">
                                                                <img src="assets/img/patients/patient1.jpg" alt="User Image" />
                                                            </Link>
                                                            <div class="profile-det-info">
                                                                <h3><Link to="/Patientsprofile">Rohni</Link></h3>

                                                                <div class="patient-details">
                                                                    <h5><b>Patient ID :</b> P0001</h5>
                                                                    <h5 class="mb-0"><i class="fas fa-map-marker-alt"></i> Mumbai</h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="patient-info">
                                                        <ul>
                                                            <li>Phone <span>+91 1234567890</span></li>
                                                            <li>Age <span>29 Years, Female</span></li>
                                                            <li>Blood Group <span>O+</span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-md-6 col-lg-4 col-xl-3">
                                            <div class="card widget-profile pat-widget-profile">
                                                <div class="card-body">
                                                    <div class="pro-widget-content">
                                                        <div class="profile-info-widget">
                                                            <Link to="#" class="booking-doc-img">
                                                                <img src="assets/img/patients/patient2.jpg" alt="User Image" />
                                                            </Link>
                                                            <div class="profile-det-info">
                                                                <h3>Arun</h3>
                                                                <div class="patient-details">
                                                                    <h5><b>Patient ID :</b> PT0002</h5>
                                                                    <h5 class="mb-0"><i class="fas fa-map-marker-alt"></i> Pune</h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="patient-info">
                                                        <ul>
                                                            <li>Phone <span>+91 1234567890</span></li>
                                                            <li>Age <span>23 Years, Male</span></li>
                                                            <li>Blood Group <span>B+</span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                       {/*  <div class="col-md-6 col-lg-4 col-xl-3">
                                            <div class="card widget-profile pat-widget-profile">
                                                <div class="card-body">
                                                    <div class="pro-widget-content">
                                                        <div class="profile-info-widget">
                                                            <a href="#" class="booking-doc-img">
                                                                <img src="assets/img/patients/patient3.jpg" alt="User Image" />
                                                            </a>
                                                            <div class="profile-det-info">
                                                                <h3>Niv Collazo</h3>
                                                                <div class="patient-details">
                                                                    <h5><b>Patient ID :</b> PT0003</h5>
                                                                    <h5 class="mb-0"><i class="fas fa-map-marker-alt"></i> Indiana, USA</h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="patient-info">
                                                        <ul>
                                                            <li>Phone <span>+1 260 724 7769</span></li>
                                                            <li>Age <span>32 Years, Male</span></li>
                                                            <li>Blood Group <span>A+</span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}

                                       {/*  <div class="col-md-6 col-lg-4 col-xl-3">
                                            <div class="card widget-profile pat-widget-profile">
                                                <div class="card-body">
                                                    <div class="pro-widget-content">
                                                        <div class="profile-info-widget">
                                                            <a href="#" class="booking-doc-img">
                                                                <img src="assets/img/patients/patient4.jpg" alt="User Image" />
                                                            </a>
                                                            <div class="profile-det-info">
                                                                <h3>Flo Sherrod</h3>
                                                                <div class="patient-details">
                                                                    <h5><b>Patient ID :</b> PT0004</h5>
                                                                    <h5 class="mb-0"><i class="fas fa-map-marker-alt"></i> Indiana, USA</h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="patient-info">
                                                        <ul>
                                                            <li>Phone <span>+1 504 368 6874</span></li>
                                                            <li>Age <span>25 Years, Female</span></li>
                                                            <li>Blood Group <span>B+</span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}

                                      {/*   <div class="col-md-6 col-lg-4 col-xl-3">
                                            <div class="card widget-profile pat-widget-profile">
                                                <div class="card-body">
                                                    <div class="pro-widget-content">
                                                        <div class="profile-info-widget">
                                                            <a href="#" class="booking-doc-img">
                                                                <img src="assets/img/patients/patient5.jpg" alt="User Image" />
                                                            </a>
                                                            <div class="profile-det-info">
                                                                <h3>Korva Weiner</h3>
                                                                <div class="patient-details">
                                                                    <h5><b>Patient ID :</b> PT0005</h5>
                                                                    <h5 class="mb-0"><i class="fas fa-map-marker-alt"></i> Florida, USA</h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="patient-info">
                                                        <ul>
                                                            <li>Phone <span>+1 954 820 7887</span></li>
                                                            <li>Age <span>25 Years, Female</span></li>
                                                            <li>Blood Group <span>AB-</span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}

                                        {/* <div class="col-md-6 col-lg-4 col-xl-3">
                                            <div class="card widget-profile pat-widget-profile">
                                                <div class="card-body">
                                                    <div class="pro-widget-content">
                                                        <div class="profile-info-widget">
                                                            <a href="#" class="booking-doc-img">
                                                                <img src="assets/img/patients/patient6.jpg" alt="User Image" />
                                                            </a>
                                                            <div class="profile-det-info">
                                                                <h3>Jafit Gagne</h3>
                                                                <div class="patient-details">
                                                                    <h5><b>Patient ID :</b> PT0006</h5>
                                                                    <h5 class="mb-0"><i class="fas fa-map-marker-alt"></i> Kentucky, USA</h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="patient-info">
                                                        <ul>
                                                            <li>Phone <span>+1 315 384 4562</span></li>
                                                            <li>Age <span>14 Years, Female</span></li>
                                                            <li>Blood Group <span>O-</span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
 */}
                                      {/*   <div class="col-md-6 col-lg-4 col-xl-3">
                                            <div class="card widget-profile pat-widget-profile">
                                                <div class="card-body">
                                                    <div class="pro-widget-content">
                                                        <div class="profile-info-widget">
                                                            <a href="#" class="booking-doc-img">
                                                                <img src="assets/img/patients/patient7.jpg" alt="User Image" />
                                                            </a>
                                                            <div class="profile-det-info">
                                                                <h3>Rieko Thrash</h3>
                                                                <div class="patient-details">
                                                                    <h5><b>Patient ID :</b> PT0007</h5>
                                                                    <h5 class="mb-0"><i class="fas fa-map-marker-alt"></i> California, USA</h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="patient-info">
                                                        <ul>
                                                            <li>Phone <span>+1 707 2202 603</span></li>
                                                            <li>Age <span>25 Years, Female</span></li>
                                                            <li>Blood Group <span>A-</span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}

                                      {/*   <div class="col-md-6 col-lg-4 col-xl-3">
                                            <div class="card widget-profile pat-widget-profile">
                                                <div class="card-body">
                                                    <div class="pro-widget-content">
                                                        <div class="profile-info-widget">
                                                            <a href="#" class="booking-doc-img">
                                                                <img src="assets/img/patients/patient8.jpg" alt="User Image" />
                                                            </a>
                                                            <div class="profile-det-info">
                                                                <h3>Aryo Pryor</h3>
                                                                <div class="patient-details">
                                                                    <h5><b>Patient ID :</b> PT0007</h5>
                                                                    <h5 class="mb-0"><i class="fas fa-map-marker-alt"></i> New Jersey, USA</h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="patient-info">
                                                        <ul>
                                                            <li>Phone <span>+1 973 773 9497</span></li>
                                                            <li>Age <span>28 Years, Male</span></li>
                                                            <li>Blood Group <span>O+</span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}

                                       {/*  <div class="col-md-6 col-lg-4 col-xl-3">
                                            <div class="card widget-profile pat-widget-profile">
                                                <div class="card-body">
                                                    <div class="pro-widget-content">
                                                        <div class="profile-info-widget">
                                                            <a href="#" class="booking-doc-img">
                                                                <img src="assets/img/patients/patient9.jpg" alt="User Image" />
                                                            </a>
                                                            <div class="profile-det-info">
                                                                <h3>Ieuan Folsom</h3>
                                                                <div class="patient-details">
                                                                    <h5><b>Patient ID :</b> PT0009</h5>
                                                                    <h5 class="mb-0"><i class="fas fa-map-marker-alt"></i> Florida, USA</h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="patient-info">
                                                        <ul>
                                                            <li>Phone <span>+1 850 358 4445</span></li>
                                                            <li>Age <span>28 Years, Male</span></li>
                                                            <li>Blood Group <span>A+</span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
 */}
                                       {/*  <div class="col-md-6 col-lg-4 col-xl-3">
                                            <div class="card widget-profile pat-widget-profile">
                                                <div class="card-body">
                                                    <div class="pro-widget-content">
                                                        <div class="profile-info-widget">
                                                            <a href="#" class="booking-doc-img">
                                                                <img src="assets/img/patients/patient10.jpg" alt="User Image" />
                                                            </a>
                                                            <div class="profile-det-info">
                                                                <h3>Talfrin Archuleta</h3>
                                                                <div class="patient-details">
                                                                    <h5><b>Patient ID :</b> PT0010</h5>
                                                                    <h5 class="mb-0"><i class="fas fa-map-marker-alt"></i> California, USA</h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="patient-info">
                                                        <ul>
                                                            <li>Phone <span>+1 858 259 5285</span></li>
                                                            <li>Age <span>19 Years, Male</span></li>
                                                            <li>Blood Group <span>B+</span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
 */}
                                      {/*   <div class="col-md-6 col-lg-4 col-xl-3">
                                            <div class="card widget-profile pat-widget-profile">
                                                <div class="card-body">
                                                    <div class="pro-widget-content">
                                                        <div class="profile-info-widget">
                                                            <a href="#" class="booking-doc-img">
                                                                <img src="assets/img/patients/patient11.jpg" alt="User Image" />
                                                            </a>
                                                            <div class="profile-det-info">
                                                                <h3>Albert Sawyer</h3>
                                                                <div class="patient-details">
                                                                    <h5><b>Patient ID :</b> PT0011</h5>
                                                                    <h5 class="mb-0"><i class="fas fa-map-marker-alt"></i> Colorado, USA</h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="patient-info">
                                                        <ul>
                                                            <li>Phone <span>+1 303 607 7075</span></li>
                                                            <li>Age <span>9 Years, Male</span></li>
                                                            <li>Blood Group <span>A-</span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
 */}
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
export default Mypatients;