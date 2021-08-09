import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Login1 extends React.Component{
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
								<h1>Login</h1>
								<p class="account-subtitle">Access to our dashboard</p>
								
								{/* <!-- Form --> */}
								<form action="http://localhost:3000/Home1">
									<div class="form-group">
										<input class="form-control" type="text" placeholder="Email"/>
									</div>
									<div class="form-group">
										<input class="form-control" type="text" placeholder="Password"/>
									</div>
									<div class="form-group">
										<button class="btn btn-primary btn-block" type="submit">Login</button>
									</div>
								</form>
								{/* <!-- /Form --> */}
								
								<div class="text-center forgotpass"><Link to="/Forgotpassword1">Forgot Password?</Link></div>
								<div class="login-or">
									<span class="or-line"></span>
									<span class="span-or">or</span>
								</div>
								  
								{/* <!-- Social Login --> */}
								<div class="social-login">
									<span>Login with</span>
									<Link to="#" class="facebook"><i class="fa fa-facebook"></i></Link><Link to="#" class="google"><i class="fa fa-google"></i></Link>
								</div>
								{/* <!-- /Social Login --> */}
								
								<div class="text-center dont-have">Don’t have an account? <Link to="/Register1">Register</Link></div>
							</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	{/* 	<!-- /Main Wrapper --> */}
		
		{/* <!-- jQuery --> */}
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
export default Login1;