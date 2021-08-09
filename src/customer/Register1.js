import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Register1 extends React.Component{
    render(){
        return(
            <div>
    	{/* 	<!-- Main Wrapper --> */}
        <div class="main-wrapper login-body">
            <div class="login-wrapper">
            	<div class="container">
                	<div class="loginbox">
                    	<div class="login-left">
							<img class="img-fluid" src="assets1/img/boda.png" alt="Logo"/>
                        </div>
                        <div class="login-right">
							<div class="login-right-wrap">
								<h1>Register</h1>
								<p class="account-subtitle">Access to our dashboard</p>
								
								{/* <!-- Form --> */}
								<form action="http://localhost:3000/Login1">
									<div class="form-group">
										<input class="form-control" type="text" placeholder="Name"/>
									</div>
									<div class="form-group">
										<input class="form-control" type="text" placeholder="Email"/>
									</div>
									<div class="form-group">
										<input class="form-control" type="text" placeholder="Password"/>
									</div>
									<div class="form-group">
										<input class="form-control" type="text" placeholder="Confirm Password"/>
									</div>
									<div class="form-group mb-0">
										<button class="btn btn-primary btn-block" type="submit">Register</button>
									</div>
								</form>
							{/* 	<!-- /Form --> */}
								
								<div class="login-or">
									<span class="or-line"></span>
									<span class="span-or">or</span>
								</div>
								
							{/* 	<!-- Social Login --> */}
								<div class="social-login">
									<span>Register with</span>
									<Link to="#" class="facebook"><i class="fa fa-facebook"></i></Link><Link to="#" class="google"><i class="fa fa-google"></i></Link>
								</div>
								{/* <!-- /Social Login --> */}
								
								<div class="text-center dont-have">Already have an account? <Link to="/Login1">Login</Link></div>
							</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
		{/* <!-- /Main Wrapper --> */}
		
		{/* <!-- jQuery --> */}
        <script src="assets1/js/jquery-3.2.1.min.js"></script>
		
	{/* 	<!-- Bootstrap Core JS --> */}
        <script src="assets1/js/popper.min.js"></script>
        <script src="assets1/js/bootstrap.min.js"></script>
		
		{/* <!-- Custom JS --> */}
		<script src="assets1/js/script.js"></script>
		
    
            </div>
        )
    }
}
export default Register1;