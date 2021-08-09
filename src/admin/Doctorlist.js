import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../admin/Header';

class Doctorlist extends React.Component {
	render() {
		return (
			<div>
			<Header/>
				{/* <!-- Main Wrapper --> */}
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
									<li class="active">
										<Link to="/Doctorlist"><i class="fe fe-user-plus"></i> <span>Doctors</span></Link>
									</li>
									<li>
										<Link to="/Patientlist"><i class="fe fe-user"></i> <span>Patients</span></Link>
									</li>
									<li>
										<Link to="/Review"><i class="fe fe-star-o"></i> <span>Reviews</span></Link>
									</li>
									<li>
										<Link  to="/Transactionslist"><i class="fe fe-activity"></i> <span>Transactions</span></Link>
									</li>
									<li>
										<Link  to="/Settings"><i class="fe fe-vector"></i> <span>Settings</span></Link>
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
										<h3 class="page-title">List of Doctors</h3>
										<ul class="breadcrumb">
											<li class="breadcrumb-item"><Link to="/Home1">Dashboard</Link></li>
											<li class="breadcrumb-item"><a href="javascript:(0);">Users</a></li>
											<li class="breadcrumb-item active">Doctor</li>
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
															<th>Doctor Name</th>
															<th>Speciality</th>
															<th>Member Since</th>
															<th>Earned</th>
															<th>Account Status</th>

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

															<td>14 May 2021 <br /><small>02.59 AM</small></td>

															<td>3100.00</td>

															<td>
																<div class="status-toggle">
																	<input type="checkbox" id="status_1" class="check"/>
																	<label for="status_1" class="checktoggle">checkbox</label>
																</div>
															</td>
														</tr>
														<div class="row">
															<div class="col-sm-12 col-md-5">
																<div class="dataTables_info" id="DataTables_Table_0_info" role="status" aria-live="polite">Showing 1 to 10 of 10 entries</div></div>
															<div class="col-sm-12 col-md-7">
																<div class="dataTables_paginate paging_simple_numbers" id="DataTables_Table_0_paginate">
																	<ul class="pagination">
																		<li class="paginate_button page-item previous disabled" id="DataTables_Table_0_previous">
																			<a href="#" aria-controls="DataTables_Table_0" data-dt-idx="0" tabindex="0" class="page-link">Previous</a></li>
																		<li class="paginate_button page-item active">
																			<a href="#" aria-controls="DataTables_Table_0" data-dt-idx="1" tabindex="0" class="page-link">1</a></li>
																		<li class="paginate_button page-item next disabled" id="DataTables_Table_0_next">
																			<a href="#" aria-controls="DataTables_Table_0" data-dt-idx="2" tabindex="0" class="page-link">Next</a>
																		</li>
																	</ul>
																</div>
															</div>
														</div>
														{/* <tr>
															<td>
																<h2 class="table-avatar">
																	<a href="profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-02.jpg" alt="User Image" /></a>
																	<a href="profile.html">Loren Bivens</a>
																</h2>
															</td>
															<td>Dental</td>

															<td>11 Jun 2019 <br /><small>4.50 AM</small></td>

															<td>$5000.00</td>

															<td>
																<div class="status-toggle">
																	<input type="checkbox" id="status_1" class="check" checked />
																	<label for="status_1" class="checktoggle">checkbox</label>
																</div>
															</td>
														</tr> */}
{/* 														<tr>
															<td>
																<h2 class="table-avatar">
																	<a href="profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-03.jpg" alt="User Image" /></a>
																	<a href="profile.html">Dr. Jerelyn Pino </a>
																</h2>
															</td>
															<td>Cardiology</td>

															<td>4 Jan 2018 <br /><small>9.40 AM</small></td>

															<td>$3300.00</td>

															<td>
																<div class="status-toggle">
																	<input type="checkbox" id="status_1" class="check" checked />
																	<label for="status_1" class="checktoggle">checkbox</label>
																</div>
															</td>
														</tr> */}
														{/* <tr>
															<td>
																<h2 class="table-avatar">
																	<a href="profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-04.jpg" alt="User Image" /></a>
																	<a href="profile.html">Dr. Rieko Thrash</a>
																</h2>
															</td>
															<td>Endodontics </td>

															<td>5 Jul 2019 <br /><small>12.59 AM</small></td>

															<td>$3500.00</td>

															<td>
																<div class="status-toggle">
																	<input type="checkbox" id="status_1" class="check" checked />
																	<label for="status_1" class="checktoggle">checkbox</label>
																</div>
															</td>
														</tr> */}
														{/* <tr>
															<td>
																<h2 class="table-avatar">
																	<a href="profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-05.jpg" alt="User Image" /></a>
																	<a href="profile.html">Dr. Gennaro Weiner</a>
																</h2>
															</td>
															<td>Orthopaedics</td>

															<td>24 Jan 2019 <br /><small>02.59 AM</small></td>

															<td>$3700.00</td>

															<td>
																<div class="status-toggle">
																	<input type="checkbox" id="status_1" class="check" checked />
																	<label for="status_1" class="checktoggle">checkbox</label>
																</div>
															</td>
														</tr> */}
														{/* <tr>
															<td>
																<h2 class="table-avatar">
																	<a href="profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-06.jpg" alt="User Image" /></a>
																	<a href="profile.html">Dr. Ultima Douglas</a>
																</h2>
															</td>
															<td>Orthopaedics</td>

															<td>23 Mar 2019 <br /><small>02.50 PM</small></td>

															<td>$4000.00</td>

															<td>
																<div class="status-toggle">
																	<input type="checkbox" id="status_1" class="check" checked />
																	<label for="status_1" class="checktoggle">checkbox</label>
																</div>
															</td>
														</tr> */}
														{/* <tr>
															<td>
																<h2 class="table-avatar">
																	<a href="profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-07.jpg" alt="User Image" /></a>
																	<a href="profile.html">Dr. Neomah Oliveira</a>
																</h2>
															</td>
															<td>Pedodontics </td>

															<td>14 Dec 2018 <br /><small>01.59 AM</small></td>

															<td>$2000.00</td>

															<td>
																<div class="status-toggle">
																	<input type="checkbox" id="status_1" class="check" checked />
																	<label for="status_1" class="checktoggle">checkbox</label>
																</div>
															</td>
														</tr> */}
														{/* <tr>
															<td>
																<h2 class="table-avatar">
																	<a href="profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-08.jpg" alt="User Image" /></a>
																	<a href="profile.html">Dr. Falak Steel</a>
																</h2>
															</td>
															<td>Dermatology</td>

															<td>11 Jan 2019 <br /><small>02.59 AM</small></td>

															<td>$3000.00</td>

															<td>
																<div class="status-toggle">
																	<input type="checkbox" id="status_1" class="check" checked />
																	<label for="status_1" class="checktoggle">checkbox</label>
																</div>
															</td>
														</tr> */}
														{/* <tr>
															<td>
																<h2 class="table-avatar">
																	<a href="profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-09.jpg" alt="User Image" /></a>
																	<a href="profile.html">Dr. Molefi Snow</a>
																</h2>
															</td>
															<td>Dental</td>

															<td>21 Apr 2018 <br /><small>02.59 PM</small></td>

															<td>$4100.00</td>

															<td>
																<div class="status-toggle">
																	<input type="checkbox" id="status_1" class="check" checked />
																	<label for="status_1" class="checktoggle">checkbox</label>
																</div>
															</td>
														</tr> */}
														{/* <tr>
															<td>
																<h2 class="table-avatar">
																	<a href="profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-10.jpg" alt="User Image" /></a>
																	<a href="profile.html">Dr. Corynna Elmore</a>
																</h2>
															</td>
															<td>Dental</td>

															<td>15 Feb 2018 <br /><small>03.59 AM</small></td>

															<td>$3500.00</td>

															<td>
																<div class="status-toggle">
																	<input type="checkbox" id="status_1" class="check" checked />
																	<label for="status_1" class="checktoggle">checkbox</label>
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
					{/* <!-- /Page Wrapper --> */}

				</div>
				{/* <!-- /Main Wrapper -->
		
		<!-- jQuery --> */}
				


			</div>
		)
	}
}
export default Doctorlist;
