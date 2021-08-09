import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../customer/Header';
import Footer from '../customer/Footer';

class Register extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <body class="account-page">

                    {/* <!-- Main Wrapper --> */}
                    <div class="main-wrapper">


                        <div class="content">
                            <div class="container-fluid">

                                <div class="row">
                                    <div class="col-md-8 offset-md-2">

                                        {/*   <!-- Register Content --> */}
                                        <div class="account-content">
                                            <div class="row align-items-center justify-content-center">
                                                <div class="col-md-5 col-lg-6 login-left">
                                                    <img src="assets/img/login-banner.png" class="img-fluid" alt="Boda Register" />
                                                </div>
                                                <div class="col-md-12 col-lg-6 login-right">
                                                    <div class="login-header">
                                                        <h3>Patient Register <Link to="/Doctorregister">Are you a Doctor?</Link></h3>
                                                    </div>

                                                    {/* <!-- Register Form --> */}
                                                    <form action="http://localhost:3000/Patientdashboard">
                                                        <div class="form-group form-focus">
                                                            <input type="text" class="form-control floating" />
                                                            <label class="focus-label">Full Name</label>
                                                        </div>
                                                        <div class="form-group form-focus">
                                                            <input type="email" class="form-control floating" />
                                                            <label class="focus-label">Email</label>
                                                        </div>
                                                        <div class="form-group form-focus">
                                                            <input type="text" class="form-control floating" />
                                                            <label class="focus-label">Mobile Number</label>
                                                        </div>
                                                        <div class="form-group form-focus">
                                                            <input type="password" class="form-control floating" />
                                                            <label class="focus-label">Create Password</label>
                                                        </div>
                                                        <div class="terms-and-policy pt-2 pb-2">
                                                            <input type="checkbox" required name="checkbox" value="check" id="agree" /><span class="agree">I agree to these <span class="terms">
                                                            <Link to="/Termcondition" target="_blank">Terms of Use</Link> and <Link to="Privacypolicy" target="_blank">Privacy Policy</Link></span></span>
                                                        </div>
                                                        
                                                        <div class="text-right">
                                                            <Link class="forgot-link" to="/Login">Already have an account?</Link>
                                                        </div>
                                                        <button class="btn btn-primary btn-block btn-lg login-btn" type="submit">Signup</button>
                                                        <div class="login-or">
                                                            <span class="or-line"></span>
                                                            <span class="span-or">or</span>
                                                        </div>
                                                        <div class="row form-row social-login">
                                                            <div class="col-6">
                                                                <Link to="#" class=" btn-facebook btn-block"><i class="fab fa-facebook-f mr-1"></i> Login</Link>
                                                            </div>
                                                            <div class="col-6">
                                                                <Link to="#" class="btn-google btn-block"><i class="fab fa-google mr-1"></i> Login</Link>
                                                            </div>
                                                        </div>
                                                    </form>
                                                    {/* <!-- /Register Form --> */}

                                                </div>
                                            </div>
                                        </div>
                                        {/*  <!-- /Register Content --> */}

                                    </div>
                                </div>

                            </div>

                        </div>
                        <Footer /></div>


                </body>
            </div>
        )
    }
}
export default Register;
