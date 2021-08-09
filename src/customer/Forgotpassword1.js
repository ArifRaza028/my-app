import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Forgotpassword1 extends React.Component{
    render(){
        return(
            <div>
       {/*  <!-- Main Wrapper --> */}
        <div class="main-wrapper login-body">
            <div class="login-wrapper">
            	<div class="container">
                	<div class="loginbox">
                    	<div class="login-left">
							<img class="img-fluid" src="assets1/img/boda.png" alt="Logo"/>
                        </div>
                        <div class="login-right">
							<div class="login-right-wrap">
								<h1>Forgot Password?</h1>
								<p class="account-subtitle">Enter your email to get a password reset link</p>
								
								{/* <!-- Form --> */}
								<form action="http://localhost:3000/Login1">
									<div class="form-group">
										<input class="form-control" type="text" placeholder="Email"/>
									</div>
									<div class="form-group mb-0">
										<button class="btn btn-primary btn-block" type="submit">Reset Password</button>
									</div>
								</form>
							{/* 	<!-- /Form --> */}
								
								<div class="text-center dont-have">Remember your password? <Link to="/Login1">Login</Link></div>
							</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
		{/* <!-- /Main Wrapper -->
		
		<!-- jQuery --> */}
        <script src="assets1/js/jquery-3.2.1.min.js"></script>
		
		{/* <!-- Bootstrap Core JS --> */}
        <script src="assets1/js/popper.min.js"></script>
        <script src="assets1/js/bootstrap.min.js"></script>
		
		{/* <!-- Custom JS --> */}
		<script src="assets1/js/script.js"></script>
		
     </div>
        )
    }
}
export default Forgotpassword1;