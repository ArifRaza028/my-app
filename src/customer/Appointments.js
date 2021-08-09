import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../customer/Header';
import Footer from '../customer/Footer';

class Appointments extends React.Component {
	render() {
		return (
			<div>
				<Header />
				{/*  <!-- Main Wrapper --> */}
				<div class="main-wrapper">


					{/* <!-- Breadcrumb -->  */}
					<div class=" asd breadcrumb-bar">
						<div class="container-fluid">
							<div class="row align-items-center">
								<div class="col-md-12 col-12">
									<nav aria-label="breadcrumb" class="page-breadcrumb">
										<ol class="breadcrumb">
											<li class="breadcrumb-item"><Link to="/">Home</Link></li>
											<li class="breadcrumb-item active" aria-current="page">Appointments</li>
										</ol>
									</nav>
									<h2 class="breadcrumb-title">Appointments</h2>
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
													<h3>Dr.Arif </h3>

													<div class="patient-details">
														<h5 class="mb-0">BDS - Dentist</h5>
													</div>
												</div>
											</div>
										</div>
										<div class="dashboard-widget">
											<nav class="dashboard-menu">
												<ul>
													<li>
														<Link to="/Doctordashboard">
															<i class="fas fa-columns"></i>
															<span>Dashboard</span>
														</Link>
													</li>
													<li class="active">
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
														<Link to="/Doctorprofilesettings">
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
									{/* 	<!-- /Profile Sidebar --> */}

								</div>

								<div class="col-md-7 col-lg-8 col-xl-9">
									<div class="appointments">

										{/* <!-- Appointment List --> */}
										<div class="appointment-list">
											<div class="profile-info-widget">
												<Link to="/Patientsprofile" class="booking-doc-img">
													<img src="assets/img/patients/patient.jpg" alt="User Image" />
												</Link>
												<div class="profile-det-info">
													<h3><Link to="/Patientsprofile">Amit</Link></h3>
													<div class="patient-details">
														<h5><i class="far fa-clock"></i> 14 May 2021, 10.00 AM</h5>
														<h5><i class="fas fa-map-marker-alt"></i> Pune</h5>
														<h5><i class="fas fa-envelope"></i>amitclinic@gmail.com</h5>
														<h5 class="mb-0"><i class="fas fa-phone"></i> +91 1234567890</h5>
													</div>
												</div>
											</div>
											<div class="appointment-action">
												<a href="#" class="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
													<i class="far fa-eye"></i> View
												</a>
												<a href="javascript:void(0);" class="btn btn-sm bg-success-light">
													<i class="fas fa-check"></i> Accept
												</a>
												<a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
													<i class="fas fa-times"></i> Cancel
												</a>
											</div>
										</div>
										{/* <!-- /Appointment List -->
							
								<!-- Appointment List --> */}
										<div class="appointment-list">
											<div class="profile-info-widget">
												<Link to="/Patientsprofile" class="booking-doc-img">
													<img src="assets/img/patients/patient1.jpg" alt="User Image" />
												</Link>
												<div class="profile-det-info">
													<h3><Link to="/Patientsprofile">Rohni</Link></h3>
													<div class="patient-details">
														<h5><i class="far fa-clock"></i> 12 Jun 2021, 4.00 PM</h5>
														<h5><i class="fas fa-map-marker-alt"></i> Mumbai</h5>
														<h5><i class="fas fa-envelope"></i> Rohniclinic@gmail.com</h5>
														<h5 class="mb-0"><i class="fas fa-phone"></i>+91 123456789</h5>
													</div>
												</div>
											</div>
											<div class="appointment-action">
												<a href="#" class="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
													<i class="far fa-eye"></i> View
												</a>
												<a href="javascript:void(0);" class="btn btn-sm bg-success-light">
													<i class="fas fa-check"></i> Accept
												</a>
												<a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
													<i class="fas fa-times"></i> Cancel
												</a>
											</div>
										</div>
										{/* <!-- /Appointment List -->
								
								<!-- Appointment List --> */}
										<div class="appointment-list">
											<div class="profile-info-widget">
												<Link to="/Patientsprofile" class="booking-doc-img">
													<img src="assets/img/patients/patient2.jpg" alt="User Image" />
												</Link>
												<div class="profile-det-info">
													<h3><Link to="/Patientsprofile">Arun</Link></h3>

													<div class="patient-details">
														<h5><i class="far fa-clock"></i> 11 May 20121, 8.00 PM</h5>
														<h5><i class="fas fa-map-marker-alt"></i> Pune</h5>
														<h5><i class="fas fa-envelope"></i> arunclinic@gmail.com</h5>
														<h5 class="mb-0"><i class="fas fa-phone"></i> +91 1234567890 </h5>
													</div>
												</div>
											</div>
											<div class="appointment-action">
												<a href="#" class="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
													<i class="far fa-eye"></i> View
												</a>

												<a href="javascript:void(0);" class="btn btn-sm bg-success-light">
													<i class="fas fa-check"></i> Accept
												</a>
												<a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
													<i class="fas fa-times"></i> Cancel
												</a>
											</div>
										</div>
										{/* <!-- /Appointment List -->
								
								<!-- Appointment List --> */}
										<div class="appointment-list">
											<div class="profile-info-widget">
												<Link to="/Patientsprofile" class="booking-doc-img">
													<img src="assets/img/patients/patient3.jpg" alt="User Image" />
												</Link>
												<div class="profile-det-info">
													<h3><Link to="/Patientsprofile">Navin</Link></h3>
													<div class="patient-details">
														<h5><i class="far fa-clock"></i> 9 Nov 2021, 9.00 AM</h5>
														<h5><i class="fas fa-map-marker-alt"></i> Pune</h5>
														<h5><i class="fas fa-envelope"></i> navinclinic@example.com</h5>
														<h5 class="mb-0"><i class="fas fa-phone"></i> +91 1234567890</h5>
													</div>
												</div>
											</div>
											<div class="appointment-action">
												<a href="#" class="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
													<i class="far fa-eye"></i> View
												</a>
												<a href="javascript:void(0);" class="btn btn-sm bg-success-light">
													<i class="fas fa-check"></i> Accept
												</a>
												<a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
													<i class="fas fa-times"></i> Cancel
												</a>
											</div>
										</div>
										{/* <!-- /Appointment List -->
								
								<!-- Appointment List --> */}
										{/* <div class="appointment-list">
											<div class="profile-info-widget">
												<a href="patient-profile.html" class="booking-doc-img">
													<img src="assets/img/patients/patient4.jpg" alt="User Image" />
												</a>
												<div class="profile-det-info">
													<h3><a href="patient-profile.html">Flo Sherrod</a></h3>
													<div class="patient-details">
														<h5><i class="far fa-clock"></i> 9 Nov 2019, 1.00 PM</h5>
														<h5><i class="fas fa-map-marker-alt"></i> Indiana, United States</h5>
														<h5><i class="fas fa-envelope"></i> michellefairfax@example.com</h5>
														<h5 class="mb-0"><i class="fas fa-phone"></i> +1 504 368 6874</h5>
													</div>
												</div>
											</div>
											<div class="appointment-action">
												<a href="#" class="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
													<i class="far fa-eye"></i> View
										</a>
												<a href="javascript:void(0);" class="btn btn-sm bg-success-light">
													<i class="fas fa-check"></i> Accept
										</a>
												<a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
													<i class="fas fa-times"></i> Cancel
										</a>
											</div>
										</div> */}
										{/* <!-- /Appointment List -->
								
								<!-- Appointment List --> */}
										{/* 	<div class="appointment-list">
											<div class="profile-info-widget">
												<a href="patient-profile.html" class="booking-doc-img">
													<img src="assets/img/patients/patient5.jpg" alt="User Image" />
												</a>
												<div class="profile-det-info">
													<h3><a href="patient-profile.html">Korva Weiner</a></h3>
													<div class="patient-details">
														<h5><i class="far fa-clock"></i> 8 Nov 2019, 3.00 PM</h5>
														<h5><i class="fas fa-map-marker-alt"></i> Florida, United States</h5>
														<h5><i class="fas fa-envelope"></i> ginamoore@example.com</h5>
														<h5 class="mb-0"><i class="fas fa-phone"></i> +1 954 820 7887</h5>
													</div>
												</div>
											</div>
											<div class="appointment-action">
												<a href="#" class="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
													<i class="far fa-eye"></i> View
										</a>
												<a href="javascript:void(0);" class="btn btn-sm bg-success-light">
													<i class="fas fa-check"></i> Accept
										</a>
												<a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
													<i class="fas fa-times"></i> Cancel
										</a>
											</div>
										</div> */}
										{/* <!-- /Appointment List -->
								
								<!-- Appointment List --> */}
										{/* 	<div class="appointment-list">
											<div class="profile-info-widget">
												<a href="patient-profile.html" class="booking-doc-img">
													<img src="assets/img/patients/patient6.jpg" alt="User Image" />
												</a>
												<div class="profile-det-info">
													<h3><a href="patient-profile.html">Jafit Gagne</a></h3>
													<div class="patient-details">
														<h5><i class="far fa-clock"></i> 6 Nov 2019, 9.00 AM</h5>
														<h5><i class="fas fa-map-marker-alt"></i> Kentucky, United States</h5>
														<h5><i class="fas fa-envelope"></i> elsiegilley@example.com</h5>
														<h5 class="mb-0"><i class="fas fa-phone"></i> +1 315 384 4562</h5>
													</div>
												</div>
											</div>
											<div class="appointment-action">
												<a href="#" class="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
													<i class="far fa-eye"></i> View
										</a>
												<a href="javascript:void(0);" class="btn btn-sm bg-success-light">
													<i class="fas fa-check"></i> Accept
										</a>
												<a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
													<i class="fas fa-times"></i> Cancel
										</a>
											</div>
										</div> */}
										{/* <!-- /Appointment List -->
								
								<!-- Appointment List --> */}
										{/* <div class="appointment-list">
											<div class="profile-info-widget">
												<a href="patient-profile.html" class="booking-doc-img">
													<img src="assets/img/patients/patient7.jpg" alt="User Image" />
												</a>
												<div class="profile-det-info">
													<h3><a href="patient-profile.html">Rieko Thrash</a></h3>
													<div class="patient-details">
														<h5><i class="far fa-clock"></i> 5 Nov 2019, 12.00 PM</h5>
														<h5><i class="fas fa-map-marker-alt"></i> California, United States</h5>
														<h5><i class="fas fa-envelope"></i> joangardner@example.com</h5>
														<h5 class="mb-0"><i class="fas fa-phone"></i> +1 707 2202 603</h5>
													</div>
												</div>
											</div>
											<div class="appointment-action">
												<a href="#" class="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
													<i class="far fa-eye"></i> View
										</a>
												<a href="javascript:void(0);" class="btn btn-sm bg-success-light">
													<i class="fas fa-check"></i> Accept
										</a>
												<a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
													<i class="fas fa-times"></i> Cancel
										</a>
											</div>
										</div> */}
										{/* <!-- /Appointment List -->
								
								<!-- Appointment List --> */}
										{/* <div class="appointment-list">
											<div class="profile-info-widget">
												<a href="patient-profile.html" class="booking-doc-img">
													<img src="assets/img/patients/patient8.jpg" alt="User Image" />
												</a>
												<div class="profile-det-info">
													<h3><a href="patient-profile.html">Aryo Pryor</a></h3>
													<div class="patient-details">
														<h5><i class="far fa-clock"></i> 5 Nov 2019, 7.00 PM</h5>
														<h5><i class="fas fa-map-marker-alt"></i> New Jersey, United States</h5>
														<h5><i class="fas fa-envelope"></i> danielgriffing@example.com</h5>
														<h5 class="mb-0"><i class="fas fa-phone"></i> +1 973 773 9497</h5>
													</div>
												</div>
											</div>
											<div class="appointment-action">
												<a href="#" class="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
													<i class="far fa-eye"></i> View
										</a>
												<a href="javascript:void(0);" class="btn btn-sm bg-success-light">
													<i class="fas fa-check"></i> Accept
										</a>
												<a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
													<i class="fas fa-times"></i> Cancel
										</a>
											</div>
										</div> */}
										{/* <!-- /Appointment List -->
								
								<!-- Appointment List --> */}
										{/* <div class="appointment-list">
											<div class="profile-info-widget">
												<a href="patient-profile.html" class="booking-doc-img">
													<img src="assets/img/patients/patient9.jpg" alt="User Image" />
												</a>
												<div class="profile-det-info">
													<h3><a href="patient-profile.html">Ieuan Folsom</a></h3>
													<div class="patient-details">
														<h5><i class="far fa-clock"></i> 4 Nov 2019, 10.00 AM</h5>
														<h5><i class="fas fa-map-marker-alt"></i> Florida, United States</h5>
														<h5><i class="fas fa-envelope"></i> walterroberson@example.com</h5>
														<h5 class="mb-0"><i class="fas fa-phone"></i> +1 850 358 4445</h5>
													</div>
												</div>
											</div>
											<div class="appointment-action">
												<a href="#" class="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
													<i class="far fa-eye"></i> View
										</a>
												<a href="javascript:void(0);" class="btn btn-sm bg-success-light">
													<i class="fas fa-check"></i> Accept
										</a>
												<a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
													<i class="fas fa-times"></i> Cancel
										</a>
											</div>
										</div> */}
										{/* <!-- /Appointment List -->
								
								<!-- Appointment List --> */}
										{/* <div class="appointment-list">
											<div class="profile-info-widget">
												<a href="patient-profile.html" class="booking-doc-img">
													<img src="assets/img/patients/patient10.jpg" alt="User Image" />
												</a>
												<div class="profile-det-info">
													<h3><a href="patient-profile.html">Talfrin Archuleta</a></h3>
													<div class="patient-details">
														<h5><i class="far fa-clock"></i> 4 Nov 2019, 11.00 AM</h5>
														<h5><i class="fas fa-map-marker-alt"></i> California, United States</h5>
														<h5><i class="fas fa-envelope"></i> robertrhodes@example.com</h5>
														<h5 class="mb-0"><i class="fas fa-phone"></i> +1 858 259 5285</h5>
													</div>
												</div>
											</div>
											<div class="appointment-action">
												<a href="#" class="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
													<i class="far fa-eye"></i> View
										</a>
												<a href="javascript:void(0);" class="btn btn-sm bg-success-light">
													<i class="fas fa-check"></i> Accept
										</a>
												<a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
													<i class="fas fa-times"></i> Cancel
										</a>
											</div>
										</div> */}
										{/* <!-- /Appointment List -->
								
								<!-- Appointment List --> */}
										{/* 	<div class="appointment-list">
											<div class="profile-info-widget">
												<a href="patient-profile.html" class="booking-doc-img">
													<img src="assets/img/patients/patient11.jpg" alt="User Image" />
												</a>
												<div class="profile-det-info">
													<h3><a href="patient-profile.html">Albert Sawyer</a></h3>
													<div class="patient-details">
														<h5><i class="far fa-clock"></i> 3 Nov 2019, 6.00 PM</h5>
														<h5><i class="fas fa-map-marker-alt"></i> Colorado, United States</h5>
														<h5><i class="fas fa-envelope"></i> harrywilliams@example.com</h5>
														<h5 class="mb-0"><i class="fas fa-phone"></i> +1 303 607 7075</h5>
													</div>
												</div>
											</div>
											<div class="appointment-action">
												<a href="#" class="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
													<i class="far fa-eye"></i> View
										</a>
												<a href="javascript:void(0);" class="btn btn-sm bg-success-light">
													<i class="fas fa-check"></i> Accept
										</a>
												<a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
													<i class="fas fa-times"></i> Cancel
										</a>
											</div>
										</div> */}
										{/* <!-- /Appointment List --> */}

									</div>
								</div>
							</div>


						</div>
						{/* <!-- Appointment Details Modal --> */}

						{/* <!-- /Appointment Details Modal --> */}
						<Footer /></div>

				</div>
				<div class="modal fade custom-modal" id="appt_details">
					<div class="modal-dialog modal-dialog-centered">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title">Appointment Details</h5>
								<button type="button" class="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body">
								<ul class="info-details">
									<li>
										<div class="details-header">
											<div class="row">
												<div class="col-md-6">
													<span class="title">#APT0001</span>
													<span class="text">21 Oct 2021 10:00 AM</span>
												</div>
												<div class="col-md-6">
													<div class="text-right">
														<button type="button" class="btn bg-success-light btn-sm" id="topup_status">Completed</button>
													</div>
												</div>
											</div>
										</div>
									</li>
									<li>
										<span class="title">Status:</span>
										<span class="text">Completed</span>
									</li>
									<li>
										<span class="title">Confirm Date:</span>
										<span class="text">29 Jun 2021</span>
									</li>
									<li>
										<span class="title">Paid Amount</span>
										<span class="text">450</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

			</div>

		)
	}
}
export default Appointments;