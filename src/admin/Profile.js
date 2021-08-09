import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../admin/Header';

class Profile extends React.Component {
	render() {
		return (
			<div>
			<Header/>
				{/* 	<!-- Main Wrapper --> */}
				<div class="main-wrapper">

					
					<div class="sidebar" id="sidebar">
						<div class="sidebar-inner slimscroll">
							<div id="sidebar-menu" class="sidebar-menu">
								<ul>
									<li class="menu-title">
										<span>Main</span>
									</li>
									<li>
										<Link to="/Home1"><i class="fe fe-home"></i> <span>Dashboard</span></Link>
									</li>
									<li>
										<Link to="/Appointmentlist"><i class="fe fe-layout"></i> <span>Appointments</span></Link>
									</li>
									<li>
										<Link to="/Specialities"><i class="fe fe-users"></i> <span>Specialities</span></Link>
									</li>
									<li>
										<Link to="/Doctorlist"><i class="fe fe-user-plus"></i> <span>Doctors</span></Link>
									</li>
									<li>
										<Link to="/Patientlist"><i class="fe fe-user"></i> <span>Patients</span></Link>
									</li>
									<li>
										<Link to="/Review"><i class="fe fe-star-o"></i> <span>Reviews</span></Link>
									</li>
									<li>
										<Link to="/Transactionslist"><i class="fe fe-activity"></i> <span>Transactions</span></Link>
									</li>
									<li>
										<Link to="/Settings"><i class="fe fe-vector"></i> <span>Settings</span></Link>
									</li>
									<li class="submenu" >
										<a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fe fe-document"></i> <span> Reports</span></a>
										<ul class="dropdown-menu">
											<li class="active"><a href="/Invoicereport">Invoice Reports</a></li>
										</ul>
									</li>
									<li class="menu-title">
										<span>Pages</span>
									</li>
									<li class="active">
										<Link to="/Profile"><i class="fe fe-user-plus"></i> <span>Profile</span></Link>
									</li>
									{/* <li class="submenu">
										<Link to="#"><i class="fe fe-document"></i> <span> Authentication </span> <span class="menu-arrow"></span></Link>
										<ul style={{ display: 'none' }}>
										<li><Link to="/Login1"> Login </Link></li>
										<li><Link to="/Register1"> Register </Link></li>
										<li><Link to="/Forgotpassword1"> Forgot Password </Link></li>
										<li><Link to="/Lockscreen"> Lock Screen </Link></li>


									</li> */}
									{/* <li class="submenu">
										<Link to="#"><i class="fe fe-warning"></i> <span> Error Pages </span> <span class="menu-arrow"></span></Link>
										<ul style={{ display: 'none' }}>
										<li><Link to="/Error404">404 Error </Link></li>
										<li><Link to="/Error500">500 Error </Link></li>


									</li> */}
									{/* <li>
										<Link to="/Blankpage1"><i class="fe fe-file"></i> <span>Blank Page</span></Link>
									</li> */}
									{	/* <li class="menu-title"> 
								<span>UI Interface</span>
							</li>
							<li> 
								<Link to="/Components1"><i class="fe fe-vector"></i> <span>Components</span></Link>
		</li> */}
									{/* <li class="submenu">
										<Link to="#"><i class="fe fe-layout"></i> <span> Forms </span> <span class="menu-arrow"></span></Link>
										<ul style={{ display: 'none' }}>
										<li><Link to="/Formbasicinputs">Basic Inputs </Link></li>
										<li><Link to="/Forminputgroups">Input Groups </Link></li>
										<li><Link to="/Formhorizontal">Horizontal Form </Link></li>
										<li><Link to="/Formvertical"> Vertical Form </Link></li>
										<li><Link to="/Formmask"> Form Mask </Link></li>
										<li><Link to="/Formvalidation"> Form Validation </Link></li>


									</li> */}
									{/* <li class="submenu">
										<Link to="#"><i class="fe fe-table"></i> <span> Tables </span> <span class="menu-arrow"></span></Link>
										<ul style={{ display: 'none' }}>
										<li><Link to="/Tablesbasic">Basic Tables </Link></li>
										<li><Link to="/Datatables">Data Table </Link></li>


									</li> */}
									{/* <li class="submenu">
										<a href="javascript:void(0);"><i class="fe fe-code"></i> <span>Multi Level</span> <span class="menu-arrow"></span></a>
										<ul style={{ display: 'none' }}>
										<li class="submenu">
											<a href="javascript:void(0);"> <span>Level 1</span> <span class="menu-arrow"></span></a>
											<ul style={{ display: 'none' }}>
											<li><a href="javascript:void(0);"><span>Level 2</span></a></li>
											<li class="submenu">
												<a href="javascript:void(0);"> <span> Level 2</span> <span class="menu-arrow"></span></a>
												<ul style={{ display: 'none' }}>
												<li><a href="javascript:void(0);">Level 3</a></li>
												<li><a href="javascript:void(0);">Level 3</a></li>


											</li>
											<li><a href="javascript:void(0);"> <span>Level 2</span></a></li>


										</li>
										<li>
											<a href="javascript:void(0);"> <span>Level 1</span></a>
										</li>


									</li> */}
								</ul>
							</div>
						</div>
					</div>
					{/* <!-- /Sidebar -->
			
			<!-- Page Wrapper --> */}
					<div class="page-wrapper">
						<div class="content container-fluid">

							{/* <!-- Page Header --> */}
							<div class="page-header">
								<div class="row">
									<div class="col">
										<h3 class="page-title">Profile</h3>
										<ul class="breadcrumb">
											<li class="breadcrumb-item"><Link to="/Home1">Dashboard</Link></li>
											<li class="breadcrumb-item active">Profile</li>
										</ul>
									</div>
								</div>
							</div>
							{/* <!-- /Page Header --> */}

							<div class="row">
								<div class="col-md-12">
									<div class="profile-header">
										<div class="row align-items-center">
											<div class="col-auto profile-image">
												<Link to="#">
													<img class="rounded-circle" alt="User Image" src="assets1/img/profiles/avatar-01.jpg" />
												</Link>
											</div>
											<div class="col ml-md-n2 profile-user-info">
												<h4 class="user-name mb-0">Arif Raza</h4>
												<h6 class="text-muted">arifraza028@gmail.com</h6>
												<div class="user-Location"><i class="fa fa-map-marker"></i> Pune,India</div>
												<div class="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
											</div>
											<div class="col-auto profile-btn">

												<a href="#" class="btn btn-primary">
													Edit
												</a>
											</div>
										</div>
									</div>
									<div class="profile-menu">
										<ul class="nav nav-tabs nav-tabs-solid">
											<li class="nav-item">
												<a class="nav-link active" data-toggle="tab" href="#per_details_tab">About</a>
											</li>
											<li class="nav-item">
												<a class="nav-link" data-toggle="tab" href="#password_tab">Password</a>
											</li>
										</ul>
									</div>
									<div class="tab-content profile-tab-cont">

										{/* <!-- Personal Details Tab --> */}
										<div class="tab-pane fade show active" id="per_details_tab">

											{/* <!-- Personal Details --> */}
											<div class="row">
												<div class="col-lg-12">
													<div class="card">
														<div class="card-body">
															<h5 class="card-title d-flex justify-content-between">
																<span>Personal Details</span>
																<a class="edit-link" data-toggle="modal" href="#edit_personal_details"><i class="fa fa-edit mr-1"></i>Edit</a>
															</h5>
															<div class="row">
																<p class="col-sm-2 text-muted text-sm-right mb-0 mb-sm-3">Name</p>
																<p class="col-sm-10">Arif Raza</p>
															</div>
															<div class="row">
																<p class="col-sm-2 text-muted text-sm-right mb-0 mb-sm-3">Date of Birth</p>
																<p class="col-sm-10">25 Feb 1998</p>
															</div>
															<div class="row">
																<p class="col-sm-2 text-muted text-sm-right mb-0 mb-sm-3">Email ID</p>
																<p class="col-sm-10">arifraza028gmail.com</p>
															</div>
															<div class="row">
																<p class="col-sm-2 text-muted text-sm-right mb-0 mb-sm-3">Mobile</p>
																<p class="col-sm-10">1234567899</p>
															</div>
															<div class="row">
																<p class="col-sm-2 text-muted text-sm-right mb-0">Address</p>
																<p class="col-sm-10 mb-0">Pune,<br />
																	wadi,<br />
																	Pune City ,<br />
																	India.</p>
															</div>
														</div>
													</div>



												</div>


											</div>
											{/* <!-- /Personal Details --> */}

										</div>
										{/* <!-- /Personal Details Tab -->
								
								<!-- Change Password Tab --> */}
										<div id="password_tab" class="tab-pane fade">

											<div class="card">
												<div class="card-body">
													<h5 class="card-title">Change Password</h5>
													<div class="row">
														<div class="col-md-10 col-lg-6">
															<form>
																<div class="form-group">
																	<label>Old Password</label>
																	<input type="password" class="form-control" />
																</div>
																<div class="form-group">
																	<label>New Password</label>
																	<input type="password" class="form-control" />
																</div>
																<div class="form-group">
																	<label>Confirm Password</label>
																	<input type="password" class="form-control" />
																</div>
																<button class="btn btn-primary" type="submit">Save Changes</button>
															</form>
														</div>
													</div>
												</div>
											</div>
										</div>
										{/* <!-- /Change Password Tab --> */}

									</div>
								</div>
							</div>

						</div>

					</div>
					{/* <!-- /Page Wrapper --> */}

				</div>
				{/* <!-- /Main Wrapper -->
		
		<!-- jQuery --> */}
				<script src="assets1/js/jquery-3.2.1.min.js"></script>

				{/* <!-- Bootstrap Core JS --> */}
				<script src="assets1/js/popper.min.js"></script>
				<script src="assets1/js/bootstrap.min.js"></script>

				{/* <!-- Slimscroll JS --> */}
				<script src="assets1/plugins/slimscroll/jquery.slimscroll.min.js"></script>

				{/* <!-- Custom JS --> */}
				<script src="assets1/js/script.js"></script>
				{/* 	<!-- Edit Details Modal --> */}
				<div class="modal fade" id="edit_personal_details" aria-hidden="true" role="dialog">
					<div class="modal-dialog modal-dialog-centered" role="document" >
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title">Personal Details</h5>
								<button type="button" class="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body">
								<form>
									<div class="row form-row">
										<div class="col-12 col-sm-6">
											<div class="form-group">
												<label>First Name</label>
												<input type="text" class="form-control" value="First Name" />
											</div>
										</div>
										<div class="col-12 col-sm-6">
											<div class="form-group">
												<label>Last Name</label>
												<input type="text" class="form-control" value="Last Name" />
											</div>
										</div>
										<div class="col-12">
											<div class="form-group">
												<label>Date of Birth</label>
												<div class="cal-icon">
													<input type="text" class="form-control" value="DD-MM-YYYY" />
												</div>
											</div>
										</div>
										<div class="col-12 col-sm-6">
											<div class="form-group">
												<label>Email ID</label>
												<input type="email" class="form-control" value="arifraza028@gmail.com" />
											</div>
										</div>
										<div class="col-12 col-sm-6">
											<div class="form-group">
												<label>Mobile</label>
												<input type="text" value="+91 1234567890" class="form-control" />
											</div>
										</div>
										<div class="col-12">
											<h5 class="form-title"><span>Address</span></h5>
										</div>
										<div class="col-12">
											<div class="form-group">
												<label>Address</label>
												<input type="text" class="form-control" value="Pune ,India" />
											</div>
										</div>
										<div class="col-12 col-sm-6">
											<div class="form-group">
												<label>City</label>
												<input type="text" class="form-control" value="Pune" />
											</div>
										</div>
										<div class="col-12 col-sm-6">
											<div class="form-group">
												<label>State</label>
												<input type="text" class="form-control" value="Maharashtra" />
											</div>
										</div>
										<div class="col-12 col-sm-6">
											<div class="form-group">
												<label>Zip Code</label>
												<input type="text" class="form-control" value="411015" />
											</div>
										</div>
										<div class="col-12 col-sm-6">
											<div class="form-group">
												<label>Country</label>
												<input type="text" class="form-control" value="India" />
											</div>
										</div>
									</div>
									<button type="submit" class="btn btn-primary btn-block">Save Changes</button>
								</form>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- /Edit Details Modal --> */}

			</div>
		)
	}
}
export default Profile;