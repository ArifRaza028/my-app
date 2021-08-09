import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../admin/Header';

class Patientlist extends React.Component {
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
									<li>
										<Link to="/Doctorlist"><i class="fe fe-user-plus"></i> <span>Doctors</span></Link>
									</li>
									<li class="active">
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
										<ul style={{ display: 'none' }}>
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
										<ul style={{ display: 'none' }}>
											<li><Link to="/Tablesbasic">Basic Tables </Link></li>
											<li><Link to="/Datatables">Data Table </Link></li>
										</ul>

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
					{/* <!-- /Sidebar -->
			
			<!-- Page Wrapper --> */}
					<div class="page-wrapper">
						<div class="content container-fluid">

							{/* <!-- Page Header --> */}
							<div class="page-header">
								<div class="row">
									<div class="col-sm-12">
										<h3 class="page-title">List of Patient</h3>
										<ul class="breadcrumb">
											<li class="breadcrumb-item"><Link to="/Home1">Dashboard</Link></li>
											<li class="breadcrumb-item"><a href="javascript:(0);">Users</a></li>
											<li class="breadcrumb-item active">Patient</li>
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
												<div class="table-responsive">
													<table class="datatable table table-hover table-center mb-0">
														<thead>
															<tr>
																<th>Patient ID</th>
																<th>Patient Name</th>
																<th>Age</th>
																<th>Address</th>
																<th>Phone</th>
																<th>Last Visit</th>
																<th class="text-right">Paid</th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td>#PT001</td>
																<td>
																	<h2 class="table-avatar">
																		<Link to="/Profile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets1/img/patients/patient1.jpg" alt="User Image" /></Link>
																		<Link to="/Profile">Rohini </Link>
																	</h2>
																</td>
																<td>29</td>
																<td>Pune, India</td>
																<td>1234567890</td>
																<td>20 May 2021</td>
																<td class="text-right">100.00</td>
															</tr>
															<tr>
																<td>#PT002</td>
																<td>
																	<h2 class="table-avatar">
																		<Link to="/Profile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets1/img/patients/patient2.jpg" alt="User Image" /></Link>
																		<Link to="/Profile">Arun </Link>
																	</h2>
																</td>
																<td>23</td>
																<td>Mumabi ,India</td>
																<td>1234567854</td>
																<td>22 May 2021</td>
																<td class="text-right">200.00</td>
															</tr>
															{/* <tr>
													<td>#PT003</td>
													<td>
														<h2 class="table-avatar">
															<a href="profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets1/img/patients/patient3.jpg" alt="User Image"/></a>
															<a href="profile.html">Niv Collazo</a>
														</h2>
													</td>
													<td>29</td>
													<td>2037 Pearcy Avenue, Decatur, Indiana, 46733</td>
													<td>2607247769</td>
													<td>21 Oct 2019</td>
													<td class="text-right">$250.00</td>
												</tr> */}
															{/* <tr>
													<td>#PT004</td>
													<td>
														<h2 class="table-avatar">
															<a href="profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets1/img/patients/patient4.jpg" alt="User Image"/></a>
															<a href="profile.html"> Flo Sherrod</a>
														</h2>
													</td>
													<td>25</td>
													<td>2037 Pearcy Avenue, Decatur, Indiana, 46733</td>
													<td>5043686874</td>
													<td>21 Sep 2019</td>
													<td class="text-right">$150.00</td>
												</tr> */}
															{/* 												<tr>
													<td>#PT005</td>
													<td>
														<h2 class="table-avatar">
															<a href="profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets1/img/patients/patient5.jpg" alt="User Image"/></a>
															<a href="profile.html">Korva Weiner</a>
														</h2>
													</td>
													<td>23</td>
													<td>888  Everette Alley, Hialeah, Florida, 33012</td>
													<td>9548207887</td>
													<td>18 Sep 2019</td>
													<td class="text-right">$350.00</td>
												</tr> */}
															{/* <tr>
													<td>#PT006</td>
													<td>
														<h2 class="table-avatar">
															<a href="profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets1/img/patients/patient6.jpg" alt="User Image"/></a>
															<a href="profile.html">Jafit Gagne</a>
														</h2>
													</td>
													<td>16</td>
													<td>644  Coffman Alley, Bowling Green, Kentucky, 42101</td>
													<td>3153844562</td>
													<td>18 Sep 2019</td>
													<td class="text-right">$300.00</td>
												</tr> */}
															{/* <tr>
													<td>#PT007</td>
													<td>
														<h2 class="table-avatar">
															<a href="profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets1/img/patients/patient7.jpg" alt="User Image"/></a>
															<a href="profile.html"> Rieko Thrash</a>
														</h2>
													</td>
													<td>25</td>
													<td>2399  Hillview Drive, San Francisco, California, 94103</td>
													<td>7072202603</td>
													<td>18 Sep 2019</td>
													<td class="text-right">$250.00</td>
												</tr> */}
															{/* <tr>
													<td>#PT008</td>
													<td>
														<h2 class="table-avatar">
															<a href="profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets1/img/patients/patient8.jpg" alt="User Image"/></a>
															<a href="profile.html"> Aryo Pryor</a>
														</h2>
													</td>
													<td>21</td>
													<td>4914  Hilltop Haven Drive, Passaic, New Jersey, 07055</td>
													<td>9737739497</td>
													<td>7 Sep 2019</td>
													<td class="text-right">$150.00</td>
												</tr> */}
															{/* <tr>
													<td>#PT009</td>
													<td>
														<h2 class="table-avatar">
															<a href="profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets1/img/patients/patient9.jpg" alt="User Image"/></a>
															<a href="profile.html">Ieuan Folsom</a>
														</h2>
													</td>
													<td>18</td>
													<td>1299  Star Trek Drive, Panama City, Florida, 32405</td>
													<td>8503584445</td>
													<td>11 Sep 2019</td>
													<td class="text-right">$100.00</td>
												</tr> */}
															{/* <tr>
													<td>#PT010</td>
													<td>
														<h2 class="table-avatar">
															<a href="profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets1/img/patients/patient10.jpg" alt="User Image"/></a>
															<a href="profile.html">Talfrin Archuleta</a>
														</h2>
													</td>
													<td>19</td>
													<td>1214  Hamill Avenue, Del Mar, California, 92014</td>
													<td>8582595285</td>
													<td>12 Sep 2019</td>
													<td class="text-right">$120.00</td>
												</tr> */}
															{/* <tr>
													<td>#PT011</td>
													<td>
														<h2 class="table-avatar">
															<a href="profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets1/img/patients/patient11.jpg" alt="User Image"/></a>
															<a href="profile.html">Albert Sawyer</a>
														</h2>
													</td>
													<td>9</td>
													<td>4566  Sampson Street, Denver, Colorado, 80202</td>
													<td>3036077075</td>
													<td>14 Sep 2019</td>
													<td class="text-right">$130.00</td>
												</tr> */}
															{/* <tr>
													<td>#PT012</td>
													<td>
														<h2 class="table-avatar">
															<a href="profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets1/img/patients/patient12.jpg" alt="User Image"/></a>
															<a href="profile.html">Robert Jillanston</a>
														</h2>
													</td>
													<td>29</td>
													<td>1996  Crummit Lane, Beatrice, Nebraska, 68310</td>
													<td>4022231492</td>
													<td>7 Nov 2019</td>
													<td class="text-right">$260.00</td>
												</tr> */}
															{/* <tr>
													<td>#PT013</td>
													<td>
														<h2 class="table-avatar">
															<a href="profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets1/img/patients/patient13.jpg" alt="User Image"/></a>
															<a href="profile.html">Tracy Mason</a>
														</h2>
													</td>
													<td>32</td>
													<td>4211  Vesta Drive, TOLEDO, Washington, 98591</td>
													<td>7737265795</td>
													<td>9 Nov 2019</td>
													<td class="text-right">$290.00</td>
												</tr> */}
															{/* 	<tr>
													<td>#PT014</td>
													<td>
														<h2 class="table-avatar">
															<a href="profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets1/img/patients/patient14.jpg" alt="User Image"/></a>
															<a href="profile.html"> Daniel Finch</a>
														</h2>
													</td>
													<td>23</td>
													<td>186  Bryan Street, Greensboro, North Carolina, 27409</td>
													<td>3362314023</td>
													<td>5 Nov 2019</td>
													<td class="text-right">$300.00</td>
												</tr> */}
															{/* <tr>
													<td>#PT015</td>
													<td>
														<h2 class="table-avatar">
															<a href="profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets1/img/patients/patient15.jpg" alt="User Image"/></a>
															<a href="profile.html">Jessica Garza</a>
														</h2>
													</td>
													<td>10</td>
													<td>4672  Rose Street, Schaumburg, Illinois, 60173</td>
													<td>7082788201</td>
													<td>6 Nov 2019</td>
													<td class="text-right">$310.00</td>
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
					{/* <!-- /Page Wrapper --> */}

				</div>
				{/* <!-- /Main Wrapper -->
		
		<!-- jQuery --> */}
				


			</div>
		)
	}
}
export default Patientlist;