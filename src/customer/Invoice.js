import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Invoice extends React.Component {
	render() {
		return (
			<div>

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
									<li class="submenu">
										<Link to="#"><i class="fe fe-document"></i> <span> Reports</span> <span class="menu-arrow"></span></Link>
										{/* <ul style="display: none;"> */}
										<li><Link class="active" Link="/Invoice">Invoice Reports</Link></li>

									</li>
									<li class="menu-title">
										<span>Pages</span>
									</li>
									<li>
										<Link to="/Profile"><i class="fe fe-user-plus"></i> <span>Profile</span></Link>
									</li>
									<li class="submenu">
										<Link to="#"><i class="fe fe-document"></i> <span> Authentication </span> <span class="menu-arrow"></span></Link>
										{/* <ul style="display: none;"> */}
										<li><Link to="/Login1"> Login </Link></li>
										<li><Link to="/Register1"> Register </Link></li>
										<li><Link to="/Forgotpassword1"> Forgot Password </Link></li>
										<li><Link to="/Lockscreen"> Lock Screen </Link></li>

									</li>
									<li class="submenu">
										<Link to="#"><i class="fe fe-warning"></i> <span> Error Pages </span> <span class="menu-arrow"></span></Link>
										{/* <ul style="display: none;"> */}
										<li><Link to="/Error404">404 Error </Link></li>
										<li><Link to="/Error500">500 Error </Link></li>

									</li>
									<li>
										<Link to="/Blankpage1"><i class="fe fe-file"></i> <span>Blank Page</span></Link>
									</li>
									{/* <li class="menu-title"> 
								<span>UI Interface</span>
							</li>
							<li> 
								<a href="components.html"><i class="fe fe-vector"></i> <span>Components</span></a>
		</li> */}
									<li class="submenu">
										<Link to="#"><i class="fe fe-layout"></i> <span> Forms </span> <span class="menu-arrow"></span></Link>
										{/* <ul style="display: none;"> */}
										<li><Link to="/Formbasicinput">Basic Inputs </Link></li>
										<li><Link to="/Forminputgroups">Input Groups </Link></li>
										<li><Link to="/Formhorizontal">Horizontal Form </Link></li>
										<li><Link to="/Formvertical"> Vertical Form </Link></li>
										<li><Link to="/Formmask"> Form Mask </Link></li>
										<li><Link to="/Formvalidation"> Form Validation </Link></li>

									</li>
									<li class="submenu">
										<Link to="#"><i class="fe fe-table"></i> <span> Tables </span> <span class="menu-arrow"></span></Link>
										{	/* <ul style="display: none;"> */}
										<li><Link to="/Tablesbasic">Basic Tables </Link></li>
										<li><Link to="/Datatables">Data Table </Link></li>

									</li>
									<li class="submenu">
										<Link to="javascript:void(0);"><i class="fe fe-code"></i> <span>Multi Level</span> <span class="menu-arrow"></span></Link>
										{/* <ul style="display: none;"> */}
										<li class="submenu">
											<Link to="javascript:void(0);"> <span>Level 1</span> <span class="menu-arrow"></span></Link>
											{/* <ul style="display: none;"> */}
											<li><Link to="javascript:void(0);"><span>Level 2</span></Link></li>
											<li class="submenu">
												<Link to="javascript:void(0);"> <span> Level 2</span> <span class="menu-arrow"></span></Link>
												{/* <ul style="display: none;"> */}
												<li><Link to="javascript:void(0);">Level 3</Link></li>
												<li><Link to="javascript:void(0);">Level 3</Link></li>

											</li>
											<li><Link to="javascript:void(0);"> <span>Level 2</span></Link></li>

										</li>
										<li>
											<Link to="javascript:void(0);"> <span>Level 1</span></Link>
										</li>

									</li>
								</ul>
							</div>
						</div>
					</div>
					{/* 	<!-- /Sidebar -->
			
			<!-- Page Wrapper --> */}
					<div class="page-wrapper">
						<div class="content container-fluid">

							{/* <!-- Invoice Container --> */}
							<div class="invoice-container">

								<div class="row">
									<div class="col-sm-6 m-b-20">
										<img alt="Logo" class="inv-logo img-fluid" src="assets1/img/logo.png" />
									</div>
									<div class="col-sm-6 m-b-20">
										<div class="invoice-details">
											<h3 class="text-uppercase">Invoice #INV-0001</h3>
											<ul class="list-unstyled mb-0">
												<li>Date: <span>March 12, 2021</span></li>
											</ul>
										</div>
									</div>
								</div>
								<div class="row">
									<div class="col-sm-12 m-b-20">
										<ul class="list-unstyled mb-0">
											<li>Boda Hospital</li>
											<li>Wadi,</li>
											<li>Pune</li>
											<li>GST No:</li>
										</ul>
									</div>
								</div>
								<div class="row">
									<div class="col-sm-6 col-lg-7 col-xl-8 m-b-20">
										<h6>Invoice to</h6>
										<ul class="list-unstyled mb-0">
											<li><h5 class="mb-0"><strong>Rohini</strong></h5></li>
											<li>India</li>
											<li>Maharashtra</li>
											<li>Pune</li>
											<li>8286329170</li>
											<li><Link to="#">boda@gmail.com</Link></li>
										</ul>
									</div>
									<div class="col-sm-6 col-lg-5 col-xl-4 m-b-20">
										<h6>Payment Details</h6>
										<ul class="list-unstyled invoice-payment-details mb-0">
											<li><h5>Total Due: <span class="text-right">200</span></h5></li>
											<li>Bank name: <span>State Bank of India</span></li>
											<li>Country: <span>India</span></li>
											<li>City: <span>Pune</span></li>
											<li>Address: <span>Viman Nagar</span></li>
											<li>Pin code: <span>411031</span></li>
										</ul>
									</div>
								</div>

								<div class="table-responsive">
									<table class="table">
										<thead>
											<tr>
												<th>#</th>
												<th>ITEM</th>
												<th class="d-none d-sm-table-cell">DESCRIPTION</th>
												<th class="text-nowrap">UNIT COST</th>
												<th>QTY</th>
												<th>TOTAL</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>1</td>
												<td>medicine1</td>
												<td class="d-none d-sm-table-cell">Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
												<td>10</td>
												<td>2</td>
												<td>10</td>
											</tr>
											<tr>
												<td>2</td>
												<td>medicine2</td>
												<td class="d-none d-sm-table-cell">Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
												<td>10</td>
												<td>1</td>
												<td>10</td>
											</tr>
											<tr>
												<td>3</td>
												<td>medicine3</td>
												<td class="d-none d-sm-table-cell">Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
												<td>90</td>
												<td>1</td>
												<td>90</td>
											</tr>
											<tr>
												<td>4</td>
												<td>medicine4</td>
												<td class="d-none d-sm-table-cell">Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
												<td>70</td>
												<td>1</td>
												<td>70</td>
											</tr>
											<tr>
												<td>5</td>
												<td>medicine5</td>
												<td class="d-none d-sm-table-cell">Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
												<td>70</td>
												<td>1</td>
												<td>70</td>
											</tr>
										</tbody>
									</table>
								</div>

								<div>
									<div class="row invoice-payment">
										<div class="col-sm-7">
										</div>
										<div class="col-sm-5">
											<div class="m-b-20">
												<h6>Total due</h6>
												<div class="table-responsive no-border">
													<table class="table mb-0">
														<tbody>
															<tr>
																<th>Subtotal:</th>
																<td class="text-right">250</td>
															</tr>
															<tr>
																<th>Tax: <span class="text-regular">(25%)</span></th>
																<td class="text-right">50</td>
															</tr>
															<tr>
																<th>Total:</th>
																<td class="text-right text-primary"><h5>200</h5></td>
															</tr>
														</tbody>
													</table>
												</div>
											</div>
										</div>
									</div>
									<div class="invoice-info">
										<h5>Other information</h5>
										<p class="text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed dictum ligula, cursus blandit risus. Maecenas eget metus non tellus dignissim aliquam ut a ex. Maecenas sed vehicula dui, ac suscipit lacus. Sed finibus leo vitae lorem interdum, eu scelerisque tellus fermentum. Curabitur sit amet lacinia lorem. Nullam finibus pellentesque libero.</p>
									</div>
								</div>

							</div>
							{/* 	<!-- /Invoice Container --> */}

						</div>
					</div>
					{/* 	<!-- /Page Wrapper --> */}

				</div>
				{/* <!-- /Main Wrapper --> */}

				{/* <!-- jQuery --> */}
				<script src="assets1/js/jquery-3.2.1.min.js"></script>

				{/* 	<!-- Bootstrap Core JS --> */}
				<script src="assets1/js/popper.min.js"></script>
				<script src="assets1/js/bootstrap.min.js"></script>

				{/* 	<!-- Slimscroll JS --> */}
				<script src="assets1/plugins/slimscroll/jquery.slimscroll.min.js"></script>

				{/* 	<!-- Custom JS --> */}
				<script src="assets1/js/script.js"></script>
			</div>
		)
	}
}
export default Invoice;