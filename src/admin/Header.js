import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <div>
                {/* 	<!-- Header --> */}
                <div class="header">

                    {/* 	<!-- Logo --> */}
                    <div class="header-left">
                        <Link to="/Home1" class="logo">
                            <img src="assets1/img/boda.png" alt="Logo" />
                        </Link>
                        <Link to="/" class="logo logo-small">
                            <img src="assets1/img/boda.png" alt="Logo" width="40" height="40" />
                        </Link>
                    </div>
                    {/* <!-- /Logo --> */}

                    <a href="javascript:void(0);" id="toggle_btn">
                        <i class="fe fe-text-align-left"></i>
                    </a>

                    <div class="top-nav-search">
                        <form>
                            <input type="text" class="form-control" placeholder="Search here" />
                            <button class="btn" type="submit"><i class="fa fa-search"></i></button>
                        </form>
                    </div>

                    {/* <!-- Mobile Menu Toggle --> */}
                    <a class="mobile_btn" id="mobile_btn">
                        <i class="fa fa-bars"></i>
                    </a>
                    {/* <!-- /Mobile Menu Toggle --> */}

                    {/* <!-- Header Right Menu --> */}
                    <ul class="nav user-menu">

                        {/* 	<!-- Notifications --> */}
                        <li class="nav-item dropdown noti-dropdown">
                            <Link to="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
                                <i class="fe fe-bell"></i> <span class="badge badge-pill">3</span>
                            </Link>
                            <div class="dropdown-menu notifications">
                                <div class="topnav-dropdown-header">
                                    <span class="notification-title">Notifications</span>
                                    <a href="javascript:void(0)" class="clear-noti"> Clear All </a>
                                </div>
                                <div class="noti-content">
                                    <ul class="notification-list">
                                        <li class="notification-message">
                                            <Link to="#">
                                                <div class="media">
                                                    <span class="avatar avatar-sm">
                                                        <img class="avatar-img rounded-circle" alt="User Image" src="assets1/img/doctors/doctor-thumb-01.jpg" />
                                                    </span>
                                                    <div class="media-body">
                                                        <p class="noti-details"><span class="noti-title">Dr. Fahim</span> Schedule <span class="noti-title">her appointment</span></p>
                                                        <p class="noti-time"><span class="notification-time">4 mins ago</span></p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li class="notification-message">
                                            <Link to="#">
                                                <div class="media">
                                                    <span class="avatar avatar-sm">
                                                        <img class="avatar-img rounded-circle" alt="User Image" src="assets1/img/patients/patient1.jpg" />
                                                    </span>
                                                    <div class="media-body">
                                                        <p class="noti-details"><span class="noti-title">Rohini</span> has booked her appointment to <span class="noti-title">Dr. Fahim</span></p>
                                                        <p class="noti-time"><span class="notification-time">6 mins ago</span></p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li class="notification-message">
                                            <Link to="#">
                                                <div class="media">
                                                    <span class="avatar avatar-sm">
                                                        <img class="avatar-img rounded-circle" alt="User Image" src="assets1/img/patients/patient2.jpg" />
                                                    </span>
                                                    <div class="media-body">
                                                        <p class="noti-details"><span class="noti-title">Arun</span> sent a amount of 210 for his <span class="noti-title">appointment</span></p>
                                                        <p class="noti-time"><span class="notification-time">8 mins ago</span></p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li class="notification-message">
                                            <Link to="#">
                                                <div class="media">
                                                    <span class="avatar avatar-sm">
                                                        <img class="avatar-img rounded-circle" alt="User Image" src="assets1/img/patients/patient3.jpg" />
                                                    </span>
                                                    <div class="media-body">
                                                        <p class="noti-details"><span class="noti-title">Nivin</span> send a message <span class="noti-title"> to his doctor</span></p>
                                                        <p class="noti-time"><span class="notification-time">12 mins ago</span></p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div class="topnav-dropdown-footer">
                                    <Link to="#">View all Notifications</Link>
                                </div>
                            </div>
                        </li>
                        {/* <!-- /Notifications -->

<!-- User Menu --> */}
                        <li class="nav-item dropdown has-arrow">
                            <Link to="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
                                <span class="user-img"><img class="rounded-circle" src="assets1/img/profiles/avatar-01.jpg" width="31" alt="Leelan" /></span>
                            </Link>
                            <div class="dropdown-menu">
                                <div class="user-header">
                                    <div class="avatar avatar-sm">
                                        <img src="assets1/img/profiles/avatar-01.jpg" alt="User Image" class="avatar-img rounded-circle" />
                                    </div>
                                    <div class="user-text">
                                        <h6>Arif</h6>
                                        <p class="text-muted mb-0">Administrator</p>
                                    </div>
                                </div>
                                <Link class="dropdown-item" to="/Profile">My Profile</Link>
                                <Link class="dropdown-item" to="/Settings">Settings</Link>
                                <Link class="dropdown-item" to="/Login1">Logout</Link>
                            </div>
                        </li>
                        {/* <!-- /User Menu --> */}

                    </ul>
                    {/* <!-- /Header Right Menu --> */}

                </div>
            </div>
        )
    }
}

export default Header;