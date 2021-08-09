import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../admin/Header';

class Home1 extends React.Component {
	render() {
		return (
			<div>
			<Header/>
				{/* <!-- Main Wrapper --> */}
				<div class="main-wrapper">

					
				
					{/* <!-- Sidebar --> */}
					<div class="sidebar" id="sidebar">
						<div class="sidebar-inner slimscroll">
							<div id="sidebar-menu" class="sidebar-menu">
								<ul>
									<li class="menu-title">
										<span>Main</span>
									</li>
									<li class="active">
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
									<li>
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
					{/* 	<!-- /Sidebar -->
			 */}
					{/* 	<!-- Page Wrapper --> */}
					<div class="page-wrapper">

						<div class="content container-fluid">

							{/* 	<!-- Page Header --> */}
							<div class="page-header">
								<div class="row">
									<div class="col-sm-12">
										<h3 class="page-title">Welcome Admin!</h3>
										<ul class="breadcrumb">
											<li class="breadcrumb-item active">Dashboard</li>
										</ul>
									</div>
								</div>
							</div>
							{/* <!-- /Page Header --> */}

							<div class="row">
								<div class="col-xl-3 col-sm-6 col-12">
									<div class="card">
										<div class="card-body">
											<div class="dash-widget-header">
												<span class="dash-widget-icon text-primary border-primary">
													<i class="fe fe-users"></i>
												</span>
												<div class="dash-count">
													<h3>168</h3>
												</div>
											</div>
											<div class="dash-widget-info">
												<h6 class="text-muted">Doctors</h6>
												<div class="progress progress-sm">
													<div class="progress-bar bg-primary w-50"></div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="col-xl-3 col-sm-6 col-12">
									<div class="card">
										<div class="card-body">
											<div class="dash-widget-header">
												<span class="dash-widget-icon text-success">
													<i class="fe fe-credit-card"></i>
												</span>
												<div class="dash-count">
													<h3>487</h3>
												</div>
											</div>
											<div class="dash-widget-info">

												<h6 class="text-muted">Patients</h6>
												<div class="progress progress-sm">
													<div class="progress-bar bg-success w-50"></div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="col-xl-3 col-sm-6 col-12">
									<div class="card">
										<div class="card-body">
											<div class="dash-widget-header">
												<span class="dash-widget-icon text-danger border-danger">
													<i class="fe fe-money"></i>
												</span>
												<div class="dash-count">
													<h3>485</h3>
												</div>
											</div>
											<div class="dash-widget-info">

												<h6 class="text-muted">Appointment</h6>
												<div class="progress progress-sm">
													<div class="progress-bar bg-danger w-50"></div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="col-xl-3 col-sm-6 col-12">
									<div class="card">
										<div class="card-body">
											<div class="dash-widget-header">
												<span class="dash-widget-icon text-warning border-warning">
													<i class="fe fe-folder"></i>
												</span>
												<div class="dash-count">
													<h3>62523</h3>
												</div>
											</div>
											<div class="dash-widget-info">

												<h6 class="text-muted">Revenue</h6>
												<div class="progress progress-sm">
													<div class="progress-bar bg-warning w-50"></div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-md-12 col-lg-6">

									{/* 	<!-- Sales Chart --> */}
									<div class="card card-chart">
										<div class="card-header">
											<h4 class="card-title">Revenue</h4>
										</div>
										<div class="card-body">
											<div id="morrisArea"></div>
										</div>
									</div>
									{/* 	<!-- /Sales Chart --> */}

								</div>
								<div class="col-md-12 col-lg-6">

									{/* 	<!-- Invoice Chart --> */}
									<div class="card card-chart">
										<div class="card-header">
											<h4 class="card-title">Status</h4>
										</div>
										<div class="card-body">
											<div id="morrisLine"></div>
										</div>
									</div>
									{/* <!-- /Invoice Chart --> */}

								</div>
							</div>
							<div class="row">
								<div class="col-md-6 d-flex">

									{/* <!-- Recent Orders --> */}
									<div class="card card-table flex-fill">
										<div class="card-header">
											<h4 class="card-title">Doctors List</h4>
										</div>
										<div class="card-body">
											<div class="table-responsive">
												<table class="table table-hover table-center mb-0">
													<thead>
														<tr>
															<th>Doctor Name</th>
															<th>Speciality</th>
															<th>Earned</th>
															<th>Reviews</th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<td>
																<h2 class="table-avatar">
																	<Link to="/Profile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets1/img/doctors/doctor-thumb-01.jpg" alt="User Image" /></Link>
																	<Link to="/Profile">Dr.Sruti</Link>
																</h2>
															</td>
															<td>Dental</td>
															<td>3200.00</td>
															<td>
																<i class="fe fe-star text-warning"></i>
																<i class="fe fe-star text-warning"></i>
																<i class="fe fe-star text-warning"></i>
																<i class="fe fe-star text-warning"></i>
																<i class="fe fe-star-o text-secondary"></i>
															</td>
														</tr>
														<tr>
															<td>
																<h2 class="table-avatar">
																	<Link to="/Profile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets1/img/doctors/doctor-thumb-02.jpg" alt="User Image" /></Link>
																	<Link to="/Profile">Dr.Bipin</Link>
																</h2>
															</td>
															<td>Dental</td>
															<td>3100.00</td>
															<td>
																<i class="fe fe-star text-warning"></i>
																<i class="fe fe-star text-warning"></i>
																<i class="fe fe-star text-warning"></i>
																<i class="fe fe-star text-warning"></i>
																<i class="fe fe-star-o text-secondary"></i>
															</td>
														</tr>
														<tr>
															<td>
																<h2 class="table-avatar">
																	<Link to="/Profile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-03.jpg" alt="User Image" /></Link>
																	<Link to="/Profile">Dr.Jaya </Link>
																</h2>
															</td>
															<td>Cardiology</td>
															<td>4000.00</td>
															<td>
																<i class="fe fe-star text-warning"></i>
																<i class="fe fe-star text-warning"></i>
																<i class="fe fe-star text-warning"></i>
																<i class="fe fe-star text-warning"></i>
																<i class="fe fe-star-o text-secondary"></i>
															</td>
														</tr>
														<tr>
															<td>
																<h2 class="table-avatar">
																	<Link to="/Profile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-04.jpg" alt="User Image" /></Link>
																	<Link to="/Profile">Dr. Rinku</Link>
																</h2>
															</td>
															<td>Endodontics </td>
															<td>3200.00</td>
															<td>
																<i class="fe fe-star text-warning"></i>
																<i class="fe fe-star text-warning"></i>
																<i class="fe fe-star text-warning"></i>
																<i class="fe fe-star text-warning"></i>
																<i class="fe fe-star-o text-secondary"></i>
															</td>
														</tr>
														<tr>
															<td>
																<h2 class="table-avatar">
																	<Link to="/Profile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets1/img/doctors/doctor-thumb-05.jpg" alt="User Image" /></Link>
																	<Link to="/Profile">Dr. Ganesh</Link>
																</h2>
															</td>
															<td>Orthopaedics</td>
															<td>3500.00</td>
															<td>
																<i class="fe fe-star text-warning"></i>
																<i class="fe fe-star text-warning"></i>
																<i class="fe fe-star text-warning"></i>
																<i class="fe fe-star text-warning"></i>
																<i class="fe fe-star-o text-secondary"></i>
															</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
									</div>
									{/* <!-- /Recent Orders --> */}

								</div>
								<div class="col-md-6 d-flex">

									{/* <!-- Feed Activity --> */}
									<div class="card  card-table flex-fill">
										<div class="card-header">
											<h4 class="card-title">Patients List</h4>
										</div>
										<div class="card-body">
											<div class="table-responsive">
												<table class="table table-hover table-center mb-0">
													<thead>
														<tr>
															<th>Patient Name</th>
															<th>Phone</th>
															<th>Last Visit</th>
															<th>Paid</th>
														</tr>
													</thead>
													<tbody>

														<tr>
															<td>
																<h2 class="table-avatar">
																	<Link to="/Profile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets1/img/patients/patient2.jpg" alt="User Image" /></Link>
																	<Link to="/Profile">Arun </Link>
																</h2>
															</td>
															<td>2077299974</td>
															<td>22 May 2021</td>
															<td class="text-right">200.00</td>
														</tr>
														<tr>
															<td>
																<h2 class="table-avatar">
																	<Link to="/Profile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets1/img/patients/patient3.jpg" alt="User Image" /></Link>
																	<Link to="/Profile"> Soofi</Link>
																</h2>
															</td>
															<td>2607247769</td>
															<td>21 May 2021</td>
															<td class="text-right">250.00</td>
														</tr>
														<tr>
															<td>
																<h2 class="table-avatar">
																	<Link to="/Profile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets1/img/patients/patient4.jpg" alt="User Image" /></Link>
																	<Link to="/Profile"> Ankita</Link>
																</h2>
															</td>
															<td>5043686874</td>
															<td>21 May 2021</td>
															<td class="text-right">150.00</td>
														</tr>
														<tr>
															<td>
																<h2 class="table-avatar">
																	<Link to="/Profile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets1/img/patients/patient5.jpg" alt="User Image" /></Link>
																	<Link to="/Profile">Kamal</Link>
																</h2>
															</td>
															<td>9548207887</td>
															<td>18 May 2021</td>
															<td class="text-right">350.00</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
									</div>
									{/* <!-- /Feed Activity --> */}

								</div>
							</div>
							<div class="row">
								<div class="col-md-12">

									{/* <!-- Recent Orders --> */}
									<div class="card card-table">
										<div class="card-header">
											<h4 class="card-title">Appointment List</h4>
										</div>
										<div class="card-body">
											<div class="table-responsive">
												<table class="table table-hover table-center mb-0">
													<thead>
														<tr>
															<th>Doctor Name</th>
															<th>Speciality</th>
															<th>Patient Name</th>
															<th>Apointment Time</th>
															<th>Status</th>
															<th class="text-right">Amount</th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<td>
																<h2 class="table-avatar">
																	<Link to="/Profile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets1/img/doctors/doctor-thumb-01.jpg" alt="User Image" /></Link>
																	<Link to="/Profile">Dr. Sruti</Link>
																</h2>
															</td>
															<td>Dental</td>
															<td>
																<h2 class="table-avatar">
																	<Link to="/Profile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets1/img/patients/patient1.jpg" alt="User Image" /></Link>
																	<Link to="/Profile">Rohini</Link>
																</h2>
															</td>
															<td>9 May 2021 <span class="text-primary d-block">11.00 AM - 11.15 AM</span></td>
															<td>
																<div class="status-toggle">
																	<input type="checkbox" id="status_1" class="check" />
																	<label for="status_1" class="checktoggle">checkbox</label>
																</div>
															</td>
															<td class="text-right">
																200.00
															</td>
														</tr>
														<tr>
															<td>
																<h2 class="table-avatar">
																	<Link to="/Profile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets1/img/doctors/doctor-thumb-02.jpg" alt="User Image" /></Link>
																	<Link to="/Profile">Bipin</Link>
																</h2>
															</td>
															<td>Dental</td>
															<td>
																<h2 class="table-avatar">
																	<Link to="/Profile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets1/img/patients/patient2.jpg" alt="User Image" /></Link>
																	<Link to="/Profile">Arun </Link>
																</h2>
															</td>

															<td>5 May 2019 <span class="text-primary d-block">11.00 AM - 11.35 AM</span></td>
															<td>
																<div class="status-toggle">
																	<input type="checkbox" id="status_2" class="check" />
																	<label for="status_2" class="checktoggle">checkbox</label>
																</div>
															</td>
															<td class="text-right">
																300.00
															</td>
														</tr>
														<tr>
															<td>
																<h2 class="table-avatar">
																	<Link to="/Profile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets1/img/doctors/doctor-thumb-03.jpg" alt="User Image" /></Link>
																	<Link to="/Profile">Dr. Jaya </Link>
																</h2>
															</td>
															<td>Cardiology</td>
															<td>
																<h2 class="table-avatar">
																	<Link to="/Profile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets1/img/patients/patient3.jpg" alt="User Image" /></Link>
																	<Link to="/Profile">Navin</Link>
																</h2>
															</td>
															<td>11 May 2021 <span class="text-primary d-block">12.00 PM - 12.15 PM</span></td>
															<td>
																<div class="status-toggle">
																	<input type="checkbox" id="status_3" class="check" />
																	<label for="status_3" class="checktoggle">checkbox</label>
																</div>
															</td>
															<td class="text-right">
																150.00
															</td>
														</tr>
														<tr>
															<td>
																<h2 class="table-avatar">
																	<Link to="/Profile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets1/img/doctors/doctor-thumb-04.jpg" alt="User Image" /></Link>
																	<Link to="/Profile">Dr. Rinku</Link>
																</h2>
															</td>
															<td>Endodontics </td>
															<td>
																<h2 class="table-avatar">
																	<Link to="/Profile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets1/img/patients/patient4.jpg" alt="User Image" /></Link>
																	<Link to="/Profile"> anupma</Link>
																</h2>
															</td>
															<td>7 May 2021<span class="text-primary d-block">1.00 PM - 1.20 PM</span></td>
															<td>
																<div class="status-toggle">
																	<input type="checkbox" id="status_4" class="check" />
																	<label for="status_4" class="checktoggle">checkbox</label>
																</div>
															</td>
															<td class="text-right">
																150.00
															</td>
														</tr>
														<tr>
															<td>
																<h2 class="table-avatar">
																	<Link to="/Profile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets1/img/doctors/doctor-thumb-05.jpg" alt="User Image" /></Link>
																	<Link to="/Profile">Dr. Ganesh</Link>
																</h2>
															</td>
															<td>Orthopaedics</td>
															<td>
																<h2 class="table-avatar">
																	<Link to="/Profile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets1/img/patients/patient5.jpg" alt="User Image" /></Link>
																	<Link to="/Profile">Krunal</Link>
																</h2>
															</td>

															<td>15 May 2021 <span class="text-primary d-block">1.00 PM - 1.15 PM</span></td>
															<td>
																<div class="status-toggle">
																	<input type="checkbox" id="status_5" class="check" />
																	<label for="status_5" class="checktoggle">checkbox</label>
																</div>
															</td>
															<td class="text-right">
																200.00
															</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
									</div>
									{/* <!-- /Recent Orders --> */}

								</div>
							</div>

						</div>
					</div>
					{/* <!-- /Page Wrapper --> */}

				</div>
				{/* <!-- /Main Wrapper -->
		
		<!-- jQuery --> */}
				


			</div>
		)
	}
}
export default Home1;