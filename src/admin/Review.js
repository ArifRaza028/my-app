import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../admin/Header';
class Review extends React.Component {
	render() {
		return (
			<div>
			<Header/>
				{/*  <!-- Main Wrapper --> */}
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
									<li class="active">
										<Link to="/Review"><i class="fe fe-star-o"></i> <span>Review</span></Link>
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
										<ul style={{display: 'none'}}>
										<li><Link to="/Login1"> Login </Link></li>
										<li><Link to="/Register1"> Register </Link></li>
										<li><Link to="/Forgotpassword1"> Forgot Password </Link></li>
										<li><Link to="/Lockscreen"> Lock Screen </Link></li>
										
									</li> */}
									{/* <li class="submenu">
										<Link to="#"><i class="fe fe-warning"></i> <span> Error Pages </span> <span class="menu-arrow"></span></Link>
										<ul style={{display: 'none'}}>
										<li><Link to="/Error404">404 Error </Link></li>
										<li><Link to="/Error500">500 Error </Link></li>
										</ul>

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
										<ul style={{display: 'none'}}>
										<li><Link to="/Formbasicinputs">Basic Inputs </Link></li>
										<li><Link to="/Forminputgroups">Input Groups </Link></li>
										<li><Link to="/Formhorizontal">Horizontal Form </Link></li>
										<li><Link to="/Formvertical"> Vertical Form </Link></li>
										<li><Link to="/Formmask"> Form Mask </Link></li>
										<li><Link to="/Formvalidation"> Form Validation </Link></li>
										</ul>

									</li> */}
									{/* <li class="submenu">
										<Link to="#"><i class="fe fe-table"></i> <span> Tables </span> <span class="menu-arrow"></span></Link>
										<ul style={{display: 'none'}}>
										<li><Link to="/Tablesbasic">Basic Tables </Link></li>
										<li><Link to="/Datatables">Data Table </Link></li>
										</ul>

									</li> */}
									{/* <li class="submenu">
										<a href="javascript:void(0);"><i class="fe fe-code"></i> <span>Multi Level</span> <span class="menu-arrow"></span></a>
										<ul style={{display: 'none'}}>
										<li class="submenu">
											<a href="javascript:void(0);"> <span>Level 1</span> <span class="menu-arrow"></span></a>
											<ul style={{display: 'none'}}>
											<li><a href="javascript:void(0);"><span>Level 2</span></a></li>
											<li class="submenu">
												<a href="javascript:void(0);"> <span> Level 2</span> <span class="menu-arrow"></span></a>
												<ul style={{display: 'none'}}>
												<li><a href="javascript:void(0);">Level 3</a></li>
												<li><a href="javascript:void(0);">Level 3</a></li>
												</ul>

											</li>
											<li><a href="javascript:void(0);"> <span>Level 2</span></a></li>
											</ul>

										</li>
										<li>
											<a href="javascript:void(0);"> <span>Level 1</span></a>
										</li>
										</ul>

									</li> */}
								</ul>
							</div>
						</div>
					</div>
					{/* 	<!-- /Sidebar -->
			
			<!-- Page Wrapper --> */}
					<div class="page-wrapper">
						<div class="content container-fluid">

							{/* <!-- Page Header --> */}
							<div class="page-header">
								<div class="row">
									<div class="col-sm-12">
										<h3 class="page-title">Reviews</h3>
										<ul class="breadcrumb">
											<li class="breadcrumb-item"><Link to="/Home1">Dashboard</Link></li>
											<li class="breadcrumb-item active">Reviews</li>
										</ul>
									</div>
								</div>
							</div>
							{/* <!-- /Page Header --> */}
							<label>
								Show
								<select name="DataTables_Table_0_length" aria-controls="DataTables_Table_0" >
									<option value="10">10</option>
									<option value="25">25</option>
									<option value="50">50</option>
									<option value="100">100</option>
								</select>
								entries
							</label>

							<div class="row">
								<div class="col-sm-12">
									<div class="card">
										<div class="card-body">
											<div class="table-responsive">
												<table class="datatable table table-hover table-center mb-0">
													<thead>
														<tr>
															<th>Patient Name</th>
															<th>Doctor Name</th>
															<th>Ratings</th>
															<th>Description</th>
															<th>Date</th>
															<th class="text-right">Actions</th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<td>
																<h2 class="table-avatar">
																	<Link to="/Profile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets1/img/patients/patient1.jpg" alt="User Image" /></Link>
																	<Link to="/Profile">Rohini</Link>
																</h2>
															</td>
															<td>
																<h2 class="table-avatar">
																	<Link to="/Profile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets1/img/doctors/doctor-thumb-01.jpg" alt="User Image" /></Link>
																	<Link to="/Profile">Dr. Sruti</Link>
																</h2>
															</td>

															<td>
																<i class="fe fe-star text-warning"></i>
																<i class="fe fe-star text-warning"></i>
																<i class="fe fe-star text-warning"></i>
																<i class="fe fe-star text-warning"></i>
																<i class="fe fe-star-o text-secondary"></i>
															</td>

															<td>
																Lorem ipsum dolor sit amet, consectetur adipiscing elit
															</td>
															<td>3 Nov 2019 <br /><small>09.59 AM</small></td>
															<td class="text-right">
																<div class="actions">
																	<a class="btn btn-sm bg-danger-light" data-toggle="modal" href="#delete_modal">
																		<i class="fe fe-trash"></i> Delete
																	</a>

																</div>
															</td>
														</tr>
														{/* <tr>
													<td>
														<h2 class="table-avatar">
															<Link to="/Profile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/patients/patient2.jpg" alt="User Image"/></Link>
															<Link to="/Profile">Arlow Ebert </Link>
														</h2>
													</td>
													
												
													<td>
														<h2 class="table-avatar">
															<a href="profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-02.jpg" alt="User Image"/></a>
															<a href="profile.html">Loren Bivens</a>
														</h2>
													</td>
													
													<td>
														<i class="fe fe-star text-warning"></i>
														<i class="fe fe-star text-warning"></i>
														<i class="fe fe-star text-warning"></i>
														<i class="fe fe-star text-warning"></i>
														<i class="fe fe-star-o text-secondary"></i>
													</td>
													
													<td>
														Lorem ipsum dolor sit amet, consectetur adipiscing elit
													</td>
														<td>2 Nov 2019<br/> <small>08.50 AM</small></td>
													<td class="text-right">
														<div class="actions">
															<a class="btn btn-sm bg-danger-light" data-toggle="modal" href="#delete_modal">
																<i class="fe fe-trash"></i> Delete
															</a>
															
														</div>
													</td>
												</tr> */}
														{/* <tr>
													<td>
														<h2 class="table-avatar">
															<a href="profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/patients/patient3.jpg" alt="User Image"/></a>
															<a href="profile.html">Niv Collazo</a>
														</h2>
													</td>
												
													<td>
														<h2 class="table-avatar">
															<a href="profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-03.jpg" alt="User Image"/></a>
															<a href="profile.html">Dr. Jerelyn Pino </a>
														</h2>
													</td>
													
													<td>
														<i class="fe fe-star text-warning"></i>
														<i class="fe fe-star text-warning"></i>
														<i class="fe fe-star text-warning"></i>
														<i class="fe fe-star text-warning"></i>
														<i class="fe fe-star-o text-secondary"></i>
													</td>
													
													<td>
														Lorem ipsum dolor sit amet, consectetur adipiscing elit
													</td>
														<td>1 Nov 2019<br/> <small>02.59 PM</small></td>
													<td class="text-right">
														<div class="actions">
															<a class="btn btn-sm bg-danger-light" data-toggle="modal" href="#delete_modal">
																<i class="fe fe-trash"></i> Delete
															</a>
															
														</div>
													</td>
												</tr> */}
														{/* 	<tr>
													<td>
														<h2 class="table-avatar">
															<a href="profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/patients/patient4.jpg" alt="User Image"/></a>
															<a href="profile.html"> Flo Sherrod</a>
														</h2>
													</td>
													
												
													<td>
														<h2 class="table-avatar">
															<a href="profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-04.jpg" alt="User Image"/></a>
															<a href="profile.html">Dr. Rieko Thrash</a>
														</h2>
													</td>
													
													<td>
														<i class="fe fe-star text-warning"></i>
														<i class="fe fe-star text-warning"></i>
														<i class="fe fe-star text-warning"></i>
														<i class="fe fe-star text-warning"></i>
														<i class="fe fe-star-o text-secondary"></i>
													</td>
													
													<td>
														Lorem ipsum dolor sit amet, consectetur adipiscing elit
													</td>
														<td>27 Sep 2019 <br/><small>03.40 PM</small></td>
													<td class="text-right">
														<div class="actions">
															<a class="btn btn-sm bg-danger-light" data-toggle="modal" href="#delete_modal">
																<i class="fe fe-trash"></i> Delete
															</a>
															
														</div>
													</td>
												</tr> */}
														{/* <tr>
													<td>
														<h2 class="table-avatar">
															<a href="profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/patients/patient5.jpg" alt="User Image"/></a>
															<a href="profile.html">Korva Weiner</a>
														</h2>
													</td>
													
													<td>
														<h2 class="table-avatar">
															<a href="profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-05.jpg" alt="User Image"/></a>
															<a href="profile.html">Dr. Gennaro Weiner</a>
														</h2>
													</td>
													
													<td>
														<i class="fe fe-star text-warning"></i>
														<i class="fe fe-star text-warning"></i>
														<i class="fe fe-star text-warning"></i>
														<i class="fe fe-star text-warning"></i>
														<i class="fe fe-star-o text-secondary"></i>
													</td>
													
													<td>
														Lorem ipsum dolor sit amet, consectetur adipiscing elit
													</td>
														<td>24 Sep 2019 <br/><small>04.38 PM</small></td>
													<td class="text-right">
														<div class="actions">
															<a class="btn btn-sm bg-danger-light" data-toggle="modal" href="#delete_modal">
																<i class="fe fe-trash"></i> Delete
															</a>
															
														</div>
													</td>
												</tr> */}
														{/* 	<tr>
													<td>
														<h2 class="table-avatar">
															<a href="profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/patients/patient6.jpg" alt="User Image"/></a>
															<a href="profile.html">Jafit Gagne</a>
														</h2>
													</td>
													
													<td>
														<h2 class="table-avatar">
															<a href="profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-06.jpg" alt="User Image"/></a>
															<a href="profile.html">Dr. Ultima Douglas</a>
														</h2>
													</td>
													<td>
														<i class="fe fe-star text-warning"></i>
														<i class="fe fe-star text-warning"></i>
														<i class="fe fe-star text-warning"></i>
														<i class="fe fe-star text-warning"></i>
														<i class="fe fe-star-o text-secondary"></i>
													</td>
													
													<td>
														Lorem ipsum dolor sit amet, consectetur adipiscing elit
													</td>
														<td>22 Aug 2019 <br/><small>01.50 PM</small></td>
													<td class="text-right">
														<div class="actions">
															<a class="btn btn-sm bg-danger-light" data-toggle="modal" href="#delete_modal">
																<i class="fe fe-trash"></i> Delete
															</a>
															
														</div>
													</td>
												</tr> */}
														{/* 	<tr>
													<td>
														<h2 class="table-avatar">
															<a href="profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/patients/patient7.jpg" alt="User Image"/></a>
															<a href="profile.html">Rieko Thrash</a>
														</h2>
													</td>
													<td>
														<h2 class="table-avatar">
															<a href="profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-07.jpg" alt="User Image"/></a>
															<a href="profile.html">Dr. Neomah Oliveira</a>
														</h2>
													</td>
													
													<td>
														<i class="fe fe-star text-warning"></i>
														<i class="fe fe-star text-warning"></i>
														<i class="fe fe-star text-warning"></i>
														<i class="fe fe-star text-warning"></i>
														<i class="fe fe-star-o text-secondary"></i>
													</td>
													
													<td>
														Lorem ipsum dolor sit amet, consectetur adipiscing elit
													</td>
														<td>21 Jul 2019 <br/><small>05.50 PM</small></td>
													<td class="text-right">
														<div class="actions">
															<a class="btn btn-sm bg-danger-light" data-toggle="modal" href="#delete_modal">
																<i class="fe fe-trash"></i> Delete
															</a>
															
														</div>
													</td>
												</tr> */}
														{/* 	<tr>
													<td>
														<h2 class="table-avatar">
															<a href="profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/patients/patient8.jpg" alt="User Image"/></a>
															<a href="profile.html">Aryo Pryor</a>
														</h2>
													</td>
													<td>
														<h2 class="table-avatar">
															<a href="profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-08.jpg" alt="User Image"/></a>
															<a href="profile.html">Dr. Falak Steel</a>
														</h2>
													</td>
													<td>
														<i class="fe fe-star text-warning"></i>
														<i class="fe fe-star text-warning"></i>
														<i class="fe fe-star text-warning"></i>
														<i class="fe fe-star text-warning"></i>
														<i class="fe fe-star-o text-secondary"></i>
													</td>
													
													<td>
														Lorem ipsum dolor sit amet, consectetur adipiscing elit
													</td>
														<td>16 Jun 2019 <br/><small>04.50 PM</small></td>
													<td class="text-right">
														<div class="actions">
															<a class="btn btn-sm bg-danger-light" data-toggle="modal" href="#delete_modal">
																<i class="fe fe-trash"></i> Delete
															</a>
															
														</div>
													</td>
												</tr> */}
														{/* <tr>
													<td>
														<h2 class="table-avatar">
															<a href="profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/patients/patient9.jpg" alt="User Image"/></a>
															<a href="profile.html">Ieuan Folsom</a>
														</h2>
													</td>
													
													<td>
														<h2 class="table-avatar">
															<a href="profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-09.jpg" alt="User Image"/></a>
															<a href="profile.html">Dr. Molefi Snow</a>
														</h2>
													</td>
													<td>
														<i class="fe fe-star text-warning"></i>
														<i class="fe fe-star text-warning"></i>
														<i class="fe fe-star text-warning"></i>
														<i class="fe fe-star text-warning"></i>
														<i class="fe fe-star-o text-secondary"></i>
													</td>
													
													<td>
														Lorem ipsum dolor sit amet, consectetur adipiscing elit
													</td>
														<td>11 Mar 2019 <br/><small>05.55 PM</small></td>
													<td class="text-right">
														<div class="actions">
															<a class="btn btn-sm bg-danger-light" data-toggle="modal" href="#delete_modal">
																<i class="fe fe-trash"></i> Delete
															</a>
															
														</div>
													</td>
												</tr> */}
														{/* <tr>
													<td>
														<h2 class="table-avatar">
															<a href="profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/patients/patient10.jpg" alt="User Image"/></a>
															<a href="profile.html">Albert Sawyer</a>
														</h2>
													</td>
													<td>
														<h2 class="table-avatar">
															<a href="profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-10.jpg" alt="User Image"/></a>
															<a href="profile.html">Dr. Corynna Elmore</a>
														</h2>
													</td>
													
													<td>
														<i class="fe fe-star text-warning"></i>
														<i class="fe fe-star text-warning"></i>
														<i class="fe fe-star text-warning"></i>
														<i class="fe fe-star text-warning"></i>
														<i class="fe fe-star-o text-secondary"></i>
													</td>
													
													<td>
														Lorem ipsum dolor sit amet, consectetur adipiscing elit
													</td>
														<td>15 Feb 2019 <br/><small>07.30 PM</small></td>
													<td class="text-right">
														<div class="actions">
															<a class="btn btn-sm bg-danger-light" data-toggle="modal" href="#delete_modal">
																<i class="fe fe-trash"></i> Delete
															</a>
															
														</div>
													</td>
												</tr> */}
													</tbody>
												</table>
											</div>
										</div>
									</div>
								</div>
							</div>

						</div>
					</div>

				</div>
				{/* 	<!-- /Page Wrapper -->
			
			<!-- Delete Modal --> */}
				<div class="modal fade" id="delete_modal" aria-hidden="true" role="dialog">
					<div class="modal-dialog modal-dialog-centered" role="document" >
						<div class="modal-content">
							{/* <!--	<div class="modal-header">
							<h5 class="modal-title">Delete</h5>
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>--> */}
							<div class="modal-body">
								<div class="form-content p-2">
									<h4 class="modal-title">Delete</h4>
									<p class="mb-4">Are you sure want to delete?</p>
									<button type="button" class="btn btn-primary">Save</button>&nbsp;
									<button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* 	<!-- /Delete Modal --> */}

				{/* <!-- /Main Wrapper -->
		
		<!-- jQuery --> */}
				

			</div>
		)
	}
}
export default Review;