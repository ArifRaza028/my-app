import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../customer/Header';
import Footer from '../customer/Footer';

class Addprescription extends React.Component {
	render() {
		return (
			 <div>
			 <Header/>
				{/* 	<!-- Main Wrapper --> */}
				<div class="main-wrapper">

				
					<div class=" asd breadcrumb-bar">
						<div class="container-fluid">
							<div class="row align-items-center">
								<div class="col-md-12 col-12">
									<nav aria-label="breadcrumb" class="page-breadcrumb">
										<ol class="breadcrumb">
											<li class="breadcrumb-item"><Link to="/">Home</Link></li>
											<li class="breadcrumb-item active" aria-current="page">Add Prescription</li>
										</ol>
									</nav>
									<h2 class="breadcrumb-title">Add Prescription</h2>
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

									{/* <!-- Profile Widget --> */}
									<div class="card widget-profile pat-widget-profile">
										<div class="card-body">
											<div class="pro-widget-content">
												<div class="profile-info-widget">
													<Link to="#" class="booking-doc-img">
														<img src="assets/img/patients/patient.jpg" alt="User Image" />
													</Link>
													<div class="profile-det-info">
														<h3><Link to="/Patientsprofile">Ganesh</Link></h3>
														<div class="patient-details">
															<h5><b>Patient ID :</b> PT0016</h5>
															<h5 class="mb-0"><i class="fas fa-map-marker-alt"></i> India ,Pune</h5>
														</div>
													</div>
												</div>
											</div>
											<div class="patient-info">
												<ul>
													<li>Phone <span>+91 8805528595</span></li>
													<li>Age <span>38 Years, Male</span></li>
													<li>Blood Group <span>AB+</span></li>
												</ul>
											</div>
										</div>
									</div>
									{/* <!-- /Profile Widget --> */}

								</div>

								<div class="col-md-7 col-lg-8 col-xl-9">
									<div class="card">
										<div class="card-header">
											<h4 class="card-title mb-0">Add Prescription</h4>
										</div>
										<div class="card-body">
											<div class="row">
												<div class="col-sm-6">
													<div class="biller-info">
														<h4 class="d-block">Dr. Bipin</h4>
														<span class="d-block text-sm text-muted">Dentist</span>
														<span class="d-block text-sm text-muted">India,Pune</span>
													</div>
												</div>
												<div class="col-sm-6 text-sm-right">
													<div class="billing-info">
														<h4 class="d-block">22 jun 2021</h4>
														<span class="d-block text-muted">#INV0001</span>
													</div>
												</div>
											</div>

											{/* 	<!-- Add Item --> */}
											<div class="add-more-item text-right">
												<a href="javascript:void(0);"><i class="fas fa-plus-circle"></i> Add Item</a>
											</div>
											{/* 	<!-- /Add Item --> */}

											{/* 	<!-- Prescription Item --> */}
											<div class="card card-table">
												<div class="card-body">
													<div class="table-responsive">
														<table class="table table-hover table-center">
															<thead>
																<tr>
																	<th style={{minWidth: "100px"}}>Name</th>
																	<th style={{minWidth: "100px"}}>Quantity</th>
																	<th style={{minWidth: "100px"}}>Days</th>
																	<th style={{minWidth: "100px"}}>Time</th>
																	<th style={{minWidth: "100px"}}></th>
																</tr>
															</thead>
															<tbody>
																<tr>
																	<td>
																		<input class="form-control" type="text" />
																	</td>
																	<td>
																		<input class="form-control" type="text" />
																	</td>
																	<td>
																		<input class="form-control" type="text" />
																	</td>
																	<td>
																		<div class="form-check form-check-inline">
																			<label class="form-check-label">
																				<input class="form-check-input" type="checkbox" /> Morning
																			</label>
																		</div>
																		<div class="form-check form-check-inline">
																			<label class="form-check-label">
																				<input class="form-check-input" type="checkbox" /> Afternoon
																			</label>
																		</div>
																		<div class="form-check form-check-inline">
																			<label class="form-check-label">
																				<input class="form-check-input" type="checkbox" /> Evening
																			</label>
																		</div>
																		<div class="form-check form-check-inline">
																			<label class="form-check-label">
																				<input class="form-check-input" type="checkbox" /> Night
																			</label>
																		</div>
																	</td>
																	<td>
																		<a href="#" class="btn bg-danger-light trash"><i class="far fa-trash-alt"></i></a>
																	</td>
																</tr>
															</tbody>
														</table>
													</div>
												</div>
											</div>
											{/* 	<!-- /Prescription Item -->
									
									<!-- Signature --> */}
											<div class="row">
												<div class="col-md-12 text-right">
													<div class="signature-wrap">
														<div class="signature">
															Click here to sign
														</div>
														<div class="sign-name">
															<p class="mb-0">( Dr. Bipin )</p>
															<span class="text-muted">Signature</span>
														</div>
													</div>
												</div>
											</div>
											{/* <!-- /Signature -->
									
									<!-- Submit Section --> */}
											<div class="row">
												<div class="col-md-12">
													<div class="submit-section">
														<button type="submit" class="btn btn-primary submit-btn">Save</button>
														<button type="reset" class="btn btn-secondary submit-btn">Clear</button>
													</div>
												</div>
											</div>
											{/* <!-- /Submit Section --> */}

										</div>
									</div>
								</div>
							</div>

						</div>
						<Footer/></div>

					</div>
					


			</div>
		
			)
	}
}
export default Addprescription;