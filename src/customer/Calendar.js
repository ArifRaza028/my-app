import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../customer/Header';
import Footer from '../customer/Footer';

class Calendar extends React.Component {
    render() {
        return (
            <div>
            <Header/>
                {/* <!-- Main Wrapper --> */}
                <div class="main-wrapper">

                   
                    <div class="asd breadcrumb-bar">
                        <div class="container-fluid">
                            <div class="row align-items-center">
                                <div class="col">
                                    <nav aria-label="breadcrumb" class="page-breadcrumb">
                                        <ol class="breadcrumb">
                                            <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                                            <li class="breadcrumb-item active" aria-current="page">Calendar</li>
                                        </ol>
                                    </nav>
                                    <h2 class="breadcrumb-title">Calendar</h2>
                                </div>
                                <div class="col-auto text-right float-right ml-auto">
                                    <Link  to="#" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#add_event">Create Event</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /Breadcrumb --> */}

                    {/* <!-- Page Content --> */}
                    <div class="content">
                        <div class="container-fluid">

                            <div class="row">

                                {/* <!-- Calendar Events --> */}
                                <div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                                    <div class="card">
                                        <div class="card-header">
                                            <h4 class="card-title mb-0">Drag & Drop Event</h4>
                                        </div>
                                        <div class="card-body">
                                            <div id="calendar-events" class="mb-3">
                                                <div class="calendar-events" data-class="bg-info"><i class="fas fa-circle text-info"></i> My Event One</div>
                                                <div class="calendar-events" data-class="bg-success"><i class="fas fa-circle text-success"></i> My Event Two</div>
                                                <div class="calendar-events" data-class="bg-danger"><i class="fas fa-circle text-danger"></i> My Event Three</div>
                                                <div class="calendar-events" data-class="bg-warning"><i class="fas fa-circle text-warning"></i> My Event Four</div>
                                            </div>
                                            <div class="checkbox mb-3">
                                                <input id="drop-remove" type="checkbox" />
                                                <label for="drop-remove">
                                                    Remove after drop
										</label>
                                            </div>
                                            <Link to="#" data-toggle="modal" data-target="#add_new_event" class="btn btn-primary btn-block">
                                                <i class="fas fa-plus"></i> Add Category
									</Link>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- /Calendar Events -->
						
						<!-- Calendar --> */}
                                <div class="col-md-7 col-lg-8 col-xl-9">
                                    <div class="card">
                                        <div class="card-body">
                                            <div id="calendar"></div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- /Calendar -->
						 */}
                            </div>

                        </div>

                    </div>
                    
                {/* <!-- /Main Wrapper -->
		
		<!-- Add Event Modal --> */}
                <div id="add_event" class="modal custom-modal fade" role="dialog">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title">Add Event</h4>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="form-group">
                                        <label>Event Name <span class="text-danger">*</span></label>
                                        <input class="form-control" type="text" />
                                    </div>
                                    <div class="form-group">
                                        <label>Event Date <span class="text-danger">*</span></label>
                                        <div class="cal-icon">
                                            <input class="form-control datetimepicker" type="text" />
                                        </div>
                                    </div>
                                    <div class="submit-section">
                                        <button class="btn btn-primary submit-btn">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- /Add Event Modal -->
		
		<!-- Add Event Modal --> */}
                <div class="modal custom-modal fade none-border" id="my_event">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title">Add Event</h4>
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div class="modal-body"></div>
                            <div class="modal-footer justify-content-center">
                                <button type="button" class="btn btn-success save-event submit-btn">Create event</button>
                                <button type="button" class="btn btn-danger delete-event submit-btn" data-dismiss="modal">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- /Add Event Modal -->
		
		<!-- Add Category Modal --> */}
                <div class="modal custom-modal fade" id="add_new_event">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title">Add Category</h4>
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="form-group">
                                        <label>Category Name</label>
                                        <input class="form-control form-white" placeholder="Enter name" type="text" name="category-name" />
                                    </div>
                                    <div class="form-group">
                                        <label>Choose Category Color</label>
                                        <select class="form-control form-white" data-placeholder="Choose a color..." name="category-color">
                                            <option value="success">Success</option>
                                            <option value="danger">Danger</option>
                                            <option value="info">Info</option>
                                            <option value="primary">Primary</option>
                                            <option value="warning">Warning</option>
                                            <option value="inverse">Inverse</option>
                                        </select>
                                    </div>
                                    <div class="submit-section text-center">
                                        <button type="button" class="btn btn-primary save-category submit-btn" data-dismiss="modal">Save</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <Footer/></div>
                </div>
               
            </div>
        )
    }
}
export default Calendar;