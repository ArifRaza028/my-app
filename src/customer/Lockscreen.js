import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Lockscreen extends React.Component{
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
								<div class="lock-user">
									<img class="rounded-circle" src="assets1/img/profiles/avatar-02.jpg" alt="User Image"/>
									<h4>Arif Raza</h4>
								</div>
								
								{/* <!-- Form --> */}
								<form action="http://localhost:3000/Home1">
									<div class="form-group">
										<input class="form-control" type="text" placeholder="Password"/>
									</div>
									<div class="form-group mb-0">
										<button class="btn btn-primary btn-block" type="submit">Enter</button>
									</div>
								</form>
								{/* <!-- /Form --> */}
								
								<div class="text-center dont-have">Sign in as a different user? <Link to="/Login1">Login</Link></div>
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
export default Lockscreen;