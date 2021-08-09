import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Tablesbasic extends React.Component{
    render(){
        return(
            <div>
            		{/* <!-- Main Wrapper --> */}
        <div class="main-wrapper">
		
			{/* <!-- Header --> */}
            <div class="header">
			
				{/* <!-- Logo --> */}
                <div class="header-left">
                    <Link to="/" class="logo">
						<img src="assets1/img/boda.png" alt="Logo"/>
					</Link>
					<Link to="/" class="logo logo-small">
						<img src="assets1/img/boda.png" alt="Logo" width="30" height="30"/>
					</Link>
                </div>
			{/* 	<!-- /Logo --> */}
				
				<Link to="javascript:void(0);" id="toggle_btn">
					<i class="fe fe-text-align-left"></i>
				</Link>
				
				<div class="top-nav-search">
					<form>
						<input type="text" class="form-control" placeholder="Search here"/>
						<button class="btn" type="submit"><i class="fa fa-search"></i></button>
					</form>
				</div>
				
				{/* <!-- Mobile Menu Toggle --> */}
				<a class="mobile_btn" id="mobile_btn">
					<i class="fa fa-bars"></i>
				</a>
			{/* 	<!-- /Mobile Menu Toggle -->
				
				<!-- Header Right Menu --> */}
				<ul class="nav user-menu">

				{/* 	<!-- Notifications --> */}
					<li class="nav-item dropdown noti-dropdown">
						<Link to="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
							<i class="fe fe-bell"></i> <span class="badge badge-pill">3</span>
						</Link>
						<div class="dropdown-menu notifications">
							<div class="topnav-dropdown-header">
								<span class="notification-title">Notifications</span>
								<Link to="javascript:void(0)" class="clear-noti"> Clear All </Link>
							</div>
							<div class="noti-content">
								<ul class="notification-list">
									<li class="notification-message">
										<Link to="#">
											<div class="media">
												<span class="avatar avatar-sm">
													<img class="avatar-img rounded-circle" alt="User Image" src="assets1/img/doctors/doctor-thumb-01.jpg"/>
												</span>
												<div class="media-body">
													<p class="noti-details"><span class="noti-title">Dr. Fahim</span> Schedule <span class="noti-title">her appointment</span></p>
													<p class="noti-time"><span class="notification-time">4 mins ago</span></p>
												</div>
											</div>
										</Link>
									</li>
									<li class="notification-message">
										<Link to="#">
											<div class="media">
												<span class="avatar avatar-sm">
													<img class="avatar-img rounded-circle" alt="User Image" src="assets1/img/patients/patient1.jpg"/>
												</span>
												<div class="media-body">
													<p class="noti-details"><span class="noti-title">Rohini</span> has booked her appointment to <span class="noti-title">Dr. Fahim</span></p>
													<p class="noti-time"><span class="notification-time">6 mins ago</span></p>
												</div>
											</div>
										</Link>
									</li>
									<li class="notification-message">
										<Link to="#">
											<div class="media">
												<span class="avatar avatar-sm">
													<img class="avatar-img rounded-circle" alt="User Image" src="assets1/img/patients/patient2.jpg"/>
												</span>
												<div class="media-body">
												<p class="noti-details"><span class="noti-title">Arlow Ebert</span> sent a amount of 210 for his <span class="noti-title">appointment</span></p>
												<p class="noti-time"><span class="notification-time">8 mins ago</span></p>
												</div>
											</div>
										</Link>
									</li>
									<li class="notification-message">
										<Link to="#">
											<div class="media">
												<span class="avatar avatar-sm">
													<img class="avatar-img rounded-circle" alt="User Image" src="assets1/img/patients/patient3.jpg"/>
												</span>
												<div class="media-body">
													<p class="noti-details"><span class="noti-title">Niv Collazo</span> send a message <span class="noti-title"> to his doctor</span></p>
													<p class="noti-time"><span class="notification-time">12 mins ago</span></p>
												</div>
											</div>
										</Link>
									</li>
								</ul>
							</div>
							<div class="topnav-dropdown-footer">
								<Link to="#">View all Notifications</Link>
							</div>
						</div>
					</li>
					{/* <!-- /Notifications -->
					
					<!-- User Menu --> */}
					<li class="nav-item dropdown has-arrow">
						<Link to="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
							<span class="user-img"><img class="rounded-circle" src="assets1/img/profiles/avatar-01.jpg" width="31" alt="Leeland Sheehan"/></span>
						</Link>
						<div class="dropdown-menu">
							<div class="user-header">
								<div class="avatar avatar-sm">
									<img src="assets1/img/profiles/avatar-01.jpg" alt="User Image" class="avatar-img rounded-circle"/>
								</div>
								<div class="user-text">
									<h6>Leelan</h6>
									<p class="text-muted mb-0">Administrator</p>
								</div>
							</div>
							<Link class="dropdown-item" to="/Profile">My Profile</Link>
							<Link class="dropdown-item" to="/Settings">Settings</Link>
							<Link class="dropdown-item" to="/Login1">Logout</Link>
						</div>
					</li>
					{/* <!-- /User Menu --> */}
					
				</ul>
			{/* 	<!-- /Header Right Menu --> */}
				
            </div>
			{/* <!-- /Header -->
			<!-- Sidebar --> */}
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
									<li><Link to="/Invoicereport">Invoice Reports</Link></li>
								
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
									<li><Link  to="/Error500">500 Error </Link></li>
								
							</li>
							<li> 
								<Link to="/Blankpage1"><i class="fe fe-file"></i> <span>Blank Page</span></Link>
							</li>
							{/* <li class="menu-title"> 
								<span>UI Interface</span>
							</li>
							<li> 
								<Link to="/Components1"><i class="fe fe-vector"></i> <span>Components</span></Link>
		</li> */}
							<li class="submenu">
								<Link to="#"><i class="fe fe-layout"></i> <span> Forms </span> <span class="menu-arrow"></span></Link>
								{/* <ul style="display: none;"> */}
									<li><Link  to="/Formbasicinputs">Basic Inputs </Link></li>
									<li><Link  to="/Forminputgroups">Input Groups </Link></li>
									<li><Link  to="/Formhorizontal">Horizontal Form </Link></li>
									<li><Link  to="/Formvertical"> Vertical Form </Link></li>
									<li><Link  to="/Formmask"> Form Mask </Link></li>
									<li><Link  to="/Formvalidation"> Form Validation </Link></li>
							
							</li>
							<li class="submenu">
								<Link to="#"><i class="fe fe-table"></i> <span> Tables </span> <span class="menu-arrow"></span></Link>
								{/* <ul style="display: none;"> */}
									<li class="active"><Link  to="/Tablesbasic">Basic Tables </Link></li>
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
											{/* 	<ul style="display: none;"> */}
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
				{/* 
					<!-- Page Header --> */}
					<div class="page-header">
						<div class="row">
							<div class="col">
								<h3 class="page-title">Basic Tables</h3>
								<ul class="breadcrumb">
									<li class="breadcrumb-item"><Link  to="/Home1">Dashboard</Link></li>
									<li class="breadcrumb-item active">Basic Tables</li>
								</ul>
							</div>
						</div>
					</div>
					{/* <!-- /Page Header --> */}
					
					<div class="row">
						<div class="col-lg-6">
							<div class="card">
								<div class="card-header">
									<h4 class="card-title">Basic Table</h4>
								</div>
								<div class="card-body">
									<div class="table-responsive">
										<table class="table mb-0">
											<thead>
												<tr>
													<th>Firstname</th>
													<th>Lastname</th>
													<th>Email</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>Joy</td>
													<td>Doe</td>
													<td>Joy@gmail.com</td>
												</tr>
												{/* <tr>
													<td>Mary</td>
													<td>Moe</td>
													<td>mary@example.com</td>
												</tr> */}
												{/* <tr>
													<td>July</td>
													<td>Dooley</td>
													<td>july@example.com</td>
												</tr> */}
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-6">
							<div class="card">
								<div class="card-header">
									<h4 class="card-title">Striped Rows</h4>
								</div>
								<div class="card-body">
									<div class="table-responsive">
										<table class="table table-striped mb-0">
											<thead>
												<tr>
													<th>Firstname</th>
													<th>Lastname</th>
													<th>Email</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>Jillan</td>
													<td>Doe</td>
													<td>Jillan@example.com</td>
												</tr>
												{/* <tr>
													<td>Mary</td>
													<td>Moe</td>
													<td>mary@example.com</td>
												</tr> */}
												{/* <tr>
													<td>July</td>
													<td>Dooley</td>
													<td>july@example.com</td>
												</tr> */}
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-lg-6">
							<div class="card">
								<div class="card-header">
									<h4 class="card-title">Bordered Table</h4>
								</div>
								<div class="card-body">
									<div class="table-responsive">
										<table class="table table-bordered mb-0">
											<thead>
												<tr>
													<th>Firstname</th>
													<th>Lastname</th>
													<th>Email</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>Jillan</td>
													<td>Doe</td>
													<td>Jillan@example.com</td>
												</tr>
											{/* 	<tr>
													<td>Mary</td>
													<td>Moe</td>
													<td>mary@example.com</td>
												</tr> */}
												{/* <tr>
													<td>July</td>
													<td>Dooley</td>
													<td>july@example.com</td>
												</tr> */}
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-6">
							<div class="card">
								<div class="card-header">
									<h4 class="card-title">Hover Rows</h4>
								</div>
								<div class="card-body">
									<div class="table-responsive">
										<table class="table table-hover mb-0">
											<thead>
												<tr>
													<th>Firstname</th>
													<th>Lastname</th>
													<th>Email</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>Jillan</td>
													<td>Doe</td>
													<td>Jillan@example.com</td>
												</tr>
												{/* <tr>
													<td>Mary</td>
													<td>Moe</td>
													<td>mary@example.com</td>
												</tr> */}
												{/* <tr>
													<td>July</td>
													<td>Dooley</td>
													<td>july@example.com</td>
												</tr> */}
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-lg-6">
							<div class="card">
								<div class="card-header">
									<h4 class="card-title">Contextual Classes</h4>
								</div>
								<div class="card-body">
									<div class="table-responsive">
										<table class="table mb-0">
											<thead>
												<tr>
													<th>Firstname</th>
													<th>Lastname</th>
													<th>Email</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>Default</td>
													<td>Defaultson</td>
													<td>def@somemail.com</td>
												</tr>
												<tr class="table-primary">
													<td>Primary</td>
													<td>Doe</td>
													<td>Jillan@example.com</td>
												</tr>
												{/* <tr class="table-secondary">
													<td>Secondary</td>
													<td>Moe</td>
													<td>mary@example.com</td>
												</tr> */}
												{/* <tr class="table-success">
													<td>Success</td>
													<td>Dooley</td>
													<td>july@example.com</td>
												</tr> */}
												{/* <tr class="table-danger">
													<td>Danger</td>
													<td>Refs</td>
													<td>bo@example.com</td>
												</tr> */}
												{/* <tr class="table-warning">
													<td>Warning</td>
													<td>Activeson</td>
													<td>act@example.com</td>
												</tr> */}
												{/* <tr class="table-info">
													<td>Info</td>
													<td>Activeson</td>
													<td>act@example.com</td>
												</tr> */}
											{/* 	<tr class="table-light">
													<td>Light</td>
													<td>Activeson</td>
													<td>act@example.com</td>
												</tr> */}
												{/* <tr class="table-dark">
													<td>Dark</td>
													<td>Activeson</td>
													<td>act@example.com</td>
												</tr> */}
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-6">
							<div class="card">
								<div class="card-header">
									<h4 class="card-title">Responsive Tables</h4>
								</div>
								<div class="card-body">
									<div class="table-responsive">
										<table class="table table-nowrap mb-0">
											<thead>
												<tr>
													<th>#</th>
													<th>Firstname</th>
													<th>Lastname</th>
													<th>Age</th>
													<th>City</th>
													<th>Country</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>1</td>
													<td>Anna</td>
													<td>Pitt</td>
													<td>35</td>
													<td>Pune</td>
													<td>India</td>
												</tr>
											{/* 	<tr>
													<td>1</td>
													<td>Anna</td>
													<td>Pitt</td>
													<td>35</td>
													<td>New York</td>
													<td>USA</td>
												</tr> */}
												{/* <tr>
													<td>1</td>
													<td>Anna</td>
													<td>Pitt</td>
													<td>35</td>
													<td>New York</td>
													<td>USA</td>
												</tr> */}
												{/* <tr>
													<td>1</td>
													<td>Anna</td>
													<td>Pitt</td>
													<td>35</td>
													<td>New York</td>
													<td>USA</td>
												</tr> */}
												{/* <tr>
													<td>1</td>
													<td>Anna</td>
													<td>Pitt</td>
													<td>35</td>
													<td>New York</td>
													<td>USA</td>
												</tr> */}
												{/* <tr>
													<td>1</td>
													<td>Anna</td>
													<td>Pitt</td>
													<td>35</td>
													<td>New York</td>
													<td>USA</td>
												</tr> */}
												{/* <tr>
													<td>1</td>
													<td>Anna</td>
													<td>Pitt</td>
													<td>35</td>
													<td>New York</td>
													<td>USA</td>
												</tr> */}
												{/* <tr>
													<td>1</td>
													<td>Anna</td>
													<td>Pitt</td>
													<td>35</td>
													<td>New York</td>
													<td>USA</td>
												</tr> */}
											{/* 	<tr>
													<td>1</td>
													<td>Anna</td>
													<td>Pitt</td>
													<td>35</td>
													<td>New York</td>
													<td>USA</td>
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
		{/* 	<!-- /Main Wrapper --> */}
		
        </div>
		{/* <!-- /Main Wrapper --> */}
		
	{/* 	<!-- jQuery --> */}
        <script src="assets1/js/jquery-3.2.1.min.js"></script>
		
	{/* 	<!-- Bootstrap Core JS --> */}
        <script src="assets1/js/popper.min.js"></script>
        <script src="assets1/js/bootstrap.min.js"></script>
		
	{/* 	<!-- Slimscroll JS --> */}
        <script src="assets1/plugins/slimscroll/jquery.slimscroll.min.js"></script>
		
	{/* 	<!-- Custom JS --> */}
		<script  src="assets1/js/script.js"></script>
		
  
            </div>
        )
    }
}
export default Tablesbasic;