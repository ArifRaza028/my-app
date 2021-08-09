import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../customer/Header';
import Footer from '../customer/Footer';

class Login extends React.Component {
    render() {
        return (
            <div>
            <Header/>

                <body class="account-page">

                    {/* <!-- Main Wrapper --> */}
                    <div class="main-wrapper">

                       
                        <div class="content">
                            <div class="container-fluid">

                                <div class="row">
                                    <div class="col-md-8 offset-md-2">

                                        {/* <!-- Login Tab Content --> */}
                                        <div class="account-content">
                                            <div class="row align-items-center justify-content-center">
                                                <div class="col-md-7 col-lg-6 login-left">
                                                    <img src="assets/img/login-banner.png" class="img-fluid" alt="Boda Login" />
                                                </div>
                                                <div class="col-md-12 col-lg-6 login-right">
                                                    <div class="login-header">
                                                        <h3>Login <span>Boda</span></h3>
                                                    </div>
                                                    <form action="http://localhost:3000/">
                                                        <div class="form-group form-focus">
                                                            <input type="email" class="form-control floating" />
                                                            <label class="focus-label">Email</label>
                                                        </div>
                                                        <div class="form-group form-focus">
                                                            <input type="password" class="form-control floating" />
                                                            <label class="focus-label">Password</label>
                                                        </div>
                                                        <div class="text-right">
                                                            <Link class="forgot-link" to="/Forgotpassword">Forgot Password ?</Link>
                                                        </div>
                                                        <button class="btn btn-primary btn-block btn-lg login-btn" type="submit">Login</button>
                                                        <div class="login-or">
                                                            <span class="or-line"></span>
                                                            <span class="span-or">or</span>
                                                        </div>
                                                        <div class="row form-row social-login">
                                                            <div class="col-6">
                                                                <a href="#" class=" btn-facebook btn-block"><i class="fab fa-facebook-f mr-1"></i> Login</a>
                                                            </div>
                                                            <div class="col-6">
                                                                <a href="#" class=" btn-google btn-block"><i class="fab fa-google mr-1"></i> Login</a>
                                                            </div>
                                                        </div><br></br>
                                                        <center><div >Don’t have an account? <Link to="/Register">Register</Link></div></center>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- /Login Tab Content --> */}

                                    </div>
                                </div>

                            </div>

                        </div>
                        <Footer/></div>
                       

                </body>
            </div>
        )
    }
}
export default Login;
