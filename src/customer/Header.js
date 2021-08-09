import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class  Header extends React.Component{
    render(){
        return(
            <div>
             {/* <!-- Header --> */}
             <header class="header home">
                        <div class="top-header">
                            <div class="container-fluid">
                                <div class="row justify-content-between align-items-center">
                                    <div class="col-12 col-md-6">
                                        <div class="left">
                                            <ul>
                                                <li><span><i class="fas fa-phone-alt"></i> Contact Number : +91  8234567891 </span></li>
                                                <li><span><i class="fas fa-map-marker-alt"></i> Location : Pune City</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <div class="right">
                                            <ul>
                                                <li><span><i class="fas fa-calendar-check"></i> Mon - Fri : 10.00 AM to 05.00 PM</span></li>
                                                {/*  <li class="dropdown language-select">
                                                    <span class="dropdown-toggle" id="language-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button"><i class="fas fa-globe-africa"></i> English</span>
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
                                <a id="mobile_btn" href="javascript:void(0);">
                                    <span class="bar-icon">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </span>
                                </a>
                                <Link to="/" class="navbar-brand boda">
                                    <img src="assets/img/boda.png" class="img-fluid" alt="Logo" />
                                </Link>
                            </div>
                            <div class="main-menu-wrapper">
                                <div class="menu-header">
                                    <Link to="/" class="menu-logo">
                                        <img src="assets/img/boda.png" class="img-fluid" alt="Logo" />
                                    </Link>
                                    <a id="menu_close" class="menu-close" href="javascript:void(0);">
                                        <i class="fas fa-times"></i>
                                    </a>
                                </div>
                                <ul class="main-nav">
                                    <li class="active">
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li class="has-submenu">
                                        {/* <Link to="#">Doctors <i class="fas fa-chevron-down"></i></Link> */}
                                        <ul class="submenu">
                                            <li><Link to="/Doctordashboard">Doctor Dashboard</Link></li>
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
                                    <li class="has-submenu">
                                        {/* <Link to="#">Patients <i class="fas fa-chevron-down"></i></Link> */}
                                        <ul class="submenu">
                                            {/* <li class="has-submenu">
                                                <Link to="#">Doctors</Link>
                                                <ul class="submenu">
                                                    <li><Link to="/Mapgrid">Map Grid</Link></li>
                                                    <li><Link to="/Maplist">Map List</Link></li>
                                                </ul>
                                            </li> */}
                                            <li><Link to="/Search">Search Doctor</Link></li>
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
                                    { /* <li class="has-submenu">
                                        <Link to="#">Blog <i class="fas fa-chevron-down"></i></Link>
                                        <ul class="submenu">
                                            <li><Link to="/Bloglist">Blog List</Link></li>
                                            <li><Link to="/Bloggrid">Blog Grid</Link></li>
                                            <li><Link to="/Blogdetails">Blog Details</Link></li>
                                        </ul>
                                            </li> */}
                                    {/*   <li>
                                        <Link to="/Home1" target="_blank">Admin</Link>
                                    </li> */}
                                </ul>
                            </div>
                            <ul class="nav header-navbar-rht">
                                <li class="nav-item">
                                    <Link class="nav-link header-login" to="/Login">login / Signup </Link>
                                </li>
                            </ul>
                            
                        </nav>
                        
                    </header>

            </div>
        )

    }
}
export default Header;
