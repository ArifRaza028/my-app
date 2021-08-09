import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../customer/Header';
import Footer from '../customer/Footer';

class Termcondition extends React.Component {
	render() {
		return (
			<div>
				<Header />
				{/* <!-- Main Wrapper --> */}
				<div class="main-wrapper">


					<div class="asd breadcrumb-bar">
						<div class="container-fluid">
							<div class="row align-items-center">
								<div class="col-md-12 col-12">
									<nav aria-label="breadcrumb" class="page-breadcrumb">
										<ol class="breadcrumb">
											<li class="breadcrumb-item"><Link to="/">Home</Link></li>
											<li class="breadcrumb-item active" aria-current="page">Terms and Conditions</li>
										</ol>
									</nav>
									<h2 class="breadcrumb-title">Terms and Conditions</h2>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- /Breadcrumb -->
			
			<!-- Page Content --> */}
					<div class="content">
						<div class="container">
							<div class="row">
								<div class="col-12">
									<div class="terms-content">
										<div class="terms-text">
											<h3>Etiam blandit   lacus</h3>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
											<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
										</div>
										<div class="terms-text">
											<h4>Etiam sed fermentum lectus. Quisque vitae ipsum libero</h4>
											<p>Phasellus sit amet vehicula arcu. Etiam pulvinar dui libero, vitae fringilla nulla convallis in. Fusce sagittis cursus nisl, at consectetur elit vestibulum vestibulum:</p>
											<ul>
												<li>Nunc pulvinar efficitur interdum.</li>
												<li>Donec feugiat feugiat pulvinar.</li>
												<li>Suspendisse eu risus feugiat, pellentesque arcu eu, molestie lorem. </li>
												<li>Duis non leo commodo, euismod ipsum a, feugiat libero.</li>
											</ul>
										</div>
										<div class="terms-text">
											<h3>Etiam blandit   lacus</h3>
											<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
											<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
										</div>
										<div class="terms-text">
											<h3>Maecenas sit amet</h3>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<Footer /></div>

				</div>

			</div>
		)
	}
}
export default Termcondition;