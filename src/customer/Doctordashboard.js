import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './../customer/Header';
import Footer from './../customer/Footer';

class Doctordashboard extends React.Component {
	render() {
		return (
			<div>
				<Header />

				{/* <!-- Main Wrapper --> */}
				<div class="main-wrapper">


					{/* <!-- Breadcrumb --> */}
					<div class="asd breadcrumb-bar" >
						<div class="container-fluid">
							<div class="row align-items-center">
								<div class="col-md-12 col-12">
									<nav aria-label="breadcrumb" class="page-breadcrumb">
										<ol class="breadcrumb">
											<li class="breadcrumb-item"><Link to="/">Home</Link></li>
											<li class="breadcrumb-item active" aria-current="page">Dashboard</li>
										</ol>
									</nav>
									<h6 class="breadcrumb-title">Dashboard</h6>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- /Breadcrumb --> 
			
			<!-- Page Content --> */}
					<div class="content">
						<div class="container-fluid">

							<div class="row">
								<div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">

									{/* <!-- Profile Sidebar --> */}
									<div class="profile-sidebar">
										<div class="widget-profile pro-widget-content">
											<div class="profile-info-widget">
												<Link to="#" class="booking-doc-img">
													<img src="assets/img/doctors/doctor-thumb-02.jpg" alt="User Image" />
												</Link>
												<div class="profile-det-info">
													<h3>Dr.Arif</h3>

													<div class="patient-details">
														<h5 class="mb-0">BDS, MDS - Oral & Maxillofacial Surgery</h5>
													</div>
												</div>
											</div>
										</div>
										<div class="dashboard-widget">
											<nav class="dashboard-menu">
												<ul>
													<li class="active">
														<Link to="/Doctordashboard">
															<i class="fas fa-columns"></i>
															<span>Dashboard</span>
														</Link>
													</li>
													<li>
														<Link to="/Appointments">
															<i class="fas fa-calendar-check"></i>
															<span>Appointments</span>
														</Link>
													</li>
													<li>
														<Link to="/Mypatients">
															<i class="fas fa-user-injured"></i>
															<span>My Patients</span>
														</Link>
													</li>
													<li>
														<Link to="/ScheduleTiming">
															<i class="fas fa-hourglass-start"></i>
															<span>Schedule Timings</span>
														</Link>
													</li>
													<li>
														<Link to="/Invoices">
															<i class="fas fa-file-invoice"></i>
															<span>Invoices</span>
														</Link>
													</li>
													<li>
														<Link to="/Reviews">
															<i class="fas fa-star"></i>
															<span>Reviews</span>
														</Link>
													</li>
													<li>
														<Link to="/Chatdoctor">
															<i class="fas fa-comments"></i>
															<span>Message</span>
															<small class="unread-msg">2</small>
														</Link>
													</li>
													<li>
														<Link to="/Doctorprofilesetting">
															<i class="fas fa-user-cog"></i>
															<span>Profile Settings</span>
														</Link>
													</li>
													<li>
														<Link to="/Socialmedia">
															<i class="fas fa-share-alt"></i>
															<span>Social Media</span>
														</Link>
													</li>
													<li>
														<Link to="/Doctorchangepassword">
															<i class="fas fa-lock"></i>
															<span>Change Password</span>
														</Link>
													</li>
													<li>
														<Link to="/">
															<i class="fas fa-sign-out-alt"></i>
															<span>Logout</span>
														</Link>
													</li>
												</ul>
											</nav>
										</div>
									</div>
									{/* <!-- /Profile Sidebar --> */}

								</div>

								<div class="col-md-7 col-lg-8 col-xl-9">

									<div class="row">
										<div class="col-md-12">
											<div class="card dash-card">
												<div class="card-body">
													<div class="row">
														<div class="col-md-12 col-lg-4">
															<div class="dash-widget dct-border-rht">
																<div class="circle-bar circle-bar1">
																	<div class="circle-graph1" data-percent="65">
																		<canvas width="400" height="400"></canvas>
																		<img src="assets/img/icon-01.png" class="img-fluid" alt="patient" />
																	</div>
																</div>
																<div class="dash-widget-info">
																	<h6>Total Patient</h6>
																	<h3>500</h3>
																	<p class="text-muted">Till Today</p>
																</div>
															</div>
														</div>

														<div class="col-md-12 col-lg-4">
															<div class="dash-widget dct-border-rht">
																<div class="circle-bar circle-bar2">
																	<div class="circle-graph2" data-percent="65">
																		<canvas width="400" height="400"></canvas>
																		<img src="assets/img/icon-02.png" class="img-fluid" alt="Patient" />
																	</div>
																</div>
																<div class="dash-widget-info">
																	<h6>Today Patient</h6>
																	<h3>160</h3>
																	<p class="text-muted">06,May 2021</p>
																</div>
															</div>
														</div>

														<div class="col-md-12 col-lg-4">
															<div class="dash-widget">
																<div class="circle-bar circle-bar3">
																	<div class="circle-graph3" data-percent="50">
																		<canvas width="400" height="400"></canvas>
																		<img src="assets/img/icon-03.png" class="img-fluid" alt="Patient" />
																	</div>
																</div>
																<div class="dash-widget-info">
																	<h6>Appoinments</h6>
																	<h3>85</h3>
																	<p class="text-muted">06, Apr 2021</p>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>

									<div class="row">
										<div class="col-md-12">
											<h4 class="mb-4">Patient Appoinment</h4>
											<div class="appointment-tab">

												{/* <!-- Appointment Tab --> */}
												<ul class="nav nav-tabs nav-tabs-solid nav-tabs-rounded">
													<li class="nav-item">
														<a class="nav-link active" href="#upcoming-appointments" data-toggle="tab">Upcoming</a>
													</li>
													<li class="nav-item">
														<a class="nav-link" href="#today-appointments" data-toggle="tab">Today</a>
													</li>
												</ul>
												{/* <!-- /Appointment Tab --> */}

												<div class="tab-content">

													{/* <!-- Upcoming Appointment Tab --> */}
													<div class="tab-pane show active" id="upcoming-appointments">
														<div class="card card-table mb-0">
															<div class="card-body">
																<div class="table-responsive">
																	<table class="table table-hover table-center mb-0">
																		<thead>
																			<tr>
																				<th>Patient Name</th>
																				<th>Appt Date</th>
																				<th>Purpose</th>
																				<th>Type</th>
																				<th class="text-center">Paid Amount</th>
																				<th></th>
																			</tr>
																		</thead>
																		<tbody>
																			<tr>
																				<td>
																					<h2 class="table-avatar">
																						<Link to="/Patientsprofile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/patients/patient.jpg" alt="User Image" /></Link>
																						<Link to="/Patientsprofile">Ashok<span>#PT0016</span></Link>
																					</h2>
																				</td>
																				<td>11 May 2021 <span class="d-block text-info">10.00 AM</span></td>
																				<td>General</td>
																				<td>New Patient</td>
																				<td class="text-center">150</td>
																				<td class="text-right">
																					<div class="table-action">
																						<a href="javascript:void(0);" class="btn btn-sm bg-info-light">
																							<i class="far fa-eye"></i> View
																						</a>

																						<a href="javascript:void(0);" class="btn btn-sm bg-success-light">
																							<i class="fas fa-check"></i> Accept
																						</a>
																						<a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
																							<i class="fas fa-times"></i> Cancel
																						</a>
																					</div>
																				</td>
																			</tr>
																			<tr>
																				<td>
																					<h2 class="table-avatar">
																						<Link to="/Patientsprofile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/patients/patient1.jpg" alt="User Image" /></Link>
																						<Link to="/Patientsprofile">Rohit <span>#PT0001</span></Link>
																					</h2>
																				</td>
																				<td>3 Nov 2021 <span class="d-block text-info">11.00 AM</span></td>
																				<td>General</td>
																				<td>Old Patient</td>
																				<td class="text-center">200</td>
																				<td class="text-right">
																					<div class="table-action">
																						<Link to="javascript:void(0);" class="btn btn-sm bg-info-light">
																							<i class="far fa-eye"></i> View
																						</Link>

																						<Link to="javascript:void(0);" class="btn btn-sm bg-success-light">
																							<i class="fas fa-check"></i> Accept
																						</Link>
																						<Link to="javascript:void(0);" class="btn btn-sm bg-danger-light">
																							<i class="fas fa-times"></i> Cancel
																						</Link>
																					</div>
																				</td>
																			</tr>
																			{/* <tr>
																		<td>
																			<h2 class="table-avatar">
																				<Link to="/Patientprofile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/patients/patient2.jpg" alt="User Image"/></Link>
																				<Link to="/Patientprofile">Amit <span>#PT0002</span></Link>
																			</h2>
																		</td>
																		<td>1 Nov 2021 <span class="d-block text-info">1.00 PM</span></td>
																		<td>General</td>
																		<td>New Patient</td>
																		<td class="text-center">75</td>
																		<td class="text-right">
																			<div class="table-action">
																				<Link to="javascript:void(0);" class="btn btn-sm bg-info-light">
																					<i class="far fa-eye"></i> View
																				</Link>
																				
																				<Link to="javascript:void(0);" class="btn btn-sm bg-success-light">
																					<i class="fas fa-check"></i> Accept
																				</Link>
																				<Link to="javascript:void(0);" class="btn btn-sm bg-danger-light">
																					<i class="fas fa-times"></i> Cancel
																				</Link>
																			</div>
																		</td>
																	</tr> */}
																			{/* <tr>
																		<td>
																			<h2 class="table-avatar">
																				<Link to="/Patientprofile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/patients/patient3.jpg" alt="User Image"/></Link>
																				<Link to="/Patientprofile">Niv Collazo <span>#PT0003</span></Link>
																			</h2>
																		</td>
																		<td>30 Oct 2019 <span class="d-block text-info">10.00 AM</span></td>
																		<td>General</td>
																		<td>Old Patient</td>
																		<td class="text-center">100</td>
																		<td class="text-right">
																			<div class="table-action">
																				<Link to="javascript:void(0);" class="btn btn-sm bg-info-light">
																					<i class="far fa-eye"></i> View
																				</Link>
																				
																				<Link to="javascript:void(0);" class="btn btn-sm bg-success-light">
																					<i class="fas fa-check"></i> Accept
																				</Link>
																				<Link to="javascript:void(0);" class="btn btn-sm bg-danger-light">
																					<i class="fas fa-times"></i> Cancel
																				</Link>
																			</div>
																		</td>
																	</tr> */}
																			{/* <tr>
																		<td>
																			<h2 class="table-avatar">
																				<Link to="/Patientprofile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/patients/patient4.jpg" alt="User Image"/></Link>
																				<Link to="/Patientprofile">Shetty <span>#PT0004</span></Link>
																			</h2>
																		</td>
																		<td>28 Oct 2019 <span class="d-block text-info">5.00 PM</span></td>
																		<td>General</td>
																		<td>New Patient</td>
																		<td class="text-center">350</td>
																		<td class="text-right">
																			<div class="table-action">
																				<Link to="javascript:void(0);" class="btn btn-sm bg-info-light">
																					<i class="far fa-eye"></i> View
																				</Link>
																				
																				<Link to="javascript:void(0);" class="btn btn-sm bg-success-light">
																					<i class="fas fa-check"></i> Accept
																				</Link>
																				<Link to="javascript:void(0);" class="btn btn-sm bg-danger-light">
																					<i class="fas fa-times"></i> Cancel
																				</Link>
																			</div>
																		</td>
																	</tr> */}
																			{/* 	<tr>
																		<td>
																			<h2 class="table-avatar">
																				<Link to="/Patientprofile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/patients/patient5.jpg" alt="User Image"/></Link>
																				<Link to="/Patientprofile">komal <span>#PT0005</span></Link>
																			</h2>
																		</td>
																		<td>27 Oct 2019 <span class="d-block text-info">9.00 AM</span></td>
																		<td>General</td>
																		<td>Old Patient</td>
																		<td class="text-center">250</td>
																		<td class="text-right">
																			<div class="table-action">
																				<Link to="javascript:void(0);" class="btn btn-sm bg-info-light">
																					<i class="far fa-eye"></i> View
																				</Link>
																				
																				<Link to="javascript:void(0);" class="btn btn-sm bg-success-light">
																					<i class="fas fa-check"></i> Accept
																				</Link>
																				<Link to="javascript:void(0);" class="btn btn-sm bg-danger-light">
																					<i class="fas fa-times"></i> Cancel
																				</Link>
																			</div>
																		</td>
																	</tr> */}
																		</tbody>
																	</table>
																</div>
															</div>
														</div>
													</div>
													{/* <!-- /Upcoming Appointment Tab -->
									   
											<!-- Today Appointment Tab --> */}
													<div class="tab-pane" id="today-appointments">
														<div class="card card-table mb-0">
															<div class="card-body">
																<div class="table-responsive">
																	<table class="table table-hover table-center mb-0">
																		<thead>
																			<tr>
																				<th>Patient Name</th>
																				<th>Appt Date</th>
																				<th>Purpose</th>
																				<th>Type</th>
																				<th class="text-center">Paid Amount</th>
																				<th></th>
																			</tr>
																		</thead>
																		<tbody>
																			<tr>
																				<td>
																					<h2 class="table-avatar">
																						<Link to="/Patientsprofile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/patients/patient6.jpg" alt="User Image" /></Link>
																						<Link to="/Patientsprofile">Gita <span>#PT0006</span></Link>
																					</h2>
																				</td>
																				<td>14 Nov 2019 <span class="d-block text-info">6.00 PM</span></td>
																				<td>Fever</td>
																				<td>Old Patient</td>
																				<td class="text-center">300</td>
																				<td class="text-right">
																					<div class="table-action">
																						<Link to="javascript:void(0);" class="btn btn-sm bg-info-light">
																							<i class="far fa-eye"></i> View
																						</Link>

																						<Link to="javascript:void(0);" class="btn btn-sm bg-success-light">
																							<i class="fas fa-check"></i> Accept
																						</Link>
																						<Link to="javascript:void(0);" class="btn btn-sm bg-danger-light">
																							<i class="fas fa-times"></i> Cancel
																						</Link>
																					</div>
																				</td>
																			</tr>
																			<tr>
																				<td>
																					<h2 class="table-avatar">
																						<Link to="/Patientsprofile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/patients/patient7.jpg" alt="User Image" /></Link>
																						<Link to="/Patientsprofile">Rinku <span>#PT0006</span></Link>
																					</h2>
																				</td>
																				<td>14 Nov 2021 <span class="d-block text-info">5.00 PM</span></td>
																				<td>General</td>
																				<td>Old Patient</td>
																				<td class="text-center">100</td>
																				<td class="text-right">
																					<div class="table-action">
																						<Link to="javascript:void(0);" class="btn btn-sm bg-info-light">
																							<i class="far fa-eye"></i> View
																						</Link>

																						<Link to="javascript:void(0);" class="btn btn-sm bg-success-light">
																							<i class="fas fa-check"></i> Accept
																						</Link>
																						<Link to="javascript:void(0);" class="btn btn-sm bg-danger-light">
																							<i class="fas fa-times"></i> Cancel
																						</Link>
																					</div>
																				</td>
																			</tr>
																			<tr>
																				<td>
																					<h2 class="table-avatar">
																						<Link to="/Patientsprofile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/patients/patient8.jpg" alt="User Image" /></Link>
																						<Link to="/Patientsprofile">Arun <span>#PT0007</span></Link>
																					</h2>
																				</td>
																				<td>14 Nov 2019 <span class="d-block text-info">3.00 PM</span></td>
																				<td>General</td>
																				<td>New Patient</td>
																				<td class="text-center">75</td>
																				<td class="text-right">
																					<div class="table-action">
																						<Link to="javascript:void(0);" class="btn btn-sm bg-info-light">
																							<i class="far fa-eye"></i> View
																						</Link>

																						<Link to="javascript:void(0);" class="btn btn-sm bg-success-light">
																							<i class="fas fa-check"></i> Accept
																						</Link>
																						<Link to="javascript:void(0);" class="btn btn-sm bg-danger-light">
																							<i class="fas fa-times"></i> Cancel
																						</Link>
																					</div>
																				</td>
																			</tr>
																			<tr>
																				<td>
																					<h2 class="table-avatar">
																						<Link to="/Patientsprofile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/patients/patient9.jpg" alt="User Image" /></Link>
																						<Link to="/Patientsprofile">Imran <span>#PT0008</span></Link>
																					</h2>
																				</td>
																				<td>14 Nov 2019 <span class="d-block text-info">1.00 PM</span></td>
																				<td>General</td>
																				<td>Old Patient</td>
																				<td class="text-center">350</td>
																				<td class="text-right">
																					<div class="table-action">
																						<Link to="javascript:void(0);" class="btn btn-sm bg-info-light">
																							<i class="far fa-eye"></i> View
																						</Link>

																						<Link to="javascript:void(0);" class="btn btn-sm bg-success-light">
																							<i class="fas fa-check"></i> Accept
																						</Link>
																						<Link to="javascript:void(0);" class="btn btn-sm bg-danger-light">
																							<i class="fas fa-times"></i> Cancel
																						</Link>
																					</div>
																				</td>
																			</tr>
																			<tr>
																				<td>
																					<h2 class="table-avatar">
																						<Link to="/Patientsprofile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/patients/patient10.jpg" alt="User Image" /></Link>
																						<Link to="/Patientsprofile">Taufik <span>#PT0010</span></Link>
																					</h2>
																				</td>
																				<td>14 Nov 2019 <span class="d-block text-info">10.00 AM</span></td>
																				<td>General</td>
																				<td>New Patient</td>
																				<td class="text-center">175</td>
																				<td class="text-right">
																					<div class="table-action">
																						<Link to="javascript:void(0);" class="btn btn-sm bg-info-light">
																							<i class="far fa-eye"></i> View
																						</Link>

																						<Link to="javascript:void(0);" class="btn btn-sm bg-success-light">
																							<i class="fas fa-check"></i> Accept
																						</Link>
																						<Link to="javascript:void(0);" class="btn btn-sm bg-danger-light">
																							<i class="fas fa-times"></i> Cancel
																						</Link>
																					</div>
																				</td>
																			</tr>
																			<tr>
																				<td>
																					<h2 class="table-avatar">
																						<Link to="/Patientsprofile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/patients/patient11.jpg" alt="User Image" /></Link>
																						<Link to="/Patientsprofile">Albert Sawyer <span>#PT0011</span></Link>
																					</h2>
																				</td>
																				<td>14 Nov 2019 <span class="d-block text-info">11.00 AM</span></td>
																				<td>General</td>
																				<td>New Patient</td>
																				<td class="text-center">450</td>
																				<td class="text-right">
																					<div class="table-action">
																						<Link to="javascript:void(0);" class="btn btn-sm bg-info-light">
																							<i class="far fa-eye"></i> View
																						</Link>

																						<Link to="javascript:void(0);" class="btn btn-sm bg-success-light">
																							<i class="fas fa-check"></i> Accept
																						</Link>
																						<Link to="javascript:void(0);" class="btn btn-sm bg-danger-light">
																							<i class="fas fa-times"></i> Cancel
																						</Link>
																					</div>
																				</td>
																			</tr>
																		</tbody>
																	</table>
																</div>
															</div>
														</div>
													</div>
													{/* <!-- /Today Appointment Tab --> */}

												</div>
											</div>
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
export default Doctordashboard;