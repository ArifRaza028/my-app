import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../admin/Header';

class Settings extends React.Component {
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
									<li>
										<Link to="/Patientlist"><i class="fe fe-user"></i> <span>Patients</span></Link>
									</li>
									<li>
										<Link to="/Review"><i class="fe fe-star-o"></i> <span>Reviews</span></Link>
									</li>
									<li>
										<Link to="/Transactionslist"><i class="fe fe-activity"></i> <span>Transactions</span></Link>
									</li>
									<li class="active">
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
										<h3 class="page-title">General Settings</h3>
										<ul class="breadcrumb">
											<li class="breadcrumb-item"><Link to="/Home1">Dashboard</Link></li>
											<li class="breadcrumb-item"><a href="javascript:(0)">Settings</a></li>
											<li class="breadcrumb-item active">General Settings</li>
										</ul>
									</div>
								</div>
							</div>
							{/* <!-- /Page Header --> */}

							<div class="row">

								<div class="col-12">

									{/* <!-- General --> */}

									<div class="card">
										<div class="card-header">
											<h4 class="card-title">General</h4>
										</div>
										<div class="card-body">
											<form action="#">

												<div class="form-group">
													<label>Website Name</label>
													<input type="text" class="form-control" />
												</div>
												<div class="form-group">
													<label>Website Logo</label>
													<input type="file" class="form-control" />
													<small class="text-secondary">Recommended image size is <b>150px x 150px</b></small>
												</div>
												<div class="form-group mb-0">
													<label>Favicon</label>
													<input type="file" class="form-control" />
													<small class="text-secondary">Recommended image size is <b>16px x 16px</b> or <b>32px x 32px</b></small><br />
													<small class="text-secondary">Accepted formats : only png and ico</small>
												</div>

											</form>
										</div>
									</div>

									{/* 	<!-- /General --> */}

								</div>
							</div>

						</div>
					</div>
					{/* <!-- /Page Wrapper --> */}

				</div>
				{/* <!-- /Main Wrapper --> */}

				{/* 	<!-- jQuery --> */}
				

			</div>
		)
	}
}
export default Settings;