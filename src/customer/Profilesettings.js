import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../customer/Header';
import Footer from '../customer/Footer';

class Profilesettings extends React.Component {
    render() {
        return (
            <div>
            <Header/>
                  {/* <!-- Main Wrapper --> */}
                <div class="main-wrapper">

                    
                    <div class=" asd breadcrumb-bar">
                        <div class="container-fluid">
                            <div class="row align-items-center">
                                <div class="col-md-12 col-12">
                                    <nav aria-label="breadcrumb" class="page-breadcrumb">
                                        <ol class="breadcrumb">
                                            <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                                            <li class="breadcrumb-item active" aria-current="page">Profile Settings</li>
                                        </ol>
                                    </nav>
                                    <h2 class="breadcrumb-title">Profile Settings</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /Breadcrumb -->
			
			<!-- Page Content --> */}
                    <div class="content">
                        <div class="container-fluid">
                            <div class="row">

                                {/* <!-- Profile Sidebar --> */}
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
                                                        <h5 class="mb-0"><i class="fas fa-map-marker-alt"></i>Pune, India</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="dashboard-widget">
                                            <nav class="dashboard-menu">
                                                <ul>
                                                    <li>
                                                        <Link to="#">
                                                            <i class="fas fa-columns"></i>
                                                            <span>Dashboard</span>
                                                        </Link>
                                                    </li>
                                                    <li>
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
                                                    <li class="active">
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
                                {/* <!-- /Profile Sidebar --> */}

                                <div class="col-md-7 col-lg-8 col-xl-9">
                                    <div class="card">
                                        <div class="card-body">

                                            {/* <!-- Profile Settings Form --> */}
                                            <form>
                                                <div class="row form-row">
                                                    <div class="col-12 col-md-12">
                                                        <div class="form-group">
                                                            <div class="change-avatar">
                                                                <div class="profile-img">
                                                                    <img src="assets/img/patients/patient.jpg" alt="User Image" />
                                                                </div>
                                                                <div class="upload-img">
                                                                    <div class="change-photo-btn">
                                                                        <span><i class="fa fa-upload"></i> Upload Photo</span>
                                                                        <input type="file" class="upload" />
                                                                    </div>
                                                                    <small class="form-text text-muted">Allowed JPG, GIF or PNG. Max size of 2MB</small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-12 col-md-6">
                                                        <div class="form-group">
                                                            <label>First Name</label>
                                                            <input type="text" class="form-control" value="Ganesh" />
                                                        </div>
                                                    </div>
                                                    <div class="col-12 col-md-6">
                                                        <div class="form-group">
                                                            <label>Last Name</label>
                                                            <input type="text" class="form-control" value="Ganesh" />
                                                        </div>
                                                    </div>
                                                    <div class="col-12 col-md-6">
                                                        <div class="form-group">
                                                            <label>Date of Birth</label>
                                                            <div class="cal-icon">
                                                                <input type="text" class="form-control datetimepicker" value="24-07-1983" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-12 col-md-6">
                                                        <div class="form-group">
                                                            <label>Blood Group</label>
                                                            <select class="form-control select">
                                                                <option>A-</option>
                                                                <option>A+</option>
                                                                <option>B-</option>
                                                                <option>B+</option>
                                                                <option>AB-</option>
                                                                <option>AB+</option>
                                                                <option>O-</option>
                                                                <option>O+</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="col-12 col-md-6">
                                                        <div class="form-group">
                                                            <label>Email ID</label>
                                                            <input type="email" class="form-control" value="ganesh@example.com" />
                                                        </div>
                                                    </div>
                                                    <div class="col-12 col-md-6">
                                                        <div class="form-group">
                                                            <label>Mobile</label>
                                                            <input type="text" value="+91 1234567890" class="form-control" />
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <div class="form-group">
                                                            <label>Address</label>
                                                            <input type="text" class="form-control" value="pune" />
                                                        </div>
                                                    </div>
                                                    <div class="col-12 col-md-6">
                                                        <div class="form-group">
                                                            <label>City</label>
                                                            <input type="text" class="form-control" value="Pune" />
                                                        </div>
                                                    </div>
                                                    <div class="col-12 col-md-6">
                                                        <div class="form-group">
                                                            <label>State</label>
                                                            <input type="text" class="form-control" value="Maharashtra" />
                                                        </div>
                                                    </div>
                                                    <div class="col-12 col-md-6">
                                                        <div class="form-group">
                                                            <label>Zip Code</label>
                                                            <input type="text" class="form-control" value="411031" />
                                                        </div>
                                                    </div>
                                                    <div class="col-12 col-md-6">
                                                        <div class="form-group">
                                                            <label>Country</label>
                                                            <input type="text" class="form-control" value="India" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="submit-section">
                                                    <button type="submit" class="btn btn-primary submit-btn">Save Changes</button>
                                                </div>
                                            </form>
                                            {/* <!-- /Profile Settings Form --> */}

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
export default Profilesettings;
