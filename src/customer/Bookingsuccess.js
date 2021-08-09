import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../customer/Header';
import Footer from '../customer/Footer';

class Bookingsuccess extends React.Component {
    render() {
        return (
            <div>
                <Header />

                {/* <!-- Breadcrumb --> */}
                <div class=" asd breadcrumb-bar">
                    <div class="container-fluid">
                        <div class="row align-items-center">
                            <div class="col-md-12 col-12">
                                <nav aria-label="breadcrumb" class="page-breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><Link to="/Home">Home</Link></li>
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
                <div class="content success-page-cont">
                    <div class="container-fluid">

                        <div class="row justify-content-center">
                            <div class="col-lg-6">

                                {/* <!-- Success Card --> */}
                                <div class="card success-card">
                                    <div class="card-body">
                                        <div class="success-cont">
                                            <i class="fas fa-check"></i>
                                            <h3>Appointment booked Successfully!</h3>
                                            <p>Appointment booked with <strong>Dr. Loren Bivens</strong><br /> on <strong>12 Nov 2019 5:00PM to 6:00PM</strong></p>
                                            <a href="/Invoiceview" class="btn btn-primary view-inv-btn">View Invoice</a>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- /Success Card --> */}

                            </div>
                        </div>

                    </div>
                </div>
                {/* <!-- /Page Content --> */}
                <Footer /></div>



        )
    }
}
export default Bookingsuccess;
