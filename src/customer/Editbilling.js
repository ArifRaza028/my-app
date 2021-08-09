import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../customer/Header';
import Footer from '../customer/Footer';

class Editbilling extends React.Component {
    render() {
        return (
            <div>

            <Header/>
                {/*     <!-- Main Wrapper --> */}
                <div class="main-wrapper">

                    <div class=" asd breadcrumb-bar">
                        <div class="container-fluid">
                            <div class="row align-items-center">
                                <div class="col-md-12 col-12">
                                    <nav aria-label="breadcrumb" class="page-breadcrumb">
                                        <ol class="breadcrumb">
                                            <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                                            <li class="breadcrumb-item active" aria-current="page">Edit Billing</li>
                                        </ol>
                                    </nav>
                                    <h2 class="breadcrumb-title">Edit Billing</h2>
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

                                    {/* <!-- Profile Widget --> */}
                                    <div class="card widget-profile pat-widget-profile">
                                        <div class="card-body">
                                            <div class="pro-widget-content">
                                                <div class="profile-info-widget">
                                                    <Link to="#" class="booking-doc-img">
                                                        <img src="assets/img/patients/patient.jpg" alt="User Image" />
                                                    </Link>
                                                    <div class="profile-det-info">
                                                        <h3><Link to="/Patientsprofile">Ganesh</Link></h3>
                                                        <div class="patient-details">
                                                            <h5><b>Patient ID :</b> PT0016</h5>
                                                            <h5 class="mb-0"><i class="fas fa-map-marker-alt"></i> Pune, India</h5>
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
                                    {/* <!-- /Profile Widget --> */}

                                </div>

                                <div class="col-md-7 col-lg-8 col-xl-9">
                                    <div class="card">
                                        <div class="card-header">
                                            <h4 class="card-title mb-0">Edit Billing</h4>
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <div class="biller-info">
                                                        <h4 class="d-block">Dr. Bipin</h4>
                                                        <span class="d-block text-sm text-muted">Dentist</span>
                                                        <span class="d-block text-sm text-muted">Pune, India</span>
                                                    </div>
                                                </div>
                                                <div class="col-sm-6 text-sm-right">
                                                    <div class="billing-info">
                                                        <h4 class="d-block">1 November 2019</h4>
                                                        <span class="d-block text-muted">#INV0001</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* 	<!-- Add Item --> */}
                                            <div class="add-more-item text-right">
                                                <Link to="#"><i class="fa fa-plus-circle"></i> Add Item</Link>
                                            </div>
                                            {/* <!-- /Add Item -->
									
									<!-- Billing Item --> */}
                                            <div class="card card-table">
                                                <div class="card-body">
                                                    <div class="table-responsive">
                                                        <table class="table table-hover table-center">
                                                            <thead>
                                                                <tr>
                                                                    <th>Title</th>
                                                                    <th>Amount</th>
                                                                    <th style="width:80px;"></th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <input type="text" class="form-control" value="Consulting Fee" />
                                                                    </td>
                                                                    <td>
                                                                        <input type="text" class="form-control" value="330" />
                                                                    </td>
                                                                    <td>
                                                                        <Link to="#" class="btn bg-danger-light trash"><i class="far fa-trash-alt"></i></Link>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <input type="text" class="form-control" value="Video Calling Appointment" />
                                                                    </td>
                                                                    <td>
                                                                        <input type="text" class="form-control" value="100" />
                                                                    </td>
                                                                    <td>
                                                                        <Link to="#" class="btn bg-danger-light trash"><i class="far fa-trash-alt"></i></Link>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- /Billing Item -->
									
									<!-- Signature --> */}
                                            <div class="row">
                                                <div class="col-md-12 text-right">
                                                    <div class="signature-wrap">
                                                        <div class="signature">
                                                            Click here to sign
                                                        </div>
                                                        <div class="sign-name">
                                                            <p class="mb-0">( Dr. Loren Bivens )</p>
                                                            <span class="text-muted">Signature</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- /Signature -->
									
									<!-- Submit Section --> */}
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="submit-section">
                                                        <button type="submit" class="btn btn-primary submit-btn">Save</button>
                                                        <button type="reset" class="btn btn-secondary submit-btn">Clear</button>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- /Submit Section --> */}

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

export default Editbilling;
